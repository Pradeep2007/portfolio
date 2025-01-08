import ContactData from "../data/contact";

const SocialHandels = () =>{
    return(
        <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-once="false"
        className="flex gap-5 my-4"
        >
            {ContactData?.links?.map((link,index) =>(
                <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125"
                >
                    <link.icon/>
                </a>
            ))}
        </div>
    )
}
export default SocialHandels;