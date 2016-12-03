/**
 * Created by apple on 16/12/3.
 */
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
getCityWeather.getWeather();
