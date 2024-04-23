import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return <section>
    <div className="container">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={trainerImg} alt="" />
            </div>
            <div className="start_content">
                <h2 className="section_title">
                    Ready to make a <span className="highlights">change?</span>
                </h2>
                <p>
                Empowerment, strength, and resilience fuel the journey toward personal growth and fulfillment. With determination and support, every individual can conquer obstacles and achieve their goals in the pursuit of greatness. 
                </p>
            </div>
        </div>
    </div>
  </section>
}

export default Start;