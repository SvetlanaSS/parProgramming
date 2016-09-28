var weather = prompt("What's the weather today?");
//var weather = "Rainy";
var todaysWeather = weather.toLowerCase();
console.log(todaysWeather);
switch(todaysWeather){
    case "rainy":
        console.log("take umbrella, wellington boots, rain cover for backpack");
        break;
    case "sunny":
        console.log("take sunglasses, t-shirt, shorts, sandals and skip class!");
        break;
    case "windy":
        console.log("take wind proof coat, boots and no skipping class");
        break;
    case "snow":
        console.log("take thick jacket, winter boots, two pants on");
        break;
}

