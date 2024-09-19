import React, { useState } from "react";
import TagBullet from "../TagBullet/TagBullet";

const FilterSection = ({ onFilterChange }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange(e.target.value, statusFilter, levelFilter);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      onFilterChange(searchTerm, statusFilter, levelFilter);
    }
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    const newStatusFilter = value === 'all' ? null : value;
    setStatusFilter(newStatusFilter);
    onFilterChange(searchTerm, newStatusFilter, levelFilter);
  };

  const handleLevelChange = (e) => {
    const { value } = e.target;
    const newLevelFilter = value === 'all' ? null : value;
    setLevelFilter(newLevelFilter);
    onFilterChange(searchTerm, statusFilter, newLevelFilter);
  };

  const handleRemoveFilter = (filterType) => {
    if (filterType === 'status') {
      setStatusFilter(null);
      onFilterChange(searchTerm, null, levelFilter);
    } else if (filterType === 'level') {
      setLevelFilter(null);
      onFilterChange(searchTerm, statusFilter, null);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter(null);
    setLevelFilter(null);
    onFilterChange('', null, null);
  };

  return (
    <section className="min-h-[324px] w-screen flex flex-col gap-5 text-white bg-[#002A3B] justify-center items-center">
      <h2 className="text-3xl">Explore Challenges</h2>

      <div className="flex gap-5 items-center">
        <div className="gap-5 flex flex-col">
          <div className="w-[60vw] md:w-[50rem] bg-white flex gap-2 px-3 text-black text-xl py-1 items-center justify-center rounded">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input
              type="text"
              className="w-full outline-none text-gray-600"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyPress}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            {isInputFocused && searchTerm.trim() !== '' && (
              <button
                onClick={() => onFilterChange(searchTerm, statusFilter, levelFilter)}
                className="text-gray-600 text-sm te ml-2 flex justify-center items-center"
              >
                <span className="text-lg mr-2 material-symbols-outlined">
                  keyboard_return
                </span> 
                Enter
              </button>
            )}
          </div>

          

         
        </div>

        <div className="relative">
          <button
            onClick={handleToggleFilter}
            className="bg-white flex px-3 text-black text-xl py-1 items-center justify-center rounded"
          >
            Filter <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>

          {showFilter && (
            <div className="bg-white absolute left-[-5rem] md:left-0  mt-2 w-44 md:w-80 p-4 rounded shadow-lg">
              <h3 className="text-black text-lg font-semibold">Filters</h3>
              <hr className="my-2" />

              <div className="mb-3">
                <h3 className="text-black text-md font-medium">Status</h3>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="status"
                      value="all"
                      checked={statusFilter === null}
                      onChange={handleStatusChange}
                    />
                    <span>All</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={statusFilter === 'active'}
                      onChange={handleStatusChange}
                    />
                    <span>Active</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="status"
                      value="upcoming"
                      checked={statusFilter === 'upcoming'}
                      onChange={handleStatusChange}
                    />
                    <span>Upcoming</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="status"
                      value="ended"
                      checked={statusFilter === 'ended'}
                      onChange={handleStatusChange}
                    />
                    <span>Ended</span>
                  </label>

                  
                </div>
              </div>

              <hr className="my-2" />

              <div>
                <h3 className="text-black text-md font-medium">Level</h3>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="level"
                      value="easy"
                      checked={levelFilter === 'easy'}
                      onChange={handleLevelChange}
                    />
                    <span>Easy</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="level"
                      value="medium"
                      checked={levelFilter === 'medium'}
                      onChange={handleLevelChange}
                    />
                    <span>Medium</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="level"
                      value="hard"
                      checked={levelFilter === 'hard'}
                      onChange={handleLevelChange}
                    />
                    <span>Hard</span>
                  </label>
                </div>
                <button
            onClick={handleResetFilters}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset Filters
          </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 max-w-[90vw] md:max-w-[60%] flex gap-2 flex-wrap">
            {statusFilter && <TagBullet label={`${statusFilter}`} onRemove={() => handleRemoveFilter('status')} />}
            {levelFilter && <TagBullet label={` ${levelFilter}`} onRemove={() => handleRemoveFilter('level')} />}
          </div>
    </section>
  );
};

export default FilterSection;
