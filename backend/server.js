const path = require('path');
const fs = require('fs');
const express = require('express');
const request = require('request');
const app = express();
const stream = require('./downloadAndStream/stream');
const subtitles = require('./downloadAndStream/downloadSubtitles');
var schedule = require('node-schedule');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/tmp')));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('content-type', 'text/vtt');
    next();
});

mongoose.connect('mongodb://database:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", error => {
        console.log("Database error", error);
});

mongoose.connection.once("open", () => {
        console.log("Connected to Database!");
});

app.post('/get_movie', function(req, res){
  app.set('url', req.body.url);
});

app.get('/display_movie/:id/:res', function(req, res) {
    stream.magnetUrl(req, res, app.get('url'), req.params.id, req.body.res);
});

const Comment = mongoose.model('Comment', {
        id: { type: Number },
        userAva: { type: String, default: 'Bogdan gay' },
        userName: { type: String, default: 'Ya Bogdan' },
        commentData: { type: Date, default: Date.now },
        text: { type: String },
        parentId: { type: Number, default: 0 },
        userId: { type: Number, default: 1 },
        deleted: { type: Boolean, default: false }
});

app.post('/post_comment', function(req, res) {
        let comment = new Comment({
            id: 0
            // здесь заполняем данные о комменте
        });
        comment.save();
});
//app.get('/get_movie', function (req, res) {
//  var url = 'magnet:?xt=urn:btih:60DDCB34E80238043651459E5E31D8C56ACCC495&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337'
//    var id = 'tt8752440';
//    var quality = '720p';
 //   stream.magnetUrl(req, res, url, id, quality);
//});

// app.get('/youtube/:id', function (req, res) {
//     let tmpRes = res;
//     request('https://tv-v2.api-fetch.website/movie/' + req.params.id, function (req, res) {
//         if (res.body) {
//             let movieInfo = JSON.parse(res.body);
//             if (movieInfo.trailer) {
//                 let trailer = movieInfo.trailer.split("=");
//                 let response = {
//                     url: trailer[1]
//                 };
//                 tmpRes.send(response)
//             } else {
//                 let response = {
//                     url: 'OUMvvYSCnMQ'
//                 };
//                 tmpRes.send(response)
//             }
//         } else {
//             let response = {
//                 url: 'OUMvvYSCnMQ'
//             };
//             tmpRes.send(response)
//         }
//     });
// });

// app.get('/subtitles/en/:id', function (req, res) {
//     let tmpReq = req;
//     request('https://tv-v2.api-fetch.website/movie/' + req.params.id, function (req, res) {
//         if (res.body) {
//             let movieInfo = JSON.parse(res.body);
//             currentIMDB = movieInfo.imdb_id;
//         }
//     });
//     setTimeout(function () {
//         subtitles.getEnglishSubtitles(res, currentIMDB, tmpReq.params.id);
//     }, 2000);
// });

// app.get('/subtitles/ru/:id', function (req, res) {
//     let tmpReq = req;
//     let currentIMDB = '';
//     request('https://tv-v2.api-fetch.website/movie/' + req.params.id, function (req, res) {
//         if (res.body) {
//             let movieInfo = JSON.parse(res.body);
//             currentIMDB = movieInfo.imdb_id;
//         }
//     });
//     setTimeout(function () {
//         subtitles.getRussianSubtitles(res, currentIMDB, tmpReq.params.id);
//     }, 2000);
// });

// schedule.scheduleJob('*/1 * * * *', function () {
//     request('http://localhost:8000/api/films/return-films', function (req, res) {
//         let arr = JSON.parse(res.body);
//         arr.forEach(function (i) {
//             fs.exists('/tmp/' + i.id_film, (exists) => {
//                 if (exists) {
//                     fs.unlinkSync('/tmp/' + i.id_film)
//                 }
//             });
//         });
//     });
// });

const port = 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
