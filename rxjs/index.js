/* const observable = Rx.Observable.create(subscriber => {
    subscriber.next("hello");
    subscriber.next("world");
}); */
/* .map(v => v)
.filter(v => true)
.subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
*/

// 
/* const promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hey resolved is here !!!")
    }, 1000);
});
const obsPromise = Rx.Observable.fromPromise(promise);
obsPromise.subscribe(result => print(result))
 */
/*  const timer = Rx.Observable.timer(1000);

 timer.finally(() => print('finished !!'))
    .subscribe()
 */
 //timer.subscribe(() => print(new Date().getSeconds())) */
// Helper function

//const x = Math.random();
/*  const cold = Rx.Observable.create(observer => {
     observer.next(x)
         }
 );

 const hot= cold.publish();

 cold.subscribe(a=> print(`Subscriber A: ${a}`));
 cold.subscribe(b=> print(`Subscriber B: ${b}`));

 hot.connect(); */

/* const interval = Rx.Observable.interval(1000)
                    .finally(()=> print("all done"));
const subscription = interval.subscribe(
    val => console.log(val));

    setTimeout(() => {
            subscription.unsubscribe();
            console.log("just done ");
    }, 3000);

 */
/* 

*/


/* const jsonString = '{ "type":"Dog", "breed":"pug"}';
const apiCall =Rx.Observable.of(jsonString);
        apiCall
            .map(x=> JSON.parse(x))
            .subscribe(obj=> {
                print(obj.type);
                print(obj.breed);
            })

 */

/** Scan */


/* const clicks = Rx.Observable.fromEvent(document,"click");
    clicks  
            .map(e=>parseInt(Math.random()*10))
            .do(score=>print(`Click scored + ${score}`))
            .scan((highscore,score)=> highscore +score)
            .subscribe(highscore=> print(`Hig Score ${highscore}`))
       

 */

 let clicks = Rx.Observable.fromEvent(document, 'click');

 clicks.switchMap(click => {
     return Rx.Observable.interval(500)
 })
 .subscribe(i =>print(i))



function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.getElementById("app").appendChild(el)
}
