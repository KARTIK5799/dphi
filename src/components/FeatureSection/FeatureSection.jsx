import aiImage from '../../assets/ai.png';
import dataImage from '../../assets/data.png';
import challengeImage from '../../assets/challange.png';

const FeatureSection = () => {
  return (
    <section className="w-full h-auto bg-[#002A3B] min-h-[20vh] flex items-center justify-center py-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center text-center min-w-32 md:border-r-4 justify-center gap-5 px-6 ">
            <img src={aiImage} alt="AI Models" className="w-16 h-16 mb-4" />
            <div className=' flex flex-col items-start'>
            <h2 className="text-3xl font-bold text-white">100K+</h2>
            <p className="text-lg text-white">AI Model Submissions</p>
            </div>
           
          </div>
          <div className="flex items-center text-center ml-[-3.2rem] min-w-32 md:border-r-4 justify-center gap-5  ">
            <img src={dataImage} alt="Data Scientists" className="w-16 h-16 mb-4" />
            <div className=' flex flex-col items-start'>
            <h2 className="text-3xl font-bold text-white">50K+</h2>
            <p className="text-lg text-white">Data Scientists</p>
            </div>
          </div>
          <div className="flex items-center text-center min-w-32 justify-center gap-5 px-6 ">
            <img src={challengeImage} alt="AI Challenges" className="w-16 h-16 mb-4" />
            <div className=' flex flex-col items-start'>
            <h2 className="text-3xl font-bold text-white">100+</h2>
            <p className="text-lg text-white">AI Challenges Hosted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
