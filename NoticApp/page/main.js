let key = '451856a66bd04867bbaca9e1b91892bd';
let key2 = 'c1365ae806f947ba8a5e05626b0954ba';
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key2}`;
let urlmx = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${key}`;
let urlve = `https://newsapi.org/v2/top-headlines?country=ve&apiKey=${key}`;
//let MediaTesk = `http://api.mediastack.com/v1/news
//? access_key = d0b34c21d07525844b93351aba3b8bb9`;
const searchInput = document.querySelector('#search-input');


let mostrar_noticias = document.getElementById('noticias');
//let mostrar_noticiasMe = document.getElementById('MediaTesk');

fetch(url)
    .then((response) => response.json())
    .then(data => {
    let noticias = data.articles;

    noticias.map(function (numero) {
      let div = document.createElement('div'); // Cambio 'noticias' por 'div'
      div.className = 'card'; // Agrego la clase para que tenga el estilo de tarjeta
      div.style = 'margin: 10px; width: 18rem; display: flex; flex-wrap: nowrap'; // Aplico el estilo en línea

    div.innerHTML = `
        <img src="${numero.urlToImage}" class="card-img-top" alt="${numero.title}">
        <div class="card-body">
            <h5 class="card-title">${numero.title}</h5>
            <p class="card-text">${numero.description}</p>
            <a href="${numero.url}" target="_blank"  class="btn btn-outline-info">See News</a>
        </div>
        `;

    mostrar_noticias.appendChild(div);
    })
  });

  fetch(urlve)
    .then((response) => response.json())
    .then(data => {
    let noticiasve = data.articles;

    noticiasve.map(function (numero) {
      let div = document.createElement('div'); // Cambio 'noticias' por 'div'
      div.className = 'card'; // Agrego la clase para que tenga el estilo de tarjeta
      div.style = 'margin: 10px; width: 30%; display: flex; flex-wrap: nowrap'; // Aplico el estilo en línea

    div.innerHTML = `
        <img src="${numero.urlToImage}" class="card-img-top" alt="${numero.title}">
        
        <div class="card-body" >
        
            <h5 class="card-title">${numero.title}</h5>
            <p class="card-text">${numero.description}</p>
            <a href="${numero.url}" target="_blank"  class="btn btn-outline-info">see news</a>
        </div>
        `;

    mostrar_noticiasve.appendChild(div);
    })
  });

  fetch(urlmx)
    .then((response) => response.json())
    .then(data => {
    let noticiasmx = data.articles;

    noticiasmx.map(function (numero) {
      let div = document.createElement('div'); // Cambio 'noticias' por 'div'
      div.className = 'card'; // Agrego la clase para que tenga el estilo de tarjeta
      div.style = 'margin: 10px; width: 18rem; display: flex; flex-wrap: nowrap '; // Aplico el estilo en línea

    div.innerHTML = `
        <img src="${numero.urlToImage}" class="card-img-top" alt="${numero.title}">
        <div class="card-body"  >
            <h5 class="card-title">${numero.title}</h5>
            <p class="card-text">${numero.description}</p>
            <a href="${numero.url}" target="_blank"  class="btn btn-outline-info">see news</a>
        </div>
        `;

    mostrar_noticiasmx.appendChild(div);
    })
  });
  document.addEventListener("DOMContentLoaded", () => {
    // El código existente para obtener las noticias se mantiene aquí
  
    // Agregar evento para el buscador
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      filtrarNoticias(searchTerm);
    });
  });
  
  // Función para filtrar noticias en función del término de búsqueda
  function filtrarNoticias(searchTerm) {
    const noticiasContainers = document.getElementsByClassName("noticias-container");
    Array.from(noticiasContainers).forEach((container) => {
      const noticias = container.getElementsByClassName("card");
      Array.from(noticias).forEach((noticia) => {
        const title = noticia.querySelector(".card-title").textContent.toLowerCase();
        const description = noticia.querySelector(".card-text").textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          noticia.style.display = "block";
        } else {
          noticia.style.display = "none";
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Get the current visit count from local storage or initialize it to 0
    let visitCount = localStorage.getItem("visitCount");
    if (!visitCount) {
      visitCount = 0;
    }
  
    // Update the display with the current visit count
    const visitCountElement = document.getElementById("visitCount");
    visitCountElement.textContent = visitCount;
  
    // Increment the visit count and update the display
    visitCount++;
    visitCountElement.textContent = visitCount;
  
    // Save the updated visit count to local storage
    localStorage.setItem("visitCount", visitCount.toString());
  });
  

  