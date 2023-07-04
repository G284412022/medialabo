let data = {
    "coord": {
      "lon": 116.3972,
      "lat": 39.9075
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "曇りがち",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 9.94,
      "feels_like": 8.65,
      "temp_min": 9.94,
      "temp_max": 9.94,
      "pressure": 1022,
      "humidity": 14,
      "sea_level": 1022,
      "grnd_level": 1016
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.65,
      "deg": 197,
      "gust": 4.84
    },
    "clouds": {
      "all": 53
    },
    "dt": 1646542386,
    "sys": {
      "type": 1,
      "id": 9609,
      "country": "CN",
      "sunrise": 1646520066,
      "sunset": 1646561447
    },
    "timezone": 28800,
    "id": 1816670,
    "name": "北京市",
    "cod": 200
  };
  
  ////////// 課題3-2 ここからプログラムを書こう
  //let s1 = document.querySelector('span#name');
  //s1.textContent = data.name;
  //let s2 = document.querySelector('span#maxtemp');
  //s2.textContent = data.main.temp_max;
  //let s3 = document.querySelector('span#mintemp');
  //s3.textContent = data.main.temp_min;
  
  let b = document.querySelector('button#botan');
  b.addEventListener('click',result);
  
  function result() {
    let a = document.querySelector('select#kensaku');
    let an = a.selectedIndex;
    let c = a.querySelectorAll('option');
    let cn = c.item(an);
    let f = cn.getAttribute('value');
    return {
      f
    };
  }
  b.addEventListener('click',sendRequest);
  
  function sendRequest() {
    let e = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + result().f + '.json';
    let url = e;
    axios.get(url)
          .then(showResult)   
          .catch(showError)  
          .then(finish);
  }
  function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    console.log(data);
    console.log(data.x);
    for (n of data.weather) {
      console.log(n);
      var obj = n; 
    }
    
    let t1 = document.querySelector('span#name');
    t1.textContent = data.name;
    let t2 = document.querySelector('span#ido');
    t2.textContent = data.coord.lat;
    let t3 = document.querySelector('span#keido');
    t3.textContent = data.coord.lon;
    let t4 = document.querySelector('span#weather');
    t4.textContent = obj.description;
    let t5 = document.querySelector('span#mintemp');
    t5.textContent = data.main.temp_min;
    let t6 = document.querySelector('span#maxtemp');
    t6.textContent = data.main.temp_max;
    let t7 = document.querySelector('span#situdo');
    t7.textContent = data.main.humidity;
    let t8 = document.querySelector('span#husoku');
    t8.textContent = data.wind.speed;
    let t9 = document.querySelector('span#hukou');
    t9.textContent = data.wind.deg;
  }
  function showError(err) {
    console.log(err);
  }
  function finish() {
    console.log('Ajax 通信が終わりました');
  }
  