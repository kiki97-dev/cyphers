fetch('https://api.neople.co.kr/cy/players?nickname=운동장&wordType=match&apikey=yq5RpAnjxLsLC5H2xdLNvFXfPaWdqwvo')
    .then((response) => {
        if (!response.ok) {
            throw new Error('네트워크 응답이 올바르지 않습니다.');
        }
        return response.blob();
    })
    .then((myBlob) => {
        console.log(myBlob);
    })
    .catch((error) => {
        console.error('fetch에 문제가 있었습니다.', error);
    });