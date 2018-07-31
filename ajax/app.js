function createNode(element){
    return document.createElement(element);
}
function append(parent,el){
    return parent.appendChild(el);
}

const ul = document.getElementById("authors");

const url = "https://randomuser.me/api/?results=10";


fetch(url)
    .then(res => res.json())
    .then(data => {
        const authors = data.results;
        console.log('DATA: ' , data.results);
        authors.map(author => {
            let li = createNode("li"),
            img = createNode("img"),
            span = createNode("span")
            h4= createNode('h4');
            img.src= author.picture.large;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(h4,span);
            append(li, img);
            append(li, h4);
            append(ul,li);
        })
    } )
    .catch(err => console.log('ERROR: ', err));
