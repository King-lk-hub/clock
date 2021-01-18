// Box对象
function B(className){
    SmallCircle.call(this,className);   
}
B.prototype = Object.create(SmallCircle.prototype);
B.prototype.constructor = B;
B.prototype.render = function(){
    let div = document.createElement('div');
    div.classList.add(this.className);
    // 重写大圆
    let bigCircle = document.querySelector('.outer');
    bigCircle.appendChild(div);
    // 重写小圆
    let SmallCircle = document.querySelector('.inner');
    SmallCircle.appendChild(div); 
}