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

  return (
    <section className="min-h-[324px] w-screen flex flex-col gap-5 text-white bg-[#002A3B] justify-center items-center">
      <h2 className="text-3xl">Explore Challenges</h2>

      <div className="flex gap-5 items-center">
        <div className="gap-5 flex flex-col">
          <div className="w-[50rem] bg-white flex gap-2 px-3 text-black text-xl py-1 items-center justify-center rounded">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input
              type="text"
              className="w-full outline-none text-black"
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
                className="text-black ml-2"
              >
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
            <div className="bg-white absolute mt-2 w-80 p-4 rounded shadow-lg">
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
                      value="past"
                      checked={statusFilter === 'past'}
                      onChange={handleStatusChange}
                    />
                    <span>Past</span>
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
              </div>

              <div className="flex gap-2 mt-4">
                {statusFilter && (
                  <TagBullet 
                    text={statusFilter}
                    onRemove={() => handleRemoveFilter('status')}
                  />
                )}
                {levelFilter && (
                  <TagBullet 
                    text={levelFilter}
                    onRemove={() => handleRemoveFilter('level')}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
