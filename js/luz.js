/*=== Liga e Desliga a Luz ===*/
function eletroPaulo() {
  const light = document.getElementById('light')
  const btns = document.querySelectorAll('button')

  btns[2].addEventListener('click', function () {
    light.classList.remove('off')
    light.classList.add('on')
  })

  btns[3].addEventListener('click', function () {
    light.classList.remove('on')
    light.classList.add('off')
  })
}
eletroPaulo()

/*=== Color Picker Handler ===*/
function colorPicker() {
  const rangeInput = document.querySelector('.js-range-input')
  const output = document.querySelector('.js-range-output')
  const root = document.documentElement

  rangeInput.addEventListener('input', function () {
    setHue()
  })

  function setHue() {
    output.value = rangeInput.value + '°'
    root.style.setProperty('--hue', rangeInput.value)
  }

  function setDefaultState() {
    rangeInput.focus()
    setHue()
  }

  document.addEventListener('DOMContentLoaded', function () {
    setDefaultState()
  })
}
colorPicker()
