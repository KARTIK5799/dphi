import React from 'react';
import { useNavigate } from 'react-router-dom';

const OverviewSection = ({ challengeData }) => {
  const navigate = useNavigate();

  const { description,id } = challengeData;

 const navigateToEdit=()=>{
  navigate(`/edit/${id}`);
 }
  const formatText = (text) => {
    if (!text) return [];

    return text.split('\n\n');
  };

  const paragraphs = formatText(description);

  return (
    <div className="h-auto w-screen">
      <div className="shadow-lg h-[5rem] flex justify-between items-center px-16">
        <div className="border-b-2 h-full flex items-center border-green-500">
          <h2 className="text-lg font-semibold">Overview</h2>
        </div>

        <div className="flex gap-4">
          <button onClick={navigateToEdit} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Edit
          </button>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>
      <div className="p-16">
        {paragraphs.map((para, index) => (
          <p key={index} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OverviewSection;
