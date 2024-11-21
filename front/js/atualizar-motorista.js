document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("update-motorista-form");
    const cancelBtn = document.getElementById("cancel-btn");

    const motoristaEndpoint = "http://localhost:5156/api/Motorista";

    // Obter o ID do motorista da URL
    const params = new URLSearchParams(window.location.search);
    const motoristaId = params.get("id");

    if (!motoristaId) {
        alert("ID do motorista não fornecido.");
        window.location.href = "/"; // Redireciona para a página inicial
    }

    // Função para carregar os dados do motorista
    async function loadMotorista() {
        try {
            const response = await fetch(`${motoristaEndpoint}/${motoristaId}`);
            
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do motorista.");
            }

            const motorista = await response.json();

            // Preencher os campos do formulário
            form.nomeMotorista.value = motorista.nomeMotorista;
            form.numeroPlaca.value = motorista.numeroPlaca;
            form.telefoneMotorista.value = motorista.telefoneMotorista;
            form.numeroDocumentoMotorista.value = motorista.numeroDocumentoMotorista;
        } catch (error) {
            console.error(error);
            alert("Erro ao carregar os dados do motorista.");
            window.location.href = "/"; // Redireciona para a página inicial
        }
    }

    // Função para atualizar os dados do motorista
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const updatedData = {
            nomeMotorista: form.nomeMotorista.value,
            numeroPlaca: form.numeroPlaca.value,
            telefoneMotorista: form.telefoneMotorista.value,
            numeroDocumentoMotorista: form.numeroDocumentoMotorista.value,
        };

        try {
            const response = await fetch(`${motoristaEndpoint}/${motoristaId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                alert("Motorista atualizado com sucesso!");
                window.location.href = "/motoristas.html"; // Redireciona para a página inicial
            } else {
                throw new Error("Erro ao atualizar motorista.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar motorista.");
        }
    });

    // Cancelar e voltar à página inicial
    cancelBtn.addEventListener("click", () => {
        window.location.href = "/motoristas.html";
    });

    // Carregar os dados do motorista ao abrir a página
    loadMotorista();
});
