import React from 'react'
import "./Paragraph.css";

function Paragraph({backgroundcolor}) {
  
  return (
      <p className='paraBody' style={{backgroundColor:backgroundcolor.bg,color:backgroundcolor.text}}>These days, the question of Lorem Ipsum's relevance is often brought up. Proponents of not using Lorem Ipsum suggest that there is no longer a need to use placeholder text at all. For them, using Lorem Ipsum will only confuse stakeholders and the creative team.</p>
  )
}

export default Paragraph
