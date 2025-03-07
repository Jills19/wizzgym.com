"use client";
import Link from "next/link";
import Header from "./components/Header";
import Why_choose_us from "./components/whyChooseSitigym";
import { FooterSection } from "./components/footer";
import { TestimonialSection } from "./components/testimonialSlide";
import Fireworks from "./components/fireworks";

export default function Home() {
  return (
    <>
      <main className="box-border m-0 p-0">
        <Header />
        {/* fireworks section */}
        <Fireworks/>
        <div className='w-[100%] overflow-hidden'>
          <Why_choose_us />
          {/* Testimonial section */}
          <TestimonialSection />
          {/* Call to action section */}
          <section className='bg-[url("/bg-8.jpg")] bg-center font-body bg-cover bg-no-repeat '>
            <div className='py-16 px-8 bg-secondary text-center text-accent bg-opacity-80'>
              <h2 className='text-2xl md:text-3xl font-bold  mb-2'>
                Ready to Join Us Today?
              </h2>
              <h3 className=' text-accent  '>
                <span className=' w-fit'>LOOK, WORKING OUT SUCKS SOMETIMES!</span>
              </h3>

              <div className='text-accent'>
                <p>
                  But <span className=' '>you don't have to do it alone!</span>
                </p>
                <p className=' mb-4'>
                  Let us programe and coach you through all of your workouts and
                  look better naked <b>NOW!</b>
                </p>
                <a
                  href='https://www.google.com/maps/dir//SitiGym+Mwanga+II+Rd+Kampala/@0.3039633,32.5699984,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x177dbd75455a4a39:0x79e240ed20b9021d!2m2!1d32.5699984!2d0.3039633?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D'
                  className='bg-primary my-5 text-sm font-bold text-center hover:bg-red-800 text-accent py-3 px-6 rounded-full '
                >
                  Visit us now
                </a>
              </div>
            </div>
          </section>
          <div className='md:h-[20%]'>
            <iframe
              title='Wizz Gym Location'
              src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127672.38958136724!2d32.48759642482997!3d0.3039629856504049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x177dbd75455a4a39%3A0x79e240ed20b9021d!2sMwanga%20II%20Rd%2C%20Kampala!3m2!1d0.3039633!2d32.569998399999996!5e0!3m2!1sen!2sug!4v1724922194612!5m2!1sen!2sug&z=15'
              className='w-full h-[30vh]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <FooterSection />
        </div>
      </main>
    </>
  );
}

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
