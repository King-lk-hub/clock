function Num(className) {
    B.call(this,className);
}
Num.prototype = Object.create(B.prototype);
Num.prototype.constructor = Num;

Num.prototype.render = function() {
    let B = document.querySelector('.box');

    let div;
    for (let i = 1; i < 13; i++) {
    div = document.createElement('div');
    div.classList.add(this.className);
    B.appendChild(div);
    span = document.createElement('span');
    div.appendChild(span);
    span.innerText= i;
    }    
}