import { FaLayerGroup, FaFillDrip, FaWrench, FaAndroid } from 'react-icons/fa';
import Card from './shared/Card';

function Features() {
  return (
    <section id='features' className='features'>
      <div className='container'>
        <h2 className='heading-lg'>Features</h2>
        <p>Make your device look and feel great again</p>
        <div className='feature-list'>
          <Card height='200px'>
            <FaLayerGroup size='50px' />
            <div className='card-body'>
              <div className='card-title'>Quick Settings Redesign</div>
              <div className='card-text'>
                We want to keep the tradition going and we have released yet
                another redesign of the most used menu on a phone.
              </div>
            </div>
          </Card>
          <Card height='200px'>
            <FaFillDrip size='80px' />
            <div className='card-body'>
              <div className='card-title'>New Way to Personalize</div>
              <div className='card-text'>
                With the dotOS 5.0 release, we introduced a new app to
                personalize your device. You can now customize your device with
                your own icons, wallpaper, colors, and more!
              </div>
            </div>
          </Card>
          <Card height='200px'>
            <FaWrench size='50px' />
            <div className='card-body'>
              <div className='card-title'>Settings Design Update</div>
              <div className='card-text'>
                Google did a great job with Settings app, but some stuff just
                needs some polish, and that’s what we’ve done.
              </div>
            </div>
          </Card>
          <Card height='200px'>
            <FaAndroid size='50px' />
            <div className='card-body'>
              <div className='card-title'>Always Up-to-date</div>
              <div className='card-text'>
                Security was always our concern, that’s why security patches are
                merged as soon as possible.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Features;
