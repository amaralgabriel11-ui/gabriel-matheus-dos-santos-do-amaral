// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Lógica do Modo Escuro / Claro
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        // Alterna a classe 'dark-mode' no corpo da página
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto do botão baseado no estado atual
        if (document.body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "Modo Claro";
        } else {
            themeToggleBtn.textContent = "Modo Escuro";
        }
    });

    // 2. Lógica do Botão de Interação
    const jsButton = document.getElementById("js-button");
    const jsMessage = document.getElementById("js-message");

    const frases = [
        "Olá! O JavaScript está funcionando perfeitamente! 🚀",
        "Você sabia? O JavaScript roda direto no seu navegador sem precisar de instaladores.",
        "Dica: Pressione F12 no teclado para abrir o console de desenvolvedor!",
        "Código limpo é código feliz! ✨"
    ];

    jsButton.addEventListener("click", () => {
        // Escolhe uma frase aleatória do array
        const randomIndex = Math.floor(Math.random() * frases.length);
        
        // Exibe a mensagem e remove a classe 'hidden' para torná-la visível
        jsMessage.textContent = frases[randomIndex];
        jsMessage.classList.remove("hidden");
    });
});