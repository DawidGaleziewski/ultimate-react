const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 5000;

let records = [
  {
    id: 1,
    recordName: 'React Rave',
    artistName: 'The Developers',
    description: 'A rocking good rave bopping to the tune of JavaScript'
  },
  {
    id: 2,
    recordName: 'React Rock',
    artistName: 'The Testers',
    description: 'Rock that code sounds'
  },
  {
    id: 3,
    recordName: 'Buzz buzz my fizzBuzz',
    artistName: 'Debuggers',
    description: 'Algo sound for front end nerds'
  }
];

app.get('/api/records', (req, res) => {
  res.send(records);
});

app.listen(port, () => console.log(`Server litening on port ${port}`));
