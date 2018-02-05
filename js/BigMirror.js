function magnifying (){
    $.ajax({
        type: 'GET',
        url: '../php/getGoodsInfo.php',
        dataType: 'json',
        data:{ 'goodsId': getCookie('goodsid')},
        success: function (data) {
            magnifyingList(data)
        }
    })  
}

function magnifyingList(datas){
    console.log(datas.goodsName);
    new BigMirror({
        'boxDom': $('#BigMirror'),
        'imgDom':$('#pImg'),
        'widthX':'500px',
        'heightX':'500px',
        'widthM':'85px',
        'height':'85px',
        'img': [datas.goodsImg, datas.beiyong1, datas.beiyong2, datas.beiyong3, datas.beiyong4],
        'pImgs': [datas.beiyong5, datas.beiyong6, datas.beiyong7, datas.beiyong8, datas.beiyong9, datas.beiyong10,],
        'name': datas.goodsName,
        'price': datas.goodsPrice,
        'desc': datas.goodsDesc
    })
    $('.goodsname').html(datas.goodsName);
    $('.goodsprice').html(datas.goodsPrice);
    $('.goodsdesc').html(datas.goodsDesc);

}




function BigMirror(obj) {
    this.boxDom = obj.boxDom;
    this.imgDom = obj.imgDom; 
    // 中图大小
    this.widthX = obj.widthX;
    this.heightX = obj.widthX;
    // 小图大小
    this.widthM = obj.widthM;
    this.heightM = obj.heightM;

    // 后台数据
    this.img = obj.img;
    this.name = obj.name;
    this.price = obj.price;
    this.desc = obj.desc;
    this.goodsid = obj.goodsid;

    //详情图片数组
    this.pImgs = obj.pImgs;


    this.initUI();
}

BigMirror.prototype.initUI = function () {
    //中图
    let $divImg = $('<div></div>');
    $divImg.css({
        'width': this.widthX,
        'height': this.heightX,
        'margin-bottom': '6px',
        'position': 'relative'
    })
    let $image = $('<img/>');
    $image.attr('src', '../img/'+this.img[0])
    $image.css({
        'width': this.widthX,
        'height': this.heightX
    })
    // 遮盖层
    let $bg = $('<div></div>');
    $bg.css({
        'width': '200px',
        'height': '200px',
        'position': 'absolute',
        'background': '#2eaccd',
        'opacity': '0.5',
        'left': '0',
        'top': '0',
        'display': 'none'
    })
    $divImg.append($bg);
    $divImg.append($image);
    $divImg.mousemove(function (ev) {
        $bg.css({ 'display': 'block' });
        $MaxDom.css({ 'display': 'block' });


        let e = ev || window.event;
        let iX = e.pageX - $(this).offset().left - $bg.width() / 2;
        let iY = e.pageY - $(this).offset().top - $bg.height() / 2;

        let MaxX = $(this).width() - $bg.width();
        let MaxY = $(this).height() - $bg.height();

        let Mul = $MaxDom.width() / $bg.width();

        $MaxImg.css({ 'width': Mul * 500, 'height': Mul * 500 });

        iX = iX > 0 ? iX : 0;
        iX = iX < MaxX ? iX : MaxX;
        iY = iY > 0 ? iY : 0;
        iY = iY < MaxY ? iY : MaxY;

        $bg.css({ 'left': iX, 'top': iY });
        $MaxImg.css({ 'marginLeft': -Mul * iX, 'marginTop': -Mul * iY });
    });
    $divImg.mouseleave(function () {
        $bg.css({ 'display': 'none' });
        $MaxDom.css({ 'display': 'none' });
    })
    // 大图
    let $MaxDom = $('<div></div>');
    $MaxDom.css({
        'width': this.widthX,
        'height': this.heightX,
        'position': 'absolute',
        'left': '500px',
        'top': '0',
        'background': 'red',
        'overflow': 'hidden',
        'display': 'none',
        'z-index':'5',
        'border':'1px solid #ccc'
    })
    let $MaxImg = $('<img/>')
    $MaxImg.attr('src', $image.attr('src'));
    $MaxDom.append($MaxImg)
    this.boxDom.append($MaxDom);


    // 小图
    let $divMin = $('<div></div>');
    $divMin.css({
        'width': this.widthX,
        'height': this.heightM
    })
    let $ulDom = $('<ul></ul>');
    $ulDom.css({
        'overflow': 'hidden'
    })
    for (let i = 0; i < this.img.length; i++) {
        let $liDom = $('<li></li>');
        $liDom.css({
            'border': '1px solid #ccc',
            'float': 'left',
            'width': this.widthM,
            'height': this.heightM,
            'margin-left': '11px',
            'list-style': 'none'
        })

        let $minImg = $('<img/>');
        $minImg.attr('src', '../img/' + this.img[i]);
        $minImg.css({
            'width': '85px',
            'height': '85px'
        })
        $liDom.append($minImg);
        $ulDom.append($liDom);
    }
    $divMin.append($ulDom);

    this.boxDom.append($divImg);
    this.boxDom.append($divMin);

    $ulDom.find('li').first().css({ 'border-color': '#008842' });
    $ulDom.find('li').mouseenter(function () {
        $(this).css({ 'border-color': '#008842' }).siblings().css({ 'border-color': '#ccc' });
        let src = $(this).find('img').attr('src');
        $image.attr({ 'src': src });
        $MaxImg.attr('src', src);
    })

    //详情部分的图片
    for (let i = 0; i < this.pImgs.length;i++){
        let $pDom = $('<p></p>');
        let $pImg = $('<img></img>');
        $pImg.attr('src', '../img/'+ this.pImgs[i]);
        $pDom.append($pImg);
        this.imgDom.append($pDom);
    }
}