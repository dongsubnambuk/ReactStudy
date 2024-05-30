// Part1

let hi ;
hi = 'amy'; // 변수 선언

hi = '안녕하세요'
// let hi = '안녕하세요' -> 불가
// let은 같은 이름으로 또 선언하는 '재할당' 불가


const hello = '안녕하세요'; // 상수 선언
// hello = 123123; -> 상수는 값을 변경하거나 재할당 불가
// const hello; -> 초기화 없이 선언 불가

console.log(hi);
console.log(hello);

// const 자주 사용 권장
// var는 const와 let으로 대체됨(var는 중복될 때 에러코드를 발생하지 않고 넘어가서 에러의 확인이 안 됨)


const age = 20;
const job = '개발자';

const msg = '저는 ' + job + '이고, ' + age + '살 입니다.';
const msg2 = `저는 ${job}이고, ${age}살 입니다.`;

console.log(msg);
console.log(msg2);

// ''과 ""는 같음
// ``은 백틱으로 부르며, 문자열에 변수를 포함시킬 수 있다.

// undefined는 변수가 선언되었지만 값이 할당(초기화)이 되지 않았을 때 발생



// 객체

const obj = {
    name: 'amy',
    job: '개발자',
}

const obj2 = {
    name: 'amy',
    job: '개발자',
    something: {
        name: 'john',
        job: '학생',
    } // 객체 안에 객체 가능
}

console.log(obj.name);
console.log(obj['name']);
// 출력 값은 amy로 같음
// 일반적으로 .을 자주 사용함



// 연산

// == : 추상 비교(값이 같은지 확인)
// === : 엄격 비교(값과 타입도 같은지 확인)
// (!)== : 양 변이 같은지 확인


// 삼항 연산자
// 조건 ? 참일 때 실행 : 거짓일 때 실행
console.log(2 < 3 ? "참" : "거짓"); // "참"


// 널리쉬(널 병합 연산자)
// '??'로 사용
// 여러 개의 피연산자 중 갑이 확정되어 있는 변수를 찾음
const a = undefined;
const b = null;
const c = 'amy';

console.log(a ?? b ?? c); // amy(c)
// 값이 지정되어 있는 변수(c)를 선택


// 전개구분(...)
// 반복이 가능한 객체에 적용할 수 있는 문법
// 배열이나 객체와 같이 안에 있는 요소들을 모두 전개(꺼내서 펼침)함
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

console.log(numbers); // [1, 2, 3]
console.log(...numbers); // 1, 2, 3

const numbers3 = [...numbers, ...numbers2]; // [1, 2, 3, 4, 5, 6]



// Part2
// if, switch, for, while



// Part3
// 함수

function bok(main) {
    console.log(`${main} 볶음밥`);
}

bok('새우'); // 새우 볶음밥
bok('제육'); // 제육 볶음밥

function sum(a, b) {
    console.log(a + b);
}

sum(10); // NaN(Not a Number) -> b는 undefined로 결정
// 이와 같이 인자(파라미터)의 개수가 적어도 에러 발생 X

sum(10, 20, 30); // 인자가 더 많지만 에러 발생 X

function sum1(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

sum1(10, 20, 30); // arguments를 통해 인자가 요구보다 많을 경우에도 접근 가능


// 나머지 인자(Rest Parameter)
function print(a, b, ...Rest) {
    console.log(a);
    console.log(b);
    console.log(...Rest);
}

print(10, 20, 30, 40, 50, 60, 70); // 10 20 [30, 40, 50, 60, 70]
// 2개를 제외한 나머지 인자들은 ...Rest를 통해 배열의 형태로 출력됨


// 함수의 표현식
const sum3 = function (a, b) {
    console.log(a + b);
} // function 뒤에 함수 이름 없음(변수명 = 함수명)

sum3(10, 20); // 30


// 화살표 함수
const sum4 = (a, b) => console.log(a + b);

//const sum4 = (a, b) => a + b;
// 함수가 한 줄에 중괄호가 없으면 return이 생략되어 있음 -> 아닐 경우는 return을 따로 명시해야함

//const sum4 = a => a + b; // 인자가 하나일 때는 이렇게 괄호없이도 사용 가능

//const sum4 = () => 10; // 인자가 없을 때는 괄호 필요