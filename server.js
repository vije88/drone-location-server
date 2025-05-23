const express = require('express');
const app = express();
let droneData = {};

app.use(express.json());

app.post('/update-location', (req, res) => {
  droneData = req.body;
  res.send({ status: 'OK' });
});

app.get('/get-location', (req, res) => {
  res.json(droneData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
