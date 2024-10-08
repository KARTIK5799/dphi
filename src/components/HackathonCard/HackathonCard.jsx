import Timer from "../Timer/Timer";
import { useNavigate } from 'react-router-dom';

const HackathonCard = ({ title, startDate, endDate, image, id, status }) => {
  let navigate = useNavigate();

  const statusColors = {
    upcoming: "bg-yellow-200",
    active: "bg-green-300 text-green-800",
    ended: "bg-red-300 text-red-700",
  };

  

  const handleChallengeDetailPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="w-[352px] h-[473px] bg-white text-black flex flex-col rounded-2xl overflow-hidden shadow-lg">
      <div className="h-[40%] flex items-center justify-center">
        <img src={image} alt="Hackathon" className="object-cover w-full h-full" />
      </div>
      <div className="h-[60%] flex flex-col justify-around p-4 items-center">
        <p className={`px-5 text-xs rounded mt-[-10px] ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
        <h2 className="text-lg font-bold text-center max-w-64">
          {title}
        </h2>
        <Timer startDate={startDate} endDate={endDate} />
        <button onClick={handleChallengeDetailPage} className="bg-[#44924C] flex justify-center items-center gap-2 w-[70%] py-2 rounded-lg text-white">
          <span className="material-symbols-outlined">task_alt</span>
          Participate Now
        </button>
      </div>
    </div>
  );
};

export default HackathonCard;
