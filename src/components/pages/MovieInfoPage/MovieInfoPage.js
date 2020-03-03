import React, { useState, useEffect } from 'react'
import Preloader from '../../global/Preloader'
import defaultPoster from '../imgs/defaultPoster.png'
import WebTorrent from 'webtorrent'
import * as API from '../../../constans'

const MovieInfoPage = () => {
  const [ popcornData, setPopCornData] = useState('');
  const [ preloader, setPreloader ] = useState(1)

  useEffect(() => {
    fetch(`${API.SEARCH_MOVIE}/${localStorage.getItem('currentFilm')}?api_key=${API.KEY}`)
    .then(data => data.json())
    .then(data => (
      fetch(`https://tv-v2.api-fetch.website/movie/${data.imdb_id}`)
      .then(data => data.json())
      .then(data => {
        console.log(data.torrents.en['1080p'].url)
        setPopCornData(data)
        setPreloader(0)
  

        var torrentId =  (data.torrents.en['1080p'].url)

        var WebTorrent = require('webtorrent');
        var client = new WebTorrent();
    
        client.on('error', err => {
          console.log('[+] Webtorrent error: ' + err.message);
        });
    
        client.add(torrentId, (torrent) => {
    
          var mp4File = this.state.torrentFiles.find(function (file) {
            return file.name.endsWith('.mp4');
            
          });
    
          this.setState({mp4file:mp4File.path});
    
          console.log(mp4File.path);
    
          // TODO Figure out a better way to render these files 
          this.state.torrentFiles.map((file, i) => {
            file.appendTo('body');
            // console.log(file);
          })
    
        });
      })
    ))
   
  }, [])

/*   useEffect(() => {
    var client = new WebTorrent()
    var magnetURI = popcornData.torrents.en['1080p'].url

    client.add(magnetURI, function (torrent) {
      // Got torrent metadata!
      console.log('Client is downloading:', torrent.infoHash)

      torrent.files.forEach(function (file) {
        // Display the file by appending it to the DOM. Supports video, audio, images, and
        // more. Specify a container element (CSS selector or reference to DOM node).
        file.appendTo('body')
      })
    })
  }, [popcornData]) */

  
 
  return (
    preloader ? (<Preloader active={preloader}/>) : (
      <div className="container">
      <div className="row" >
      </div>
      <div className="row">
        <div className="col s12 m4">
          <img
            src={!popcornData.images.poster ? defaultPoster : `${popcornData.images.poster}`}
            alt='movie poster'
            // исправить в стили
            style={{width: "auto", height: 360}}
          />
        </div>
        <div className="col s12 m8">
        <div className="info-container">
          <p>{popcornData.title}</p>
          <p>{popcornData.release_date}</p>
          <p>{popcornData.overview}</p>
        </div>
        {/* <div className="pleer-container">
          <VideoPlayerContainer data={popcornData}/>
        </div> */}
      </div>
      </div> 
    </div>
    ) 
  )
}

export default MovieInfoPage