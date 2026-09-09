// ========================================
// MENU MOBILE
// ========================================

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fecha o menu quando clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ========================================
// WHATSAPP
// ========================================

// IMPORTANTE:
// Troque pelo número real do seu amigo.
// Use o código do Brasil +55
// Exemplo:
// 5511999999999

const whatsappNumber = "5511999999999";


// ========================================
// BOTÃO PRINCIPAL
// ========================================

const whatsappButton =
    document.getElementById("whatsapp-button");

if (whatsappButton) {

    whatsappButton.addEventListener("click", (event) => {

        event.preventDefault();

        const message =
            "Olá! Gostaria de conhecer os panetones da Panetone Casadivó.";

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

}


// ========================================
// BOTÃO FLUTUANTE
// ========================================

const floatingWhatsapp =
    document.getElementById("floating-whatsapp");

if (floatingWhatsapp) {

    floatingWhatsapp.addEventListener("click", (event) => {

        event.preventDefault();

        const message =
            "Olá! Gostaria de fazer um pedido de panetone.";

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

}


// ========================================
// WHATSAPP DOS PRODUTOS
// ========================================

const productButtons =
    document.querySelectorAll(".whatsapp-product");

productButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const product =
            button.getAttribute("data-product");

        const message =
            `Olá! Gostaria de pedir o ${product}.`;

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});


// ========================================
// WHATSAPP DO FOOTER
// ========================================

const footerWhatsapp =
    document.getElementById("footer-whatsapp");

if (footerWhatsapp) {

    footerWhatsapp.addEventListener("click", (event) => {

        event.preventDefault();

        const message =
            "Olá! Gostaria de falar com a Panetone Casadivó.";

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

}