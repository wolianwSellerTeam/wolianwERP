const Mock = require('mockjs');
const { config } = require('../data/common');

const { apiPrefix } = config;
const classname = 'sell';

const one = [
    {
        "id":1,
        "name":"宠物及园艺",
        "path":"宠物及园艺"
    },
    {
        "id":139,
        "name":"汽车用品",
        "path":"汽车用品"
    },
    {
        "id":274,
        "name":"照明工业",
        "path":"照明工业"
    },
    {
        "id":503,
        "name":"女装",
        "path":"女装"
    },
    {
        "id":545,
        "name":"男装",
        "path":"男装"
    },
    {
        "id":581,
        "name":"电子元器件",
        "path":"电子元器件"
    },
    {
        "id":693,
        "name":"传媒、广电",
        "path":"传媒、广电"
    },
    {
        "id":798,
        "name":"安全、防护",
        "path":"安全、防护"
    },
    {
        "id":982,
        "name":"包装",
        "path":"包装"
    },
    {
        "id":1210,
        "name":"纸业",
        "path":"纸业"
    },
    {
        "id":1299,
        "name":"办公、文教",
        "path":"办公、文教"
    },
    {
        "id":1619,
        "name":"数码、电脑",
        "path":"数码、电脑"
    },
    {
        "id":1944,
        "name":"电工电气",
        "path":"电工电气"
    },
    {
        "id":2304,
        "name":"眼镜及配件",
        "path":"眼镜及配件"
    },
    {
        "id":2327,
        "name":"纺织、皮革",
        "path":"纺织、皮革"
    },
    {
        "id":2517,
        "name":"内衣",
        "path":"内衣"
    },
    {
        "id":2580,
        "name":"童装",
        "path":"童装"
    },
    {
        "id":2610,
        "name":"服饰配件、饰品",
        "path":"服饰配件、饰品"
    },
    {
        "id":2689,
        "name":"鞋",
        "path":"鞋"
    },
    {
        "id":2709,
        "name":"箱包皮具",
        "path":"箱包皮具"
    },
    {
        "id":2748,
        "name":"机械及行业设备",
        "path":"机械及行业设备"
    },
    {
        "id":3715,
        "name":"五金、工具",
        "path":"五金、工具"
    },
    {
        "id":4119,
        "name":"化工",
        "path":"化工"
    },
    {
        "id":4880,
        "name":"精细化学品",
        "path":"精细化学品"
    },
    {
        "id":5292,
        "name":"橡塑",
        "path":"橡塑"
    },
    {
        "id":5670,
        "name":"环保",
        "path":"环保"
    },
    {
        "id":5864,
        "name":"仪器仪表",
        "path":"仪器仪表"
    },
    {
        "id":6299,
        "name":"日用百货",
        "path":"日用百货"
    },
    {
        "id":6652,
        "name":"母婴用品",
        "path":"母婴用品"
    },
    {
        "id":6742,
        "name":"家纺家饰",
        "path":"家纺家饰"
    },
    {
        "id":6904,
        "name":"美妆日化",
        "path":"美妆日化"
    },
    {
        "id":7124,
        "name":"家用电器",
        "path":"家用电器"
    },
    {
        "id":7350,
        "name":"家装、建材",
        "path":"家装、建材"
    },
    {
        "id":7784,
        "name":"交通运输",
        "path":"交通运输"
    },
    {
        "id":7898,
        "name":"工艺品、礼品",
        "path":"工艺品、礼品"
    },
    {
        "id":8010,
        "name":"能源",
        "path":"能源"
    },
    {
        "id":8144,
        "name":"农业",
        "path":"农业"
    },
    {
        "id":8250,
        "name":"汽摩及配件",
        "path":"汽摩及配件"
    },
    {
        "id":8552,
        "name":"食品、饮料",
        "path":"食品、饮料"
    },
    {
        "id":8717,
        "name":"通信产品",
        "path":"通信产品"
    },
    {
        "id":8849,
        "name":"玩具",
        "path":"玩具"
    },
    {
        "id":8954,
        "name":"冶金矿产",
        "path":"冶金矿产"
    },
    {
        "id":9122,
        "name":"医药、保养",
        "path":"医药、保养"
    },
    {
        "id":9219,
        "name":"印刷",
        "path":"印刷"
    },
    {
        "id":9311,
        "name":"运动户外",
        "path":"运动户外"
    },
    {
        "id":9738,
        "name":"机床",
        "path":"机床"
    },
    {
        "id":9818,
        "name":"商务服务",
        "path":"商务服务"
    },
    {
        "id":10028,
        "name":"项目合作",
        "path":"项目合作"
    },
    {
        "id":10084,
        "name":"二手设备转让",
        "path":"二手设备转让"
    },
    {
        "id":10128,
        "name":"加工",
        "path":"加工"
    },
    {
        "id":10269,
        "name":"代理",
        "path":"代理"
    },
    {
        "id":10325,
        "name":"库存积压",
        "path":"库存积压"
    },
    {
        "id":10363,
        "name":"LED",
        "path":"LED"
    },
    {
        "id":10543,
        "name":"餐饮生鲜",
        "path":"餐饮生鲜"
    },
    {
        "id":10787,
        "name":"钢铁",
        "path":"钢铁"
    },
    {
        "id":10975,
        "name":"个人防护",
        "path":"个人防护"
    }
];

const two = [
    {
        "id":504,
        "name":"连衣裙",
        "path":"女装>连衣裙"
    },
    {
        "id":505,
        "name":"女式毛衣",
        "path":"女装>女式毛衣"
    },
    {
        "id":510,
        "name":"半身裙",
        "path":"女装>半身裙"
    },
    {
        "id":511,
        "name":"小背心、吊带衫、裹胸",
        "path":"女装>小背心、吊带衫、裹胸"
    },
    {
        "id":512,
        "name":"女式马甲背心",
        "path":"女装>女式马甲背心"
    },
    {
        "id":513,
        "name":"女式T恤",
        "path":"女装>女式T恤"
    },
    {
        "id":514,
        "name":"女式衬衫",
        "path":"女装>女式衬衫"
    },
    {
        "id":515,
        "name":"蕾丝衫、雪纺衫",
        "path":"女装>蕾丝衫、雪纺衫"
    },
    {
        "id":516,
        "name":"女式针织衫",
        "path":"女装>女式针织衫"
    },
    {
        "id":517,
        "name":"女式休闲套装",
        "path":"女装>女式休闲套装"
    },
    {
        "id":518,
        "name":"女式卫衣、绒衫",
        "path":"女装>女式卫衣、绒衫"
    },
    {
        "id":519,
        "name":"小西装",
        "path":"女装>小西装"
    },
    {
        "id":520,
        "name":"女式外套",
        "path":"女装>女式外套"
    },
    {
        "id":521,
        "name":"女式风衣、大衣",
        "path":"女装>女式风衣、大衣"
    },
    {
        "id":522,
        "name":"女式棉衣",
        "path":"女装>女式棉衣"
    },
    {
        "id":523,
        "name":"女式羽绒服",
        "path":"女装>女式羽绒服"
    },
    {
        "id":527,
        "name":"女式皮衣",
        "path":"女装>女式皮衣"
    },
    {
        "id":528,
        "name":"皮草",
        "path":"女装>皮草"
    },
    {
        "id":529,
        "name":"女式打底裤",
        "path":"女装>女式打底裤"
    },
    {
        "id":532,
        "name":"女式牛仔裤",
        "path":"女装>女式牛仔裤"
    },
    {
        "id":533,
        "name":"女式休闲裤",
        "path":"女装>女式休闲裤"
    },
    {
        "id":534,
        "name":"大码女装",
        "path":"女装>大码女装"
    },
    {
        "id":535,
        "name":"中老年女装",
        "path":"女装>中老年女装"
    },
    {
        "id":536,
        "name":"职业女装",
        "path":"女装>职业女装"
    },
    {
        "id":537,
        "name":"旗袍、唐装",
        "path":"女装>旗袍、唐装"
    },
    {
        "id":538,
        "name":"婚纱、礼服",
        "path":"女装>婚纱、礼服"
    },
    {
        "id":539,
        "name":"情侣装",
        "path":"女装>情侣装"
    },
    {
        "id":540,
        "name":"制服工作服、校服、表演服",
        "path":"女装>制服工作服、校服、表演服"
    },
    {
        "id":544,
        "name":"女装组合包",
        "path":"女装>女装组合包"
    }
];

const three = [
    {
        "id":506,
        "name":"毛衣",
        "path":"女装>女式毛衣>毛衣"
    },
    {
        "id":507,
        "name":"羊绒衫",
        "path":"女装>女式毛衣>羊绒衫"
    },
    {
        "id":508,
        "name":"羊毛衫",
        "path":"女装>女式毛衣>羊毛衫"
    },
    {
        "id":509,
        "name":"貂绒衫",
        "path":"女装>女式毛衣>貂绒衫"
    }
];

module.exports = {
  [`GET ${apiPrefix}/${classname}/category/list`](req, res) {
    const { query } = req;
    const { cid } = query;

    let result = [];

    if (cid === undefined) {
      result = one;
    } else if (cid === '503') {
      result = two;
    } else if (cid === '504') {
      result = three;
    } else {
      result = [];
    }

    res.status(200).json({
      code: 1,
      msg: '',
      data: result,
    });
  },
};
