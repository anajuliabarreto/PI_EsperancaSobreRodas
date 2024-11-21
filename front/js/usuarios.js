document.addEventListener("DOMContentLoaded", () => {
    const usuariosTableBody = document.querySelector("#usuarios-table tbody");
    const addUsuarioBtn = document.getElementById("add-usuario-btn");

    const apiEndpoint = "http://localhost:5156/api/Usuario";

    // Função para buscar usuários
    async function fetchUsuarios() {
        try {
            const token = localStorage.getItem("authToken");
            const response = await fetch(apiEndpoint, { headers: { Authorization: `Bearer ${token}` } });
            const data = await response.json();

            // Atualiza a tabela de usuários
            data.forEach((usuario) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${usuario.nomePaciente}</td>
                    <td>${usuario.emailUsuario}</td>
                    <td class="action-buttons">
                        <button class="btn-action update" data-id="${usuario.id}">Atualizar</button>
                        <button class="btn-action delete" data-id="${usuario.id}">Excluir</button>
                    </td>
                `;
                usuariosTableBody.appendChild(tr);
            });

            addEventListenersToButtons();
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            usuariosTableBody.innerHTML = "<tr><td colspan='5'>Erro ao carregar usuários.</td></tr>";
        }
    }

    // Função para adicionar eventos aos botões de ação
    function addEventListenersToButtons() {
        const updateButtons = document.querySelectorAll(".btn-action.update");
        const deleteButtons = document.querySelectorAll(".btn-action.delete");

        // Atualizar usuário
        updateButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const usuarioId = event.target.dataset.id;
                window.location.href = `/atualizar-usuario.html?id=${usuarioId}`;
            });
        });

        // Excluir usuário
        deleteButtons.forEach((button) => {
            button.addEventListener("click", async (event) => {
                const usuarioId = event.target.dataset.id;
                const confirmed = confirm("Deseja realmente excluir este usuário?");
                if (confirmed) {
                    try {
                        const token = localStorage.getItem("authToken");

                        const response = await fetch(`${apiEndpoint}/${usuarioId}`, {
                            method: "DELETE",
                            headers: { Authorization: `Bearer ${token}` },
                        });

                        if (response.ok) {
                            alert("Usuário excluído com sucesso!");
                            event.target.closest("tr").remove(); // Remove a linha da tabela
                        } else {
                            alert("Erro ao excluir usuário.");
                        }
                    } catch (error) {
                        console.error("Erro ao excluir usuário:", error);
                        alert("Erro ao excluir usuário.");
                    }
                }
            });
        });
    }

    // Redirecionar para página de criação de usuários
    addUsuarioBtn.addEventListener("click", () => {
        window.location.href = "/criar-usuario.html";
    });

    // Carregar usuários
    fetchUsuarios();
});
