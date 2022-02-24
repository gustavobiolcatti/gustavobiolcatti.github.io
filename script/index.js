const botaoLightmode = document.querySelector(".footer__lightmode")
const html = document.querySelector("html")

botaoLightmode.addEventListener("click", () => {
    botaoLightmode.classList.toggle("footer__lightmode--ativo")
    html.classList.toggle("light-mode")
})