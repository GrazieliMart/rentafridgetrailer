// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("footer-container");
  
    fetch("footer.html")
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
  