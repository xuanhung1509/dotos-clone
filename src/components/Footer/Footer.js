import { MdAssessment, MdGTranslate } from 'react-icons/md';
import { FaGithub, FaCode, FaTelegram, FaHeart } from 'react-icons/fa';
import './Footer.style.scss';

function Footer() {
  const getFooterYear = () => {
    return new Date().getUTCFullYear();
  };
  const footerYear = getFooterYear();

  return (
    <footer>
      <div className='container'>
        <h3 className='heading-md'>DROIDONTIME</h3>
        <ul className='footer-links'>
          <div className='footer-link-wrapper'>
            <li className='footer-link-item'>
              <a href='#'>Devices</a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>Blog</a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>Team</a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>Donate</a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>Contributors</a>
            </li>
          </div>
          <div className='footer-link-wrapper'>
            <li className='footer-link-item'>
              <a href='#'>
                <MdAssessment />
                Statistics
              </a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>
                <FaGithub />
                GitHub
              </a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>
                <FaCode />
                Gerrit Code Review
              </a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>
                <MdGTranslate />
                Translate
              </a>
            </li>
            <li className='footer-link-item'>
              <a href='#'>
                <FaTelegram />
                Telegram Channel
              </a>
            </li>
          </div>
        </ul>

        <h4 className='heading-sm'>
          Made with <FaHeart className='icon-heart' /> by{' '}
          <a href='#'>Manish Bajpai</a> &amp; <a href='#'>ririxi</a>
        </h4>

        <p>&copy; dotOS 2017-{footerYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
