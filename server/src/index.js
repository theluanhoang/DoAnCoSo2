const express = require('express')
const http = require('http');
const route = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const server = http.createServer(app)

const port = 5000
const cookieParser = require('cookie-parser')
const { addUser, removeUser } = require('./user')

const db = require('./config/db')
const CommentController = require('../src/app/controllers/Comment.controller')

const corsOptions = {
  origin: true,
  credentials: true,
};
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('A Connection has been made')

  socket.on("join", ({ id, currentUser }, callBack) => {
    try {
      const name = currentUser.name || '';
      const room = id;
      const { user, error } = addUser({ id: socket.id, name, room });

      if (error) return callBack(error);

      socket.join(user.room);
      callBack(null);
      socket.on("sendMessage", ({ message }) => {
        CommentController.create({
          user: currentUser.id,
          room: room,
          message: message
        });
        io.to(user.room).emit("message", {
          name: user.name,
          message: message,
        });

      });
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
  });
  console.log("A disconnection has been made");
})

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(morgan('combined'))
app.use(cors())
app.use(cookieParser());

route(app)

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
