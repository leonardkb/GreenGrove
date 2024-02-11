import React from "react";
import ServiceCard from "../components/ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring";
import SelectionComponent from "../components/SelectionComponent";
import FramerExperiences from "../components/FramerExperiences";
import Footer from "../components/Footer";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Home() {
  const servicesData = {
    services: [
      {
        heading: "Fertilizer Formulation",
        description:
          "Crafting nutrient-rich fertilizers tailored to optimize crop health and yield, ensuring your soil thrives.",
      },
      {
        heading: "Soil Analysis Services",
        description:
          "Precise soil analysis for informed decision-making, providing insights into nutrient levels, pH balance, and overall soil health.",
      },
      {
        heading: "Seed Arrangement Solutions",
        description:
          "Expertly curated seed arrangements, designed to maximize growth potential and promote diverse and resilient crops.",
      },
      {
        heading: "Agricultural Marketplace",
        description:
          "A robust platform connecting farmers and buyers, facilitating the sale of high-quality produce and fostering agricultural community growth.",
      },
    ],
  };
  const imagesData = [
    {
      text: "We have a large laboratory to find out hybrid seeds",
      description:
        "Our state-of-the-art laboratory is equipped for researching and developing hybrid seeds to enhance crop quality and yield.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/06/09/26/laboratory-385349_1280.jpg",
    },
    {
      text: "We have a large network of farmers",
      description:
        "Connecting with a vast network of farmers ensures collaboration and support throughout the agricultural community.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/06/17/20/tractor-385681_960_720.jpg",
    },
    {
      text: "We have different schemes that help the farmers in building their farmlands",
      description:
        "Our diverse schemes provide farmers with valuable resources and assistance, fostering sustainable development of their farmlands.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/02/16/12/19/indonesia-1203250_1280.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative  w-full md:w-[90%] lg:w-[100%] xl:w-[70%] 2xl:w-[60%] flex flex-col w-max-[100vw] ">
      <div className="HeroSection h-[85vh] w-full">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/19/08/50/gardening-2518377_1280.jpg"
            alt="hero"
            className="w-full h-[85vh] object-cover absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-[85vh] bg-black opacity-50 blur-[2px] z-10"></div>
        </div>

        <div className="absolute pt-36 text-center w-full z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-4 text-white font-bold tracking-wider">
            Where Nature Thrives, Cultivating Beauty, One Leaf at a Time.
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-8">
            We’ve been the world's leading manufacturer of standardized
            botanical extracts for over 30 years. And we believe our journey has
            only begun.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-green-600 transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
      <div className="w-full ">
        <h2 className="text-3xl font-bold mb-4 text-center mt-10">
          What We Do!
        </h2>
        <div className="flex flex-wrap justify-center">
          {servicesData.services.map((service, index) => (
            <ServiceCard
              key={index}
              heading={service.heading}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {imagesData.map((item, index) => (
            <div key={index} className="relative mb-0">
              <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full p-4">
                <div className="w-[70%] mt-32">
                  <h1 className="text-white text-6xl font-semibold">
                    {item.text}
                  </h1>
                  <p className="text-white text-lg mt-6">{item.description}</p>
                </div>
              </div>

              <img
                src={item.imageUrl}
                alt=""
                className="w-full h-[81vh] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative text-black py-8 px-4 md:px-8 bg-gradient-to-b from-slate-200 to-slate-300 flex flex-col justify-start items-center">
        <div className="w-auto px-3 flex  flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 w-[100vw] text-center">
            Making a Difference Globally
          </h1>
          <div className="h-1 w-1/2 bg-green-500"></div>
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-lg md:text-xl lg:text-4xl xl:text-3xl font-medium my-2">
            Spreading across{" "}
            <span className="text-green-500 mx-2 text-xl md:text-2xl lg:text-6xl xl:text-4xl">
              <Number n={10} />
            </span>{" "}
            countries, with{" "}
            <span className="text-green-500 mx-2 text-xl md:text-2xl lg:text-6xl xl:text-4xl">
              <Number n={100} />
            </span>{" "}
            laboratories, impacting{" "}
            <span className="text-green-500 mx-2 text-xl md:text-2xl lg:text-6xl xl:text-4xl">
              <Number n={20000} />
            </span>{" "}
            farmers, and implementing{" "}
            <span className="text-green-500 mx-2 text-xl md:text-2xl lg:text-6xl xl:text-4xl">
              <Number n={30} />
            </span>{" "}
            different schemes.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          {/* Image Section (Hidden on Small Screens) */}
          <img
            src="https://images.pexels.com/photos/12131111/pexels-photo-12131111.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="w-1/2 rounded-lg shadow-md object-cover h-96 m-4 hidden sm:inline md:hidden lg:inline xl:inline 2xl:inline"
          />

          {/* Text Section */}
          <div className="ml-4 w-full lg:w-1/2">
            <h1 className="text-lg md:text-lg lg:text-xl xl:text-1xl font-medium mb-4">
              Our organization takes pride in making a significant global impact
              by reaching across borders and positively influencing communities
              in over 10 countries worldwide. Focused on innovative agricultural
              practices and sustainable initiatives, we aim to enhance the lives
              of farmers and contribute to the overall health of our planet.
            </h1>
            <h3 className="text-lg md:text-lg lg:text-xl xl:text-1xl font-medium mb-4">
              At the forefront of scientific advancements in agriculture, our
              extensive network spans over 100 laboratories and research
              centers. Our dedicated team collaborates to develop cutting-edge
              solutions, ensuring the prosperity of farmers and the advancement
              of agricultural practices on a global scale.
            </h3>
            {/* Add additional content or text here */}
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-sm lg:flex-row  justify-center items-center w-full">
          {/* Image Section (Hidden on Small Screens) */}

          {/* Text Section */}
          <div className="ml-4 w-full lg:w-1/2">
            <h1 className="text-lg md:text-lg lg:text-xl xl:text-1xl font-medium mb-4">
              We are committed to supporting more than 20,000 farmers, providing
              them with essential resources, knowledge, and tools to boost
              productivity. Through fostering strong relationships within the
              farming community, we actively contribute to the growth and
              stability of agriculture worldwide.
            </h1>
            <h3 className="text-lg md:text-lg lg:text-xl xl:text-1xl font-medium mb-4">
              Implementing over 30 different schemes, our organization addresses
              various challenges faced by farmers, ranging from crop management
              to sustainable practices. Our goal is to create a resilient and
              thriving agricultural ecosystem capable of withstanding the
              complexities of a changing world.
            </h3>
            {/* Add additional content or text here */}
          </div>
          <img
            src="https://images.pexels.com/photos/2316571/pexels-photo-2316571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-1/2 rounded-lg shadow-md object-cover h-96 m-4 hidden sm:inline md:hidden lg:inline xl:inline 2xl:inline"
          />
        </div>
        <div className="mt-6 flex items-center">
          <button className="bg-green-500 text-white py-2 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300 mr-4">
            Join Us
          </button>
          <a
            href="/learn-more"
            className="text-green-500 underline text-lg hover:text-green-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="">
        <SelectionComponent/>
      </div>
      <div className="lg:px-20 px-2 bg-[#FDF9ED] mb-10">
        <FramerExperiences/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
