import SearchBar from "@mkyy/mui-search-bar";
import { Box } from "@mui/material";
import { useState } from 'react';

const Searchbar = () => {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleSearch = labelOptionValue => {
    console.log('Search value:', labelOptionValue);
  };

  return (
    <Box className='searchbar-box'>
      <SearchBar
        className="searchbar-look"
        value={textFieldValue}
        onChange={newValue => setTextFieldValue(newValue)}
        onSearch={() => handleSearch(textFieldValue)}
        placeholder="Wyszukaj"
      />
    </Box>
  );
}

export default Searchbar;
