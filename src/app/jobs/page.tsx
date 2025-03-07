"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import { FooterSection } from "../components/footer";

interface Job {
  title: string;
  description: string;
  location: string;
  id: number;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Personal Trainer",
    description:
      "Provide personalized training programs and motivate clients to achieve their fitness goals.",
    location: "On-site",
  },
  {
    id: 2,
    title: "Group Fitness Instructor",
    description:
      "Lead group classes in various fitness disciplines such as yoga, Zumba, or HIIT.",
    location: "On-site",
  },
  {
    id: 3,
    title: "Gym Manager",
    description:
      "Oversee daily operations, staff management, and member services to ensure a high-quality experience.",
    location: "On-site",
  },
  {
    id: 4,
    title: "Nutrition Coach",
    description:
      "Guide clients in creating healthy eating plans and educate them on nutrition.",
    location: "Remote/On-site",
  },
  {
    id: 5,
    title: "Sales Associate",
    description:
      "Assist potential members, conduct tours, and promote gym memberships.",
    location: "On-site",
  },
];

const JobsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleApplyClick = () => {
    window.location.href =
      "mailto:hr@example.com?subject=Job Application&body=Dear HR,%0D%0A%0D%0A I am interested in applying for the position. Please find my details attached.%0D%0A%0D%0A Best regards,%0D%0A[Your Name]";
  };

  return (
    <>
      <header>
        <meta
          name='description'
          content='Join Wizz Gym in Kampala, Uganda, where we offer exciting career opportunities for passionate and motivated individuals. Be part of our diverse team and grow with us in the fitness industry.'
        />

        <meta
          name='keywords'
          content='Wizz Gym careers, jobs at Wizz Gym, Kampala gym employment, fitness jobs Kampala, gym career opportunities, Uganda fitness industry, work at a gym, Wizz Gym staff, personal training jobs, gym employee benefits'
        />

        <title>Jobs | Careers at Wizz Gym Kampala, Uganda</title>
      </header>

      <Header />

      <div className=' bg-secondary font-body text-accent'>
        {/* Gym Employees Image */}
        <div className='flex flex-col  bg-secondary font-body text-accent w-[100%] overflow-hidden  md:justify-center md:items-center'>
          <img
            src='/jobs.jpg'
            alt='Gym Employees'
            className='w-full md:w-[60%] md:h-[50%] mt-8'
          />
          <div className=' p-5'>
            <div>
              <p className='text-center mb-6'>
                We hire people with real passion, positivity and enthusiasm who
                motivate and inspire those around them.
                <br />
                Our vision is to have a diverse, high performing, engaged
                workforce that love what they do!
                <br />
                We have a brilliant team and opportunities for development and
                growth with support for success.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-4xl md:w-[65%] font-bold text-center mb-4 text-primary p-2'>
                Why choose us?
              </h2>
              <p className='text-center md:w-[65%] mb-3 '>
                We offer some great benefits for you and your family.
                <br />
                Whoever you are and whatever your role, Wizz Gym is with you and
                will help you succeed.
                <br />
                We’ll support you every step of the way along your career
                adventure, so that you can achieve your goals.
                <br />
                We’ll stand with you to remove barriers that get in the way of
                progress, opening doors to new opportunities and we will always
                strive to make your workplace a truly inclusive and friendly
                space to work, so that we can all feel proud to be a part of
                this family and company’s great values.
              </p>
            </div>
          </div>
        </div>

        <div className='min-h-screen py-3 flex flex-col  bg-secondary font-body text-accent  justify-center items-center'>
          <div className='md:w-[65%] mx-auto  p-5'>
            {/* Available Jobs Section */}
            <h2 className='text-4xl font-bold text-center mb-4 text-primary p-2'>
              Available Jobs
            </h2>
            {jobs.map((job) => (
              <div
                key={job.id}
                className='mb-6 p-4 border border-accent rounded-lg duration-300'
              >
                <h2 className='text-xl font-semibold'>{job.title}</h2>
                <p className=''>{job.description}</p>
                <p className='text-accent'>Location: {job.location}</p>
                <button
                  onClick={handleApplyClick}
                  className='my-2 px-4 py-2 bg-primary font-semibold text-accent rounded hover:bg-red-800'
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default JobsPage;
