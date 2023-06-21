// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// ここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b= document.querySelector('button#print');
b.addEventListener('click', hantei);
let result=document.querySelector('p#result');
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
   let i = document.querySelector('input[name="yoso"]');
   let yoso =Number(i.value);
  console.log(yoso);
  kaisu=kaisu+1;
  let ka = document.querySelector('span#kaisu');
  ka.textContent=kaisu;
  let an = document.querySelector('span#answer');
  result=document.querySelector('p#result');
  an.textContent=yoso;
  // 課題3-1: 正解判定する
  if(kaisu<3){
    if(kotae<yoso){
      result.textContent ="まちがい.答えはもっと小さいですよ";
    }else if(kotae>yoso){
      result.textContent ="まちがい.答えはもっと大きいですよ";
    }else {
      result.textContent ="正解です.おめでとう！";
    }
  }else if (kaisu===3){
    result.textContent ="まちがい.残念でした答えは" + kotae + "です.";
  }else{
    result.textContent ="答えは" + kotae + "でした.すでにゲームは終わっています";
  }
  // kotae と yoso が一致するかどうか調べて結果を出力

  // 課題3-1における出力先はコンソール
}