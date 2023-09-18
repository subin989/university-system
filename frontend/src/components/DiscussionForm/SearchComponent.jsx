import React, { useState } from "react";
import { Input, Button } from "antd";

const SearchComponent = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="search-component">
      <Input
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button className="bg-blue-500 text-white mt-3" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchComponent;
