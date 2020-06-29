
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const clientRouter = require('./routes/client.router');
const petRouter = require('./routes/pet.router');
const vtRouter = require('./routes/vt.router');
const searchRouter = require('./routes/search.router');
const requestRouter = require('./routes/request.router');
const petPictureRouter = require('./routes/petPicture.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/client', clientRouter);
app.use('/api/pet', petRouter);
app.use('/api/vt', vtRouter);
app.use('/api/search', searchRouter);
app.use('/api/request', requestRouter);
app.use('/api/pet/picture', petPictureRouter);

// app.use(function (err, req, res, next) {
//   console.log('This is the invalid field ->', err.field)
//   next(err)
// })


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
