# Collaborative Story Writing Platform

## Project Overview

The Collaborative Story Writing Platform is a web application that allows users to collaboratively create and edit stories. Users can start new projects, contribute titles, add paragraphs, and vote on each contribution. Each part of the story can be edited by anyone, and user contributions are tracked. The application uses HTML, CSS, and JavaScript for the frontend, and Node.js with Express and MongoDB for the backend.

## Features

### User Initiation and Contribution

- Users can initiate a new story project by entering a username and submitting a project idea.
- Another user can contribute a story title.
- Subsequent users can add paragraphs to the story, each with its own title.
- Users can edit any part of the story, with all edits attributed to the editing user(s).

### Voting System

- Users can upvote or downvote each story project, title, and paragraph.
- Voting counts are updated in real-time, reflecting the community’s preferences.

### User Attribution

- When a user submits a new project, title, or paragraph, they enter their username through a simple form.
- Each contribution shows the usernames of the initial creator and any editors.

## Technical Requirements

### Frontend

- **HTML**: Structure for user interactions (forms for submissions, lists for contributions, buttons for voting).
- **CSS**: Styling for an intuitive and appealing user interface.
- **JavaScript**: Handling form submissions, dynamic content updates, voting interactions, and DOM manipulation.

### Backend

- **Node.js with Express**: Handling server-side logic and API endpoints for creating, reading, updating, and deleting data.
- **MongoDB**: Storing user data, story projects, titles, paragraphs, and votes.

## Folder Structure
```
collaborative-story-platform/ 
├── public/ 
│ ├── index.html 
│ ├── styles.css 
│ └── app.js 
├── node_modules/ 
├── .gitignore 
├── package.json 
├── package-lock.json 
└── server.js
```


## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps

1. Clone the repository:

```
git clone https://github.com/yourusername/collaborative-story-platform.git
cd collaborative-story-platform
```

2. Install dependencies:
```
npm i
```

3. Create a .env file in the root directory and add your Mo
```
MONGODB_URI=mongodb://localhost:27017/storyPlatform
PORT=3000
```

4. Start the server:
```
node server.js
```

5. Open your browser and navigate to http://localhost:3000

## API Endpoints
User Routes
POST /api/users: Create a new user.
Story Routes
POST /api/stories: Create a new story project.
GET /api/stories: Get all story projects.
GET /api/stories/:id: Get a specific story project by ID.
PUT /api/stories/:id: Edit a specific story project by ID.
POST /api/stories/:id/vote: Upvote or downvote a specific story project by ID.
Title Routes
POST /api/titles: Add a new title to a story.
PUT /api/titles/:id: Edit a specific title by ID.
POST /api/titles/:id/vote: Upvote or downvote a specific title by ID.
Paragraph Routes
POST /api/paragraphs: Add a new paragraph to a story.
PUT /api/paragraphs/:id: Edit a specific paragraph by ID.
POST /api/paragraphs/:id/vote: Upvote or downvote a specific paragraph by ID.

### Written by me: EmreKadirTiren