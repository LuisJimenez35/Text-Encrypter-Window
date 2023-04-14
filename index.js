const input = document.querySelector('#textarea1')
const results = document.querySelector('#textarea2')
const warningSection = document.querySelector('#warningSection')
const resultsSection = document.querySelector('#resultsSection')

const DICTIONARY = {
  e: 'enter',
  i: 'imes',
  o: 'ober',
  a: 'ai',
  u: 'ufat'
}

// ESCUCHAR EL EVENTO DE CLICK
const handleClick = (type) => {
  const inputValue = input.value

  const newText = encryptDecrypt(inputValue, type)
  showResults(newText)
}

// ENCRIPTAR O DESENCRIPTAR TEXTO
const encryptDecrypt = (text, type) => {
  for (const key in DICTIONARY) {

    if (type === 'secret') {
      text = text.replace(new RegExp(key, 'g'), DICTIONARY[key])
    } else {
      text = text.replace(new RegExp(DICTIONARY[key], 'g'), key)
    }
  }
  return text
}

const showResults = (text) => {
  results.value = text
  warningSection.classList.toggle('novisible', !!text)
  resultsSection.classList.toggle('novisible', !text)
}

const copyText = () => {
  navigator.clipboard.writeText(results.value)

  // ** cambiar estilos del boton
  copyButton.innerText = 'Copiado'
  copyButton.classList.add('button--copy')
  setTimeout(() => {
    copyButton.innerText = 'Copiar'
    copyButton.classList.remove('button--copy')
  }, 1000)
}
