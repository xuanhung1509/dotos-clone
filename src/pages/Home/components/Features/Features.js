import { FaLayerGroup, FaFillDrip, FaWrench, FaAndroid } from 'react-icons/fa';
import Card from '../../../../components/Card/Card';
import './Features.style.scss';

function Features() {
  const features = [
    {
      icon: <FaLayerGroup size='50px' />,
      name: 'Quick Settings Redesign',
      desc: 'We want to keep the tradition going and we have released yet another redesign of the most used menu on a phone.',
    },
    {
      icon: <FaFillDrip size='50px' />,
      name: 'New Way to Personalize',
      desc: 'You can now customize your device with your own icons, wallpaper, colors, and more with Customizations.',
    },
    {
      icon: <FaWrench size='50px' />,
      name: 'Settings Design Update',
      desc: 'Google did a great job with Settings app, but some stuff just needs some polish, and that’s what we’ve done.',
    },
    {
      icon: <FaAndroid size='50px' />,
      name: 'Always Up-to-date',
      desc: 'Security was always our concern, that’s why security patches are merged as soon as possible.',
    },
  ];

  return (
    <section id='features' className='features'>
      <div className='container'>
        <h2 className='heading-xl'>Features</h2>
        <p>Make your device look and feel great again</p>
        <div className='feature-list'>
          {features.map((feature) => (
            <Card key={feature.name}>
              {feature.icon}
              <div className='card-body'>
                <div className='card-title'>{feature.name}</div>
                <div className='card-text'>{feature.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
