import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../../components/HeroSection/HeroSection';
import OverviewSection from '../../components/OverviewSection/OverviewSection';
import { DataContext } from '../../context/DataContext'; 

const DetailInfo = () => {
  const { id } = useParams();
  const { data: hackathons } = useContext(DataContext);

  const challengeData = hackathons.find(challenge => challenge.id === parseInt(id));

  if (!challengeData) {
    return <p>Challenge not found</p>;
  }

  return (
    <div>
      <HeroSection isDetail={true} challengeData={challengeData} />
      <OverviewSection challengeData={challengeData} />
    </div>
  );
};

export default DetailInfo;
