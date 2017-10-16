(function (w) {

    var woLianw={}
    woLianw.url="http://172.16.0.23:8002";

    /**
     * 获取验证码图片
     * @param obj:图片对象
     */
    woLianw.getValidateCode=function (obj) {
        obj.src="http://172.16.0.23:8002/code";
    }


    /**
     * 登录系统
     * @param url  /login
     * @param formdata  登录信息(登录名、密码、验证码、系统类型)
     */
    woLianw.login=function (url,formdata) {
        var _this=this
        console.log(_this.url+url+"?"+formdata)
        $.get(_this.url+url+"?"+formdata,function (response) {
            sessionStorage.setItem("response",JSON.stringify(response))
            console.log(response)
            if(response.code==1){
                sessionStorage.setItem("loginMessage",JSON.stringify(response.data))
                $.cookie("loginMessage",JSON.stringify(response.data,{expires: 7}));
                window.location.href="./station.html";
                console.log(JSON.parse($.cookie("loginMessage")))
            }
        })
    }

    /**
     * 获取分页数据
     * @param page 页码
     * @param limit 条数
     * @param url 请求地址
     */
    woLianw.getPageData=function (page,limit,url) {
        var obj={};
        obj.page=page || 0;
        obj.limit=limit || 0;
        obj.url=url;
    }

    /**
     *  获取岗位列表信息的数据
     * @param systemId  系统ID
     * @param name  登录名(可不传)
     */
    woLianw.getStationData=function (systemId,name) {
        var _this=this;
        var data={},
            obj={};
        obj.systemId=systemId || "";
        obj.name=name || "";
        $.ajax({
            type:"get",
            data:obj,
            async:false,
            url:_this.url+"/role",
            success:function (response) {
                if(response.code==1){
                    data=response.data
                    /*1.获取存储于本地的登录用户的权限列表*/
                    var permissionList=JSON.parse(sessionStorage.getItem("loginMessage")).permissionList;
                    data.permissionList=permissionList;
                }
            }
        })
        return data;
    }


    woLianw.getStaffData=function (name,phone) {
        var _this=this;
        var data={},
            obj={};
        obj.systemId=name || "";
        obj.name=phone || "";
        $.ajax({
            type:"get",
            data:obj,
            async:false,
            url:_this.url+"/user",
            success:function (response) {
                if(response.code==1){
                    data=response.data
                    /*1.获取存储于本地的登录用户的权限列表*/
                    var permissionList=JSON.parse(sessionStorage.getItem("loginMessage")).permissionList;
                    data.permissionList=permissionList;
                }
            }
        })
        return data;
    }

    /**
     * 将日期转换成以下格式,如: 2017-09-30 15:08
     * @param date 日期，格式不限
     * @returns {string}  返回以下格式的日期字符串，如:2017-09-30 15:08
     */
    woLianw.transDateType=function (date) {
        var date=new Date(date)
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '-' + m + '-' + d+' '+h+':'+minute;
    }
















    w.woLianw=woLianw
})(window)
