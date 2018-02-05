//可新建或修改Cookie
function setCookie (name,value,day,path,domain) {
    let sCookie = name + '=' + encodeURIComponent(value) ;
    if (day) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + day) ;
        sCookie = sCookie + ';expires=' + oDate ;
    }
    if (path) {
        sCookie = sCookie + ';path=' + path ;
    }
    if (domain) {
        sCookie = sCookie + ';domain=' + domain ;
    }
    document.cookie = sCookie;
};


//删除Cookie
function removeCookie (name,path) {
    document.cookie = name + '=;expires=-1;path=' + path ;
};


//查询获取Cookie
function getCookie (name) {
    let sCookie = document.cookie ;
    let aCookie = sCookie.split('; ');
    for(let i = 0 ; i < aCookie.length ; i++) {
        let aTemp = aCookie[i].split('=');
        if(aTemp[0] === name){
            return decodeURIComponent(aTemp[1]);
        }
    }
};