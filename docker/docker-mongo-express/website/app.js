const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors') // Enable Cors

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

const app = express();

require('dotenv').config();
const Port = process.env.APP_PORT || 5000;

app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// DB config

require('./config/Db')

app.use(logger('tiny'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter); // prefix routes with /users
app.use('/api/todos', todosRouter); // prefix routes with /api/todos

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(Port, ()=>{
  console.log(`> 🏁 Listening 👉  port: ${Port} 😃 🙌 <`);
})
module.exports = app;
