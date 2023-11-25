import logo from "../assets/img/logo.png";

const About = () => {
  return (

      
      <div className="min-h-screen  flex flex-col justify-center items-center lg:px-42 px-5 gap-24  with-full bg-cover bg-no-repeat  bg-gray-300 ">
      <img src={logo} alt="logo" className="logo w-60 h-440  top-4 " />
        <div className=" w-full lg:w-2/3 space-y-10">
          <h1 className=" flex-row  font-mono text-center  text-4xl "> About Us</h1>
          <p className="flex-row font-semibold text-justify items-center ">
            As our name suggests, Smile 4You Foundation is committed to
            spreading happiness and creating a positive impact. We firmly
            believe that a smile can transform lives and create a ripple effect
            of joy and hope. With a team of passionate individuals, we work
            tirelessly to address various social issues and uplift those in need.
            
          </p>
        </div>
      </div>
  );
};

export default About;
