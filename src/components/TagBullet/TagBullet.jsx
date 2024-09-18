import React from "react";

const TagBullet = ({ label, onRemove }) => {
  return (
    <div className="bg-gray-400 px-7 h-10 flex gap-5 justify-center items-center rounded-full">
      <p className="text-white">{label}</p>
      <button 
        className="bg-white text-black rounded-full p-0 h-5 w-5 flex justify-center items-center"
        onClick={onRemove} 
        aria-label={`Remove ${label} tag`}
      >
        <span className="material-symbols-outlined text-xs">close</span>
      </button>
    </div>
  );
};

export default TagBullet;
