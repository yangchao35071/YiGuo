$.ajax({
    type: 'get',
    url: '../php/getShoppingCart.php',
    dataType: 'json',
    data: { 'vipName': getCookie('vipuser') },
    success: function (data) {
        let allNum = 0;
        let allMoney = 0;
        for (let i = 0; i < data.length; i++) {
            allNum += Number(data[i].goodsCount);
            allMoney += Number(data[i].goodsCount);
        }
        $('#shopNum').html(allNum)
    }
})