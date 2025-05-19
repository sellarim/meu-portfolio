//Marca no menu onde o usuário está
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

//Boas vindas
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessageKey = "welcomeMessageShown";

    // Verifica se a mensagem já foi exibida
    if (!localStorage.getItem(welcomeMessageKey)) {
        alert("Bem-vindo ao meu portfólio! Fique à vontade para explorar.");
        localStorage.setItem(welcomeMessageKey, "true");
    }
});

//Verifica o que foi inserido no formulário de contato
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (e) => {
        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensagem = document.querySelector("#mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            e.preventDefault();
        } else {
            alert("Mensagem enviada com sucesso!");
        }
    });
});