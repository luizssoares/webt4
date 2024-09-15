document.getElementById("formulario").addEventListener("submit", async (event) => {
    event.preventDefault();
    const numeroDeParagrafos = document.getElementById("paragrafos").value;
    const response = await fetch(`/generate?num=${numeroDeParagrafos}`);
    const conteudo = await response.text();
    document.getElementById("textoGerado").innerHTML = conteudo;
});
