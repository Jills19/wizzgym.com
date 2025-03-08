import Link from "next/link";
import { FooterSection } from "../components/footer";
import Header from "../components/Header";

export default function Aboutus() {
  return (
    <>
      <header>
        <meta
          name='description'
          content='Wizz Gym in Kampala, Uganda, is a top fitness center offering cutting-edge equipment, certified trainers, and diverse classes. Achieve your fitness goals in a modern, motivating environment at Wizz Gym.'
        />

        <meta
          name='keywords'
          content='Wizz Gym, Kampala gym, Uganda fitness center, weight loss programme , modern gym Kampala, fitness classes Kampala, certified trainers, gym equipment, health and fitness Kampala, personal training, workout sessions'
        />

        <title>About Us | Get to know the best gym in Kampala</title>
      </header>

      <Header />

      <div className='w-[100%] overflow-hidden'>
        <section className=' font-body text-accent  bg-secondary'>
          {/** This div below create the image on about us page  */}
          <div className=' h-[60vh] flex items-center justify-center   bg-cover bg-center bg-no-repeat bg-aboutsection  w-[100%]   '></div>

          <div className=''>
            <div className='flex flex-col justfy-center items-center'>
              <div className='mx-4 flex  flex-col justify-center items-center md:w-[60%]'>
                <div className='md:w-4/5  mx-2'>
                  <h1 className=' font-semibold whitespace-nowrap text-2xl md:text-4xl rounded text-center mb-2 py-3 my-2  md:my-3  text-primary'>
                    WE WELCOME EVERYONE !
                  </h1>
                  <p className='text-gray-200 px-2 mb-6  m:w-4/5  md:text-center   '>
                    Our gyms are friendly, supportive, and judgement-free spaces
                    where everybody can come in, work out and leave feeling
                    good.
                  </p>

                  <h2 className=' font-semibold text-2xl rounded text-center mb-2 py-3  md:my-3 '>
                    About Wizz Gym
                  </h2>
                  <p className='text-gray-200 mb-6 px-2 '>
                    Located in the heart of Kampala, Uganda, Wizz GYM is a
                    premier fitness center dedicated to helping you achieve your
                    health and wellness goals. Whether you're a beginner or a
                    seasoned athlete, we provide a welcoming environment with
                    top-notch equipment, expert trainers, and a variety of
                    classes tailored to meet your individual needs.
                  </p>

                  <h2 className=' font-semibold text-2xl rounded text-center mb-2 py-3  md:my-3 '>
                    Our Mission
                  </h2>
                  <p className='text-gray-200 mb-2  px-2'>
                    Our mission is to empower you to become the best version of
                    yourself through fitness. We believe that everyone deserves
                    the chance to lead a healthy, active life, and we are here
                    to support you every step of the way.
                  </p>

                  {/* Members Rules Section */}
                  <h2 className=' font-semibold text-2xl text-center mb-2 py-3  md:my-3 '>
                    Members Rules
                  </h2>
                  <p className='text-gray-200 mb-2  px-2'>
                    We aim to make our gyms a safe and enjoyable experience for {" "}
                    <Link
                      href={"/gymrules"}
                      className='underline text-blue-700 font-semibold'
                    >
                      all our members.
                    </Link>
                  </p>
                </div>
                <div className='hidden md:flex justify-center items-center '></div>
              </div>
            </div>

            <div className='w-[95%]'>
              {/* Community Work Section */}

              <div className='w-screen bg-nature bg-center bg-cover bg-no-repeat my-4   w4scre4n'>
                <div className='bg-secondary bg-opacity-60 p-3 flex justify-center items-center flex-col w-[100%] h-[100%]'>
                  <h2 className=' font-semibold text-2xl text-center mb-2 py-3  md:my-3 '>
                    Community Work
                  </h2>
                  <p className=' text-accent   md:text-center md:w-[50%] mb-6'>
                    At Wizz Gym, we believe in giving back to the community. We
                    actively contribute to local projects and initiatives that
                    support health and wellness in the {" "}
                    <Link
                      href={"/community"}
                      className='underline  text-blue-700 md:whitespace-nowrap font-semibold '
                    >
                    broader community.
                    </Link>
                  </p>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center '>
                {/* Sustainability Section */}
                <div className='md:4/5  p-8   mx-2'>
                  <h2 className=' font-semibold text-2xl rounded text-center mb-2 py-3 whitespace-nowrap  md:my-3 '>
                    Sustainability at Wizz Gym
                  </h2>
                  <p className='text-accent px-2`   mb-3  '>
                    We're committed to reducing our carbon footprint and
                    contributing to a healthier environment through our carbon
                    net-zero strategy.
                  </p>
                  <ul className='space-y-2 text-left flex flex-col   text-gray-200'>
                    <li className='list-disc  md:p-2  '>
                      Purchasing renewable energy equipment to reduce our carbon
                      emissions.
                    </li>
                    <li className='list-disc  md:p-2  '>
                      <span>
                        Installing LED energy-efficient lights to reduce energy
                        consumption.
                      </span>
                    </li>
                    <li className='list-disc  md:p-2  '>
                      <span>
                        Introducing high-efficiency showers to save water.
                      </span>
                    </li>
                    <li className='list-disc  md:p-2  '>
                      <span>
                        Maintaining a high-quality equipment maintenance program
                        for maximum efficiency.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Member Contribution Section */}
                <div className='flex flex-col justify-center items-center  '>
                  <div className='flex flex-col md:w-[74%]'>
                    <h2 className=' font-semibold md:text-2xl text-center rounded-sm w-[100%] mb-2 py-3 p-3 md:my-3 '>
                      What Can Our Members Do to Help?
                    </h2>
                  </div>

                  <div className='flex flex-col justify-center items-center  mx-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:w-[55%]'>
                      <div className='flex flex-col  justify-center items-center text-center py-3'>
                        <div className='w-14 h-14 flex  justify-center items-center  rounded-full'>
                          {/* Replace with your SVG icon for showers */}
                          <img src='/towel.svg' alt='shower icone' />
                        </div>
                        <div className='ml-4'>
                          <h3 className='font-semibold text-primary'>
                            Short Showers
                          </h3>
                          <p className='text-accent'>
                            As water can be a scarce resource, even in Uganda,
                            it’s best not to shower longer than necessary.
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col  justify-center items-center text-center py-3'>
                        <div className='w-14 h-14 flex  justify-center items-center  rounded-full'>
                          {/* Replace with your SVG icon for bottles */}
                          <img src='/bottle.svg' alt='bottle icone' />
                        </div>
                        <div className='ml-4'>
                          <h3 className='font-semibold text-primary'>
                            Bring Your Bottle
                          </h3>
                          <p className='text-accent'>
                            All our gyms have water fountains, so don’t forget
                            your reusable bottle for refills.
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col  justify-center items-center text-center py-3'>
                        <div className='w-14 h-14 flex  justify-center items-center  rounded-full'>
                          {/* Replace with your SVG icon for towels */}
                          <img src='/towel.svg' alt='towel icone' />
                        </div>
                        <div className='ml-4'>
                          <h3 className='font-semibold text-primary'>
                            Bring Your Towel
                          </h3>
                          <p className='text-accent'>
                            We have vending machines for towels but do bring
                            your own along if you can.
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col  justify-center items-center text-center py-3'>
                        <div className='w-14 h-14 flex  justify-center items-center  rounded-full'>
                          {/* Replace with your SVG icon for driving */}
                          <img src='/riding.svg' alt='cycling icone' />
                        </div>
                        <div className='ml-4'>
                          <h3 className='font-semibold text-primary'>
                            Avoid Driving
                          </h3>
                          <p className='text-accent'>
                            Public transport, walking, jogging, or cycling are
                            great ways to travel sustainably to the gym.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**Google Maps */}
        <div className='md:h-[20%] mt-4'>
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
    </>
  );
}
