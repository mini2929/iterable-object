console.log("test");
/*
Iterable Object (반복가능한 객체)
자바스크립트에서는 문자열로 반복가능한 객체 취급

for in 반복문을 사용하면 문자값도 반복처리 가능

*/

const text = "HELLO";
for (let letter of text) {
    console.log(letter);
}
