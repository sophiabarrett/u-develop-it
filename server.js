const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// 404
app.use((req, res) => {
    res.status(404).end();
});

// Start server after db connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}! 🚀`);
});