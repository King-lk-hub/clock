function Dot(className) {
    B.call(this,className);
    // this.dot = dot;
}
Dot.prototype = Object.create(B.prototype);
Dot.prototype.constructor = Dot;
Dot.prototype.render = function() {
    let div = document.createElement('div');
    div.classList.add(this.className);

    let B = document.querySelector('.box');
    B.appendChild(div);

    let span = document.createElement('span');
    div.appendChild(span);
}
function Se(line,second) {
    this.line= line;
    this.second = second;
     
}
Se.prototype.render = function () {
    let div = document.createElement('div');
    div.classList.add(this.line,this.second);

    let B = document.querySelector('.box');
    B.appendChild(div);

    let span = document.createElement('span');
    div.appendChild(span);
}