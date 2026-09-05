function toggleMode() {
  const html = document.documentElement
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  html.classList.toggle("light")
  //pegar a imagem
  const img = document.querySelector("#profile img ")
  // substituir a imgame
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
