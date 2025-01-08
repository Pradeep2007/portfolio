import { Link } from "react-scroll";
import AboutData from "../data/about";
import ProfileData from "../data/profile";

const About = () => {
  const highlightedText = "B.Tech in Computer Science And Engineering at Maulana Azad National Institute Of Technology Bhopal.";

  // Function to replace highlighted text with a span containing the desired class
  const highlightText = (text) => {
    const regex = new RegExp(highlightedText, "g");
    return text.replace(
      regex,
      `<span class="text-pink-700">${highlightedText}</span>`
    );
  };

  return (
    <section className="body-font">
      <div className="mx-auto p-5 mt-3 md:mt-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-orange-500 text-center"
          >
            Why hire me?
          </p>
        </div>
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded backdrop-contrast-200 backdrop-brightness-200"
              src={AboutData.image}
              alt="Hero"
            />
          </div>
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 mb-4"
                // Using dangerouslySetInnerHTML to inject HTML
                dangerouslySetInnerHTML={{
                  __html: highlightText(item),
                }}
              />
            ))}
            <div />
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-black border-2 border-black py-3 px-7 focus:outline-none hover:bg-stone-200 hover:border-orange-600 hover:text-black rounded-full text-md xl:px-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
              <a href={ProfileData.resume} target="_blank" rel="noreferrer">
                <button className="inline-flex font-medium text-white bg-orange-500 border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-stone-200 hover:border-orange-600 hover:text-black rounded-full text-md xl:px-10">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
