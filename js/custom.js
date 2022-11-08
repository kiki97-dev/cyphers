const test = fetch('https://api.neople.co.kr/cy/players?nickname=운동장&wordType=<wordType>&apikey=yq5RpAnjxLsLC5H2xdLNvFXfPaWdqwvo').then(res => res.json());
console.log(test);