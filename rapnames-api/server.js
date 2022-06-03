const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Bennett',
    birthLocation: 'Chicago, Illinois',
  },
  unknown: {
    age: 0,
    birthName: 'Unknown',
    birthLocation: 'Unknown',
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers['unknown']);
  }
  response.json(rappers);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server now running on port ${PORT}`);
});
