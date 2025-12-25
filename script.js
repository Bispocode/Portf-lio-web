const lista = document.querySelector('.lista-projetos');

if (lista) {
    lista.addEventListener('wheel', (e) => {
        if (lista.scrollWidth > lista.clientWidth) {
            e.preventDefault();
            lista.scrollLeft += e.deltaY;
        }
    }, { passive: false });
}
console.log('JS carregado');


