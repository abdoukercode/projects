const button = document.getElementById('button')
const set = (id, text) => {
  document
    .getElementById(id)
    .innerHTML = text
}
button.addEventListener('click', (event) => {
    event.preventDefault()
    const url = document.getElementById('input').value;
    console.log(url);
/* 
    const protocol = url.match(/^(https?:\/\/)/g)
    console.log(protocol);
    set('protocol', protocol ? protocol[0] : 'bim...');
    
      
  const domain = url.match(/^https?:\/\/((www\.)?[\w-]+\.\w{2,6})\/?/)
  console.log(domain);
  
  set('domain', domain ? domain[1] : '') */

  const a = new URL(url)
  set('protocol', a.protocol)
  set('domain', a.hostname)
  set('path', a.pathname)
  set('search', a.searchParams)

})
