// async function fetchText(){
//     let response = await fetch('/json.json');

//     console.log(response.status); //200
//     console.log(response.statusText); //Ok

//     if (response.status === 200){
//         let data = await response.text();
//         console.log(data);
//     } 
// }
// fetchText();

// const URL_DA_API = 'https://swapi.dev/api/films/';

// fetch(URL_DA_API)
//     .then(response => response.json())
//     .then(data => {
//         // Manipule os dados da resposta da API aqui
//         // console.log(data);

//         let title = data.results;


//         -console.log(title);
//         title.forEach(element => {

//             // selecionar o elemento no HTML
//             const e = document.querySelector("#episode_id");
//             const t = document.querySelector("#title");
//             const p = document.querySelector("#producer");

//             const episode = element.episode_id;
//             const title = element.title;
//             const producer = element.producer;

//             // subertituindo o html 
//             e.textContent = episode;
//             t.textContent = title;
//             p.textContent = producer;


//             console.log(producer);
//         });

//         // let title2 = title[0].title;
//         // console.log(title);

//     })
//     .catch(error => {
//         // Trate erros de requisição aqui
//         console.error('Ocorreu um erro:', error);
//     });

const id = 1; 
const w = 333; 

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((response) => response.json())
  .then((json) => 
  console.log(json))

  let t = document.querySelector("#title");
//   const p = document.querySelector("#episode_id");
  
  t.textContent = title;
  
  console.log(t, p);

  
  
  