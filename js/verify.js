function verify() {
    //正则
    // var phoneR = /^1[34578]\d{9}$/;
    // var keyR = /^[a-zA-Z0-9_]{6,20}$/;

    //随机码验证
    $('#coding input').eq(0).blur(codingVerify);
    
    //手机验证
    $('#phone input').eq(0).blur(phoneVerify);
    

    //密码验证
    $('#key input').eq(0).blur(keyVerify);
    
    // 重复密码
    $('#key_enter input').eq(0).blur(keyEnVerify);
    
}

//随机码验证
function codingVerify() {
    let codingV = $('#coding input').eq(0).val();
    if (codingV == '') {
        $('.hint i').eq(0).css({ 'background-position': '-20px -200px' });
        $('.hint em').eq(0).html('不能为空');
        $('.hint em').eq(0).css('color', '#2eaccd');
        return false;
    } else if (codingV == $('#random_num').html()) {
        $('.hint i').eq(0).css({ 'background-position': '0px -200px' });
        $('.hint em').eq(0).html('输入正确');
        $('.hint em').eq(0).css('color', 'green');
    } else if (codingV != $('#random_num').html()) {
        $('.hint i').eq(0).css({ 'background-position': '-40px -200px' });
        $('.hint em').eq(0).html('输入错误');
        $('.hint em').eq(0).css('color', 'red');
        // return;
    }
}

// 手机验证
function phoneVerify() {
    let phoneV = $('#phone input').eq(0).val();
    var phoneR = /^1[34578]\d{9}$/;
    if (phoneV == '') {
        $('.hint i').eq(1).css({ 'background-position': '-20px -200px' });
        $('.hint em').eq(1).html('不能为空');
        $('.hint em').eq(1).css('color', '#2eaccd');
        return false;
    } else if (phoneR.test(phoneV)) {
        $('.hint i').eq(1).css({ 'background-position': '0px -200px' });
        $('.hint em').eq(1).html('输入正确');
        $('.hint em').eq(1).css('color', 'green');
        $.ajax({
            type: 'GET',
            url: '../php/usercheck.php',
            data: { 'username': phoneV },
            success: function (t) {
                if (t == '1') {
                    $('.hint i').eq(1).css({ 'background-position': '-40px -200px' });
                    $('.hint em').eq(1).html('号码已注册');
                    $('.hint em').eq(1).css('color', 'red');
                } else {
                    $('.hint i').eq(1).css({ 'background-position': '0px -200px' });
                    $('.hint em').eq(1).html('号码可用');
                    $('.hint em').eq(1).css('color', 'green');
                }
            }
        })
    } else {
        $('.hint i').eq(1).css({ 'background-position': '-40px -200px' });
        $('.hint em').eq(1).html('输入错误');
        $('.hint em').eq(1).css('color', 'red');
        // return;
    }
}

// 密码验证
function keyVerify() {
    var keyR = /^[a-zA-Z0-9_]{6,20}$/;
    var keyV = $('#key input').eq(0).val();
    if (keyV == '') {
        $('.hint i').eq(3).css({ 'background-position': '-20px -200px' });
        $('.hint em').eq(3).html('不能为空');
        $('.hint em').eq(3).css('color', '#2eaccd');
        return false
    } else if (keyR.test(keyV)) {
        $('.hint i').eq(3).css({ 'background-position': '0px -200px' });
        $('.hint em').eq(3).html('输入正确');
        $('.hint em').eq(3).css('color', 'green');
    } else {
        $('.hint i').eq(3).css({ 'background-position': '-40px -200px' });
        $('.hint em').eq(3).html('输入错误');
        $('.hint em').eq(3).css('color', 'red');
        // return;
    }
}

// 重复密码
function keyEnVerify() {
    let keyEnterV = $('#key_enter input').eq(0).val();
    if (keyEnterV == '') {
        $('.hint i').eq(4).css({ 'background-position': '-20px -200px' });
        $('.hint em').eq(4).html('不能为空');
        $('.hint em').eq(4).css('color', '#2eaccd');
        return false
    } else if (keyEnterV == $('#key input').eq(0).val()) {
        $('.hint i').eq(4).css({ 'background-position': '0px -200px' });
        $('.hint em').eq(4).html('输入正确');
        $('.hint em').eq(4).css('color', 'green');
    } else if (keyEnterV != $('#key input').eq(0).val()) {
        $('.hint i').eq(4).css({ 'background-position': '-40px -200px' });
        $('.hint em').eq(4).html('两次密码不一致');
        $('.hint em').eq(4).css('color', 'red');
        // return;
    } else {
        $('.hint i').eq(4).css({ 'background-position': '-40px -200px' });
        $('.hint em').eq(4).html('输入错误');
        $('.hint em').eq(4).css('color', 'red');
        // return;
    }
}