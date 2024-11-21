document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("update-form");
    const cancelBtn = document.getElementById("cancel-btn");

    // Endpoint da API
    const token = localStorage.getItem("authToken");
    const apiEndpoint = "http://localhost:5156/api/Usuario";

    // Obter o ID do usuário da URL
    const params = new URLSearchParams(window.location.search);
    const usuarioId = params.get("id");

    if (!usuarioId) {
        alert("ID do usuário não fornecido.");
        window.location.href = "/usuarios.html"; // Redireciona para a lista de usuários
    }

    // Função para carregar os dados do usuário
    async function loadUsuario() {
        try {
            const response = await fetch(`${apiEndpoint}/${usuarioId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do usuário.");
            }
            const usuario = await response.json();

            // Preencher os campos do formulário
            document.querySelector("#nome").value = usuario.nomePaciente;
            document.querySelector("#email").value = usuario.emailUsuario;
        } catch (error) {
            console.error(error);
            alert("Erro ao carregar os dados do usuário.");
            window.location.href = "/usuarios.html"; // Redireciona para a lista de usuários
        }
    }

    // Função para enviar as alterações
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const updatedData = {
            nomePaciente: document.querySelector("#nome").value,
            emailUsuario: document.querySelector("#email").value,
            senhaUsuario: document.querySelector("#senha").value || undefined, // Atualiza senha apenas se preenchida
        };

        try {
            const response = await fetch(`${apiEndpoint}/${usuarioId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                alert("Usuário atualizado com sucesso!");
                window.location.href = "/usuarios.html"; // Redireciona para a lista de usuários
            } else {
                const errorData = await response.json();
                alert("Erro ao atualizar usuário: " + (errorData.message || "Erro desconhecido"));
                console.error("Erro:", errorData);
            }
        } catch (error) {
            alert("Ocorreu um erro ao se conectar com a API.");
            console.error("Erro:", error);
        }
    });

    // Botão Cancelar
    cancelBtn.addEventListener("click", () => {
        window.location.href = "/usuarios.html"; // Redireciona para a lista de usuários
    });

    // Carregar os dados do usuário ao abrir a página
    loadUsuario();
});
