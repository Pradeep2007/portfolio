import ExperienceData from "../data/experience"

const Experience = ()=>{
    return(
        <section className="body-font bg-white mt-4 md:mt-7">
            <div className="p-4 pt-0 mt-5 mx-auto md:p-5 lg:mx-32 xl:mx-56 md:mx-20">
                <div id="experience" className="flex flex-col items-center w-full mb-8 text-center">
                    <h1 className="text-gray-950 sm:text-4xl text-3xl font-medium title-font mb-2">Experience</h1>
                    <p
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    className="font-medium text-orange-500 text-lg text-center leading-relaxed mx-auto"
                    >Professional Experience</p>
                </div>
                <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="px-2 py-4 justify-center items-center border-t-gray-100 border-2 rounded-md md:shadow-md flex flex-col "
                >
                    <p 
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-once="false"
                    className="text-2xl sm:text-3xl font-medium"
                    >Technical Executive</p>
                    <div className="mx-auto p-10">
                        {ExperienceData?.map((item,Index) => {
                            return(
                                <div key={Index} className="flex flex-col justify-center items-center lg:flex-row ">
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-once="false"
                                    className="lg:w-1/2  w-full mb-10 md:mb-0 gap-x-4"
                                    >
                                        <img className="lg:p-5 xl:p-7 md:p-5  object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200" src={item.image} alt="owasp" />
                                    </div>
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-once="false"
                                    className="lg:w-2/3 w-full"
                                    >
                                    <p className="text-gray-700 lg:text-base xl:text-xl leading-loose  font-medium text-lg justify-center lg:p-5 xl:p-7 md:p-5 items-center text-justify">{item.description}</p>
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>
                    <div>
                    October 2024 - Present
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience

