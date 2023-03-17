import React from 'react'
import ReactPlayer from 'react-player/lazy'
import ResponsiveGallery from 'react-responsive-gallery';
// import { Gallery } from "react-grid-gallery";

function Main() {
    
  return (
    <div>
        {/* <p>Its a main component</p> */}
        {/* Render a YouTube video player */}
   {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls="true" playsinline /> */}

   <ResponsiveGallery
        useLightBox
        images={[
          {
            src: 'https://i.pinimg.com/originals/4a/f6/ad/4af6add41ebc1d226f1ef0ee9c26a99b.gif',
            alt: 'image 1 alt test',
            orderS: 1,
            orderM: 1,
            orderL: 1,
          },
          {
            src: 'https://media1.giphy.com/media/gSkQ8g23A778gKHvG5/giphy.gif',
            alt: 'image 2 alt test',
            orderS: 2,
            orderM: 2,
            orderL: 2,
          },
          {
            src: 'https://www.animatedimages.org/data/media/327/animated-rabbit-image-0161.gif',
            orderS: 4,
            orderM: 3,
            orderL: 6,
          },
          {
            src: 'https://media.baamboozle.com/uploads/images/425077/1651603123_1888705_gif-url.gif',
            orderS: 3,
            orderM: 4,
            orderL: 5,
          },
          {
            src: 'https://giffiles.alphacoders.com/882/88208.gif',
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: 'https://i.pinimg.com/originals/77/34/84/7734845e3661ecbc15ca48f02bbd3d3c.gif',
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: 'img6-style',
          },
        ]}
      />

    </div>
  )
}

export default Main