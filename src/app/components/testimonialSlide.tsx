import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiveStars } from "./fivestars";

export const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <section className='bg-secondary text-center  '>
        <div className='box bg-secondary  bg-opacity-95 text-white pt-16 '>
          <h2 className='text-2xl font-semibold font-custom'>
            What Our Members Say
          </h2>
          <p className='font-body text-[#fdfdfddb] mb-6'>
            Be inspired on what our members achieved
          </p>
          <div className=' '>
            <Slider {...settings}>
              {testmonials.map((test) => (
                <div
                  key={test.message + test.name}
                  className='  text-center  text-secondary w-[1fr] my-6 h-[280px] rounded-lg bg-accent p-2'
                >
                  <div className=' rounded-md pt-3 flex flex-col space-y-5 justify-center items-center'>
                    <FiveStars />
                    <p className=' text-lg font-bold font-body tracking-wide'>
                      - {test.name}
                    </p>
                    <p className='font-body text-sm md:w-[80%] text-secondary w-[90%]'>
                      " {test.message}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
