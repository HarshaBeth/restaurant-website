import React from 'react'
import { GallerySlider } from './GallerySlider'

const Gallery = () => {

  return (
    <div className='h-screen bg-gray-950'>
        
        <div className='h-full w-[94%]  bg-gray-400 '>

          <div className='text-yellow-700 text-5xl absolute'>Gallery</div>

          <div className='relative left-40'>
            <GallerySlider/>
          </div>

        </div>
        

        
    </div>
  )
}

export default Gallery