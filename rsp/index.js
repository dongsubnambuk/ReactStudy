const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');
const result = ['가위', '바위', '보'];

const show = (user, computer, result) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
}

const game = (user, computer) => {
    let message;

    if(user === computer) {
        message = '무승부!';
        // console.log('무승부');
    }
    else {
        switch (user + computer) { // 텍스트 더하기는 텍스트 합치기
            case '가위보':
            case '바위가위':
            case '보바위':
                // console.log('사용자 승리');
                message = '사용자 승리!';
                break;
            case '보가위':
            case '가위바위':
            case '바위보':
                // console.log('컴퓨터 승리');
                message = '컴퓨터 승리!';
                break;
        }
    }

    show(user, computer, message);
};

const play = (event) => {
    const user = event.target.innerText; // 사용자가 선택한 값 반환
    const randomIndex = Math.floor(Math.random() * 3); // 0~2 랜덤 수
    const computer = result[randomIndex];
    game(user, computer);
};

buttons.forEach((button) => {
    button.addEventListener('click', play)
});