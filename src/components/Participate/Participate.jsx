
const Participate = () => {
  return (
    <section className="h-auto md:h-screen  pt-10 pb-10 md:pt-0 bg-white w-screen flex flex-col gap-5 justify-center items-center">
 <h1 className="text-3xl font-bold text-center">Why Participate in <span className="text-[#0FA958]"> AI Challenges?</span></h1>
    <div className="cardSection flex flex-wrap items-center justify-center gap-5 mt-5">
    <div className="w-[80vw] md:w-[33.875rem] bg-gray-100 h-[17.25rem] p-[1.25rem] flex flex-col gap-[0.5rem] justify-end items-start rounded-lg">
  <img src="src/assets/skills.png" alt="" />
  <h2 className="text-[1.5rem] font-bold">Prove your Skills</h2>
  <p className="text-gray-500">Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
</div>

<div className="w-[80vw] md:w-[33.875rem] bg-gray-100 h-[17.25rem] p-[1.25rem] flex flex-col gap-[0.5rem] justify-end items-start rounded-lg">
  <img src="src/assets/Vector.png" alt="" />
  <h2 className="text-[1.5rem] font-bold">Learn from community</h2>
  <p className="text-gray-500">One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
</div>

<div className="w-[80vw] md:w-[33.875rem] bg-gray-100 h-[17.25rem] p-[1.25rem] flex flex-col gap-[0.5rem] justify-end items-start rounded-lg">
  <img src="src/assets/Robot.png" alt="" />
  <h2 className="text-[1.5rem] font-bold">Challenge yourself</h2>
  <p className="text-gray-500">There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
</div>


<div className="w-[80vw] md:w-[33.875rem] bg-gray-100 h-[17.25rem] p-[1.25rem] flex flex-col gap-[0.5rem] justify-end items-start rounded-lg">
  <img src="src/assets/IdentificationCard.png" alt="" />
  <h2 className="text-[1.5rem] font-bold">Earn recognition</h2>
  <p className="text-gray-500">You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
</div>

    </div>
    </section >
  )
}

export default Participate
