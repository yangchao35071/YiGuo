
function random(obj){
    var random = '';
    for (let i = 0; i < 4; i++) {
        let str = Math.floor(Math.random() * 10);
        random += str;
    }
    obj.html(random);
}

function clicks(btn,obj){
    random(obj)
    btn.click(function(){
        random(obj)
    })
}
