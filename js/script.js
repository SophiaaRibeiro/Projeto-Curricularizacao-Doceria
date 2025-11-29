function trocarImagem(img) {
    const main = document.getElementById("mainImage");
    main.src = img.src;
}

/// evento para mostrar o botão ao rolar a página
window.addEventListener("scroll", function() {
    const btn = document.getElementById("btnTopo");

    if(window.scrollY > 100) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }

});


// evento para voltar ao topo da página
document.getElementById("btnTopo").addEventListener("click", function() {
    window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    });
});


const wrapperInner = document.querySelector(".reviews-wrapper-inner");
const reviews = document.querySelectorAll(".review-item");

let index = 0;

document.getElementById("setadireita").addEventListener("click", () => {
    index++;

    // Se passou do último → volta para o primeiro
    if (index >= reviews.length) {
        index = 0;
    }
    updateCarousel();

});

document.getElementById("setaesquerda").addEventListener("click", () => {
     index--;

    // Se voltou antes do primeiro → vai para o último
    if (index < 0) {
        index = reviews.length - 1;
    }

    updateCarousel();
});

function updateCarousel() {
    const width = reviews[0].offsetWidth;
    wrapperInner.style.transform = `translateX(${-index * width}px)`;
}


