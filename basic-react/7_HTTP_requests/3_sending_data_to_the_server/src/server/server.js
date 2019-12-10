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

// Accepting the post from front end application
app.post('/api/records', (req, res) => {
  const newRecord = {
    // Reduce will show us the highest number and we add one to it
    id:
      records.reduce((acc, item) => {
        return item.id > acc ? item.id : acc;
      }, 0) + 1,
    ...req.body
  };
  // adding new record to the array
  records.push(newRecord);
  // Sending back the new record to tell UI what was added
  res.send(newRecord);
});

app.listen(port, () => console.log(`Server litening on port ${port}`));
