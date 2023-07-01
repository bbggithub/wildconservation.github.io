const express = require('express');
const app = express();

// Configure middleware and routes here

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/api/pets', (_req, res) => {
  // Logic to fetch pets from the database
  // Send the response as JSON
  res.json({ pets: [] });
});

app.post('/api/pets', (_req, res) => {
  // Logic to create a new pet in the database
  // Access the request body using req.body
  res.json({ message: 'submited successfully' });
});