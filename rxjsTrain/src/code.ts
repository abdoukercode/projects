import { Observable} from "rxjs/Observable";

let observable = Observable.create((observer:any) =>{
    try {
        observer.next('Hey buddy')
        observer.next('How are you ?')

        setInterval(() => {
            observer.next('I am good')
        }, 2000)

    } catch(err) {
        observer.error(err)
    }
 
});

let observer = observable.subscribe(
    (x:any) => addItem(x),
    (err:any) => addItem(err),
    () => addItem('Completed'),
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
