/**
 * Created by apple on 16/12/3.
 */
<<<<<<< HEAD
var getCityWeather = {
    xhr : new XMLHttpRequest(),
    json : '',
    getWeather : function fn() {
        var that = this;
        that.xhr.open('get', 'http://api.jirengu.com/weather.php');
        that.xhr.onreadystatechange = function(){
            that.json = JSON.parse(that.xhr.responseText);
            render(that.json);
        };
        that.xhr.send();
    }
};
=======
// var getCityWeather = {
//     xhr : new XMLHttpRequest(),
//     json : '',
//     getWeather : function fn() {
//         var that = this;
//         that.xhr.open('get', 'http://api.jirengu.com/weather.php');
//         that.xhr.onreadystatechange = function(){
//             that.json = JSON.parse(that.xhr.responseText);
//             render(that.json);
//         };
//         that.xhr.send();
//     }
// };

//getCityWeather.getWeather();


//      上面使用了 AJAX 跨域因为 GitPage 使用了 HTTPS
//      所以 AJAX 失效了 所以改写成 JSONP 其中 AJAX 在上
//      JSONP 的方法在下

function addScriptTag(src){
    var script = document.createElement('script');
    script.setAttribute("type","text/javascript");
    script.src = src;
    document.body.appendChild(script);
}
>>>>>>> gh-pages
function render(json) {
    var currentCity = json.results[0].currentCity;
    var city = document.querySelector('#currentCity');
    city.innerHTML = currentCity;
    var tem = document.querySelector('#temperature');
    var temperature = json.results[0].weather_data[0].temperature;
    tem.innerHTML = temperature;
    var weather = document.querySelector('#weather_text');
    var wea = json.results[0].weather_data[0].weather;
    weather.innerHTML = wea;
};
<<<<<<< HEAD
getCityWeather.getWeather();
=======
addScriptTag("http://api.jirengu.com/weather.php?callback=render");
>>>>>>> gh-pages
