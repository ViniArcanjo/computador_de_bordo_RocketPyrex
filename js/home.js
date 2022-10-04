const zeroFill = n => {
  return ('0' + n).slice(-2)
}

const interval = setInterval(() => {
  const now = new Date()

  const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes())

  document.getElementById('data-hora').innerHTML = dataHora
}, 1000)
