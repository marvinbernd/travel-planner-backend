const express = require('express');
const app = express();

const trips = require('./routes/trips');

require('./startup/prod')(app);

app.use(express.static('public'));
app.use(express.json());
app.use('/api/trips', trips);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
