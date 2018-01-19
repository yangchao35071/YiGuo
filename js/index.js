$(function(){
    // -----------------购物车--------------------
    $('#shop').mouseenter(function(){
        $('#shopList').fadeIn(1000, function () {
            $(this).css('display','block');
        })
    })
    $('#shop').mouseleave(function(){
        let iTimer = setTimeout(function(){
            $('#shopList').fadeOut(1000, function () {
                $(this).css('display', 'none');
            })
        },1000)
    })
// ------------------下拉菜单-------------------
    $('#cataBtn').click(function(){
        $('#pull_down').toggle();
    })
    
// ------------------轮播图---------------------
    // $('#btnm').click(function(){
    //     console.log(1);
    //     $('#lis').addClass('current');
    // })

// -------------------楼层引导-------------------
    // var a = $('.floor').eq(0).offset().top;
    // console.log(a);
    // var b = $(document).scrollTop();
    // console.log(b);
    // $('.floor').each(function(i){
    //     let docTop =  $(document).scrollTop();
    //     let floorT =  $(this).offset().top;
    //     console.log(docTop,floorT)
    //     if ($(document).scrollTop() > $(this).offset().top && $(document).scrollTop() < $(this).last().offset().top){
    //         $('#guides').find('em').css({'opacity':1});
    //     }
    // })
    $(window).scroll(function (event) {
        let docTop = $(document).scrollTop();
        let floorT = $('.floor').offset().top;
        console.log($('.floor'));
        $('.floor').each(function(i){
            console.log(i)
            if (docTop > 800){
                $('#guides').css({'display':'block'});
            } else {
                $('#guides').css({ 'display': 'none' });
            }
            if (docTop >= $('.floor').eq(i).offset().top-200 && docTop < $('.floor').eq(i+1).offset().top-200){
                $('#guides li').eq(i).find('em').css({ 'opacity': 1 });
            } else {
                $('#guides li').eq(i).find('em').css({ 'opacity': 0 });
            }
        })
        
        if (docTop >100){
            $('#stick a').eq(1).css({ 'display': 'block' });
        } else {
            $('#stick a').eq(1).css({ 'display': 'none' });
        }
        $('#stick a').eq(1).click(function(){
            $(document).scrollTop(0);
        })
    });
})
// 定义一个类
// 类的属性
// var SlideShow = function(obj){
//     // 轮播盒子
//     this.boxDom = obj.boxDom;
//     // 宽高
//     this.width  = obj.width;
//     this.height = obj.height;
//     // 图片地址的数组
//     this.imgs   = obj.imgs;
//     // 定时器
//     this.iTimer = null;
//     // 序号
//     this.ord    = 0;
//     // 时间间隔
//     this.tSpace = obj.tSpace;
//     // 按钮宽高
//     this.btnW   = obj.btnW;
//     this.btnH   = obj.btnH;
//     // 按钮默认颜色
//     this.btnC   = obj.btnC;
//     // 按钮高亮颜色
//     this.ledC   = obj.ledC;

//     this.initUI();
//     this.initEvent();

// }

// 方法
// 初始化ui
// SlideShow.prototype.initUI = function(){
//     // 创建图片的ul、li、a、div、
//     let $ulDom = $('<ul></ul>');
//     $ulDom.css({ 'position': 'relative', 'height': this.height});
//     for(let i=0;i<this.imgs.length;i++){
//         let $liDom   = $('<li></li>');
//         let $aDom    = $('<a></a>');
//         let $divDom  = $('<div></div>');
//         $divDom.css({ 'background': 'url(' + this.imgs[i] +')','transform':'scale(1.2)'});
//         $liDom.css({ 'background':'rgb(239, 239, 239)','position':'absolute','left':'0px','top':'0px','display':'none'});

//         $aDom.append($liDom);
//         $liDom.append($aDom);
//         $ulDom.append($liDom);
//     }
//     // 插入到box盒中
//     this.boxDom.append($ulDom);

//     // 创建按钮ul、li、
//     let $ulBtn = $('<ul></ul>');
//     $ulBtn.css({'padding':'10px','position':'absolute','left':'50%','bottom':'20px','margin-left':-$ulBtn.width()/2});
//     for(let i=0;i<this.imgs.length;i++){
//         let $liBtn = $('<li></li>');
//         $liBtn.css({'width':this.btnW,'height':this.btnH,'border-radius':'50%','float':'left','margin-left':'20px','background-color':this.btnC});
//         $ulBtn.append($liBtn);append
//     }
//     this.boxDom.append($ulBtn);

//     // 初始化页面（显示第一张图片和高亮按钮）
//     $ulDom.children().eq(0).addClass('current');
//     $ulBtn.children().eq(0).css({ 'background-color':this.ledC});
// }

// 初始化事件
// SlideShow.prototype.initEvent = function(){
//     // 保存当前的this
//     let obj = this;

//     // 鼠标进入盒子的区域时，停止变换
//     this.boxDom.on('mouseover',function(){
//         window.clearInterval(obj.iTimer);
//     })
//     this.boxDom.on('mouseout',function(){
//         obj.autoPlay();
//     })
//     let lis = $ulBtn.children();
//     for(let i=0;i<lis.length;i++){
//         lis.eq(i).click(function(){
//             obj.go(i);
//         })
//     }
// }

// 自动变换图片
// SlideShow.prototype.autoPlay = function(){
//     this.iTimer = setInterval(()=>{
//         let outord = this.ord;
//         this.ord++;
//         if(this.ord>this.imgs.length-1){
//             this.ord = 0;
//         }
//         this.changeUI(outord,this.ord);
//     },this.space)
// }

// 给定出的序号和进入的序号。完成两场图片的切换
// SlideShow.prototype.changeUI = function(){
//     let 
// }

// 跳转到指定的图片上
// SlideShow.prototype.go = function(){
//     outord = this.ord;
//     this.ord = transOrd;
//     this.changeUI(outord,this.ord);
// }