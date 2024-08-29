const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { userInfo } = require('os');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

if(mongoose.connection) {
    console.log('Connected to MongoDB');
}
else {
    console.log('Error connecting to MongoDB');
}


//DB Schema's
const userSchema = new mongoose.Schema({
  username: String,
});

const User = mongoose.model('User', userSchema);

const storySchema = new mongoose.Schema({
  projectIdea: String,
    titles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Title' }],
    paragraphs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Paragraph' }],
    votes: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    editedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Story = mongoose.model('Story', storySchema);

const titleSchema = new mongoose.Schema({
  content: String,
  votes: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  editedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Title = mongoose.model('Title', titleSchema);

const paragraphs = new mongoose.Schema({
  content: String,
  votes: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  editedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Paragraph = mongoose.model('Paragraph', paragraphs);  

// Routes
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.post('/api/stories', async (req, res) => {
  const story = new Story(req.body);
  await story.save();
  res.send(story);
});

app.get('/api/stories', async (req, res) => {
  const stories = await Story.find().populate('createdBy').populate('editedBy');
  res.send(stories);
});

app.get('/api/stories/:id', async (req, res) => {
    const story = await Story.findById(req.params.id).populate('createdBy').populate('editedBy');
    res.send(story);
});

app.put('/api/stories/:id', async (req, res) => {
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(story);
});

app.post('/api/stories/:id/vote', async (req, res) => {
    const story = await Story.findById(req.params.id);
    story.votes += req.body.vote;
    await story.save();
    res.send(story);
});

app.post('/api/titles', async (req, res) => {
  const title = new Title(req.body);
  await title.save();
  res.send(title);
});

app.put('/api/titles/:id', async (req, res) => {
  const title = await Title.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(title);
});

app.post('/api/titles/:id/vote', async (req, res) => {
  const title = await Title.findById(req.params.id);
  title.votes += req.body.vote;
  await title.save();
  res.send(title);
});

app.post('/api/paragraphs', async (req, res) => {
  const paragraph = new Paragraph(req.body);
  await paragraph.save();
  res.send(paragraph);
});

app.put('/api/paragraphs/:id', async (req, res) => {
  const paragraph = await Paragraph.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(paragraph);
});

app.post('/api/paragraphs/:id/vote', async (req, res) => {
  const paragraph = await Paragraph.findById(req.params.id);
  paragraph.votes += req.body.vote;
  await paragraph.save();
  res.send(paragraph);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});