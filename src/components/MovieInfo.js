import React, { useState, useEffect } from 'react'
import defaultPoster from '../imgs/defaultPoster.png'
import WebTorrent from 'webtorrent'

const posterSrc = `http://image.tmdb.org/t/p/w185`

const MovieInfo = ({ closeMovie, data }) => {
  const [popcornData, setPopCornData] = useState('');

  useEffect((popcornData) => {
    fetch(`https://tv-v2.api-fetch.website/movie/${data.imdb_id}`)
      .then(data => data.json())
      .then(data => setPopCornData(data))
  }, [data])

  var client = new WebTorrent()
  var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

  client.add(torrentId, function (torrent) {
    // Torrents can contain many files. Let's use the .mp4 file
    var file = torrent.files.find(function (file) {
      return file.name.endsWith('.mp4')
    })

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('body')
  })

  // вся инфа сохраняется в popcornData при загрузке страницы
  // добавь тут торрент плеер
  return (
    <div className="container">
      <div className="row" onClick={closeMovie} style={{ cursor: "pointer", paddingTop: 50 }}>
        <span style={{ marginLeft: 10 }}>go back</span>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <img
            src={data.poster_path === null ? defaultPoster : `${posterSrc}${data.poster_path}`}
            alt='movie poster'
            // исправить в стили
            style={{ width: "auto", height: 360 }}
          />
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <p>{data.title}</p>
            <p>{data.release_date}</p>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo