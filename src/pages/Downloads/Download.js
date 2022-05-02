import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import SearchBox from './components/SearchBox/SearchBox';
import Rom from './components/Rom/Rom';
import Card from '../../components/Card/Card';
import './Download.style.scss';
import { Routes, Route, Link } from 'react-router-dom';

function Download() {
  const [downloads, setDownloads] = useState([]);
  const [curCodename, setCurCodename] = useState('a64');
  const getCurDevice = () => {
    for (let i = 0; i < downloads.length; i++) {
      let device = downloads[i].devices.find(
        (item) => item.codename === curCodename
      );
      if (device) {
        return device;
      }
    }
  };

  const fetchData = async () => {
    const response = await fetch('db.json');
    const data = await response.json();

    setDownloads(data.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    const collapsible = document
      .querySelector('.manufacturer')
      .querySelectorAll('.collapsible');

    collapsible.forEach((item) => {
      if (item.classList.contains('active')) {
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
            <Card>
              <h3 className='heading-md'>Manufacturer</h3>
              <ul className='manufacturer-list'>
                {downloads.map((item) => (
                  <li key={item.manufacturer}>
                    <button className='collapsible' onClick={toggleCollapsible}>
                      {item.manufacturer}
                      <FaChevronDown />
                    </button>
                    <ul className='content device-list'>
                      {item.devices.map((device) => (
                        <li key={device.codename} className='device-list-item'>
                          <Link
                            to={`/download/${device.codename}`}
                            onClick={() => {
                              setCurCodename(device.codename);
                            }}
                          >
                            {device.deviceName} ({device.codename})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Routes>
            <Route path='/' element={<DownloadInfo />} />
            <Route path='/:codename' element={<Rom roms={downloads} />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default Download;

function DownloadInfo() {
  return (
    <div className='info'>
      <h3>
        These are the official devices supported by{' '}
        <span className='text-primary'>DotOS</span> Team
      </h3>
      <h4 className='heading-sm'>
        Note: All official builds are signed with strong{' '}
        <span className='text-primary'>cryptographic signatures.</span>
      </h4>
      <p>
        Is your device missing from our list? Do you want your device to be
        supported by our team? Then the Interested Developer should apply for
        Maintainership or you can donate us to buy and support the device.
        <br />
        Are you developer? Click here to apply for device maintainership.
      </p>
    </div>
  );
}
