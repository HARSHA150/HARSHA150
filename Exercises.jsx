import React from 'react';
import '../../styles/exercises.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';

const Exercises = () => {
  return (
    <section id="Exercises">
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title" data-aos="zoom-in">
            Benefits of <span className='highlights'>Exercise</span>
          </h2>
          <p>
            Exercise improves physical health, boosts mood, enhances cognitive function, promotes better sleep, strengthens muscles and bones, reduces stress, increases energy levels, and extends lifespan. 
          </p>
        </div>
        <div className="exercise_wrapper">
          <div className="exercise_item">
            <span className="exercise_icon" data-aos="fade-up"
        data-aos-duration="2000">
              <img src={lunges} alt="" />
            </span>
            <div className="exercise_content">
              <h4 data-aos="fade-up"
        data-aos-duration="2000">Healthy Life</h4>
              <p data-aos="fade-up"
        data-aos-duration="2000">
                Exercise improves physical health, boosts mood, enhances cognitive function, promotes better sleep, strengthens muscles and bones.
              </p>
            </div>
          </div>

          <div className="exercise_item">
            <span className="exercise_icon" data-aos="fade-up"
        data-aos-duration="2000">
              <img src={yoga} alt="" />
            </span>
            <div className="exercise_content" data-aos="fade-up"
        data-aos-duration="2000">
              <h4>Reducing Blood Pressure</h4>
              <p>Meditation cultivates inner peace and enhances cognitive function, fostering a deeper level of thought and introspection within individuals.</p>
            </div>
          </div>

          <div className="exercise_item">
            <span className="exercise_icon" data-aos="fade-up"
        data-aos-duration="2000">
              <img src={extended} alt="" />
            </span>
            <div className="exercise_content" data-aos="fade-up"
        data-aos-duration="2000">
              <h4>Increasing Flexibility</h4>
              <p>
                Exercise improves physical health, boosts mood, enhances cognitive function, increases energy levels, and extends lifespan. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
