document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-motorista-form");
    const cancelBtn = document.getElementById("cancel-btn");

    const motoristaEndpoint = "http://localhost:5156/api/Motorista";

    cancelBtn.addEventListener("click", () => {
        window.location.href = "/motoristas.html";
    });

    // Enviar o formulário
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            nomeMotorista: form.nomeMotorista.value,
            numeroPlaca: form.numeroPlaca.value,
            telefoneMotorista: form.telefoneMotorista.value,
            numeroDocumentoMotorista: form.numeroDocumentoMotorista.value,
            senhaMotorista: form.senhaMotorista.value,
        };

        try {
            const response = await fetch(motoristaEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Motorista criado com sucesso!");
                window.location.href = "/motoristas.html";
            } else {
                alert("Erro ao criar motorista.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Erro ao criar motorista.");
        }
    });
});
