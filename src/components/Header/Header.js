import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.style.scss';

function Header() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      if (hash === '') {
        // scroll to top
        window.scrollTo(0, 0);

        // set active on home link
        document
          .querySelector('.nav-link-item:first-child > *')
          .classList.add('active');
        setActive();
      } else {
        // scroll to element
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
  }, [pathname, hash]);

  const setActive = (e) => {
    const curLink =
      e?.target || document.querySelector('.nav-link-item:first-child > *'); // fallback for click on logo
    let navLinks = document.querySelectorAll('.nav-link-item > *');

    navLinks.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });

    curLink.classList.add('active');
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>#droidontime</Link>
          </div>
          <ul className='nav-links'>
            <li className='nav-link-item'>
              <Link to='/' className='active' onClick={setActive}>
                Home
              </Link>
            </li>
            <li className='nav-link-item'>
              <Link to='/#features' onClick={setActive}>
                Features
              </Link>
            </li>

            <li className='nav-link-item'>
              <Link to='/#about' onClick={setActive}>
                About
              </Link>
            </li>

            <li className='nav-link-item'>
              <Link to='/#faq' onClick={setActive}>
                FAQ
              </Link>
            </li>
            <li className='nav-link-item'>
              <a href='https://t.me/dotOSchannel' onClick={setActive}>
                Contact
              </a>
            </li>
            <li className='nav-link-item'>
              <Link to='download' onClick={setActive}>
                Download
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
