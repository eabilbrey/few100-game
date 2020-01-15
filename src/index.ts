
import './styles.css';
import { getRandomInt } from './math'

//1. find the valuable things!


const secretNumber = getRandomInt(1, 9);

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;


let currentSquare = 1;
squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    const isWinner = that.dataset.secret === 'true';
    if (isWinner) {
        that.classList.add('winner');
    } else {
        that.classList.add('loser');
    }
    that.removeEventListener('click', handleClick);
}

// once you win, all the other guesses should be marked as losers.
// maybe make a play again button that resets everything.
// if you win, display a message telling them how awesome they are!
// if you lose (you picked every one but the winner), you should be told that you lose. 