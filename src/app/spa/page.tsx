"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { FooterSection } from "../components/footer";

const SPAAndSauna: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <meta
          name='description'
          content="Relax and rejuvenate at Wizz Gym's SPA and Sauna in Kampala, Uganda. Enjoy top-notch wellness treatments, soothing sauna sessions, and a serene environment designed to help you unwind and restore balance."
        />

        <meta
          name='keywords'
          content='Wizz Gym SPA, Kampala sauna, wellness center Uganda, spa treatments Kampala, sauna sessions, relaxation Uganda, rejuvenation spa, wellness treatments, stress relief Kampala, health and wellness'
        />

        <title>
          SPA & Sauna | Relax and Rejuvenate at Wizz Gym Kampala, Uganda
        </title>
      </header>
      <Header />
      <div className='w-[100%] overflow-hidden'>
        <section className='p-6 bg-red-100'>
          <h2 className='text-4xl font-bold text-center text-primary mb-8 font-custom'>
            SPA & Sauna
          </h2>

          <div className='font-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            <div className='bg-accent shadow-lg rounded-sm overflow-hidden'>
              <img
                src='https://img.freepik.com/free-photo/beautiful-women-doing-self-care-treatment-home_23-2149007153.jpg?w=740'
                alt='SPA Services'
                className='w-full h-48 object-cover'
              />
              <div className='p-6 bg-accent'>
                <h3 className='text-2xl font-bold text-secondary mb-4'>
                  Our SPA Services
                </h3>
                <ul className='list-disc list-inside text-secondary font-bold space-y-2'>
                  <li>Full Body Massage</li>
                  <li>Facials</li>
                  <li>Body Scrubs</li>
                  <li>Hot Stone Therapy</li>
                  <li>Aromatherapy</li>
                </ul>
              </div>
            </div>

            <div className='bg-accent shadow-lg rounded-sm overflow-hidden'>
              <img
                src='https://img.freepik.com/premium-photo/strong-afroamerican-athletic-man-with-perfect-shape-musculs-brick-background-daylight-lamps-standing-white-smoke_397170-1912.jpg?w=740'
                alt='Sauna Experience'
                className='w-full h-48 object-cover'
              />
              <div className='p-6 bg-accent'>
                <h3 className='text-2xl font-bold text-secondary mb-4'>
                  Sauna Experience
                </h3>
                <p className='mb-4 text-secondary'>
                  Relax and rejuvenate in our sauna. Enjoy the benefits of heat
                  therapy, including improved circulation, detoxification, and
                  relaxation.
                </p>
                <h4 className='font-bold mb-2 text-lg text-secondary'>
                  Sauna Benefits:
                </h4>
                <ul className='list-disc list-inside text-secondary font-bold space-y-2'>
                  <li>Stress Relief</li>
                  <li>Muscle Relaxation</li>
                  <li>Improved Skin Health</li>
                  <li>Enhanced Recovery</li>
                </ul>
              </div>
            </div>

            {/* New Steam Room Card */}
            <div className='bg-accent shadow-lg rounded-sm overflow-hidden'>
              <img
                src='https://img.freepik.com/premium-photo/portrait-happy-african-american-woman-wearing-towel-sitting-sauna-spa-relaxation-beauty-lifestyle-concept_13339-338088.jpg?w=740'
                alt='Steam Room'
                className='w-full h-48 object-cover'
              />
              <div className='p-6 bg-accent'>
                <h3 className='text-2xl font-bold text-secondary mb-4'>
                  Steam Room
                </h3>
                <p className='mb-4 text-secondary'>
                  Experience the ultimate relaxation in our steam room. The
                  warm, moist air helps improve breathing, detoxify your skin,
                  and rejuvenate your body.
                </p>
                <h4 className='font-bold mb-2 text-lg text-secondary'>
                  Steam Room Benefits:
                </h4>
                <ul className='list-disc list-inside text-secondary font-bold space-y-2'>
                  <li>Improved Breathing</li>
                  <li>Detoxification</li>
                  <li>Skin Hydration</li>
                  <li>Muscle Recovery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <Link
              target='_blank'
              href={`https://wa.me/+256705746131?text=${encodeURIComponent("Hello! I need details about your Spa and Sauna Services.")}`}
              className='bg-primary font-body tracking-wide font-bold text-secondary py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300'
            >
              Book Your Experience!
            </Link>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
};

export default SPAAndSauna;
