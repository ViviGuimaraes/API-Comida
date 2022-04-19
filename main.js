'use strict'
 
//função para trazer as imagens da API
 const searchImagens = async (text) =>{
    const key ='26495781-94e001e82106cd3ad3942827e';
    const url =`https://pixabay.com/api/?key=${key}&q=${text}`;

    //response é a variável que recebe a resposta da requisição 
    const response = await fetch(url)
    return response.json();
 };

 //função para criar divs para colocar as imagens dentro
const createCard =({webformatURL,pageURL })=>{
    const card = document.createElement('div');
    card.classList.add('card-galeria');

    //criando um card no html
    card.innerHTML = `

    <a href="${pageURL}" class="card-imagem">
    <img src= ${webformatURL} >
    </a>
    <div class="card-informacoes">

    <div class=" card-text">
    texto de text 1 
    </div>

    <div class="card-acao" >

        <div class="card-like" >
        12345
        </div>

        <div class="card-comentario" >
        6789
        </div>

        <div class="card-salvar" >
        mmmm
        </div>
    </div>


    </div>

    `;
    return card;
};

//função para jogar as imagens na tela 
const loadGaleria = async (text) => {

   const container = document.querySelector('.galeria');

    // variável que chama as informações da API sobre a imagem

    const {hits} = await searchImagens(text);

    const cards = hits.map(createCard);  

   container.replaceChildren(...cards);

    console.log(cards);
};

// key = tecla que foi digitada, 
// target = valor que foi digitado
// função para capiturar o que foi digitado no imput #listComidas
const handleKeypress =({key, target }) => {

    if( key === 'Enter'){

        // função para receber o que foi digitado
        loadGaleria(target.value); 

    };
};

//  colocando ação na imput listComidas
document.querySelector('#listComidas')

        // envia ação do imput para o kaypress
        .addEventListener('keypress', handleKeypress);
