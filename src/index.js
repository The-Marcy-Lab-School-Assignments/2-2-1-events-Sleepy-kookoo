const buttonClick = document.querySelector('#add-one')
const result = document.getElementById('results')

const clickCounterHandler = () => {
  let num = parseInt(result.textContent);
  num++;
  result.textContent = num;
};
buttonClick.addEventListener("click", clickCounterHandler)