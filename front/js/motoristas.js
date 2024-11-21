document.addEventListener("DOMContentLoaded", () => {
    const motoristasTableBody = document.querySelector("#motoristas-table tbody");
    const addMotoristaBtn = document.getElementById("add-motorista-btn");

    const apiEndpoint = "http://localhost:5156/api/Motorista";

    async function fetchMotoristas() {
        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            // Atualiza a tabela de motoristas
            data.forEach((motorista) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${motorista.nomeMotorista}</td>
                    <td>${motorista.numeroPlaca}</td>
                    <td>${motorista.telefoneMotorista}</td>
                    <td>${motorista.numeroDocumentoMotorista}</td>
                    <td class="action-buttons">
                        <button class="btn-action update" data-id="${motorista.id}">Atualizar</button>
                        <button class="btn-action delete" data-id="${motorista.id}">Excluir</button>
                    </td>
                `;
                motoristasTableBody.appendChild(tr);
            });

            addEventListenersToButtons();
        } catch (error) {
            console.error("Erro ao buscar motoristas:", error);
            motoristasTableBody.innerHTML = "<tr><td colspan='5'>Erro ao carregar motoristas.</td></tr>";
        }
    }

    function addEventListenersToButtons() {
        const updateButtons = document.querySelectorAll(".btn-action.update");
        const deleteButtons = document.querySelectorAll(".btn-action.delete");

        updateButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const motoristaId = event.target.dataset.id;
                window.location.href = `/atualizar-motorista.html?id=${motoristaId}`;
            });
        });

        deleteButtons.forEach((button) => {
            button.addEventListener("click", async (event) => {
                const motoristaId = event.target.dataset.id;
                const confirmed = confirm("Deseja realmente excluir este motorista?");
                if (confirmed) {
                    try {
                        const response = await fetch(`${apiEndpoint}/${motoristaId}`, {
                            method: "DELETE",
                        });

                        if (response.ok) {
                            alert("Motorista excluído com sucesso!");
                            event.target.closest("tr").remove(); // Remove a linha da tabela
                        } else {
                            alert("Erro ao excluir motorista.");
                        }
                    } catch (error) {
                        console.error("Erro ao excluir motorista:", error);
                        alert("Erro ao excluir motorista.");
                    }
                }
            });
        });
    }

    addMotoristaBtn.addEventListener("click", () => {
        window.location.href = "/criar-motorista.html";
    });

    fetchMotoristas();
});
