let io = require('socket.io')(3000);
let jwt = require('jsonwebtoken');



let users = [];


io.on('connection', socket => {

    let currentUser = null;

    socket.on('identify', ({token}) => {
        try {
            let decoded = jwt.verify(token,process.env.JWT_SECRET_KEY, {
                algorithms: ['HS256']
            })
            currentUser = {
                id: decoded.user_id,
                name: decoded.user_name,
                count: 1
            }
            let user = users.find(u => u.id === currentUser.id);
            if (user) {
                user.count++
            } else {
                users.push(currentUser);
                socket.broadcast.emit('users.new', {user: currentUser})
            }
        } catch (e) {
            console.error(e.message)
        }
    });

    socket.on('disconnect', () => {
        if (currentUser) {
            let user = users.find(u => u.id === currentUser.id)
            if (user) {
                user.count--
                if (user.count === 0) {
                    users = users.filter(u => u.id !== currentUser.id)
                    socket.broadcast.emit('users.leave', {user: currentUser})
                }
            }
        }
    })

})