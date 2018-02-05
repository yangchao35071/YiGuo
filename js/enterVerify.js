
// 当时去焦点时调用
function enterVerify() {
    $('#phone').blur(phoneVerify);
    $('#key input').eq(0).blur(keyVerify);
    $('#coding input').eq(0).blur(codingVerify); 
}

// 手机号码验证不为空
// var phoneV = $('#phone').val();
function phoneVerify() {
    if ($('#phone').val() == '') {
        $('#hint ').fadeIn();
        $('#hint ').html('账号不能为空');
        return false;
    }
}

// 密码验证不为空
function keyVerify() {
    let keyV = $('#key input').eq(0).val();
    if (keyV == '') {
        $('#hint').fadeIn();
        $('#hint').html('密码不能为空');
        return false;
    }
}

// 验证码验证不为空
function codingVerify() {
    let codingV = $('#coding input').eq(0).val();
    if (codingV == '') {
        $('#hint ').fadeIn();
        $('#hint ').html('验证码不能为空');
        return false;
    } else if (codingV != $('#random_num').html()) {
        $('#hint ').fadeIn();
        $('#hint ').html('验证码错误');
    }
}

// 点击登录时 向后台发送验证请求，成功后创建cookie保存账号并跳转至首页
$('#register a').eq(0).click(function () {
    
    // if (codingVerify() && phoneVerify() && keyVerify() ){
        $.ajax({
            type: 'post',
            url: '../php/logincheck.php',
            data: { 'username': $('#phone').val(), 'userpass': $('#key input').eq(0).val() },
            success: function (t) {
                if (t == '1') {
                    $('#hint ').fadeIn();
                    $('#hint').html('欢迎回来 ' + $('#phone').val() + ' 马上为您跳转至首页');
                    $('#hint ').css({
                        'border-color': 'green',
                        'background-color': 'rgba(6, 238, 18, 0.5)',
                        'color': 'green'
                    })
                    if ($('#autoEnter').is(':checked')) {
                        setCookie('vipuser', $('#phone').val(), 7, '/');
                    } else {
                        setCookie('vipuser', $('#phone').val(), 1 , '/');
                    }
                    setTimeout(function () {
                        location.href = "../index.html";
                    }, 2000)
                } else {
                    $('#hint').html('您输入的账户或密码有误，请重新输入')
                }
            }
        })
    // }
})

