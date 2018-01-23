// -----------------购物车--------------------
function shopResult(){
    $('#shop').mouseenter(function () {
        $('#shopList').fadeIn(1000, function () {
            $(this).css('display', 'block');
        })
    })
    $('#shop').mouseleave(function () {
        let iTimer = setTimeout(function () {
            $('#shopList').fadeOut(1000, function () {
                $(this).css('display', 'none');
            })
        }, 1000)
    })
}