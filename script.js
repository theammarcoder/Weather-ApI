async function getweather() {
    const cityRef = document.getElementById("city")
    const responseref = document.getElementById("response")

    const weather = cityRef.value;
    console.log(weather)

    const weatherRes = await fetch (`https://p2pclouds.up.railway.app/v1/learn/weather?city=${weather}`);
    const userweather = await weatherRes.json();
    const currentTemp = userweather.current.temp_c;
    responseref.innerHTML = `Today weather temprature ${weather} is ${currentTemp}`
}