var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')
var jsonParser = bodyParser.json()

app.use(express.static('public'))

var exec = require('child_process').exec

app.post('/data', jsonParser, function (req, res) {
  if (req.body !== null) {
    create_unseen_arff(req.body.data, (result) => {
      res.send(result)
    })
  }
})

var runCMD = function (result) {
  var cmd = "java -classpath 'public/resource/weka.jar' weka.classifiers.trees.J48 -l 'public/resource/mushroom.model' -T 'public/resource/mushroom_unseen.arff' -p 0"
  exec(cmd, function (error, stdout, stderr) {
    result(stdout.split('\n').filter((item) => item !== ''))
    if (error) console.log(error)
  })
}

var create_unseen_arff = function (data, res) {
  var txt = data
  var masterFile = 'public/resource/mushroom_master.arff'
  var outputFile = 'public/resource/mushroom_unseen.arff'

  fs.readFile(masterFile, 'utf8', (err, data) => {
    fs.writeFile(outputFile, data + txt, function (err) {
      if (err) console.log(err)
    })
    if (err) console.log(err)
  })
  runCMD((output) => {
    res(output)
  })
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
