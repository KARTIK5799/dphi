import heroImage from '../../assets/hero.svg';

const HeroSection = () => {
  return (
    <section className="h-[80vh] w-screen bg-[#003145] text-white flex justify-center items-center p-6">
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full">
        
    
        <div className="flex-[6] text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight px-10 ml-[-2.2rem] border-l-4 border-yellow-500">
            Accelerate Innovation with Global AI Challenges
          </h1>
          <p className="text-lg md:text-xl  leading-relaxed">
            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets, allowing you to foster learning through competitions.
          </p>
          <button className="px-6 py-3 bg-[#fff] text-black font-semibold rounded-md hover:bg-[#fbbf24] transition">
            Create Challenge
          </button>
        </div>

     
        <div className="flex-[4] mt-8 md:mt-0 md:ml-8">
          <img src={heroImage} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
