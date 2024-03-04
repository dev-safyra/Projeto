function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // a seguir, um modo mais complexo de fazer...
  // o que fizemos acima
  // if (html.classList.contains('light')){
  // html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // agora iremos pegar a tag img
  // substituir a imagem, sendo...
  // se estiver light mode, adicionar a imagem light
  // se não estiver no light mode, manter
  // a imagem normal

  const img = document.querySelector("#profile img")
    if(html.classList.contains("light")) {
     img.setAttribute("src", "./assets/avatar-light.png")
  } else {
     img.setAttribute("src", "./assets/avatar.png")
  }
}
