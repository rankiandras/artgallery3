const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const fileUpload = require('express-fileupload');
const fs = require('fs');
const { response } = require('express');
const app = express();

app.use(express.json())
app.use(fileUpload());




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/pictures', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../backend/db.json`))
})

app.post('/data-upload', (req, res) => {
  const picture = req.files.picture;
  picture.mv(path.join(`${__dirname}/../frontend/public/img/${req.body.filename}`))

  const existingTitles = JSON.parse(fs.readFileSync(`${__dirname}/../backend/db.json`));
  const newTitle = req.body;

  // it would be nice if there is no picture available the item could be upload and render with nopicture.jpg
  /* if (!(Object.keys(newTitle).includes('filename'))) {
    newTitle.filename = 'nopicture.jpg'
  } */

  newTitle.id = existingTitles[existingTitles.length-1].id+1
  // console.log(newTitle);
  existingTitles.push(newTitle);
  const stringifyTitles = JSON.stringify(existingTitles)
  fs.writeFileSync(`${__dirname}/../backend/db.json`, stringifyTitles)

  res.send('successfully added')  
})


app.delete('/data-delete', (req, res) => {
  // console.log(req.body);
  
  const idToDeletion = req.body.id
  const filenameToDeletion = req.body.filename
  // console.log('id: ', idToDeletion, 'filename: ', filenameToDeletion);

  // deletion of picture through giving the filename
  fs.unlinkSync(path.join(`${__dirname}/../frontend/public/img/${filenameToDeletion}`))
  
  // // deletion of other data
  const allItems = fs.readFileSync(path.join(`${__dirname}/../backend/db.json`))
  const allItemsJSON = JSON.parse(allItems)
  // console.log(allItemsJSON);

  const allItemsJSONFiltered = allItemsJSON.filter(item => item.id != idToDeletion)
  // console.log(allItemsJSONFiltered);
  const allItemsJSONFilteredAndStringified = JSON.stringify(allItemsJSONFiltered)
  fs.writeFileSync(path.join(`${__dirname}/../backend/db.json`), allItemsJSONFilteredAndStringified)  
  res.send('Successfully Deleted')
})

const port = 6789;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});