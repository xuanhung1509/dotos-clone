import { useState } from 'react';
import { FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa';
import Card from '../../../../components/Card/Card';
import Button from '../../../../components/Button/Button';
import './Rom.style.scss';
import { useParams } from 'react-router-dom';

function Rom({ roms }) {
  const [tab, setTab] = useState('vanilla');
  const setActive = (element) => {
    const romTypes = document.querySelectorAll('.rom-variants > *');
    romTypes.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    element.classList.toggle('active');
  };

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
      .querySelector('.rom')
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

  const toTitleCase = (str) => {
    let newStr;
    newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
  };

  const getDate = (rawDate) => {
    let dateArr = rawDate.split('-');
    let newDate = `${dateArr[5].slice(4, 6)}/${dateArr[5].slice(
      6
    )}/${dateArr[5].slice(0, 4)}`;
    newDate = new Date(newDate);
    newDate = newDate.toString();
    let newDateArr = newDate.split(' ');
    newDate = newDateArr.slice(0, 4).join(' ');
    return newDate;
  };

  const { codename } = useParams();

  const getCurDevice = () => {
    for (let i = 0; i < roms.length; i++) {
      let device = roms[i].devices.find((item) => item.codename === codename);
      if (device) {
        return device;
      }
    }
  };

  const device = getCurDevice();
  let romCount = 0;

  return (
    <div className='rom'>
      <Card>
        <div className='rom-head'>
          <Card>
            <div className='rom-info'>
              <div>
                <h3>
                  <span className='text-primary'>{device.brandName}</span>{' '}
                  {device.deviceName} ({device.codename})
                </h3>
                <small>
                  Maintained by{' '}
                  <a
                    href={device.maintainers.profileURL}
                    className='text-primary'
                  >
                    {' '}
                    {device.maintainers.name}
                  </a>
                </small>
              </div>
              <small
                className={`${
                  device.discontinued ? 'discontinued' : 'supported'
                }`}
              >
                {device.discontinued ? 'Discontinued' : 'Supported'}
              </small>
            </div>
            <div className='rom-variants'>
              <div
                className='vanilla active'
                onClick={(e) => {
                  setTab('vanilla');
                  setActive(e.target.parentElement);
                }}
              >
                <Button type='primary-light'>Vanilla</Button>
              </div>
              <div
                className='gapps'
                onClick={(e) => {
                  setTab('gapps');
                  setActive(e.target.parentElement);
                }}
              >
                <Button type='primary-light'>Gapps</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className='rom-body'>
          <ul className='rom-list'>
            {device.releases !== null &&
              device.releases
                .slice(0)
                .reverse()
                .map((item) => {
                  if (item.type === tab) {
                    romCount += 1;

                    return (
                      <li key={item.hash} className='rom-list-item'>
                        <button
                          className='collapsible'
                          onClick={toggleCollapsible}
                        >
                          <FaChevronRight />
                          <span
                            className={`status ${
                              item.version.includes('beta') ? 'beta' : 'stable'
                            }`}
                          >
                            {item.version.includes('beta') ? 'Beta' : 'Stable'}
                          </span>
                          {item.version} - {toTitleCase(tab)} -{' '}
                          {getDate(item.fileName)}
                        </button>
                        <div className='content'>
                          <div>
                            <h4>
                              <span className='text-primary'>File Size: </span>
                              {(item.size / 1024 / 1024).toFixed(2)} MB
                            </h4>
                            <Card>
                              <p>
                                <span className='text-primary'>Version: </span>{' '}
                                {item.version}
                              </p>
                              <p>
                                <span className='text-primary'>
                                  File name:{' '}
                                </span>{' '}
                                {item.fileName}
                              </p>
                              <p>
                                <span className='text-primary'>
                                  File hash:{' '}
                                </span>{' '}
                                {item.hash}
                              </p>
                            </Card>
                            <div className='content-end'>
                              <span>
                                <FaRegCalendarAlt /> {getDate(item.fileName)}
                              </span>
                              <a href={item.url} className='btn-primary'>
                                Downloads
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                })}

            {romCount === 0 && <h3>No builds found</h3>}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default Rom;
