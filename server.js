const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express application
const app = express();

// Use CORS to allow cross-origin requests (optional, for testing purposes)
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a POST route to accept data
app.post('/data', (req, res) => {
    // Log the received data
    console.log('Received data:', req.body);

    // Extract specific fields if necessary
    const data = req.body.data;
    console.log('Extracted data:', data);

    // Process the data (e.g., save to database, perform computations)
    // For demonstration, we just log it

    // Send a response back to the client
    res.status(200).json({
        message: 'Data received successfully',
        receivedData: data
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
