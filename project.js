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
  
cosole.log(data.name+","+data.main.temp_max+","+data.main.temp_min);
p=document.createElement('P');
p.textContent=data.nemu+","+data.main.temp_max+","+data.main.temp_min;

let b = document.querySelector('button#kensaku');
b.addEventListener('click', kensaku);
let greeting=document.querySelector('div#greeting');
// 2. イベントハンドラの定義
function kensaku() {
    let i = document.querySelector('input[name="id"]');
    let id = i.value;       // ユーザが記入した文字列
    console.log(id);
    let url ='https://www.nishita-lab.org/web-contents/jsons/openweather/{id}.json'+(id)+'json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
// 通信が成功した時の処理
function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    // data をコンソールに出力
    console.log(data);
    let to=document.querySelector('span#tosi');
    to.textContent=data.name;
    let wea=document.querySelector('span#weather');
    wea.textContent=data.weather[0].description;
    let max=document.querySelector('span#max');
    max.textContent=data.main.temp_max;
    let min=document.querySelector('span#weather');
    wea.textContent=data.main.temp_min;
    let hum=document.querySelector('span#weather');
    hum.textContent=data.main.humidity;
    let lon=document.querySelector('span#weather');
    lon.textContent=data.coord.lon;
    let lat=document.querySelector('span#weather');
    lat.textContent=data.coord.lat;
    let spe=document.querySelector('span#weather');
    spe.textContent=data.wind.speed;
    let deg=document.querySelector('span#weather');
    deg.textContent=data.wind.deg;
    

}
// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('終了');
}
