const botaoLightmode = document.querySelector(".footer__lightmode")
const botaoVoltarTopo = document.getElementById("footer__voltar-topo")
const html = document.querySelector("html")

botaoLightmode.addEventListener("click", () => {
    botaoLightmode.classList.toggle("footer__lightmode--ativo")
    botaoVoltarTopo.classList.toggle("footer__voltar-topo--ativo")
    html.classList.toggle("light-mode")
})