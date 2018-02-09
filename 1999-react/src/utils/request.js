import fetch from 'dva/fetch';
import moment from 'moment';
import clone from 'clone';
/**
 * 验证请求状态
 *
 * @param  {object} response      返回值对象
 * @param  {object} [action]      原生 dispatch 的那个完整的 action
 * @param  {string} timestamp     时间戳，仅仅为了输出看看
 * @return {object}               正常时返回 response，否则抛出错误
 */
function checkStatus(response, action, timestamp) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // console.log(timestamp);
  // console.log(global[`${action.type}_fetchTimestamp`]);
  global[`${action.type}_fetchTimestamp`] = undefined;

  throw new Error(JSON.stringify({
    status: 'fetcherror',
    message: response.statusText,
    errortype: 'requestState',
    erroraction: action,
  }));
}

/**
 * 验证请求结果
 *
 * @param  {object} data          服务器返回的 JSON 格式的数据
 * @param  {object} action        原生 dispatch 的那个完整的 action
 * @param  {string} timestamp     时间戳，仅仅为了输出看看
 * @return {object}               正常时返回 data，否则抛出错误
 */
function checkData(data, action, timestamp) {
  if (data.code === 1) {
    return data;
  } else if (data.code === 10) {
    localStorage.clear();
    location.href = '/zh/login';
  }

  // console.log(timestamp);
  // console.log(global[`${action.type}_fetchTimestamp`]);
  global[`${action.type}_fetchTimestamp`] = undefined;

  // 真实返回数据
  throw new Error(JSON.stringify({
    status: 'fetcherror',
    message: data.msg,
    errortype: 'dataError',
    erroraction: action,
  }));
}

/**
 * 超时函数-生成和 fetch 竞赛的 promise 的函数.
 *
 * @param  {number} timeout     超时时间
 * @param  {object} action      原生 dispatch 的那个完整的 action
 * @return {object}             a promise
 */
function timeoutHandle(timeout, action) {
  clearTimeout(global[`${action.type}_fetchTimeoutId`]);
  global[`${action.type}_fetchTimeoutId`] = undefined;

  const p = new Promise((resolve, reject) => {
    global[`${action.type}_fetchTimeoutId`] = setTimeout(() => {
      reject({
        status: 'fetcherror',
        message: '请求超时',
        errortype: 'timeout',
        erroraction: action,
      });
    }, timeout);
  }).catch((err) => {
    throw new Error(JSON.stringify(err));
  });

  return p;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {object} action      原生 dispatch 的那个完整的 action
 * @param  {object} config      mode 设置对之前的请求的处理方式 [wait 阻止现在的请求，等待之前的请求 | stop 停止之前的请求]
                                timeout 请求超时时间
 * @param  {object} options     Url 请求地址
                                method 请求方式 [GET | POST]
                                ...
 * @return {object}             An object containing either "data" or "err"
 */
export default async function request(action, { mode = 'wait', timeout = 10000 }, param) {
  // console.log(action);
  const options = clone(param);

  // 请求时间戳
  const timestamp = new Date().getTime();
  // console.log(timestamp);

  // 等待上一个请求完成
  if (mode === 'wait' && global[`${action.type}_fetchTimestamp`]) {
    throw new Error(JSON.stringify({
      status: 'fetcherror',
      message: '等待上一个请求完成',
    }));
  }

  // 停止上一个请求，仅使用新请求的返回值
  if (mode === 'stop' && global[`${action.type}_fetchTimestamp`]) {
    global[`${action.type}_fetchTimestamp`] = timestamp;
  }

  // 干净的请求
  if (global[`${action.type}_fetchTimestamp`] === undefined) {
    global[`${action.type}_fetchTimestamp`] = timestamp;
  }

  // 请求设置
  const fetchset = {
    method: options.method || 'GET',
    credentials: 'include',
    body: undefined,
  };

  if (fetchset.method === 'POST') {
    if (options.datatype === 'json') {
      fetchset.body = JSON.stringify(options.body);
      fetchset.mode = 'cors';
      fetchset.headers = { 'Content-Type': 'application/json' };
    } else {
      fetchset.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      fetchset.mode = 'cors';
    }
  }

  // 参数处理
  if (options.body) {
    /* 表单页-字段 */
    if (options.body.fields) {
      const fields = options.body.fields;
      // for (const key in fields) {
      //   if (Object.prototype.hasOwnProperty.call(fields, key)) {
      //     const item = fields[key].value;
      //     if (item) {
      //       if (Object.prototype.toString.call(item) === '[object Array]') {
      //         const newitem = item.map((ele) => {
      //           if (moment.isMoment(ele)) { return ele.format('YYYY-MM-DD HH:mm:ss'); } else { return ele; }
      //         });

      //         options.body[key] = newitem[newitem.length - 1];
      //       } else if (moment.isMoment(item)) {
      //         options.body[key] = item.format('YYYY-MM-DD HH:mm:ss');
      //       } else {
      //         options.body[key] = item;
      //       }
      //     }
      //   }
      // }
      for (const key in fields) {
        if (key) {
          const itemvalue = fields[key].value;

          if (itemvalue !== null && itemvalue !== undefined) {
            if (fetchset.body === undefined) {
              fetchset.body = `${key}=${itemvalue}`;
            } else {
              fetchset.body += `&${key}=${itemvalue}`;
            }
          }
        }
      }
    }

    /* 表格页-分页 */
    if (options.body.page) {
      const page = options.body.page;
      for (const key in page) {
        if (key !== 'total') {
          if (fetchset.body === undefined) {
            fetchset.body = `${key}=${page[key]}`;
          } else {
            fetchset.body += `&${key}=${page[key]}`;
          }
        }
      }
    }

    /* 表格页-表单筛选 */
    if (options.body.formFilters) {
      const formFilters = options.body.formFilters;

      for (const key in formFilters) {
        if (key) {
          let itemvalue = formFilters[key].value;

          if (Object.prototype.toString.call(itemvalue) === '[object Array]') {
            itemvalue = itemvalue.map((ele) => {
              if (moment.isMoment(ele)) { return ele.format('X'); } else { return ele; }
            });
            // itemvalue = `[${itemvalue.join()}]`;
          } else if (moment.isMoment(itemvalue)) {
            itemvalue = itemvalue.format('X');
          }

          if (itemvalue !== null && itemvalue !== undefined) {
            if (key === 'searchkey' || key === 'searchvalue') {
              if (key === 'searchkey' && formFilters.searchvalue && formFilters.searchvalue.value) {
                if (fetchset.body === undefined) {
                  fetchset.body = `${itemvalue}=${encodeURI(formFilters.searchvalue.value)}`;
                } else {
                  fetchset.body += `&${itemvalue}=${encodeURI(formFilters.searchvalue.value)}`;
                }
              }
            } else if (fetchset.body === undefined) {
              fetchset.body = `${key}=${itemvalue}`;
            } else {
              fetchset.body += `&${key}=${itemvalue}`;
            }
          }
        }
      }
    }
  }

  if (fetchset.method === 'GET') {
    options.Url = (fetchset.body) ? `${options.Url}?${fetchset.body}` : options.Url;
    fetchset.body = undefined;
  }

  console.log(options.Url, fetchset);

  // 请求和超时赛跑
  const response = await Promise.race([
    timeoutHandle(timeout, action),
    fetch(options.Url, fetchset),
  ]).then((res) => {
    clearTimeout(global[`${action.type}_fetchTimeoutId`]);
    global[`${action.type}_fetchTimeoutId`] = undefined;
    return res;
  }).catch((err) => {
    // console.log(timestamp);
    // console.log(global[`${action.type}_fetchTimestamp`]);
    global[`${action.type}_fetchTimestamp`] = undefined;

    // 请求地址错误
    if (err.message === 'Failed to fetch') {
      throw new Error(JSON.stringify({
        status: 'fetcherror',
        message: err.message,
        errortype: 'addressError',
        erroraction: action,
      }));
    }

    // 超时和请求错误
    throw err;
  });

  // 不匹配的请求
  if (global[`${action.type}_fetchTimestamp`] !== timestamp) {
    // console.log(timestamp);
    // console.log(global[`${action.type}_fetchTimestamp`]);
    throw new Error(JSON.stringify({
      status: 'fetcherror',
      message: '被抛弃的请求',
    }));
  }

  // 验证请求状态
  checkStatus(response, action, timestamp);

  // 将请求返回值转为json
  const datajson = await response.json();

  // 验证请求结果
  checkData(datajson, action, timestamp);

  // 定义返回结果
  const ret = {};

  if (datajson.data && datajson.data.list) {
    // 列表
    datajson.data.list.map((item, index) => {
      const ele = item;
      ele.key = item.userExtentId || item.id;
      return ele;
    });

    ret.data = datajson.data.list;
    ret.headers = {
      page: options.body.page.page,
      limit: options.body.page.limit,
      total: datajson.data.total,
    };
  } else {
    // 对象
    ret.data = datajson.data;
    ret.headers = {};
  }

  // 从请求返回值的头信息中获取信息
  // if (response.headers.get('x-total-count')) {
  //   ret.headers['x-total-count'] = response.headers.get('x-total-count');
  // }

  // return 返回结果
  // console.log(timestamp);
  // console.log(global[`${action.type}_fetchTimestamp`]);
  global[`${action.type}_fetchTimestamp`] = undefined;
  return ret;
}
