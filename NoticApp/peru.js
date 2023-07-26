document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "d0b34c21d07525844b93351aba3b8bb9"; // Reemplaza con tu clave de acceso de Mediastack
    const apiUrl = "http://api.mediastack.com/v1/news";

    // Configura los parámetros de la solicitud inicial
    const initialParams = {
        access_key: apiKey,
        countries: "pe", // Perú, Argentina y Colombia (puedes agregar otros países latinoamericanos separados por comas)
        categories: "general",
        date: new Date().toISOString().slice(0, 10), // Fecha actual en formato YYYY-MM-DD
        limit: 20, // Número de noticias a mostrar
    };

    // Realiza la solicitud inicial a la API al cargar la página
    fetch(apiUrl + "?" + new URLSearchParams(initialParams))
        .then((response) => response.json())
        .then((data) => {
            mostrarNoticias(data.data); // Función para mostrar las noticias en la página
        })
        .catch((error) => {
            console.error("Error al cargar las noticias:", error);
        });
});

// Función para mostrar las noticias en la página
function mostrarNoticias(noticias) {
    const noticiasDiv = document.getElementById("noticiasMe");
    noticiasDiv.innerHTML = ""; // Limpia el contenido anterior

    if (noticias && noticias.length > 0) {
        // Crea y muestra los elementos de noticias
        noticias.forEach((noticia) => {
            const noticiaElement = document.createElement("div");
            noticiaElement.innerHTML = `
                <img src="${noticia.image}" class="card-img-top" alt="${noticia.title}">
                <div class="card-body">
                    <h5 class="card-title">${noticia.title}</h5>
                    <p class="card-text">${noticia.description}</p>
                    <p class="card-text">${noticia.published_at}</p>
                    <p class="card-text"  style="display:none;" >${noticia.category}</p>
                    <a href="${noticia.url}" target="_blank"  class="btn btn-primary">Leer Mas</a>

                </div>
                <hr>
            `;
            noticiasDiv.appendChild(noticiaElement);
        });
    } else {
        console.log("No se encontraron noticias.");
    }
}

// Función de búsqueda
document.getElementById("searchInput").addEventListener("input", () => {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const noticiasDiv = document.getElementById("noticiasMe");
    const noticias = noticiasDiv.children;

    Array.from(noticias).forEach((noticia) => {
        const noticiaTitle = noticia.querySelector("h5.card-title").textContent.toLowerCase();
        const noticiaDescription = noticia.querySelector("p.card-text").textContent.toLowerCase();
        const noticiaPublishedAt = noticia.querySelector("p.card-text").textContent.toLowerCase();
        const noticiaCategory = noticia.querySelector("p.card-text").textContent.toLowerCase();

        if (
            noticiaTitle.includes(searchTerm) ||
            noticiaDescription.includes(searchTerm) ||
            noticiaPublishedAt.includes(searchTerm)||
            noticiaCategory.includes(searchTerm)
            
        ) {
            noticia.style.display = "block";
        } else {
            noticia.style.display = "none";
        }
    });
});