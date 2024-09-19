import heroImage from '../../assets/hero.svg';
import { useNavigate } from 'react-router-dom';


const formatDate = (date) => new Date(date).toLocaleDateString();

const HeroSection = ({ isDetail, challengeData = {} }) => {
  const navigate = useNavigate();

  const now = new Date();
  const startDate = new Date(challengeData.startDate);
  const endDate = new Date(challengeData.endDate);

  const status = (() => {
    if (now < startDate) {
      return { text: `Starts on ${formatDate(challengeData.startDate)} (Indian Standerd Time)`, colorClass: 'bg-yellow-400' };
    } else if (now > endDate) {
      return { text: `Ended on ${formatDate(challengeData.endDate)} (Indian Standerd Time)`, colorClass: 'bg-red-500' };
    } else {
      return { text: `Active till ${formatDate(challengeData.endDate)} (Indian Standerd Time)`, colorClass: 'bg-green-500' };
    }
  })();

  const handleCreateChallengeClick = () => {
    navigate('/create');
  };

  return (
    <section className={`${!isDetail ? "h-[80vh]" : "h-[50vh]"} w-screen bg-[#003145] text-white flex justify-center items-center p-6`}>
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full">
        <div className="flex-[6] text-center md:text-left space-y-6">
          {isDetail && (
            <div className={`w-full md:w-[29rem] ${status.colorClass} text-black py-2 px-4 flex items-center gap-2 rounded-lg md:rounded-lg mt-4 md:mt-0`}>
              <span className="material-symbols-outlined">schedule</span>
              <p>{status.text}</p>
            </div>
          )}
          <h1 className={`leading-tight ${!isDetail ? "md:ml-[-1rem] px-5 border-l-4 mr-8 text-2xl md:text-4xl lg:text-5xl font-bold" : "text-3xl"} border-yellow-500`}>
            {!isDetail ? "Accelerate Innovation with Global AI Challenges" : challengeData.title}
          </h1>
          <p className="text-sm md:text-lg leading-relaxed">
            {isDetail
              ? "AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets, allowing you to foster learning through competitions."
              : "Identify the class to which each butterfly belongs."
            }
          </p>
          {!isDetail ? (
            <button onClick={handleCreateChallengeClick} className="px-4 text-[#003145] py-2 bg-white text-text-[#003145] font-semibold rounded-md hover:bg-yellow-400 transition">
              Create Challenge
            </button>
          ) : (
            <div className="bg-white text-[#003145] max-w-[6rem] flex justify-center items-center px-6 py-2 rounded">
              <span className="material-symbols-outlined">signal_cellular_alt</span> {challengeData.difficulty.charAt(0).toUpperCase() + challengeData.difficulty.slice(1)}
            </div>
          )}
        </div>
        <div className="flex-[4] mt-8 md:mt-0 md:ml-8">
          {!isDetail && <img src={challengeData.image || heroImage} alt="Hero" className="w-full h-auto" />}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
