// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");
  
    fetch("navbar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao carregar a navbar");
        }
        return response.text();
      })
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(error => {
        console.error("Erro:", error);
      });
  });

  document.addEventListener('copy', function(e) {
    // Texto a ser adicionado
    const additionalText = "\n\n I Copy and Past from Rent A Fridge Trailer Website";

    // Obtém a seleção atual
    let selectedText = window.getSelection().toString();

    // Cria um novo conteúdo para o clipboard
    let newText = selectedText + additionalText;

    // Usando o Clipboard API para definir o novo texto
    e.clipboardData.setData('text/plain', newText);
    e.preventDefault(); // Impede o comportamento padrão do clipboard
});
  