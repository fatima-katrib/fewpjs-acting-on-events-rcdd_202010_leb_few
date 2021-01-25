// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(key) {
  if (key.which === 39) {
    moveDodgerRight()}