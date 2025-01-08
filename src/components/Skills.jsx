import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 lg:mx-32 xl:mx-56 md:mx-20">
        <div id="skills" className="flex flex-col flex-wrap justify-center items-center w-full mb-4 md:mb-7">
          <h1 className="text-gray-900  text-3xl md:text-4xl mb-2 font-medium">
            Skills
          </h1>
          <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-once="flase"
          className="text-orange-500 md:text-lg font-medium leading-relaxed"
          >
            My Technical Expertise
          </p>
        </div>
        <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-once="false"
        className="grid lg:grid-cols-5 xl:grid-cols-6  sm:grid-cols-4 grid-cols-3 gap-x-3 gap-y-10 border-t-gray-100 border-2 rounded-md md:shadow-md px-2 py-10 justify-center items-center"
        >
            {SkillsData.map((item,index)=>{
                return(
                    <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-once="false"
                    key={index}
                    className="flex flex-col w-20 h-20 items-center justify-center mx-auto md:w-24 md:h-24 lg:m-3 xl:m-5"
                    >
                        <img className="m-2 object-cover transition duration-700 lg:w-16 lg:h-16 md:w-14 md:h-14 w-12 h-12 hover:scale-110" src={item.image} alt={item.name} />
                        <p className="font-medium">{item.name}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;