import React from 'react'
import Button from '../button/Button'

function BannerRight() {
  return (
    <div>
        <div className='py-7 media-padding-right-2 pr-20 pl-12'>
            <p className='text-white mb-6'>Ready to transform your digital dresence? Let's create magic together! book our services now!</p>
            <Button ButtonText="Book Call" color="bg-white media-color-black text-[#000] hover:bg-slate-100 border-none text-xl font-semibold px-10 "/>
        </div>
    </div>
  )
}

export default BannerRight