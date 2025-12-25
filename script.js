document.addEventListener("DOMContentLoaded", () => {

    const lista = document.querySelector(".lista-projetos");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    let index = 0;
    const visiveis = 3;
    const gap = 24;

    btnNext.addEventListener("click", () => {
        const total = lista.children.length;
        const limite = total - visiveis;

        if (index < limite) {
            index++;
            mover();
        }
    });

    btnPrev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            mover();
        }
    });

    function mover() {
        const card = lista.children[0];
        const largura = card.offsetWidth + gap;
        lista.style.transform = `translateX(-${index * largura}px)`;
    }

});
