// // Part1

// let hi ;
// hi = 'amy'; // 변수 선언

// hi = '안녕하세요'
// // let hi = '안녕하세요' -> 불가
// // let은 같은 이름으로 또 선언하는 '재할당' 불가


// const hello = '안녕하세요'; // 상수 선언
// // hello = 123123; -> 상수는 값을 변경하거나 재할당 불가
// // const hello; -> 초기화 없이 선언 불가

// console.log(hi);
// console.log(hello);

// // const 자주 사용 권장
// // var는 const와 let으로 대체됨(var는 중복될 때 에러코드를 발생하지 않고 넘어가서 에러의 확인이 안 됨)


// const age = 20;
// const job = '개발자';

// const msg = '저는 ' + job + '이고, ' + age + '살 입니다.';
// const msg2 = `저는 ${job}이고, ${age}살 입니다.`;

// console.log(msg);
// console.log(msg2);

// // ''과 ""는 같음
// // ``은 백틱으로 부르며, 문자열에 변수를 포함시킬 수 있다.

// // undefined는 변수가 선언되었지만 값이 할당(초기화)이 되지 않았을 때 발생



// // 객체

// const obj = {
//     name: 'amy',
//     job: '개발자',
// }

// const obj2 = {
//     name: 'amy',
//     job: '개발자',
//     something: {
//         name: 'john',
//         job: '학생',
//     } // 객체 안에 객체 가능
// }

// console.log(obj.name);
// console.log(obj['name']);
// // 출력 값은 amy로 같음
// // 일반적으로 .을 자주 사용함



// // 연산

// // == : 추상 비교(값이 같은지 확인)
// // === : 엄격 비교(값과 타입도 같은지 확인)
// // (!)== : 양 변이 같은지 확인


// // 삼항 연산자
// // 조건 ? 참일 때 실행 : 거짓일 때 실행
// console.log(2 < 3 ? "참" : "거짓"); // "참"


// // 널리쉬(널 병합 연산자)
// // '??'로 사용
// // 여러 개의 피연산자 중 갑이 확정되어 있는 변수를 찾음
// const a = undefined;
// const b = null;
// const c = 'amy';

// console.log(a ?? b ?? c); // amy(c)
// // 값이 지정되어 있는 변수(c)를 선택


// // 전개구분(...)
// // 반복이 가능한 객체에 적용할 수 있는 문법
// // 배열이나 객체와 같이 안에 있는 요소들을 모두 전개(꺼내서 펼침)함
// const numbers = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// console.log(numbers); // [1, 2, 3]
// console.log(...numbers); // 1, 2, 3

// const numbers3 = [...numbers, ...numbers2]; // [1, 2, 3, 4, 5, 6]



// // Part2
// // if, switch, for, while



// // Part3
// // 함수

// function bok(main) {
//     console.log(`${main} 볶음밥`);
// }

// bok('새우'); // 새우 볶음밥
// bok('제육'); // 제육 볶음밥

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(10); // NaN(Not a Number) -> b는 undefined로 결정
// // 이와 같이 인자(파라미터)의 개수가 적어도 에러 발생 X

// sum(10, 20, 30); // 인자가 더 많지만 에러 발생 X

// function sum1(a, b) {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }

// sum1(10, 20, 30); // arguments를 통해 인자가 요구보다 많을 경우에도 접근 가능


// // 나머지 인자(Rest Parameter)
// function print(a, b, ...Rest) {
//     console.log(a);
//     console.log(b);
//     console.log(...Rest);
// }

// print(10, 20, 30, 40, 50, 60, 70); // 10 20 [30, 40, 50, 60, 70]
// // 2개를 제외한 나머지 인자들은 ...Rest를 통해 배열의 형태로 출력됨


// // 함수의 표현식
// const sum3 = function (a, b) {
//     console.log(a + b);
// } // function 뒤에 함수 이름 없음(변수명 = 함수명)

// sum3(10, 20); // 30


// // 화살표 함수
// const sum4 = (a, b) => console.log(a + b);

// //const sum4 = (a, b) => a + b;
// // 함수가 한 줄에 중괄호가 없으면 return이 생략되어 있음 -> 아닐 경우는 return을 따로 명시해야함

// //const sum4 = a => a + b; // 인자가 하나일 때는 이렇게 괄호없이도 사용 가능

// //const sum4 = () => 10; // 인자가 없을 때는 괄호 필요



// // 문자열 메소드

// const str = '   Hello World!   ';

// console.log(str.toUpperCase()); // 문자열 모두 대문자로 변결
// console.log(str.toLowerCase()); // 문자열 모두 소문자로 변경

// console.log(str.trim()); // 문자열의 앞 뒤 공백을 없앰
// console.log(str.trimStart()); // 문자열 앞 공백 없앰
// console.log(str.trimEnd()); // 문자열 뒤 공백 없앰

// console.log(str.repeat(3)); // 문자열을 n번 반복 출력(원본 변화 x)
// console.log(str.padStart(10, '-')); // 문자열 앞에 -를 10개 추가
// console.log(str.padEnd(5, '-')); // 문자열 뒤에 -를 10개 추가


// const str2 = '안녕하세요. 이룸코딩입니다!';

// console.log(str2.indexOf("이룸")); // 문자열에서 해당 문자가 시작되는 위치를 알 수 있음 -> 7, 문자가 없으면 -1 반환
// console.log(str2.includes("이룸")); // 문자열에 해당 문자가 존재하는 지 확인 -> 있으면 true, 없으면 false

// console.log(str2.startsWith('안녕')); // 해당 문자로 시작하는 지 확인 -> true, false
// console.log(str2.endsWith('안녕')); // 해당 문자로 끝나는 지 확인 -> true, false

// console.log(str2.replace('이룸코딩', '개발자')); // 문자열을 교체함(해당되는 문자열이 여러개라면 첫 번쨰만 교체함)
// //console.log(str2,replaceAll('이룸코딩', '개발자')); // 해당 되는 모든 문자열을 교체

// console.log(str2.substring(0, 6)); // 시작 인덱스부터 종료인덱스 바로 전까지 출력 -> 안녕하세요.

// console.log(str2.split(' ')); // 문자열을 구분자로 나눠서 배열 형태로 출력 -> ['안녕하세요.', '개발자 입니다.']
// console.log(str2.slice(3, 5)); // 3~4번 위치에 있는 문자열을 출력 -> 세요. 음수 인덱스도 사용가능



// // 배열 메소드

// const arr = [1, 2, 3, 4, 5];

// arr.push(6); // 배열의 뒤에 추가
// console.log(arr);

// arr.pop(); // 마지막 배열 인자를 출력하고 삭제
// console.log(arr);

// arr.unshift(0); // 배열의 앞에 추가
// console.log(arr);

// arr.shift(); // 첫 번째 배열 인자를 출력하고 삭제
// console.log(arr);

// const print = (number, index) => {
//     console.log(`${index} 위치의 요소 : ${number}`);
// }

// arr.forEach(print); // 함수를 사용해서 배열의 인덱스 별로 하나씩 실행. 새로운 배열을 반환하지 않음

// arr.map(print); // 새로운 배열로 반환함

// console.log(arr.find((number) => number > 3)); // 3보다 큰 수 중 가장 첫 번째 요소를 찾음 -> 4

// console.log(arr.findIndex((number) => number > 3)); // 3보다 큰 수 중 가장 첫 번째 요소의 위치를 찾음 -> 3(4의 인덱스)

// arr.fill(10); // 배열의 요소들을 모두 10으로 바꿈
// console.log(arr);

// arr.fill(10, 1, 3); // 위치를 지정할 수도 있음 -> 1~2까지 10으로
// console.log(arr);

// console.log(arr.slice(2, 1, 999)); // 2번 인덱스 부터 1개의 요소를 999로 변경

// console.log(arr.join(' ')); // 배열의 모든 요소들을 이어 붙여서 하나의 문자열로 만듦(지정한 문자가 없으면 쉼표가 추가됨)

// console.log(arr.concat(arr)); // 배열의 뒤에 다른 배열의 요소들을 추가함

// console.log(arr.filter((number) => number > 3)); // 3보다 큰 수들만 남게 함

// const reducer = (acc, value) => acc + value;
// console.log(arr.reduce(reducer)); // reducer라는 함수와 누산기와 현재 요소의 값을 필요로 함. 1부터 5까지의 총 합을 출력함
// console.log(arr.reduce(reducer, 10)); // 초기값 설정도 가능 10을 더함



// // 객체 심화

// const obj = {
//     x: 1,
//     y: 2,
//     z: 3,
// }

// for (key in obj) {
//     console.log(key);
// } // 객체의 키값을 모두 돌며 출력

// const name = 'son';
// const country = 'KR';

// const user = {
//     name: name,
//     country: country
// } // 이 방식과 아래의 방식이 결과 같음

// const user2 = {
//     name,
//     country
// }

// const obj = {
//     greeting() {
//         console.log('Hi');
//     }, // 객체 안에 함수 생성 가능
// };

// obj.greeting(); // 객체 안에 함수 호출 가능

// console.log(Object.keys(obj)); // 객체의 모든 키 값을 배열로 출력
// console.log(Array.isArray(obj)); // 배열인지 확인
// console.log(Object.values(obj)); // 객체의 모든 값들을 배열로 출력
// console.log(Object.entries(obj)); // 객체의 키와 값을 배열 형태로 출력



// // 구조분해할당

// const arr = [1, 2, 3, 4, 5];

// const [one, two, three] = arr; // one, two, three에 arr의 값을 할당함


// const obj = {
//     x: 10,
//     y: 20,
// };

// const {x, y} = obj; // x에 10, y에 20 할당

// const { x: hello, y: world} = obj; // hello에 10, world에 20 할당


// const obj = {
//     one: {
//         two: {
//             three: 'Bingo',
//         },
//     },
// };

// const bingo = obj.one.two.three;
// console.log(bingo);

// const {one: {two: {three}}} = obj;
// console.log(three); // Bingo


// const obj = {
//     x: 10,
//     y: 20,
// };

// function sum(obj) {
//     return obj.x + obj.y;
// }

// function sum1({x, y}) {
//     return x + y;
// }

// function sum2({x : hello, y : world}) {
//     return hello + world;
// }

// console.log(sum(obj));
// console.log(sum1(obj));
// console.log(sum2(obj));


// let a = 123;
// let b = 456;
// let temp = a;

// [a, b] = [b, a]; // 스왑

// const arr = [1, 2, 3, 4, 5];

// const [one, , three, , five] = arr; // 건너뛰어 할당 가능

// const [one, two, ...others] = arr; // 나머지는 배열로 할당

// console.log(one, two, others);