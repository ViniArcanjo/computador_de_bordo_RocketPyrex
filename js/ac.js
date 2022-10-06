let temperatura = document.getElementById('temp')
const btns = document.querySelectorAll('button')

temperatura.value = parseInt(17)

btns[2].addEventListener('click', () => {
  if (temperatura.value < 28) {
    temperatura.value += 1
    temperatura.innerHTML = `${temperatura.value} &#8451;`
  }
})

btns[3].addEventListener('click', () => {
  if (temperatura.value > 17) {
    temperatura.value -= 1
    temperatura.innerHTML = `${temperatura.value} &#8451;`
  }
})
