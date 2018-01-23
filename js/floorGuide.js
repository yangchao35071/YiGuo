// -------------------楼层引导-------------------
function floorGuide(){
    let floorIndex = 0;
    $(window).scroll(function (event) {
        let docTop = $(document).scrollTop();
        if ($('.floor')){
            $('.floor').each(function (i) {
                if (docTop > 800) {
                    $('#guides').css({ 'display': 'block' });
                } else {
                    $('#guides').css({ 'display': 'none' });
                }
                // floorIndex = i >= $('.floor').length ? $('.floor').length - 1 : i;
                if (docTop >= $('.floor').eq(i).offset().top - 500) {
                    $('#guides li').eq(i).find('em').css({ 'opacity': 1 }).end().siblings().find('em').css({ 'opacity': 0 });
                    return;
                }
            })
        }

        if (docTop > 100) {
            $('#stick a').eq(1).css({ 'display': 'block' });
        } else {
            $('#stick a').eq(1).css({ 'display': 'none' });
        }


        if (docTop > 100) {
            $('.head').eq(0).addClass('header_fix');
        } else if (docTop > 10) {
            $('.head').eq(0).removeClass('header_fix');
        }
    });
    $('#stick a').eq(1).click(function () {
        $('html').animate({ 'scrollTop': 0 });
        $('body').animate({ 'scrollTop': 0 });
    });



    //---------------------搜索框效果-----------------------
    $('#searchBox').bind({
        'focus':function(){
            $(this).val('').css({'background':'#fff'});
        },
        'blur':function(){
            $(this).val('输入商品名/编号/拼音').css({
                'background': '#e0e0e0 '});
        },
        'keydown':function(){
            
        }
    })


}