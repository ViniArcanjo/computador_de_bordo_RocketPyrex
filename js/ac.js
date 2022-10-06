let temperatura = document.getElementById('temp')
const btns = document.querySelectorAll('button')

function acHandler() {
  function controlAC() {
    btns[5].addEventListener('click', () => {
      btns[5].classList.add('hide')
      btns[6].classList.remove('hide')
    })

    btns[6].addEventListener('click', () => {
      btns[6].classList.add('hide')
      btns[5].classList.remove('hide')
    })
  }
  controlAC()

  function controlTemperature() {
    temperatura.value = parseInt(17)

    btns[2].addEventListener('click', () => {
      if (temperatura.value > 17) {
        temperatura.value -= 1
        temperatura.innerHTML = `${temperatura.value} &#8451`
      }
    })

    btns[3].addEventListener('click', () => {
      if (temperatura.value < 28) {
        temperatura.value += 1
        temperatura.innerHTML = `${temperatura.value} <span>&#8451</span>`
      }
    })

    temperatura.style.setProperty('font', "500 4rem 'Roboto', sans-serif")
  }
  controlTemperature()

  function controlMode() {
    const modo = document.getElementById('mode-txt')
    modeList = ['AUTO', 'COLL', 'DRY', 'HEAT', 'FAN']
    n = 0

    btns[4].addEventListener('click', () => {
      if (n < 4) {
        modo.innerHTML = `${modeList[(n += 1)]}`
      } else {
        n = 0
      }
    })
  }
  controlMode()

  function controlSwing() {
    const on = document.getElementById('swing-text-on')
    const off = document.getElementById('swing-text-off')

    btns[7].addEventListener('click', () => {
      off.classList.toggle('hide')
      on.classList.toggle('hide')
    })
  }
  controlSwing()
}
acHandler()
