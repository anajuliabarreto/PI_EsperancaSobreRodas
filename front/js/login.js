document.querySelector("#login-submit").addEventListener("click", async function (event) {
    event.preventDefault();

    // Capturar os valores do formulário de login
    const emailUsuario = document.querySelector("#login-email").value;
    const senhaUsuario = document.querySelector("#login-senha").value;

    // Verificar se os campos estão preenchidos
    if (!emailUsuario || !senhaUsuario) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    try {
        // Fazer a requisição para a API
        const response = await fetch(`http://localhost:5156/api/Usuario/token?emailUsuario=${emailUsuario}&senhaUsuario=${senhaUsuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Processar a resposta da API
        if (response.ok) {
            const data = await response.json();

            // Armazenar o token no localStorage
            localStorage.setItem("authToken", data.token);

            alert("Login realizado com sucesso!");

            // Redirecionar para a tela de home
            window.location.href = "home.html"; // Substitua pelo caminho correto da sua tela de home
        } else {
            const errorData = await response.json();
            alert("Erro ao realizar login: " + (errorData.message || "Credenciais inválidas"));
            console.error("Erro:", errorData);
        }
    } catch (error) {
        alert("Ocorreu um erro ao se conectar com a API.");
        console.error("Erro:", error);
    }
});
