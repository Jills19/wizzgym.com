"use client";
import { useState } from "react";
import Header from "../components/Header";
import { FooterSection } from "../components/footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsPage = () => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState<
    null | "Sorry Message not sent! Please send direct email"
  >(null);
  const form = useRef<HTMLFormElement | any>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e10cej3", "template_2scakj6", form.current, {
        publicKey: "9UH7EmkMzyrOpuGGT",
      })
      .then(
        () => {
          setAlert(true);
          console.log("SUCCESS!");
          setFormData({
            user_name: "",
            user_email: "",
            phone: "",
            message: "",
          });
          setTimeout(() => {
            setAlert(false);
          }, 5000);
        },
        (error) => {
          setError("Sorry Message not sent! Please send direct email");
          console.log("FAILED...", error.text);
          setTimeout(() => {
            setError(null);
          }, 5000);
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header>
        <meta
          name='description'
          content="Empower your fitness journey with women's workout programs at Wizz Gym in Kampala, Uganda. Our tailored fitness routines are designed to help women of all fitness levels achieve their health and wellness goals in a supportive environment."
        />

        <meta
          name='keywords'
          content="women's workouts, Wizz Gym Kampala, women's fitness classes, female fitness Uganda, strength training for women, women's health and wellness, women's cardio classes, fitness programs for women, women-only workout sessions, Kampala gym for women"
        />

        <title>Contact | Wizz Gym Kampala, Uganda</title>
      </header>
      <Header />

      <div className='w-[100%] overflow-hidden'>
        {alert && (
          <div className='fixed top-0 left-0 w-[100%] flex justify-center items-center  z-50'>
            <p className='bg-green-100 font-semibold text-green-800 w-fit px-3 py-2 font-body my-4 rounded-lg'>
              Thanks for reaching out! we will reply as soon as possible 😊!{" "}
            </p>
          </div>
        )}
        {error && (
          <div className='fixed top-0 left-0 w-[100%] flex justify-center items-center  z-50'>
            <p className='bg-red-100 font-semibold text-red-800 w-fit px-3 py-2 font-body my-4 rounded-lg'>
              {error}
            </p>
          </div>
        )}
        <div className='font-body'>
          <div className='p-6 bg-secondary text-primary flex flex-col md:flex-row justify-evenly md:items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-4 text-center'>
                Contact Us
              </h2>
              <p className=' mb-6 text-center'>
                Get in touch with us to learn more about our gym and services.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className='mb-4'>
                  <label htmlFor='name' className='block   mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='user_name'
                    value={formData.user_name}
                    onChange={handleChange}
                    className='w-full  bg-primary text-accent  px-4 py-2  
             rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-accent'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='user_email'
                    className='block   mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='Email'
                    id='user_email'
                    name='user_email'
                    value={formData.user_email}
                    onChange={handleChange}
                    className='w-full px-4 py-2 bg-primary text-accent   
             rounded-md focus:outline-none focus:ring-2 focus:ring-primary  placeholder:text-accent'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='phone' className='block   mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 bg-primary text-accent
             rounded-md focus:outline-none focus:ring-2 focus:ring-primary  placeholder:text-accent'
                    placeholder='Your Phone Number'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label htmlFor='message' className='block   mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-2  bg-primary   text-accent
             rounded-md focus:outline-none focus:ring-2 focus:ring-primary  placeholder:text-accent'
                    placeholder='Your Message'
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='px-6 py-2 bg-primary text-accent font-semibold rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className=' md:py-1 bg-accent text-primary my-5 p-4 rounded-md  text-center  flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <div className='w-2/3 my-6 text-sm flex flex-col justify-center items-center'>
                  <svg
                    className='my-5 fill-primary'
                    fill='#9c0707'
                    height='70px'
                    width='70px'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 495.32 495.32'
                    xmlSpace='preserve'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <g>
                        <path d='M247.67,0C153.562,0,77.277,76.285,77.277,170.393c0,71.734,99.034,237.014,146.103,311.514 c5.254,8.34,14.418,13.406,24.274,13.414c9.851,0,19.03-5.057,24.304-13.389c47.05-74.5,146.084-239.805,146.084-311.539 C418.043,76.285,341.759,0,247.67,0z M247.67,274.418c-53.227,0-96.369-43.141-96.369-96.363c0-53.227,43.143-96.367,96.369-96.367 c53.222,0,96.365,43.141,96.365,96.367C344.035,231.277,300.892,274.418,247.67,274.418z'></path>{" "}
                        <path d='M312.004,157.488l-37.168-5.402c-2.079-0.303-3.875-1.611-4.809-3.502l-16.613-33.666c-1.08-2.184-3.307-3.566-5.744-3.566 s-4.668,1.383-5.748,3.566l-16.607,33.666c-0.934,1.891-2.736,3.199-4.814,3.502l-37.168,5.402 c-2.408,0.352-4.401,2.037-5.153,4.354c-0.757,2.324-0.131,4.859,1.62,6.563l26.889,26.213c1.504,1.471,2.195,3.59,1.832,5.662 l-6.35,37.004c-0.408,2.396,0.57,4.83,2.555,6.26c1.963,1.434,4.582,1.621,6.742,0.484l33.227-17.473 c1.861-0.973,4.088-0.973,5.955,0l33.226,17.473c2.16,1.137,4.773,0.949,6.742-0.484c1.979-1.43,2.962-3.863,2.553-6.26 l-6.354-37.004c-0.357-2.072,0.328-4.191,1.832-5.662l26.894-26.213c1.751-1.703,2.372-4.238,1.62-6.563 C316.41,159.525,314.412,157.84,312.004,157.488z'></path>{" "}
                      </g>
                    </g>
                  </svg>
                  <p className=' mb-6 text-center font-bold '>
                    Visit Us Today!
                  </p>
                  <p className='text-secondary'>
                    Wizz Segawa Mall, Mwanga Road || Kampala Uganda
                  </p>
                </div>
                <div className='w-2/3 my-6 text-sm flex flex-col justify-center items-center'>
                  <svg
                    className='my-5 fill-primary'
                    fill='#9c0707'
                    height='70px'
                    width='70px'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 495.32 495.32'
                    xmlSpace='preserve'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <g>
                        <path d='M247.67,0C153.562,0,77.277,76.285,77.277,170.393c0,71.734,99.034,237.014,146.103,311.514 c5.254,8.34,14.418,13.406,24.274,13.414c9.851,0,19.03-5.057,24.304-13.389c47.05-74.5,146.084-239.805,146.084-311.539 C418.043,76.285,341.759,0,247.67,0z M247.67,274.418c-53.227,0-96.369-43.141-96.369-96.363c0-53.227,43.143-96.367,96.369-96.367 c53.222,0,96.365,43.141,96.365,96.367C344.035,231.277,300.892,274.418,247.67,274.418z'></path>{" "}
                        <path d='M312.004,157.488l-37.168-5.402c-2.079-0.303-3.875-1.611-4.809-3.502l-16.613-33.666c-1.08-2.184-3.307-3.566-5.744-3.566 s-4.668,1.383-5.748,3.566l-16.607,33.666c-0.934,1.891-2.736,3.199-4.814,3.502l-37.168,5.402 c-2.408,0.352-4.401,2.037-5.153,4.354c-0.757,2.324-0.131,4.859,1.62,6.563l26.889,26.213c1.504,1.471,2.195,3.59,1.832,5.662 l-6.35,37.004c-0.408,2.396,0.57,4.83,2.555,6.26c1.963,1.434,4.582,1.621,6.742,0.484l33.227-17.473 c1.861-0.973,4.088-0.973,5.955,0l33.226,17.473c2.16,1.137,4.773,0.949,6.742-0.484c1.979-1.43,2.962-3.863,2.553-6.26 l-6.354-37.004c-0.357-2.072,0.328-4.191,1.832-5.662l26.894-26.213c1.751-1.703,2.372-4.238,1.62-6.563 C316.41,159.525,314.412,157.84,312.004,157.488z'></path>{" "}
                      </g>
                    </g>
                  </svg>
                  <p className=' mb-6 text-center font-bold'>
                    Coming Soon!
                  </p>
                  <p className='text-secondary'>
                    Wizz Gym Old Kira Bukoto, Kampala Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
};

export default ContactUsPage;
