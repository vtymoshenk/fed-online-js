function random() {
  const num = Math.floor(Math.random()*3) + 1;
    if (num == 1) {
      return 'rock'
    } else if (num == 2) {
        return 'paper';
    } else {
        return 'scissors';
  }
}

const userChoice = prompt('Type rock, paper or scissors').toLowerCase();
const computerChoice = random();
alert(`computer choise was  ${computerChoice}`);
if (userChoice === computerChoice) {
    alert('Draw')
} else if ((userChoice === "paper" && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'rock' && computerChoice==='scissors' )) {
    alert('you won');
} else {
    alert('computer won')
}