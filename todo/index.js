const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // 제출 후 자동 새로고침 방지

    if(input.value !== ''){ // 공백 제출 방지
        const li = document.createElement('li');
        li.innerText = input.value; // input에 입력한 값을 li로 만듦
        ul.appendChild(li); // ul 태그 안에 추가

        input.value = ''; // 제출 후 입력창 초기화
    }

});