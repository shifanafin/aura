'use client'

import React from 'react'
type FilterPanelProps = {onFilterChange: (filter:string)=>void}

function FilterPanel({onFilterChange}:FilterPanelProps) {
const [selected,setSelected] = React.useState<string | ''>('all');
const category = ['all', 'electronics', 'clothing', 'books'];
  return (
    <div>
      <select value={selected} onChange={(e) => {
        setSelected(e.target.value);
        onFilterChange(e.target.value);
      }}>
        {category.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterPanel
