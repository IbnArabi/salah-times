var i = 0;
fetch('https://api.pray.zone/v2/times/today.json?city=mecca')

.then( response => {return response.json()})
.then(data =>{
    console.log(data)

    document.getElementById('times').innerHTML =`
    <div>
        <h1 class="main-header">Prayer times for ${data.results.location.city}, ${data.results.location.country} </h1>
        <h2 class="main-header date">Date (Hijri): ${data.results.datetime[i].date.hijri} </h2>
        <div class="prayer-times">
            <h2 class="main-prayers other">Last 3rd Timings: ${data.results.datetime[i].times.Imsak}</h2>
            <h2 class="main-prayers other">Sunrise: ${data.results.datetime[i].times.Sunrise}</h2>
            <h2 class="main-prayers">Fajr: ${data.results.datetime[i].times.Fajr}</h2>
            <h2 class="main-prayers">Dhuhr: ${data.results.datetime[i].times.Dhuhr}</h2>
            <h2 class="main-prayers">Asr: ${data.results.datetime[i].times.Asr}</h2>
	        <h2 class="main-prayers">Maghrib: ${data.results.datetime[i].times.Maghrib}</h2>
	        <h2 class="main-prayers">Sunset: ${data.results.datetime[i].times.Sunset}</h2>
	        <h2 class="main-prayers">Isha: ${data.results.datetime[i].times.Isha}</h2>
	        <h2 class="main-prayers other">Midnight: ${data.results.datetime[i].times.Midnight}</h2>
            <h5>Information is not accurate</h5>
        </div>
    </div>
`
});



