document.addEventListener("DOMContentLoaded", function () {
    // Verificar se o token está armazenado no localStorage
    const token = localStorage.getItem("authToken");

    if (!token) {
        // Se não houver token, redirecionar para a página de login
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "index.html"; // Ajuste o nome do arquivo de login se necessário
    } else {
        // Se houver token, exibir mensagem de boas-vindas
        const welcomeMessage = document.querySelector("#welcome-message");
        welcomeMessage.textContent = "Você está logado.";
    }

    // Logout
    const logoutBtn = document.querySelector("#logout-btn");
    logoutBtn.addEventListener("click", function () {
        // Remover o token e redirecionar para a página de login
        localStorage.removeItem("authToken");
        alert("Você foi deslogado.");
        window.location.href = "index.html"; // Ajuste o nome do arquivo de login se necessário
    });
});
