'use client'

import React, { useState, useEffect } from 'react'
type SearchInputProps = {onSearchChange: (searchTerm:string)=>void}
const SearchInput = ({onSearchChange}:SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
    </div>
  )
}

export default SearchInput
