import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBox({ suggestions }) {
  // const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue);

    if (inputValue.trim() !== '') {
      setShowSuggestions(true);

      let filtered = [];
      for (let i = 0; i < suggestions.length; i++) {
        if (
          suggestions[i].manufacturer
            .toLowerCase()
            .indexOf(inputValue.toLowerCase()) > -1
        ) {
          filtered = [...filtered, ...suggestions[i].devices];
        }

        filtered = [
          ...filtered,
          ...suggestions[i].devices.filter(
            (device) =>
              device.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          ),
          ...suggestions[i].devices.filter(
            (device) =>
              device.codename.toLowerCase().indexOf(inputValue.toLowerCase()) >
              -1
          ),
        ];

        // Remove duplicates
        filtered = filtered.filter(
          (item, index, array) =>
            index ===
            array.findIndex(
              (i) => i.name === item.name && i.codename === item.codename
            )
        );

        if (filtered.length >= 5) break;
      }

      setFilteredSuggestions(filtered);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  };

  const handleClick = () => {};

  return (
    <>
      <div className='input-group'>
        <div className='search-icon'>
          <FaSearch />
        </div>
        <input
          type='text'
          value={userInput}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      {showSuggestions && (
        <ul>
          {filteredSuggestions.map((suggestion) => (
            <li key={suggestion.codename}>{suggestion.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchBox;
