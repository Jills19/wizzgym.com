"use client";

import { useEffect } from "react";
import { FooterSection } from "../components/footer";
import Header from "../components/Header";

const FranchiseAndInvestment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className='bg-[#414040] font-body'>
        {/* Hero Section */}
        <section className=''>
          <img
            src='/feature-image-copy.webp'
            alt=''
            className='w-[100%] md:h-[80vh]'
          />
        </section>

        {/* Introduction Section */}
        <section className='py-12 px-6 md:px-12 text-gray-600 bg-white'>
          <div className='max-w-4xl mx-auto text-center bg-white'>
            <h2 className='text-3xl   mb-6 text-red-700'>Welcome!</h2>
            <p>
              Are you looking for an opportunity to make a lasting impact on
              community health and wellbeing? Our state-of-the-art gym brand,
              based in Uganda, offers a unique chance to be part of a rapidly
              growing fitness movement. With cutting-edge equipment, modern
              facilities, and a focus on affordability, we are poised to become
              the leading fitness hub in Uganda.
            </p>
          </div>
        </section>

        {/**Why Franchise with Us? */}
        <section>
          <div className='bg-red-600 p-6'>
            <h2 className='text-center  text-white text-2xl md:text-3xl   mb-6'>
              Why Partner with Our Gym Brand?
            </h2>
            <div className=''>
              <ul className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-3'>
                <li className=' bg-white text-gray-600 rounded-md w-fit p-2 m-2'>
                  <div className='w-[100%] flex justify-center items-center'>
                    <div className='bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'>
                      <span className='text-3xl text-white  text-center  '>
                        {" "}
                        1
                      </span>
                    </div>
                  </div>
                  <h3 className='text-2xl text-red-600    text-center'>
                    State-of-the-Art Facilities
                  </h3>
                  <p className='text-center '>
                    Our gyms are equipped with top-of-the-line fitness
                    equipment, providing members with the latest technology and
                    tools for a world-class workout experience.
                  </p>
                </li>
                <li className=' bg-white text-gray-600 rounded-md w-fit p-2 m-2'>
                  <div className='w-[100%] flex justify-center items-center'>
                    <div className='bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'>
                      <span className='text-3xl text-white  text-center  '>
                        {" "}
                        2
                      </span>
                    </div>
                  </div>
                  <h3 className='text-lg    text-center text-red-600'>
                    Affordable Membership Plans
                  </h3>
                  <p className='text-center '>
                    We believe that fitness should be accessible to everyone.
                    Our competitive pricing ensures that entire communities can
                    benefit from healthier lifestyles.
                  </p>
                </li>
                <li className=' bg-white text-gray-600 rounded-md w-fit p-2 m-2'>
                  <div className='w-[100%] flex justify-center items-center'>
                    <div className='bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'>
                      <span className='text-3xl text-white  text-center  '>
                        {" "}
                        3
                      </span>
                    </div>
                  </div>
                  <h3 className='text-lg    text-center text-red-600'>
                    Positive Impact on Communities
                  </h3>
                  <p className='text-center '>
                    By partnering with us, you help promote healthier lifestyles
                    and empower local communities to embrace fitness and
                    wellness. Our gyms offer a safe, supportive space where
                    people can improve their physical and mental health.
                  </p>
                </li>
                <li className=' bg-white text-gray-600 rounded-md w-fit p-2 m-2'>
                  <div className='w-[100%] flex justify-center items-center'>
                    <div className='bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'>
                      <span className='text-3xl text-white  text-center  '>
                        {" "}
                        4
                      </span>
                    </div>
                  </div>
                  <h3 className='text-lg    text-center text-red-600'>
                    Strong Brand Vision
                  </h3>
                  <p className='text-center'>
                    We are an upcoming, dynamic gym brand focused on providing
                    premium fitness solutions while maintaining affordability.
                    Our modern approach appeals to all age groups and fitness
                    levels.
                  </p>
                </li>
                <li className=' bg-white text-gray-600 rounded-md w-fit p-2 m-2'>
                  <div className='w-[100%] flex justify-center items-center'>
                    <div className='bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'>
                      <span className='text-3xl text-white  text-center  '>
                        {" "}
                        5
                      </span>
                    </div>
                  </div>
                  <h3 className='text-lg    text-center text-red-600'>
                    Support and Training
                  </h3>
                  <p className='text-center'>
                    As a partner, you will receive full support, including
                    training, marketing assistance, and operational guidance to
                    ensure you bring the best to your community.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-12 px-6 md:px-12 text-gray-500 bg-white'>
          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-red-700 text-2xl   text-center mb-4'>
                Benefits of Partnering with Us
              </h3>
              <ul className='list-disc list-inside space-y-2'>
                <li>
                  <b>Promoting Healthier Communities:</b> Help create healthier,
                  happier communities by providing accessible fitness
                  opportunities.
                </li>
                <li>
                  <b> Proven Business Model:</b> Our gym has been designed with
                  efficiency and scalability in mind to ensure smooth
                  operations.
                </li>
                <li>
                  <b>Positive Social Impact:</b> Encourage wellbeing and improve
                  the quality of life for individuals and families.
                </li>
                <li>
                  <b>Comprehensive Marketing Support: </b> Benefit from our
                  marketing strategies to attract and retain customers.
                </li>
                <li>
                  <b>Exclusive Territory Opportunities: </b> Secure your
                  location and bring fitness to areas that need it most.
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl   mb-4 text-red-700'>What We Offer</h3>
              <ul className='list-disc list-inside space-y-2'>
                <li>Full access to our gym brand and business model</li>
                <li>Assistance with location setup, design, and operations</li>
                <li>Ongoing training for staff and management</li>
                <li>Branding and marketing tools to grow your business</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className='relative  bg-[url("/handshake.webp")] bg-center bg-cover bg-no-repeat'>
          <div className='w-[100%] h-[100%] bg-[#414040] bg-opacity-60  py-12 px-6 md:px-12'>
            <div className='max-w-4xl mx-auto text-center text-gray-100  flex flex-col justify-center items-center'>
              <h3 className='text-2xl   mb-4'>Get Started Today</h3>
              <p className='mb-6  lg:w-[60%]'>
                Are you ready to make a meaningful impact on community health
                and wellbeing? Join our growing fitness family and bring a
                state-of-the-art gym to your community.
                <a href='/contact' className=' text-blue-600 underline'>
                  Contact Us Today
                </a>
                to Learn More!
              </p>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default FranchiseAndInvestment;
