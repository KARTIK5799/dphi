import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OverviewSection = ({ challengeData }) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  
  const { description, id } = challengeData;

  const navigateToEdit = () => {
    navigate(`/edit/${id}`);
  };

  const formatText = (text) => {
    if (!text) return [];

    return text.split('\n\n');
  };

  const paragraphs = formatText(description);

  const handleDelete = async () => {
    try {
    
      await new Promise((resolve) => setTimeout(resolve, 500)); 


      setIsDeleted(true);

      setTimeout(() => navigate('/'), 1000); 
    } catch (error) {
      console.error('Failed to delete the challenge:', error);
      
    }
  };

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
          <button onClick={handleDelete} className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>
      <div className="p-16">
        {isDeleted ? (
          <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-md">
            <h3 className="font-semibold">Challenge Deleted</h3>
            <p>The challenge has been successfully deleted.</p>
          </div>
        ) : (
          <>
            {paragraphs.map((para, index) => (
              <p key={index} className="mb-4">
                {para}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OverviewSection;
