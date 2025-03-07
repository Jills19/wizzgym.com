"use client";
import { useEffect } from "react";
import { FooterSection } from "../components/footer";
import Header from "../components/Header";

const GymRulesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className='min-h-screen bg-[#1b1b1b] py-8 px-4 md:px-16 font-body'>
        {/* Header */}
        <header className='text-center mb-8'>
          <div className='md:flex md:justify-center md:items-center'>
            <h1 className='whitespace-normal text-4xl font-bold text-white bg-red-600 md:w-[80%] p-2 rounded-md mb-2'>
              Gym Rules
            </h1>
          </div>

          <p className='text-gray-100 text-sm md:text-lg max-w-4xl mx-auto'>
            At Sitigym, we prioritize a safe, clean, and respectful environment
            for all members. To ensure that everyone enjoys a positive and
            productive experience, all members are required to follow the gym's
            rules and regulations. Failure to adhere to these guidelines may
            result in membership termination and a ban from the gym.
          </p>
        </header>

        {/* Rules List */}
        <section className='max-w-4xl mx-auto bg-[#414040] shadow-lg rounded-lg p-8'>
          <h2 className='whitespace-normal text-2xl font-semibold text-white bg-red-600 md:w-[30%] p-2 rounded-md mb-4'>
            General Gym Rules:
          </h2>
          <ul className='list-disc list-inside space-y-4'>
            <li className='text-gray-100'>
              <span className='font-medium'>Membership Requirement:</span> All
              individuals must have an active membership to access the gym.
              Memberships are non-transferable and are only valid for the member
              they are issued to.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'>Proper Attire:</span> Members must
              wear appropriate gym clothing and closed-toed footwear at all
              times. No sandals, open-toed shoes, or inappropriate attire.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'>Personal Hygiene: </span> Members
              should maintain proper hygiene and cleanliness, including wearing
              clean gym clothes and using deodorant.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'> Respect for Equipment: </span>
              Members should use gym equipment properly and ensure that they
              return weights, dumbbells, and machines to their designated places
              after use. Equipment should not be damaged or misused.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'>Cleanliness: </span>Always wipe down
              equipment after use with available cleaning supplies. Members must
              help keep the gym clean by discarding trash and not leaving
              personal items lying around.
            </li>
          </ul>
          <h2 className='whitespace-normal text-2xl font-semibold text-white bg-red-600 md:w-[30%] p-2 rounded-md my-4'>
            Behavioral Conduct:
          </h2>
          <ul className='list-disc list-inside space-y-4'>
            <li className='text-gray-100'>
              <span className='font-medium'>Respectful Behavior: </span> Members
              must behave respectfully toward others, avoiding loud
              conversations, inappropriate language, and disruptive actions.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'>No Intimidation: </span> Members
              should not intimidate or harass others. Bullying, aggressive
              behavior, or offensive language will not be tolerated.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'>Personal Space: </span> Respect
              other members' personal space while using equipment or exercising.
              Avoid standing too close or interfering with others' workouts.
            </li>
          </ul>
          <h2 className='whitespace-normal text-2xl font-semibold text-white bg-red-600 md:w-[30%] p-2 rounded-md my-4'>
            Health & Safety:
          </h2>
          <ul className='list-disc list-inside space-y-4'>
            <li className='text-gray-100'>
              <span className='font-medium'>Medical Conditions: </span> Members
              with any pre-existing medical conditions or injuries should
              consult a physician before using the gym's equipment.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'> Injuries: </span> Any injury,
              whether minor or major, must be reported to gym staff immediately.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'> Emergency Procedures: </span>
              Members should familiarize themselves with emergency exits and
              safety procedures, as posted throughout the gym.
            </li>
          </ul>
          <h2 className='whitespace-normal text-2xl font-semibold text-white bg-red-600 md:w-[30%] p-2 rounded-md my-4'>
            Food & Drink Policy:
          </h2>
          <ul className='list-disc list-inside space-y-4'>
            <li className='text-gray-100'>
              <span className='font-medium'>No Food Allowed: </span> Members are
              not permitted to bring or consume food inside the gym. This is to
              maintain cleanliness and a distraction-free environment. Only
              water and fitness supplements in sealed containers are allowed.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'> Water Bottles: </span> Members must
              bring their own water bottles. Sharing is not allowed to avoid
              cross-contamination.
            </li>
          </ul>
          <h2 className='whitespace-normal text-2xl font-semibold text-white bg-red-600 md:w-[30%] p-2 rounded-md my-4'>
            Violation of Rules:
          </h2>
          <ul className='list-disc list-inside space-y-4'>
            <li className='text-gray-100'>
              <span className='font-medium'> Non-Compliance: </span> Members
              failing to adhere to any of the gym's rules, including the food
              policy, will face immediate disciplinary actions.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'> Termination of Membership: </span>
              Repeated violations or serious breaches of the rules will result
              in membership termination, and the individual will be banned from
              Sitigym.
            </li>
            <li className='text-gray-100'>
              <span className='font-medium'>Zero Tolerance for Abuse: </span>
              Any abuse of staff or equipment will result in an immediate ban
              without warning.
            </li>
          </ul>
        </section>
        <p className='text-gray-100 text-sm md:lg max-w-4xl mx-auto my-4'>
          By following these rules, members can enjoy a productive and positive
          experience at Sitigym. Thank you for your cooperation.
        </p>
      </div>
      <FooterSection />
    </>
  );
};

export default GymRulesPage;
