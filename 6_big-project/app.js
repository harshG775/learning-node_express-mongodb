const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json())

const toursJson = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    message: 'success',
    results: toursJson.length,
    data: {
      tours: toursJson,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
    const newId = toursJson[toursJson.length-1].id+1;
    const newTour =Object.assign({id:newId},req.body)
    toursJson.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(toursJson),(error)=>{
        console.log("success")
    })
    res.status(200).send("success")
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
