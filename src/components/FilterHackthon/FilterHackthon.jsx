import React, { useState } from 'react';
import FilterSection from '../FilterSection/FilterSection'; 
import HackathonSection from '../HackathonSection/HackathonSection';

const FilterHackthon = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);

  const handleFilterChange = (newSearchTerm, newStatusFilter, newLevelFilter) => {
    setSearchTerm(newSearchTerm);
    setStatusFilter(newStatusFilter);
    setLevelFilter(newLevelFilter);
  }

  return (
    <div>
      <FilterSection onFilterChange={handleFilterChange} />
      <HackathonSection 
        searchTerm={searchTerm} 
        statusFilter={statusFilter}
        levelFilter={levelFilter}
      />
    </div>
  );
};

export default FilterHackthon;
