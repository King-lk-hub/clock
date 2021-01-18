
// 大圆对象
function BigCircle(className){
    this.className = className;
}
BigCircle.prototype.render = function(){
    let div = document.createElement('div');
    div.classList.add(this.className);
    document.body.appendChild(div);
}

