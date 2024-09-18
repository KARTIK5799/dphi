import React, { useState } from "react";
import TagBullet from "../TagBullet/TagBullet";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <section className="min-h-[324px] w-screen flex flex-col gap-5 text-white bg-[#002A3B] justify-center items-center">
      <h2 className="text-3xl">Explore Challenges</h2>

      <div className="flex gap-5">
        {/* Search bar */}
        <div className="w-[50rem] bg-white flex gap-2 px-3 text-black text-xl py-1 items-center justify-center rounded">
          <span className="material-symbols-outlined text-gray-400">search</span>
          <input
            type="text"
            className="w-full outline-none text-black"
            placeholder="Search"
          />
        </div>

        {/* Filter button and dropdown */}
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

              {/* Status Filter */}
              <div className="mb-3">
                <h3 className="text-black text-md font-medium">Status</h3>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="all" />
                    <span>All</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="active" />
                    <span>Active</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="upcoming" />
                    <span>Upcoming</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="past" />
                    <span>Past</span>
                  </label>
                </div>
              </div>

              <hr className="my-2" />

              {/* Level Filter */}
              <div>
                <h3 className="text-black text-md font-medium">Level</h3>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="easy" />
                    <span>Easy</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="medium" />
                    <span>Medium</span>
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input type="checkbox" name="hard" />
                    <span>Hard</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tag bullets */}
      <div className="flex gap-3 flex-wrap md:max-w-[50%] items-center justify-center">
        {["Hard", "Medium", "Easy"].map((tag, index) => (
          <TagBullet key={index} label={tag} />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
