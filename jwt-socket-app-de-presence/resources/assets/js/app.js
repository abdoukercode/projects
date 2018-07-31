require('./bootstrap');

import io from 'socket.io-client';

let presence = document.querySelector('#presence');



if(presence){
    let socket = io("http://localhost:3000");

    socket.on('connect', ()=> {
        //console.log("I'm connected");
        socket.emit('identify', {
            token: presence.dataset.token
        })
    });

    socket.on('users.new',({user}) => {
        let li = document.createElement('li');
        li.innerText = user.name;

        presence.appendChild(li);
    })
}

