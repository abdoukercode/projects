
const apiKey = '6110f7a26ff0401eaddeba61f4200886';
const main = document.querySelector('main')
const sourceSelector = document.querySelector('#sourceSelector');
const defaultSource = 'the-washington-post';

window.addEventListener('load', async e => {
    // console.log("> window loaded ...<");

    updateNews();
    await updateSources();
    sourceSelector.value = defaultSource;

    sourceSelector.addEventListener('change',e=> {
        updateNews(e.target.value)
    });

    if ('serviceWorker' in navigator) {

        try {
          navigator.serviceWorker.register('./service-worker.js');           
           console.log('Service Worker registered')
            
        } catch (error) {
            console.log('SW registration failed');
        }
    }
});

async function updateSources(){
    const response = await fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`);
    const json = await response.json();
    // console.log(json);
    sourceSelector.innerHTML = json.sources.map( src => `
        <option value="${src.id}">${src.name}</option>
    `).join('\n');
   
}

async function updateNews(source = defaultSource){
    const response = await fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`);
    const json = await response.json();
    // console.log(json);
    main.innerHTML = json.articles.map(createArticle).join('\n');
   
}

function createArticle(article) {
    return `
      <div class="article">
        <a href="${article.url}">
          <h2>${article.title}</h2>
          <img src="${article.urlToImage}" alt="${article.title}">
          <p>${article.description}</p>
        </a>
      </div>
    `;
  }
