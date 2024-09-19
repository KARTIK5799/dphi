import React, { useContext } from 'react';
import HackathonCard from "../HackathonCard/HackathonCard";
import { DataContext } from '../../context/DataContext'; 

const HackathonSection = ({ searchTerm, statusFilter, levelFilter }) => {
  const { data: hackathons } = useContext(DataContext);


  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = searchTerm.trim() === '' || hackathon.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === null || hackathon.status === statusFilter;
    const matchesLevel = levelFilter === null || hackathon.difficulty === levelFilter;
    return matchesSearch && matchesStatus && matchesLevel;
  });

  return (
    <section className="bg-[#003145] h-auto w-screen flex flex-wrap items-center justify-center gap-10 p-[5rem]">
      {filteredHackathons.length > 0 ? (
        filteredHackathons.map(hackathon => (
          <HackathonCard
            key={hackathon.id}
            title={hackathon.title}
            startDate={hackathon.startDate}
            endDate={hackathon.endDate}
            image={hackathon.image}
            difficulty={hackathon.difficulty}
            id={hackathon.id}
            status={hackathon.status} 
          />
        ))
      ) : (
        <p className="text-white min-h-[50vh] flex items-center justify-center">No challenges found.</p>
      )}
    </section>
  );
};

export default HackathonSection;
