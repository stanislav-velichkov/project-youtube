var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let uploadVideo = req.files.uploadVideo;
    console.log(req.files.uploadVideo.mimetype);
 
  // Use the mv() method to place the file somewhere on your server 
  uploadVideo.mv('./uploads/' + req.files.uploadVideo.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

module.exports = router;