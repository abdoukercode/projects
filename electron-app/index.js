

let quote = {};
const URL ='http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';


const request = async () => {
    const response = await fetch(`${URL}`,{
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
    const json = await response.json();
    quote = json[0]
    document.getElementById('quote').innerHTML = quote.content
    document.getElementById('author').innerHTML = quote.title
    
    console.log(quote);
}

request();


 setInterval(() => {
    request();
 }, 5000)
 
