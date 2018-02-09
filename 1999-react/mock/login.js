const Mock = require('mockjs');
const { config } = require('../data/common');

const { apiPrefix } = config;
const classname = 'login';

module.exports = {
  [`POST ${apiPrefix}/${classname}`](req, res) {
    res.status(200).json({
      code: 1,
      msg: '',
      data: {"id":1,"loginName":"erpadmin","name":"erpadmin","companyName":"我连网","email":null,"phone":"18874883284","sex":0,"logoUrl":"","registerTime":null,"userType":0,"province":"77","city":"88","area":"99","towns":"1010","homeAddress":"中信广场","fullAddress":"湖北省荆门市钟祥市西环二路华中车城B3-1-20号","longitude":null,"latitude":null,"identity":null,"moduleList":[{"id":1,"systemId":0,"parentId":0,"parentName":null,"name":"系统设置","url":null,"icon":"gear","sortCode":"5","enabled":true,"isMenu":true,"level":1,"permissionVoList":null},{"id":2,"systemId":0,"parentId":1,"parentName":null,"name":"基础权限设置","url":null,"icon":"signal","sortCode":"1","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":3,"systemId":0,"parentId":2,"parentName":null,"name":"公有权限设置","url":"role/public","icon":"signal","sortCode":"1","enabled":true,"isMenu":true,"level":3,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":3},{"id":6,"systemId":0,"name":"设置权限","url":"setPermission","icon":"gear","css":"pink","remark":null,"sortCode":"6","enabled":true,"moduleId":3},{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":3},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":3},{"id":4,"systemId":0,"name":"删除","url":"delete","icon":"close","css":"danger","remark":null,"sortCode":"4","enabled":true,"moduleId":3},{"id":8,"systemId":0,"name":"详情","url":"detail","icon":"sticky-note","css":"success","remark":"","sortCode":"8","enabled":true,"moduleId":3}]},{"id":4,"systemId":0,"parentId":2,"parentName":null,"name":"默认权限设置","url":"role/default","icon":"signal","sortCode":"2","enabled":true,"isMenu":true,"level":3,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":4},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":4},{"id":6,"systemId":0,"name":"设置权限","url":"setPermission","icon":"gear","css":"pink","remark":null,"sortCode":"6","enabled":true,"moduleId":4}]},{"id":5,"systemId":0,"parentId":2,"parentName":null,"name":"权限管理","url":"permission","icon":"signal","sortCode":"3","enabled":true,"isMenu":true,"level":3,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":5},{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":5},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":5}]},{"id":6,"systemId":0,"parentId":2,"parentName":null,"name":"模块管理","url":"module","icon":"signal","sortCode":"4","enabled":true,"isMenu":true,"level":3,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":6},{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":6},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":6},{"id":5,"systemId":0,"name":"设置按钮","url":"setButton","icon":"gear","css":"pink","remark":null,"sortCode":"5","enabled":true,"moduleId":6}]},{"id":7,"systemId":0,"parentId":0,"parentName":null,"name":"用户管理","url":null,"icon":"users","sortCode":"4","enabled":true,"isMenu":true,"level":1,"permissionVoList":null},{"id":8,"systemId":0,"parentId":7,"parentName":null,"name":"用户列表","url":"user","icon":"signal","sortCode":"1","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":8},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":8},{"id":7,"systemId":0,"name":"修改密码","url":"editPwd","icon":"grey","css":"pink","remark":null,"sortCode":"7","enabled":true,"moduleId":8},{"id":8,"systemId":0,"name":"详情","url":"detail","icon":"sticky-note","css":"success","remark":"","sortCode":"8","enabled":true,"moduleId":8},{"id":17,"systemId":0,"name":"支付密码","url":"SetPayPassword","icon":"gear","css":"pink","remark":"","sortCode":"15","enabled":true,"moduleId":8},{"id":56,"systemId":0,"name":"运费模板","url":"fareList","icon":null,"css":null,"remark":null,"sortCode":"0","enabled":true,"moduleId":8}]},{"id":9,"systemId":0,"parentId":7,"parentName":null,"name":"员工管理","url":"user/employee","icon":"signal","sortCode":"2","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":9},{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":9},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":9},{"id":7,"systemId":0,"name":"修改密码","url":"editPwd","icon":"grey","css":"pink","remark":null,"sortCode":"7","enabled":true,"moduleId":9},{"id":8,"systemId":0,"name":"详情","url":"detail","icon":"sticky-note","css":"success","remark":"","sortCode":"8","enabled":true,"moduleId":9}]},{"id":11,"systemId":0,"parentId":0,"parentName":null,"name":"订单管理","url":null,"icon":"reorder","sortCode":"1","enabled":true,"isMenu":true,"level":1,"permissionVoList":null},{"id":12,"systemId":0,"parentId":11,"parentName":null,"name":"总代理订单","url":"order/dis","icon":"signal","sortCode":"1","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":12},{"id":8,"systemId":0,"name":"详情","url":"detail","icon":"sticky-note","css":"success","remark":"","sortCode":"8","enabled":true,"moduleId":12},{"id":57,"systemId":0,"name":"退单","url":"venRefundMoney","icon":null,"css":null,"remark":null,"sortCode":"0","enabled":true,"moduleId":12}]},{"id":13,"systemId":0,"parentId":11,"parentName":null,"name":"供应商订单","url":"order/ven","icon":"signal","sortCode":"2","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":13},{"id":8,"systemId":0,"name":"详情","url":"detail","icon":"sticky-note","css":"success","remark":"","sortCode":"8","enabled":true,"moduleId":13},{"id":14,"systemId":0,"name":"取消","url":"Cancel","icon":"undo","css":"warning","remark":"","sortCode":"10","enabled":true,"moduleId":13},{"id":19,"systemId":0,"name":"及时打款","url":"playMoney","icon":"paypal","css":"danger","remark":"","sortCode":"17","enabled":true,"moduleId":13}]},{"id":14,"systemId":0,"parentId":0,"parentName":null,"name":"商品管理","url":null,"icon":"shopping-cart","sortCode":"2","enabled":true,"isMenu":true,"level":1,"permissionVoList":[{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":14},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":14},{"id":4,"systemId":0,"name":"删除","url":"delete","icon":"close","css":"danger","remark":null,"sortCode":"4","enabled":true,"moduleId":14}]},{"id":15,"systemId":0,"parentId":14,"parentName":null,"name":"商品列表","url":"manager/product","icon":"signal","sortCode":"2","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":15},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":15},{"id":4,"systemId":0,"name":"删除","url":"delete","icon":"close","css":"danger","remark":null,"sortCode":"4","enabled":true,"moduleId":15},{"id":8,"systemId":0,"name":"详情","url":"detail","icon":"sticky-note","css":"success","remark":"","sortCode":"8","enabled":true,"moduleId":15},{"id":12,"systemId":0,"name":"强制下架","url":"ForceOffShelves","icon":"chevron-circle-down","css":"danger","remark":"","sortCode":"11","enabled":true,"moduleId":15},{"id":13,"systemId":0,"name":"审核","url":"Audit","icon":"check-square","css":"primary","remark":"","sortCode":"10","enabled":true,"moduleId":15},{"id":18,"systemId":0,"name":"设置特价","url":"setPromotion","icon":"","css":"","remark":"","sortCode":"4","enabled":true,"moduleId":15}]},{"id":16,"systemId":0,"parentId":7,"parentName":null,"name":"岗位管理","url":"role","icon":"signal","sortCode":"3","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":16},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":16},{"id":4,"systemId":0,"name":"删除","url":"delete","icon":"close","css":"danger","remark":null,"sortCode":"4","enabled":true,"moduleId":16},{"id":6,"systemId":0,"name":"设置权限","url":"setPermission","icon":"gear","css":"pink","remark":null,"sortCode":"6","enabled":true,"moduleId":16},{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":16}]},{"id":17,"systemId":0,"parentId":0,"parentName":null,"name":"后台管理","url":null,"icon":"wrench","sortCode":"0","enabled":true,"isMenu":true,"level":1,"permissionVoList":null},{"id":18,"systemId":0,"parentId":17,"parentName":null,"name":"匹配参数","url":"common/configuration","icon":"signal","sortCode":"4","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":18},{"id":15,"systemId":0,"name":"匹配参数","url":"smartMatch","icon":"","css":"","remark":"","sortCode":"0","enabled":true,"moduleId":18}]},{"id":19,"systemId":0,"parentId":11,"parentName":null,"name":"异常订单","url":"order/abnormal","icon":"signal","sortCode":"3","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":19}]},{"id":20,"systemId":0,"parentId":17,"parentName":null,"name":"策略规则","url":"base/policy/list","icon":"signal","sortCode":"1","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":20},{"id":16,"systemId":0,"name":"策略规则","url":"PolicyList","icon":"","css":"","remark":"","sortCode":"0","enabled":true,"moduleId":20}]},{"id":21,"systemId":0,"parentId":17,"parentName":null,"name":"智能匹配","url":"home/homePage?123","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":21}]},{"id":22,"systemId":0,"parentId":17,"parentName":null,"name":"经营分析","url":"home/homePage","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":22}]},{"id":23,"systemId":0,"parentId":0,"parentName":null,"name":"报表分析","url":null,"icon":"signal","sortCode":"3","enabled":true,"isMenu":true,"level":1,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":23}]},{"id":24,"systemId":0,"parentId":23,"parentName":null,"name":"销售趋势图","url":"report/salesTrend","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":24}]},{"id":25,"systemId":0,"parentId":0,"parentName":null,"name":"财务管理","url":null,"icon":"yen","sortCode":"0","enabled":true,"isMenu":true,"level":1,"permissionVoList":null},{"id":26,"systemId":0,"parentId":25,"parentName":null,"name":"销售毛利表","url":"report/profit","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":26}]},{"id":27,"systemId":0,"parentId":0,"parentName":null,"name":"退货管理","url":null,"icon":"truck","sortCode":"0","enabled":true,"isMenu":true,"level":1,"permissionVoList":[{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":27}]},{"id":28,"systemId":0,"parentId":27,"parentName":null,"name":"退货列表","url":"srvOrder","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":28}]},{"id":29,"systemId":0,"parentId":23,"parentName":null,"name":"销售排行榜","url":"report/saleRank","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":29}]},{"id":30,"systemId":0,"parentId":23,"parentName":null,"name":"采购排行榜","url":"report/purchaseRank","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":30}]},{"id":31,"systemId":0,"parentId":23,"parentName":null,"name":"商品排行榜","url":"report/productRank","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":31}]},{"id":32,"systemId":0,"parentId":23,"parentName":null,"name":"用户活跃度排行榜","url":"report/activeUserRank","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":32}]},{"id":33,"systemId":0,"parentId":0,"parentName":null,"name":"运营管理","url":null,"icon":"certificate","sortCode":"0","enabled":true,"isMenu":true,"level":1,"permissionVoList":null},{"id":34,"systemId":0,"parentId":33,"parentName":null,"name":"专栏管理","url":"opt/column","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":34},{"id":2,"systemId":0,"name":"新增","url":"add","icon":"plus","css":"primary","remark":null,"sortCode":"2","enabled":true,"moduleId":34},{"id":3,"systemId":0,"name":"编辑","url":"edit","icon":"edit","css":"info","remark":null,"sortCode":"3","enabled":true,"moduleId":34},{"id":4,"systemId":0,"name":"删除","url":"delete","icon":"close","css":"danger","remark":null,"sortCode":"4","enabled":true,"moduleId":34},{"id":58,"systemId":0,"name":"关联商品","url":"relation","icon":null,"css":null,"remark":null,"sortCode":"0","enabled":true,"moduleId":34}]},{"id":35,"systemId":0,"parentId":23,"parentName":null,"name":"商品分类趋势图","url":"report/goodsCategoryTrend","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":35}]},{"id":36,"systemId":0,"parentId":23,"parentName":null,"name":"支付订单统计","url":"report/orderPay","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":36}]},{"id":37,"systemId":0,"parentId":1,"parentName":null,"name":"通知公告","url":"base/notice","icon":"signal","sortCode":"2","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":38,"systemId":0,"parentId":23,"parentName":null,"name":"销售收货明细表","url":"report/saleDetail","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":38}]},{"id":39,"systemId":0,"parentId":23,"parentName":null,"name":"采购收货明细表","url":"report/inc/receiveOrderDetail","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":39}]},{"id":40,"systemId":0,"parentId":25,"parentName":null,"name":"提成管理","url":"common/commissionBill","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":40}]},{"id":41,"systemId":0,"parentId":33,"parentName":null,"name":"托管管理","url":"operation/pagingTrusteeship","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":42,"systemId":0,"parentId":33,"parentName":null,"name":"推荐商品","url":"operation/recommend/relate","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":43,"systemId":0,"parentId":33,"parentName":null,"name":"专场活动管理","url":"operation/event","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":45,"systemId":0,"parentId":25,"parentName":null,"name":"冻结账期管理","url":"finance/frozenAccount","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":46,"systemId":0,"parentId":25,"parentName":null,"name":"充值列表","url":"finance/recharge","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":null},{"id":47,"systemId":0,"parentId":33,"parentName":null,"name":"客服配置","url":"operation/customServiceConfig","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":47}]},{"id":48,"systemId":0,"parentId":11,"parentName":null,"name":"订单跟踪","url":"order/orderTrack","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":48}]},{"id":50,"systemId":0,"parentId":23,"parentName":null,"name":"运营订单","url":"report/operationOrder","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":50}]},{"id":51,"systemId":0,"parentId":23,"parentName":null,"name":"辖区销售汇总表","url":"report/disOrderAnalysis","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":51}]},{"id":52,"systemId":0,"parentId":23,"parentName":null,"name":"辖区销售明细表","url":"report/disOrderDetailAnalysis","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":52}]},{"id":53,"systemId":0,"parentId":23,"parentName":null,"name":"辖区采购汇总表","url":"report/venOrderAnalysis","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":53}]},{"id":54,"systemId":0,"parentId":23,"parentName":null,"name":"辖区采购明细表","url":"report/venOrderDetailAnalysis","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":54}]},{"id":55,"systemId":0,"parentId":14,"parentName":null,"name":"库存管理","url":"manager/product/sku-num","icon":"signal","sortCode":"0","enabled":true,"isMenu":true,"level":2,"permissionVoList":[{"id":1,"systemId":0,"name":"浏览","url":"list","icon":"","css":"","remark":"","sortCode":"1","enabled":true,"moduleId":55}]}]},
    });
  },
};
