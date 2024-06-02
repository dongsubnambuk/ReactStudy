# JS공부

- 이전 강의는 얼추 아는 내용이라 생략

---

- 문자열, 배열을 학습하였음 그러나 내용이 너무 많아 구글링 활용

- forEach(실행할 함수-> 현재요소의 값을 의미하는 것을 필수로 요구함) -> 배열의 요소를 각각 함수로 실행시켜줌?

- map() -> 새로운 배열을 반환함

- 배열요소 검색

# 객체

- {키 : 값} 의 형태로 사용
  - 키와 값이 같을때 키값만 정해도 콘솔에는 전체 출력이 된다.
- 매소드
  - object.keys(객체명) - > 키이름 출력
    - object : 정적 매소드에서 사용 -> 객체를 생성 안해도 된다.

# DOM

- html요소에 조작하거나 추가 삭제를 하기 위함

- ID값 가져오기: `document.getElementById('id');`
- class 가져오기: `document.getElementsByClassName('class');`
- tag이름으로 요소 선택: `document.getElementsByTagName('tag');`

- 쿼리 선택: `document.querySelector(class)`
- 쿼리 선택: `document.querySelectorAll(class)` -> 다수의 요소를 배열처럼 가져올때 사용

> HTML변경방법:
> 변수명.innerText = "바꿀 값"

# 이벤트(동작이나 상태가 발생하는 것)

```JavaScript
const button = document.querySelector('button');

function handler(event){
    console.log(1)
}

//이벤트리스터 등록
// addEventListener 사용
button.addEventListener(이벤트 종류, 이벤트 행동);

//이번트리스터 삭제
//removeEventListener 사용
button.addEventListener(이벤트 종류, 이벤트 행동(함수))
```

# 모듈

- 코드를 모아둔 하나의 파일
- 그냥 `import`하는 것
  1. 선언부 내보내기 분리
     - 맨 하단에 `export default 함수명`
       > import 함수명 from 경로
  2. 이름이 정해진 내보내기
     - `export {함수명};`
       > import {함수명} from 경로

# 예제

1. todo예제

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form>
      <input type="text" placeholder="입력해라." />
      <button>등록</button>
    </form>
    <ul></ul>

    <script src="./inflearn.js"></script>
  </body>
</html>
```

```JavaScript
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit',(event)=> {
   event.preventDefault();

   if(input.value !=''){
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);

    input.value='';
   }
   else{
    console.log("입력해라");
   }
})
```
