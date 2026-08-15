const secaoFundo = document.querySelector('.secao-fundo');

const opcoesDeSeguro = document.querySelectorAll('input[name="tipo-seguro"]');

const imagensDeFundo = {
    'auto': "url('imgs/imagemDeFundo/imgDeFundoCarro.jpeg')",
    'moto': "url('imgs/imagemDeFundo/imgDeFundoMoto.jpeg')",
    'vida': "url('imgs/imagemDeFundo/imgDeFundoVida.jpeg')",
    'residencial': "url('imgs/imagemDeFundo/imgDeFundoCasa.jpeg')"
};

opcoesDeSeguro.forEach(opcao => {
    opcao.addEventListener('change', function() {
        if (this.checked) {
            secaoFundo.style.backgroundImage = imagensDeFundo[this.value];
        }
    });
});