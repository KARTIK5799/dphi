import React from 'react';
import HackathonCard from "../HackathonCard/HackathonCard";
import { hackathons } from '../../../public/data'; 

const HackathonSection = () => {
  return (
    <section className="bg-[#003145] h-auto w-screen flex flex-wrap items-center justify-center gap-10 p-[5rem]">
      {hackathons.map((hackathon, index) => (
        <HackathonCard
          key={index}
          title={hackathon.title}
          startDate={hackathon.startDate}
          endDate={hackathon.endDate}
          image={hackathon.image}
          difficulty={hackathon.difficulty}
        />
      ))}
    </section>
  ); 
};

export default HackathonSection;
