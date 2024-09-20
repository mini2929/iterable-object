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
/*실패.....
const text2 = document.querySelector("h2");
const textContent = text2.innerText;
text2.innerHTML = ''; // 기존 텍스트를 비웁니다.

for (let letter of textContent) {
    const span = document.createElement("span"); // <span> 태그를 생성합니다.
    span.innerText = letter; // <span> 안에 글자를 넣습니다.
    text2.appendChild(span); // <span>을 h2 요소에 추가합니다.
}
*/

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
        
/*        
function splitText(elem, tag ="span", interval = 0) {
    const el = document.querySelector(elem);
    const el_text = el.innerText;

    // 아래와 같이 DOM.style.fontsize='0px'은
    // 실제 html 태그상에 <h1 style = 'font-size:0px'></h1>와 같이 인라인 스타일 형태로 적용
    el.style.fontSize = "0px";
    
    // for of 반복문 안쪽에서 += 복합대입연산자로 태그 문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
    let resultText = "";
    let counter = 0;

    for (let letter of el_text) {
        // console.log(letter);
        resultText += `<${tag} style='display:inline-block; transition-delay:${interval * counter++}s'>${letter}<${tag}`;
    }
    el.innerHTML = resultText;
}   

splitText("h2", "span" , 0);
*/


// ***********************************************
// splitText 라는 이름으로 함수 선언. 이 때 파라미터로 elem, tag, interval 연결. tag와 interval에 전달되는 인수값이 없을 때 span, 0값을 디폴트로 설정
    function splitText(elem, tag = "span", interval=0) {
        if(!elem) {
            console.error;
            return;
        }
    

    const el = document.querySelector(elem);
    const el_text = el.innerText;
    el.style.fontSize ="0px"
    let resultText ="";
    let counter = 0;

    for (let letter of el_text) {
        resultText += `<${tag} style='display:inline-block; transition-delay:${interval}s'>${letter}</${tag}>`;
    }

    el.innerHTML = resultText;

    }

    splitText("h1","span",0.05);


    /* +++++++++++++++++++++++++++++++++++++++++
    //splitText라는 이름으로 함수 선언 이때 파라미터로 elem, tag, interval연결 , tag와 interval에는 전달되는 인수값이 없을떄 span, 0값을 디폴트로 설정
function splitText(elem, tag = "span", interval = 0) {
  //이때 만약 제일 중요한 인수값은 elem값이 없으면 코드가 어차피 정상적으로 동작이 안될터이므로
  if (!elem) {
    //친절하게 타 개발자에게 알려주기 위해서 error구문으로 어떤실수를 했는지 구체적으로 콘솔찍어줌
    console.error("첫 번째 인수값은 텍스를 가져올 DOM선택자를 넣어야 됩니다.");
    //어차피 구동이 안될 코드이므로 이다음의 의미없는 연산처리를 막기위해 return으로 해당 함수 실행 강제 종료
    //만약 elem값이 있으면 해당 if문의 코드블록 자체가 무시가 될테니 return으로 중지되지 않음
    return;
  }

  //위에 조건으로 설정한 오류사항을 피하게되면 아래 로직을 순차적으로 실행
  //전달 받은 elem값으로 DOM요소 선택후 변수에 저장
  const el = document.querySelector(elem);
  //이미 변수에 저장해놓은 DOM요소의 텍스값을 찾아서 el_text라는 변수에 저장
  const el_text = el.innerText;

  //인라인요소사이의 간격 버그를 없애기 위해서 부모요소인 el에 font-size:0px을 스크립트로 자동 설정
  //css에서 설정하지 않고 굳이 스크립트로 처리하는 이유는 타 작업자가 까먹고 안하거나 내가 두번일하기 귀찮아서 자동화 처리한거임
  el.style.fontSize = "0px";
  //resultText라는 변수에는 앞으로 반복문을 통해 문자열로 반복돌릴 태그문자열 담길 빈 그릇
  let resultText = "";
  //counter라는 변수에는 앞으로 반복문을 통해 카운터 증가값을 담을 초기 변수(앞으로 값을 담을 빈 그릇)
  let counter = 0;

  //위에서 값을 담을 초기변수를 준비했으니
  //아래 for of 반복으로 반복처리 (for of는 문자열을 반복돌릴떄 사용)
  //el_text에 있는 전체 문자열이 자동으로 반복돌면서 아래 코드 블록안에 letter라는 변수로 글자 하나씩 반복처리됨
  for (let letter of el_text) {
    //미리 준비한 resultText란 빈 변수 그릇에 += 연산자로 다음과 같은 코드를 계속 쌓아나가면서 문자열을 완성
    //<span style='display:inline-block; tansition-delay: 0.2* counter>letter</span>
    resultText += `<${tag} style='display:inline-block; transition-delay:${
      //파라미터로 전달된 인터벌 간격 (0.2) * 반복문 내부적으로 증가시키는 카운터값
      //아래 코드로 각가의 span요소에 0s, 0.2s, 0.4s씩 증가되면 딜레이값 설정됨
      interval * counter++
      //최종적으로 반복도는 letter문자값을 <span></span>안쪽에 꽃아넣음
    }s'>${letter}</${tag}>`;
  }

  //위에 반복생성하며 최종 태그 문자열이 담긴 변수 resultText값을 el요소에 innerHTML로 꽃아넣음
  el.innerHTML = resultText;
}

//위에 정의된 함수를 토대로 splitText함수 호출
//이때 우리는 h1요소의 글자를 가지고 오도록 첫번째 인수 설정
//두번째 인수 span을 전달해서 h1안쪽에서 span으로 글자값이 감싸지도록 설정
//마지막으로 0.05를 전달해서 딜레이값이 0s,0.05s, 0.1s씩으로 인터벌 생기도록 설정
splitText("h1", "span", 0.05);
++++++++++++++++++++++++++++++++++++++++++++++++++ */