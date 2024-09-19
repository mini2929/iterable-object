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

/*
미션 : 문자열 분리함수 생성
step1 : 인수로 전달된 특정 요소 안의 글자값을 반복돌며 sapn요소로 감싸서 다시 해당 요소 안에 innerHTML로 삽입


const text2 = document.querySelector("h2").innerText;

for (let letter of text2) {
    console.log(letter);
}
*/

const text2 = document.querySelector("h2");
const textContent = text2.innerText;
text2.innerHTML = ''; // 기존 텍스트를 비웁니다.

for (let letter of textContent) {
    const span = document.createElement("span"); // <span> 태그를 생성합니다.
    span.innerText = letter; // <span> 안에 글자를 넣습니다.
    text2.appendChild(span); // <span>을 h2 요소에 추가합니다.
}


/*
step2 : sapn요소 자체를 우리가 원하는 요소명으로 인수 전달처리;

step3 : 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨

step4 : 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0 처리

splitText('h1','sapn',0.1)
*/


/*-----------------------------------
function splitText(selector, elementTag, intervalTime = 0) {
    const text2 = document.querySelector(selector);
    const textContent = text2.innerText;
    text2.innerHTML = ''; // 기존 텍스트를 비웁니다.
    
    
    let index = 0;
    
    const interval = setInterval(() => {
        if (index < textContent.length) {
            const element = document.createElement(elementTag); // 인수로 전달된 태그 생성
            element.innerText = textContent[index]; // 요소에 글자 넣기
            text2.appendChild(element); // h2 요소에 추가
            index++;
            } else {
                clearInterval(interval); // 모든 글자가 처리되면 인터벌 중지
        }
        }, intervalTime);
        }
        
        // 호출 예시 1: 500ms 간격으로 h2의 각 글자를 span 태그로 감쌈
        splitText("h2", "span", 500);
        
        // 호출 예시 2: delay 값이 전달되지 않으면 기본값 0으로 설정 (딜레이 없이 실행)
        splitText("h2", "div");
        
        -----------------------------------*/
        
        
function splitText(elem, tag) {
    const el = document.querySelector(elem);
    const el_text = el.innerText;
    
    // for of 반복문 안쪽에서 += 복합대입연산자로 태그 문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
    let resultText = "";

    for (let letter of el_text) {
        console.log(letter);
        resultText += `<${tag}>${letter}<${tag}`;
    }

    el.innerHTML = resultText;
}   

splitText("h2", "span");


