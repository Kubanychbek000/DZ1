//gmail.checker
const gmailInput = document.querySelector('#gmail_input');
const gmailCheck = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^(\w)+@gmail\.com$/;

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

// //move_block
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

function moveSquare() {
    if (positionX <446 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveSquare, 1);
    }
}

