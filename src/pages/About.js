import React from "react";
import Navbar from "../features/navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Customer from "./About_images/customer-service.png";
import Team from "./About_images/teamwork.png";
import Vision from "./About_images/opportunity.png";
import Products from "./About_images/product.png";
// import Pic1 from "./About_images/pic1.jpg";
// import Pic2 from "./About_images/pic2.webp";
// import Pic3 from "./About_images/pic3.jpg";
// import Pic4 from "./About_images/pic4.jpg";

const data = [
  {
    name: "Sharuk",
    // img: {Pic1},
    img: "https://www.braychan.com.au/wp-content/uploads/2016/06/headshot-new-ret-crop-small-e1466732177135.jpg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
    cum molestiae fugit voluptatum`,
  },
  {
    name: "Deepika",
    // img: {Pic2},
    img: "https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
    cum molestiae fugit voluptatum`,
  },
  {
    name: "Salman",
    // img: {Pic3},
    img: "https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
    cum molestiae fugit voluptatum`,
  },
  {
    name: "Alia",
    // img: {Pic4},
    img: "https://st.depositphotos.com/8214686/53566/i/450/depositphotos_535666422-stock-photo-studio-head-shot-of-a.jpg",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
    cum molestiae fugit voluptatum`,
  },
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-gray-900 text-white pb-6">
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="mx-auto font-bold text-center text-4xl">About US</h1>
        <div className="m-7 px-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            cum molestiae fugit voluptatum reiciendis distinctio est nostrum nam
            alias quam exercitationem, itaque aliquid eaque sunt similique et
            soluta voluptatem voluptatibus, adipisci rem odit veniam! Maxime
            officia eveniet optio quis, dolore nemo commodi laborum minima
            consequuntur repudiandae cupiditate laboriosam voluptas nihil?
          </p>
        </div>
        <div className="w-full md:flex mx-auto">
          <div className="md:w-[50%] my-12">
            <div className="flex text-center">
              <div className="m-4 h-40 w-40 p-4 bg-green-300 hover:scale-105 duration-300">
                <h3 className="text-white">Our Services</h3>
                <img
                  src={Customer}
                  alt=""
                  className="h-10 w-10 mx-auto bg-green-300"
                />
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="m-4 h-40 w-40 p-4 bg-green-300 hover:scale-105 duration-300">
                <h3 className="text-white">Our Products</h3>
                <img
                  src={Products}
                  alt=""
                  className="h-10 w-10 mx-auto bg-green-300"
                />
                <p className="text-black">
                  Lorem ipsum consectetur adipisicing.
                </p>
              </div>
              <div className="m-4 h-40 w-40 p-4 bg-green-300 hover:scale-105 duration-300">
                <h3 className="text-white">Our Vision</h3>
                <img
                  src={Vision}
                  alt=""
                  className="h-10 w-10 mx-auto bg-green-300"
                />
                <p className="text-black">
                  Lorem ipsum consectetur adipisicing.
                </p>
              </div>
              <div className="m-4 h-40 w-40 p-4 bg-green-300 hover:scale-105 duration-300">
                <h3 className="text-white">Our Team</h3>
                <img
                  src={Team}
                  alt=""
                  className="h-10 w-10 mx-auto bg-green-300"
                />
                <p className="text-black">
                  Lorem ipsum consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] ">
            <h3 className="text-center mt-2">JOIN US</h3>
            <form className="">
              <div className="h-22 border p-4 m-3 bg-gray-300">
                <label htmlFor="email" className="text-black">
                  Full Name:
                </label>
                <input
                  type="name"
                  id="name"
                  placeholder="Enter name"
                  className="outline-none mx-3 border-0 bg-transparent text-gray-900 px-2 py-1 caret-black w-[80%]"
                />
              </div>
              <div className="h-22 border p-4 m-3 bg-gray-300">
                <label htmlFor="email" className="text-black">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="outline-none mx-3 border-0 bg-transparent text-gray-900 px-2 py-1 caret-black w-[80%]"
                />
              </div>
              <div className="h-22 border p-4 m-3 bg-gray-300">
                <label htmlFor="email" className="text-black">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="outline-none mx-3 border-0 text-gray-900 bg-transparent px-2 py-1 caret-black w-[80%]"
                />
              </div>
              <button className="bg-green-300 text-black rounded-lg h-10 w-20 mx-[45%] my-4 mt-2">
                JOIN
              </button>
            </form>
          </div>
          <div></div>
        </div>
        <div className="w-3/4 m-auto mt-20 mb-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-56 rounded-t-xl bg-green-300 flex justify-center items-center px-4 py-4 ">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="px-5">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 justify-center">
          <div className="w-[500px] md:w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100 text-black  hover:bg-white">
            <h2 className="text-4xl font-bold text-center py-8">44 million</h2>
            <p className="text-center text-2xl font-bold">
              Transactions every 24 hours
            </p>
          </div>
          <div className="w-3500px] md:w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100 text-black  hover:bg-white">
            <h2 className="text-4xl font-bold text-center py-8">
              $119 trillion
            </h2>
            <p className="text-center text-2xl font-bold">
              Assets under holding
            </p>
          </div>
          <div className="w-[500px] md:w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100 text-black  hover:bg-white">
            <h2 className="text-4xl font-bold text-center py-8">46,000</h2>
            <p className="text-center text-2xl font-bold">New users annually</p>
          </div>
        </div>
      </div>
      <div className=" border-2 mb-4 mx-14 text-center w-500 h-500">
        <address>
          <h3 className="my-4">Puttaparthi, Andhra Pradesh</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15474.228239332959!2d77.8091372!3d14.162118949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb165280bafd0e3%3A0x90a173d37e29cfb!2sPuttaparthi%2C%20Andhra%20Pradesh%20515134!5e0!3m2!1sen!2sin!4v1714065783227!5m2!1sen!2sin"
            className="w-600 h-450 mx-auto mb-5"
            style={{border: "0"}}
          ></iframe>
        </address>
      </div>
      <div className="flex justify-center">
        <button className="bg-green-300 text-black  p-5 rounded-xl font-semibold hover:scale-105 duration-3">
          Subscribe For NewsLetter!!
        </button>
      </div>
    </div>
  );
};

export default About;