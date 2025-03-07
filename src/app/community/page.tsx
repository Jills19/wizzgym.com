"use client";
import { useEffect } from "react";
import { FooterSection } from "../components/footer";
import Header from "../components/Header";

type CommunityEvent = {
  title: string;
  description: string;
  imageUrl: string;
};

const communityEvents: CommunityEvent[] = [
  {
    title: "School-Focused Fitness Programs",
    description:
      "To further their mission, Wizz Gym partners with local schools in Kampala, organizing school fairs and fitness programs aimed at encouraging students to embrace a healthy lifestyle. These programs are designed to be engaging and accessible, focusing on physical education, team-building exercises, and wellness activities that inspire young people to stay active. The goal is to foster a culture of fitness within the school environment, where students can take what they learn and apply it to their everyday lives.",
    imageUrl: "/fittnessscholaship.jpg",
  },
  {
    title: "Giving Back to the Community",
    description:
      "Beyond fitness, Wizz Gym is deeply invested in supporting the community. Through outreach programs and charity events, they ensure that youth from underserved backgrounds have the opportunity to access fitness resources. This includes offering scholarships for gym memberships, organizing free fitness classes, and hosting wellness events aimed at improving the overall health of the local population.",
    imageUrl: "/youth.webp",
  },
];

const CommunityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <div className='bg-[#414040] font-body'>
        {/* Community Banner */}
        <div className='relative w-full h-[60vh] bg-cover bg-center bg-[url("/communityhero1.jpeg")]'>
          <div className='absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center'>
            <h1 className='text-4xl font-bold text-gray-100 font-custom'>
              Our Community
            </h1>
          </div>
        </div>

        {/* Introduction */}
        <section className='max-w-5xl mx-auto py-8 px-4 text-center'>
          <h2 className='text-2xl font-semibold text-gray-100'>
            Empowering Youth in Kampala Through Fitness and Community Support
          </h2>
          <p className='text-gray-200 txt-sm mt-4'>
            Wizz Gym is a fitness center in Kampala dedicated to promoting
            physical health, mental well-being, and personal development among
            youth. With a strong commitment to giving back to the community,
            Wizz Gym offers a variety of fitness programs designed not only to
            help individuals build strength and endurance but also to support
            the local youth in achieving their full potential.
          </p>
        </section>

        {/* Featured Activities */}
        <section className=' py-8 px-4'>
          <h3 className='text-xl font-semibold text-gray-100 mb-6 text-center'>
            Featured Community Activities
          </h3>
          <div className='flex flex-col justify-evenly md:flex-row-reverse '>
            {communityEvents.map((event, index) => (
              <div key={index} className=' rounded-lg  m-3 md:w-[400px]'>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className='w-[100%] rounded-t-lg  h-[40%]'
                />
                <div className='p-4 bg-[#1b1b1b] rounded-b-lg w-fit '>
                  <h4 className='text-lg font-semibold text-gray-100'>
                    {event.title}
                  </h4>
                  <p className='text-gray-300 mt-2 text-sm '>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Contribution Section */}

        <section className='bg-[#1b1b1b] py-10 box'>
          <div className='max-w-5xl mx-auto px-4 text-center'>
            <h3 className='text-xl mt-6 font-semibold text-gray-100 mb-4'>
              How We Give Back
            </h3>
            <div className='text-gray-200 space-y-2'>
              <p>
                Wizz Gym is more than just a fitness center; it is a
                community-driven initiative that focuses on the holistic
                development of youth in Kampala.
              </p>
              <p>
                By combining fitness with educational and outreach efforts, Wizz
                Gym is helping to shape the future of young people in the city,
                equipping them with the skills, knowledge, and resources they
                need to lead healthy, successful lives.
              </p>
              <p>
                Through their ongoing dedication to community service and youth
                empowerment, Wizz Gym continues to make a lasting impact in
                Kampala.
              </p>
            </div>
            <a
              href='/community'
              className='inline-block mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition'
            >
              Learn More
            </a>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default CommunityPage;
