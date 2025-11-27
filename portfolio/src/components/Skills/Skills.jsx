import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <>
    <div className="wrapper">
  <div className="conty">  
    <p>MY SPECIALTY</p>
    <h5>MY SKILLS</h5>
    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
  </div>
  <div className="row">
    <div className="col g-4 position-relative">
      <p className='position-absolute start-10 bottom-50'>Photoshop - <span className="text-info position-absolute start-75">75%</span></p>
      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-info" style={{width: '75%'}} />
      </div>
    </div> 
    <div className="col g-4 position-relative">
      <p className='position-absolute start-10 bottom-50'>JQuery - <span className="text-danger position-absolute start-60">60%</span></p>
      <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-danger" style={{width: '60%'}} />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col g-4 position-relative">
      <p className='position-absolute start-10 bottom-50'>HTML5 - <span className="text-warning position-absolute start-85">85%</span></p>
      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={8885} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-warning" style={{width: '85%'}} />
      </div>
    </div> 
    <div className="col g-4 position-relative">
      <p className='position-absolute start-10 bottom-50'>CSS3 - <span className="text-secondarry position-absolute start-90">90%</span></p>
      <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-secondary" style={{width: '90%'}} />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col g-4 position-relative">
      <p className='position-absolute start-10 bottom-50'>WWordPrress - <span className="text-success position-absolute start-70">70%</span></p>
      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-success" style={{width: '70%'}} />
      </div>
    </div> 
    <div className="col g-4 position-relative">
      <p className='position-absolute start-10 bottom-50'>SEO - <span className="text-primary position-absolute start-80">80%</span></p>
      <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar bg-primary" style={{width: '80%'}} />
      </div>
    </div>
  </div>
</div>

    </>
  )
}
