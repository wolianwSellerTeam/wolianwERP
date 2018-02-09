import React from 'react';
import update from 'immutability-helper';
import { message, notification, Modal, Checkbox, Row, Col } from 'antd';
import { changeDataType, changeListData, treeMenu } from '../utils/handleData';
import request from '../utils/request';

/* 轮播列表 */
export function *fetchList(action, { call, put, select }, namespace) {
  yield put({ type: 'resetTable' });

  const req = yield select(state => state[namespace].req);

  req.page.page = (action.payload && action.payload.page) ? action.payload.page : req.page.page;
  req.page.limit = (action.payload && action.payload.limit) ? action.payload.limit : req.page.limit;

  const { data, headers } = yield call(() => request({ errormsg: '表格数据请求失败', ...action }, {}, { body: req, method: 'GET', Url: iface.optBannerList }));

  const enumjson = JSON.parse(localStorage.getItem('enum'));

  data.map((item, index) => {
    const newItem = item;
    newItem.systemId = enumjson['system-type'][item.systemId];
    newItem.roleType = enumjson['role-type'][item.roleType];
    return newItem;
  });

  const newdata = changeListData(data, [
    {
      field: 'createTime',
      target: 'timestamp2time',
      format: 'YYYY-MM-DD',
    },
  ]);

  yield put({ type: 'updateTable', payload: newdata });
  yield put({ type: 'updatePages', payload: headers });
}

/* 查看轮播 */
export function *fetchDetail(action, { call, put, select }, namespace) {
  const { data } = yield call(() => request({ errormsg: '请求失败', ...action }, {}, { body: undefined, method: 'GET', Url: `${iface.optBannerDetail}?id=${action.payload}` }));
  const newdata = changeDataType(data, [
    {
      field: 'createTime',
      target: 'time2moment',
    },
    {
      field: 'sequence',
      target: 'number2string',
    },
  ]);
  yield put({ type: 'updateFormReq', payload: data });
}

/* 新增轮播 */
export function *fetchAdd(action, { call, put, select }, namespace) {
  const req = yield select(state => state[namespace].req);
  if (req.fields.figureUrl && req.fields.figureUrl.value) {
    if (req.fields.figureUrl.value.file) {
      req.fields.figureUrl.value = req.fields.figureUrl.value.file.response.data;
    }
  }
  const { data } = yield call(() => request({ errormsg: '插入失败', ...action }, {}, { body: req, method: 'POST', Url: iface.optBannerAdd }));
  message.success('新增轮播成功', 1, () => { window.open('', '_self').close(); });
}

/* 修改轮播 */
export function *fetchEdit(action, { call, put, select }, namespace) {
  const req = yield select(state => state[namespace].req);
  if (req.fields.figureUrl && req.fields.figureUrl.value) {
    if (req.fields.figureUrl.value.file) {
      req.fields.figureUrl.value = req.fields.figureUrl.value.file.response.data;
    }
  }
  const { data } = yield call(() => request({ errormsg: '更新失败', ...action }, {}, { body: req, method: 'POST', Url: iface.optBannerEdit }));
  message.success('修改轮播成功', 1, () => { window.open('', '_self').close(); });
}


/* 删除轮播 */
export function *fetchDelete(action, { call, put, select }, namespace) {
  const options = { fields: { id: { value: action.payload.id } } };
  const { data } = yield call(() => request({ errormsg: '删除失败', ...action }, {}, { body: options, method: 'POST', Url: iface.optBannerDelete }));
  message.success('删除轮播成功', 1);
  yield put({ type: 'handleDeleteData', payload: action.payload });
}

