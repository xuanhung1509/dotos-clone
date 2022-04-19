import about from '../../../../components/assets/images/about.webp';
import './About.style.scss';

function About() {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='about-text'>
          <h2 className='heading-xl'>About dotOS</h2>
          <p>
            DroidOnTime is a custom Android firmware. It was launched with an
            aim to provide Unique user interface and Optimum performance that
            too keeping in mind the balance between performance and battery
            life.
            <br />
            Based on Google's Android Open Source Project with Hand-picked
            goodies, innovative ideas and creative things that are added in the
            rom to enhance user experience!
          </p>
        </div>
        <div className='about-img'>
          <img src={about} alt='about-dotos' />
        </div>
      </div>
    </section>
  );
}

export default About;
