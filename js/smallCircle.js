function SmallCircle(className){
    BigCircle.call(this, className)
}

SmallCircle.prototype = Object.create(BigCircle.prototype);
SmallCircle.prototype.constructor = SmallCircle;

// 重写父类的render方法
SmallCircle.prototype.render = function(){
    let div = document.createElement('div');
    div.classList.add(this.className);
    console.log(this);

    let bigCircle = document.querySelector('.outer');
    bigCircle.appendChild(div);
}