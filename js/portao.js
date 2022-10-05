/*=== Abre e fecha o portão ===*/
function gateControl() {
  const btns = document.querySelectorAll('button')
  const imgs = document.querySelectorAll('img')
  const txts = document.getElementsByClassName('gate-text')

  console.log(txts)

  btns[2].addEventListener('click', function () {
    imgs[1].classList.remove('hide')
    txts[1].classList.remove('hide')
    imgs[0].classList.add('hide')
    txts[0].classList.add('hide')
  })

  btns[3].addEventListener('click', function () {
    imgs[0].classList.remove('hide')
    txts[0].classList.remove('hide')
    imgs[1].classList.add('hide')
    txts[1].classList.add('hide')
  })
}
gateControl()
