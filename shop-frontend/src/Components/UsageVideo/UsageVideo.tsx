import React from 'react'
import './UsageVideo.css'

export const UsageVideo = () => {
  return (
    <section className='usage-video'>
        <div className='usage-container'>
            <h4 className='usage-title'>Как пользоваться</h4>
        <iframe
            src="https://www.youtube.com/embed/eaLpUa3iBYU" 
            title="Как наносить автозагар" 
            //frameBorder="0" 
            className='youtube-video-frame'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
            </iframe>
        </div> 
    </section>
  )
}
