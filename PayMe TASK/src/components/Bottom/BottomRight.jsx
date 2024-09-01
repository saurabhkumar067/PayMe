import React from 'react'

function BottomRight() {
  return (
    <div>
        <ul className='grid grid-cols-3 gap-y-10 media-gap media-font-0-95 font-semibold'>
            {["Work With Us","Private Coaching", "About Us", "Advertise With Us","Our Work","FAQs", "Support Us","Our Commitment", "Report a Bug","Business Advices", "Our Team",  ].map((item, index)=>{
              return (
                <li key={index}>{item}</li>
              )
            })}
        </ul>
    </div>
  )
}

export default BottomRight