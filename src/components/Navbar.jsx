function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <a href='#'>#droidontime</a>
        </div>
        <ul className='nav-links'>
          <li className='nav-link-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-link-item'>
            <a href='#features'>Features</a>
          </li>
          <li className='nav-link-item'>
            <a href='#'>Download</a>
          </li>
          <li className='nav-link-item'>
            <a href='#about'>About</a>
          </li>
          <li className='nav-link-item'>
            <a href='#'>Contact Us</a>
          </li>
          <li className='nav-link-item'>
            <a href='#'>FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
