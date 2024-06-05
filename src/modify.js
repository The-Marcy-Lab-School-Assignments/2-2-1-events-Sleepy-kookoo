/** FEEDBACK: Great job getting all test cases to pass! I do want to push you to use the runner function! */
const buttonClick = document.querySelector('#click-button')
const clickCounterHandler = () => {
  let num = buttonClick.dataset.clicks;
  num++;
  buttonClick.dataset.clicks = num;

  if (num === 1) {
    buttonClick.textContent = `I've been clicked ${num} time.`;
  } else {
    buttonClick.textContent = `I've been clicked ${num} times!`;
  }
};
buttonClick.addEventListener("click", clickCounterHandler)

const key = document.querySelector("#keydown-tracker")
const handleKeydown = (e) => {
  const keyPressed = e.code
  if (keyPressed === ' ') {
    key.textContent = `You pressed Space`
  } else if (keyPressed === 'Enter') {
    key.textContent = `You pressed Enter`
  } else {
    key.textContent = `You pressed ${e.code}`
  }
};
document.body.addEventListener("keydown", handleKeydown)

const secondClick = document.querySelector('#inline-example')
const clickCounterHandler2 = () => {
  let num = secondClick.dataset.clicks;
  num++;
  secondClick.dataset.clicks = num;

  if (num === 1) {
    secondClick.textContent = `I've been clicked ${num} time.`
  } else {
    secondClick.textContent = `I've been clicked ${num} times!`
  }
};
secondClick.addEventListener("click", clickCounterHandler2)

const delegationContainer = document.querySelector('#delegation');
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.matches('#up')) resultSpan.textContent = "Up";
  if (event.target.matches('#left')) resultSpan.textContent = "Left";
  if (event.target.matches('#middle')) resultSpan.textContent = "Middle";
  if (event.target.matches('#right')) resultSpan.textContent = "Right";
  if (event.target.matches('#down')) resultSpan.textContent = "Down";
};
delegationContainer.addEventListener('click', handleDelegation);

const numButton = document.querySelector('#add-random-num');
const addNewRandomNumber = () => {
  const location = document.getElementById('random-numbers');
  const list = document.createElement("li")
  list.textContent = Math.floor(Math.random() * 100)
  location.append(list);
};
numButton.addEventListener("click", addNewRandomNumber)

const removeItem = document.querySelector('#remove')
const removeDelegator = () => {
  delegationContainer.removeEventListener("click", handleDelegation)
}
removeItem.addEventListener("click", removeDelegator)

//Not needed
// const main = () => {

// };

// main();
