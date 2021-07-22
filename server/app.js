const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')
const formData = require('express-form-data')
const path = require('path')
const PORT = 3001
const mongoUrl = 'mongodb://localhost:27017/hello'
const atlasUrl =
	'mongodb+srv://userMaxim:maxim123@cluster0.cwgwa.mongodb.net/HelloNeighbor?retryWrites=true&w=majority'
const WebSocket = require('ws')
const User = require('./models/user')
const Tag = require('./models/tag')
const Event = require('./models/event')

const morgan = require('morgan')

const wss = new WebSocket.Server({ port: 5000 })

const app = express()

// const map = new Map();

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

const registerRoute = require('./routes/registrationRoute')
const eventRoute = require('./routes/eventRoute')
const userRouter = require('./routes/userRouter')
const loginRoute = require('./routes/loginRoute')

app.use(cors())
app.use(express.static(__dirname))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

wss.on('connection', function connection(ws) {
	ws.on('message', function (message) {
		message = JSON.parse(message)
		switch (message.event) {
			case 'message':
				broadcastMessage(message)
				break
			case 'connection':
				broadcastMessage(message)
				break
		}
	})
})

function broadcastMessage(message, id) {
	wss.clients.forEach(client => {
		client.send(JSON.stringify(message))
	})
}

app.use('/registration', registerRoute)
app.use('/event', eventRoute)
app.use('/user', userRouter)
app.use('/login', loginRoute)

app.get('/tags', async (req, res) => {
	const tags = await Tag.find()
	res.json(tags)
})

app.post('/matchEvent', async (req, res) => {
	const user = await User.findOne({ email: req.body.author })
	const currentEvent = await Event.findById(req.body.id)
	const author = currentEvent.authorId

	if (!currentEvent.members.includes(user._id)) {
		currentEvent.members.push(user._id)
		currentEvent.members.push(author._id)
		currentEvent.save()
		// currentEvent.save();
	}
	if (!user.history.includes(currentEvent._id)) {
		user.history.push(currentEvent._id)
		user.save()
	}
})

app.post('/eventAuthor', async (req, res) => {
  console.log(req.body,'heeeeeee')
	const user = await User.findOne({ _id: req.body.authorId }).populate('tags')
	console.log(user, 'yjjjjjjjjjjjjjjjjj')
	res.json(user)
})

app.post('/createEvent', async (req, res) => {
	const event = await Event.findById(req.body.eventId)
	const user = await User.findOneAndUpdate(
		{ email: req.body.author },
		{ email: req.body.author, $push: { history: event._id } }
	).populate('history')
	const tags = []
	req.body.selectedTags.forEach(el => tags.push(el._id))
  console.log(event, '0000')
	const currentEvent = await Event.findByIdAndUpdate(
		event._id,
		{
			title: req.body.values.title,
			description: req.body.values.description,
			eventTime: req.body.values.eventTime,
			regDate: Date.now(),
			authorId: user._id,
			author: user.name,
			tags: tags,
		},
		{ new: true }
	).populate('tags')
	console.log(currentEvent.authorId, '<<<<')
	res.json(currentEvent)
})

app.post('/delEvent', async (req, res) => {
	const delEvent = await Event.findByIdAndDelete(req.body.eventId._id)
	res.json(delEvent)
})

app.post('/addFriend', async (req, res) => {
	const author = await User.findOne({ name: req.body.author })

	const user = await User.findOne({ email: req.body.me })
	if (!user.friends.includes(author._id)) {
		user.friends.push(author._id)
		user.save()
	}

	const anotherUser = await User.findOne({ name: req.body.author })
	if (!anotherUser.friends.includes(user._id)) {
		anotherUser.friends.push(user._id)
		anotherUser.save()
	}

	res.sendStatus(200)
})

app.listen(PORT, () => {
	console.log(`Server started on ${PORT} port`)
	connect(
		atlasUrl,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true,
		},
		() => {
			console.log('Db started')
		}
	)
})
