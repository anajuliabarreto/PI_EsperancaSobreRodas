
document.querySelector("#signup-submit").addEventListener("click", async function (event) {
    event.preventDefault();

    // Capturar valores dos campos
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    // Criar objeto com os dados do usuário
    const userData = {
        nomePaciente: nome,
        emailUsuario: email,
        senhaUsuario: senha,
    };

    try {
        // Enviar dados para a API
        const response = await fetch("http://localhost:5156/api/Usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        // Processar resposta da API
        if (response.ok) {
            const data = await response.json();
            alert("Usuário cadastrado com sucesso!");
            console.log("Resposta da API:", data);

            body.className = "sign-in-js"; 
        } else {
            const errorData = await response.json();
            alert("Erro ao cadastrar usuário: " + (errorData.message || "Erro desconhecido"));
            console.error("Erro:", errorData);
        }
    } catch (error) {
        alert("Ocorreu um erro ao se conectar com a API.");
        console.error("Erro:", error);
    }
});
