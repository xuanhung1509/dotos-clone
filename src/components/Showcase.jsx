import Button from './shared/Button';
import heroImage from './assets/heroimage.webp';

function Showcase() {
  return (
    <section id='showcase' className='showcase'>
      <div className='container'>
        <div className='isometric'>5</div>
        <div className='showcase-text'>
          <h1 className='heading-xl'>dotOS</h1>
          <h3 className='heading-lg font-md'>5.2 release (2021)</h3>
          <p className='desc heading-md'>
            <b>Droid on Time</b> | A beautiful custom ROM based on <b>AOSP</b>,
            which endeavors the essence of <b>"Simple"</b>, <b>"Unique"</b>,{' '}
            <b>"Secure"</b>.
          </p>
          <Button>Find your device</Button>
        </div>
        <div className='showcase-img'>
          <img src={heroImage} alt='hero-image' />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
