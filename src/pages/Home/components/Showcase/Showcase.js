import heroImage from '../../../../components/assets/images/hero-image.webp';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import './Showcase.style.scss';

function Showcase() {
  return (
    <section id='showcase' className='showcase'>
      <div className='container'>
        <div className='isometric'>5</div>
        <div className='showcase-text'>
          <h1 className='heading-xxl'>dotOS</h1>
          <h3 className='heading-lg'>5.2 release (2021)</h3>
          <p className='desc heading-md'>
            <b>Droid on Time</b> | A beautiful custom ROM based on <b>AOSP</b>,
            which endeavors the essence of <b>"Simple"</b>, <b>"Unique"</b>,{' '}
            <b>"Secure"</b>.
          </p>
          <Button>
            <Link to='/download'>Find your device</Link>
          </Button>
        </div>
        <div className='showcase-img'>
          <img src={heroImage} alt='hero-image' />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
