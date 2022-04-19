import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import SearchBox from './components/SearchBox';
import Card from '../../components/Card/Card';
import './Download.style.scss';

function Download() {
  const [tab, setTab] = useState('info');
  const downloads = [
    {
      manufacturer: 'GSI (Universal Builds)',
      devices: [
        {
          name: 'A64',
          codename: 'a64',
          link: 'http://google.com',
        },
        {
          name: 'ARM',
          codename: 'arm',
          link: 'http://google.com',
        },
        {
          name: 'ARM64',
          codename: 'arm64',
          link: 'http://google.com',
        },
      ],
    },
    {
      manufacturer: 'Asus',
      devices: [
        {
          name: 'Zenfone 5',
          codename: 'X00QD',
          link: 'http://google.com',
        },
        {
          name: 'Zenfone Max Pro M1',
          codename: 'X00TD',
          link: 'http://google.com',
        },
        {
          name: 'Zenfone Max M2',
          codename: 'X01AD',
          link: 'http://google.com',
        },
      ],
    },
    {
      manufacturer: 'Google',
      devices: [
        {
          name: 'Pixel 3a XL',
          codename: 'bonito',
          link: 'http://google.com',
        },
        {
          name: 'Pixel 3a',
          codename: 'sargo',
          link: 'http://google.com',
        },
        {
          name: 'Pixel 2 XL',
          codename: 'taimen',
          link: 'http://google.com',
        },
        {
          name: 'Pixel 2',
          codename: 'walleye',
          link: 'http://google.com',
        },
      ],
    },
  ];

  // Toggle content
  const toggleContent = (content) => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };

  // Collapse all open content
  const collapseAllOpenContent = () => {
    const collapsible = document.querySelectorAll('.collapsible');

    collapsible.forEach((item) => {
      if (item.classList.contains('active')) {
        console.log(1);
        item.classList.remove('active');
        toggleContent(item.nextElementSibling);
      }
    });
  };

  // Toggle active state
  const toggleCollapsible = (e) => {
    const item = e.target;
    const content = item.nextElementSibling;

    if (!item.classList.contains('active')) {
      collapseAllOpenContent();
    }

    item.classList.toggle('active');
    toggleContent(content);
  };

  return (
    <section className='download'>
      <div className='container'>
        <h2 className='heading-lg text-primary font-md'>dotOS Downloads</h2>
        <SearchBox suggestions={downloads} />
        <div className='grid'>
          <div className='manufacturer'>
            <Card flexDirection='column'>
              <h3 className='heading-md'>Manufacturer</h3>
              <ul className='manufacturer-list'>
                {downloads.map((item) => (
                  <li key={item.manufacturer}>
                    <button
                      className='btn collapsible'
                      onClick={toggleCollapsible}
                    >
                      {item.manufacturer}
                      <FaChevronDown />
                    </button>
                    <div className='content'>
                      {item.devices.map((device) => (
                        <ul>
                          <li>
                            <a href='#' onClick={() => setTab('download')}>
                              {device.name}
                            </a>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          {tab === 'info' && (
            <div className='info'>
              <h3 className='heading-md font-md'>
                These are the official devices supported by{' '}
                <span className='text-primary'>DotOS</span> Team
              </h3>
              <h4 className='heading-sm font-md'>
                Note: All official builds are signed with strong cryptographic
                signatures.
              </h4>
              <p>
                Is your device missing from our list? Do you want your device to
                be supported by our team? Then the Interested Developer should
                apply for Maintainership or you can donate us to buy and support
                the device.
                <br />
                Are you developer? Click here to apply for device
                maintainership.
              </p>
            </div>
          )}
          {tab === 'download' && <h1>Downloads</h1>}
        </div>
      </div>
    </section>
  );
}

export default Download;
