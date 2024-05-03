const weatherApi = {
  key: "828cc99e0335c9476a8f751b7c386d9a",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");
let dat, lat, long;

searchInputBox.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
    document.querySelector("#input-box").style.display = "none";
  }
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      showWeatherReport(data);
      lat = data.coord.lat;
      long = data.coord.lon;
      fetchData();
    });
}

function showWeatherReport(weather) {
  console.log(weather);

  const city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  const temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  const minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min) / ${Math.ceil(weather.main.temp_min)}&deg;C (max)`;

  const weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;

  const date = document.getElementById("date");
  date.innerText = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const bgImage = `assets/${weatherType.textContent}.jpg`;
  document.body.style.backgroundImage = `url(${bgImage.toLowerCase()})`;
}

function fetchData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${weatherApi.key}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      dat = data;
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    });
}

function drawChart() {
  const unix_time = [];
  const hour = [];
  const dataTable = [];

  for (var i = 0; i < 12; i++) {
    unix_time[i] = dat.hourly[i].dt;
    hour[i] = new Date(unix_time[i] * 1000);
    hour[i] = format(hour[i]);
  }

  for (var i = 0; i < 12; i++) {
    dataTable[i] = [hour[i], Math.floor(dat.hourly[i].temp), "color:black"];
  }

  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Time", "Temperature", { role: "style" }],
    dataTable[0],
    dataTable[1],
    dataTable[2],
    dataTable[3],
    dataTable[4],
    dataTable[5],
    dataTable[6],
    dataTable[7],
    dataTable[8],
    dataTable[9],
    dataTable[10],
    dataTable[11],
  ]);

  // Set Options
  const options = {
    title: "time vs. temperature",
    hAxis: { title: "Time in Hours" },
    vAxis: { title: "Temperature in °C" },
    legend: "none",
    tooltip: { isHtml: true },
    backgroundColor: "transparent",
    color: "black",
    is3D: true,
    allowHtml: true,
  };

  // Draw
  document.querySelector("#myChart").style.display = "block";
  const chart = new google.visualization.AreaChart(
    document.getElementById("myChart")
  );
  chart.draw(data, options);
}

function format(date) {
  let hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = hours + " " + ampm;
  return strTime;
}

window.onresize = function () {
  drawChart();
};
