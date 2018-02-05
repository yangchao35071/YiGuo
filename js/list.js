function ajax(){
    console.log(2)
    $.ajax({
        type: 'GET',
        url: '../php/getGoodsList.php',
       dataType: 'json',
        success: function (data) {
            productList(data);
        }
    })
}
function productList(datas) {
    for (let i = 0; i < datas.length; i++) {
        new List({
            'boxDom': $('#listBox'),
            'width': '290px',
            'height': '358px',
            'goodsid': datas[i].goodsId,
            'img': datas[i].goodsImg,
            'name': datas[i].goodsName,
            'price': datas[i].goodsPrice,
            'desc': datas[i].goodsDesc,
            'imgW': '290px',
            'imgH': '290px'
        })
    }
}


var List = function (obj) {
    this.boxDom = obj.boxDom;
    this.width = obj.width;
    this.height = obj.height;

    // 后台数据
    this.img = obj.img;
    this.name = obj.name;
    this.price = obj.price;
    this.desc = obj.desc;
    this.goodsid = obj.goodsid;

    this.imgW = obj.imgW;
    this.imgH = obj.imgH;
    this.initUI();
    
}
List.prototype.initUI = function () {
    //商品的盒子
    this.$divDom = $('<div></div>');
    this.$divDom.css({
        'width': this.width,
        'height': this.height,
        'background': '#fff',
        'float': 'left',
        'position': 'relative',
        'margin': '5px'
    })
    this.$aDom = $('<a></a>');
    this.$aDom.addClass('goodsid');
    this.$aDom.attr({ 'goodsid': this.goodsid, 'href': 'details.html'});
    this.$aDom.click(function () { setCookie('goodsid', $(this).attr('goodsid'))});
    this.$imgDom = $('<img></img>');
    this.$imgDom.attr('src', '../img/'+this.img)
    this.$imgDom.css({
        'width': this.imgW,
        'height': this.imgH,
    })
    this.$aDom.append(this.$imgDom);
    this.$divDom.append(this.$aDom);

    this.$divDom2 = $('<div></div>');
    this.$divDom2.css({
        'width': this.width,
        'height': '48px',
        'padding': '10px',

    });
    this.$divName = $('<div></div>');
    this.$divName.css({
        'margin-bottom': '10px',
        'height': '16px',
        'line-height': '16px',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis'
    })
    this.$aName = $('<a></a>');
    this.$aName.addClass('goodsid');
    this.$aName.html(this.name);
    this.$aName.attr({ 'goodsid': this.goodsid, 'href': 'details.html' });
    this.$aName.click(function () { setCookie('goodsid', $(this).attr('goodsid'))});
    this.$aName.bind({
        'mouseenter': function () { $(this).css({ 'color': '#008842', 'text-decoration': 'underline' }) },
        'mouseleave': function () { $(this).css({ 'color': '#444', 'text-decoration': 'none' }) }
    })
    this.$divName.append(this.$aName);
    this.$divDom2.append(this.$divName);

    this.$divPrice = $('<div></div>');
    this.$divPrice.css({
        'height': '22px',
        'white-space': ' nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis'
    });
    this.$strong = $('<strong></strong>');
    this.$strong.css({
        'font-weight': 'bold',
        'font-size': '18px',
        'color': 'red',
        'vertical-align': 'middle'
    });
    this.$strong.html('￥' + this.price);
    this.$divPrice.append(this.$strong);
    this.$divDom2.append(this.$divPrice);

    this.$divShop = $('<div></div>');
    this.$divShop.css({
        'display': 'none',
        'position': 'absolute',
        'left': '0',
        'bottom': '68px',
        'width': '270px',
        'padding': '10px',
        'text-align': 'center',
        'background': 'rgba(255, 255, 255, 0.9)'
    })
    this.$span = $('<span></span>');
    this.$span.html(this.desc);
    this.$span.css({
        'display': 'block',
        'width': '270px',
        'line-height': '16px',
        'margin-bottom': '10px'
    })
    this.$divShop.append(this.$span);
    this.$aShop = $('<a></a>');
    this.$aShop.attr('href', 'javascript:;');
    this.$aShop.html('加入购物车');
    this.$aShop.css({
        'display': 'block',
        'width': '180px',
        'height': '25px',
        'margin': '0 auto',
        'line-height': '25px',
        'color': '#fff',
        'background': ' #008742',
        'border-radius': '4px'
    })
    this.$aShop.click( ()=> { this.addShop()});
    // ???????????????????????????????????????????????????????
    this.$divShop.append(this.$aShop);

    this.$divDom.append(this.$divDom2);
    this.$divDom.append(this.$divShop);
    this.boxDom.append(this.$divDom);

    this.$divDom.bind({
        mouseenter: function () { $(this).children().last().css({ 'display': 'block' }) },
        mouseleave: function () { $(this).children().last().css({ 'display': 'none' }) }
    })


}
List.prototype.addShop = function(){
    $.ajax({
        type:'GET',
        url:'../php/addShoppingCart.php',
        data: { 'vipName': getCookie('vipuser'), 'goodsId': this.goodsid,'goodsCount':'1'},
        success:function(t){
            if(t = 1){
                alert('添加成功');
            } else {
                alert('添加失败');
            }
        }
    });

    
}



