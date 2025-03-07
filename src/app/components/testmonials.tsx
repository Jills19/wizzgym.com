"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FiveStars } from "./fivestars";

export const TestimonialSection = () => {
  const testmonials = [
    {
      name: "Josh",
      message:
        "Wizz Gym offers a welcoming atmosphere and excellent equipment. The group classes are fun yet challenging, and the trainers truly motivate you. I’ve seen amazing results! ",
      img: "",
    },
    {
      name: "Mike",
      message:
        "The supportive trainers, clean facilities, and diverse classes keep me motivated. Whether you're a beginner or advanced, Wizz Gym is perfect for reaching your goals.",
      img: "",
    },
    {
      name: "Sarah",
      message:
        "I had the pleasure of visiting Wizz gym, and I can confidently say it’s one of the best gyms I’ve ever been to! From the moment you walk in, you can feel the energy and passion for fitness that this place represents.",
      img: "",
    },
  ];
  return (
    <>
      <section className='bg-[#1b1b1b] text-center  '>
        <div className='box bg-[#414040]  bg-opacity-95 text-white pt-16 '>
          <h2 className='text-2xl font-semibold font-custom'>
            What Our Members Say
          </h2>
          <p className='font-body text-[#fdfdfddb] mb-6'>
            Be inspired on what our members achieved
          </p>
          <div className=' '>
            <Slide
              cssClass=''
              arrows={false}
              slidesToScroll={1}
              slidesToShow={1}
              responsive={[
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ]}
              duration={900}
            >
              {testmonials.map((test) => (
                <div
                  key={test.message + test.name}
                  className='  text-center m-6 text-white w-[1fr]  h-[280px] rounded-md bg-[#252525] p-2'
                >
                  <div className=' rounded-md pt-3 flex flex-col space-y-5 justify-center items-center'>
                    <FiveStars />
                    <p className=' text-lg font-bold font-body tracking-wide'>
                      - {test.name}
                    </p>
                    <p className='font-body text-sm md:w-[80%] text-[#fdfdfddb] w-[90%]'>
                      " {test.message}"
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};
