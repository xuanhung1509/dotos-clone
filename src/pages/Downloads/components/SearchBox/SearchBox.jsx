import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Searchbox.style.scss';
import { Link } from 'react-router-dom';

function SearchBox({ suggestions, setTab }) {
  // const [activeSuggestion, setActiveSuggestion] = useState(0);
  // const [userInput, setUserInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const maxSuggestions = 5;

  const handleChange = (e) => {
    const inputValue = e.target.value;
    let filtered = [];

    for (let i = 0; i < suggestions.length; i++) {
      if (filtered.length >= maxSuggestions) break;

      for (let t = 0; t < suggestions[i].devices.length; t++) {
        let curDevice = suggestions[i].devices[t];
        let fullName = `${curDevice.brandName} ${curDevice.deviceName} ${curDevice.codename}`;

        if (
          fullName.toLowerCase().indexOf(inputValue.trim().toLowerCase()) > -1
        ) {
          filtered = [...filtered, curDevice];
        }
      }
    }

    if (inputValue.trim() !== '' && filtered.length !== 0) {
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <div className='input-group'>
        <div className='search-icon'>
          <FaSearch />
        </div>
        <input
          type='text'
          placeholder='Search your device'
          // value={userInput}
          onFocus={(e) => e.target.parentElement.classList.add('focus')}
          onBlur={(e) => e.target.parentElement.classList.remove('focus')}
          onChange={handleChange}
        />
      </div>
      {showSuggestions && (
        <div className='suggestion-wrapper'>
          <ul className='suggestion-list'>
            {filteredSuggestions.slice(0, maxSuggestions).map((suggestion) => (
              <li
                key={suggestion.codename}
                className='suggestion-list-item'
                onClick={() =>
                  (document.querySelector('.input-group > input').value = '')
                }
              >
                <Link to={`/download/${suggestion.codename}`}>
                  [{suggestion.brandName}] {suggestion.deviceName} (
                  {suggestion.codename})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SearchBox;
