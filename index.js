const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to serve the index.html file when /index is requested
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to serve the about_me.html file
app.get('/about_me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about_me.html'));
});

// Define a route to serve the coding_journey.html file
app.get('/coding_journey', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'coding_journey.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});