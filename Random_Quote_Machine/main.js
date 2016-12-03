/**
 * Created by apple on 16/11/29.
 */


var getRandQuote = {
    xhr : new XMLHttpRequest(),
    json : '',
    sendRequetion : function fn() {
        var that = this;
        that.xhr.open('get' , 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=', false);
        that.xhr.setRequestHeader('X-Mashape-Key', 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V');
        that.xhr.onreadystatechange = function() {
            that.json = that.xhr.responseText;
        };
        that.xhr.send();
        return that.json;
    }
};
function getRandColor() {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    return colors[Math.floor(Math.random()*12 + 1) - 1];
}
function render(json) {
    json = JSON.parse(json);
    var div = document.querySelector('#quote_p');
    div.innerHTML = json.quote;
    var auther = document.querySelector('#auther_p');
    auther.innerHTML = '----' + json.author;
}
function setRandColor() {
    var body = document.body;
    var text = document.querySelector('#quote_p');
    var auther = document.querySelector('#auther_p');
    body.style.background = text.style.color = auther.style.color = getRandColor();
}
setRandColor(setTimeout(getRandQuote.sendRequetion(),0));
render(getRandQuote.json);

