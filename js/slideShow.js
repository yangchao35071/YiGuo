var Slideshow = function (obj) {
    this.boxDom = obj.boxDom;
    this.width = obj.width;
    this.height = obj.height;

    this.imgs = obj.imgs;

    this.ord = 0;
    this.iTimer = null;
    this.space = obj.space;

    this.btnW = obj.btnW;
    this.btnH = obj.btnH;
    this.btnC = obj.btnC;
    this.ledC = obj.ledC;

    this.initUI();
    this.autoPlay();
    this.initEvent();
}

Slideshow.prototype.initUI = function () {
    this.ulDom = $('<ul></ul>');
    this.ulDom.css({ 'width': this.width, 'height': this.height, });
    for (let i = 0; i < this.imgs.length; i++) {
        this.liDom = $('<li></li>');
        this.liDom.css({ 'width': this.width, 'height': this.height, 'position': 'absolute', 'left': '0', 'top': '0', 'display': 'block' })
        this.aDom = $('<a></a>');
        this.divDom = $('<div></div>');
        this.divDom.css({ 'width': this.width, 'height': this.height, 'background': 'url(' + this.imgs[i] + ') no-repeat center' });
        this.aDom.attr({ 'href': 'javascript:;' });
        this.aDom.append(this.divDom);
        this.liDom.append(this.aDom);
        this.ulDom.append(this.liDom);
    }
    // this.ulDom.find('li').eq(0).css({'display':'block'});
    this.boxDom.append(this.ulDom);

    this.ulBtn = $('<ul></ul>');
    for (let i = 0; i < this.imgs.length; i++) {
        this.liBtn = $('<li></li>');
        this.liBtn.css({ 'width': this.btnW, 'height': this.btnH, 'margin': '0 20px', 'border-radius': '50%', 'float': 'left', 'background': this.btnC });
        this.ulBtn.append(this.liBtn);
    }
    // this. ulBtnW = this.ulBtn.width();
    this.ulBtn.find('li').eq(this.ord).css({ 'background': this.ledC });
    this.ulBtn.css({ 'padding': '10px', 'border-radius': '20px', 'position': 'absolute', 'left': '50%', 'bottom': '10px', 'margin-left': '-130px', 'z-index': '10' });
    this.ulBtn
    this.boxDom.append(this.ulBtn);
    // this.ulDom.find('li').eq(0).css({'display':'block'});
    // this.ulBtn.find('li').eq(0).css({'background':this.ledC});

    this.leftBtn = $('<a></a>');
    this.leftBtn.attr('href', 'javascript:;');
    this.leftBtn.css({ 'width': '40px', 'height': '100px', 'background': 'url(img/slider-btn.png) no-repeat 0 0', 'z-index': '10', 'position': 'absolute', 'left': '0', 'top': '50%', 'margin-top': '-50px', 'text-align': 'center', 'font-size': '80px', 'text-decoration': 'none', 'display': 'block', 'display': 'none' });
    this.rightBtn = $('<a></a>');
    this.rightBtn.attr('href', 'javascript:;');
    this.rightBtn.css({ 'width': '40px', 'height': '100px', 'background': 'url(img/slider-btn.png) no-repeat -50px 0px', 'z-index': '10', 'position': 'absolute', 'right': '0', 'top': '50%', 'margin-top': '-50px', 'text-align': 'center', 'font-size': '80px', 'text-decoration': 'none', 'display': 'block', 'display': 'none' });






    this.boxDom.append(this.leftBtn);
    this.boxDom.append(this.rightBtn);




    this.boxDom.mouseenter(() => { clearInterval(this.iTimer); this.leftBtn.css({ 'display': 'block' }); this.rightBtn.css({ 'display': 'block' }) });
    this.boxDom.mouseleave(() => { this.autoPlay(); this.leftBtn.css({ 'display': 'none' }); this.rightBtn.css({ 'display': 'none' }) });


}
Slideshow.prototype.initEvent = function () {
    this.leftBtn.click(() => {
        console.log(this.ord)
        this.ulDom.find('li').eq(this.ord).addClass('led');
        this.ulDom.find('li').eq(this.ord).siblings().removeClass('led');
        this.ulBtn.find('li').eq(this.ord).css({ 'background': this.ledC });
        this.ulBtn.find('li').eq(this.ord).siblings().css({ 'background': this.btnC });
        this.ord--;
        if (this.ord < 0) {
            this.ord = this.imgs.length - 1;
        }
    })


    this.rightBtn.click(() => {
        console.log(this.ord)
        this.ulDom.find('li').eq(this.ord).addClass('led');
        this.ulDom.find('li').eq(this.ord).siblings().removeClass('led');
        this.ulBtn.find('li').eq(this.ord).css({ 'background': this.ledC });
        this.ulBtn.find('li').eq(this.ord).siblings().css({ 'background': this.btnC });
        this.ord++;
        if (this.ord >= this.imgs.length) {
            this.ord = 0;
        }
        console.log(this.ulBtn.find('li'));
    })

}



Slideshow.prototype.autoPlay = function () {
    this.iTimer = setInterval(() => {
        this.ulDom.find('li').eq(this.ord).addClass('led');
        this.ulDom.find('li').eq(this.ord).siblings().removeClass('led');
        this.ulBtn.find('li').eq(this.ord).css({ 'background': this.ledC });
        this.ulBtn.find('li').eq(this.ord).siblings().css({ 'background': this.btnC });
        this.ord++;
        if (this.ord > this.imgs.length - 1) {
            this.ord = 0;
        }
    }, 3000)
}