"use client";
import { useEffect } from "react";
import Header from "@/app/components/Header";
import WeeklySchedule from "@/app/components/weeklySchedule";
import { FooterSection } from "@/app/components/footer";

const WomenWorkoutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

        <title>
          Women's Workouts | Empower Your Fitness at Wizz Gym Kampala, Uganda
        </title>
      </header>
      <Header />
      <div className='w-[100%] overflow-hidden'>
        <div className='min-h-screen bg-secondary'>
          {/* Hero Section */}
          <div className='bg-womenclass bg-center  bg-cover bg-no-repeat w-[100%] h-[50vh] md:h-[40vh] lg:h-[70vh]'></div>

          <WeeklySchedule schedule={womenSchedule} />
          {/* Programs Section */}
          <section className='box font-body p-2 py-10 grid bg-secondary grid-cols-2 md:flex md:flex-row gap-2 mt-10'>
            {workouts.map((programe) => (
              <div
                key={programe.workout + programe.description}
                className=' md:w-[222px] rounded-lg flex flex-col justify-center items-center'
              >
                <img
                  src={programe.img}
                  alt={`woman doing ${programe.workout}`}
                  className='w-full h-32 object-cover rounded-t-lg'
                />
                <div className='h-32 border-0 border-x border-b p-3 bg-pink-600 border-b-pink-600 rounded-b-lg border-x-pink-600'>
                  <h2 className=' font-bold text-white'>{programe.workout}</h2>
                  <p className='text-white  text-sm'>{programe.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default WomenWorkoutPage;

const womenSchedule = [
  {
    day: "Monday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "LOWER BODY",
        time: "01:45 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "Strengthen and tone lower body muscles with targeted exercises for women.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Tuesday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Wednesday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Thursday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
  {
    day: "Friday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "MACHINES",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A guided session on gym machines designed for strength and conditioning.",
        finished: false,
      },
    ],
  },
  {
    day: "Saturday",
    programs: [
      {
        name: "CARDIO",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "An engaging cardio session tailored for women to improve endurance and burn calories.",
        finished: false,
      },
      {
        name: "AEROBIC",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A dynamic aerobic workout to boost fitness levels and improve cardiovascular health.",
        finished: false,
      },
    ],
  },
];

const workouts = [
  {
    img: "/strengthwoman.jpg",
    workout: "Strength Training",
    description:
      " Build lean muscle and increase strength with this powerful workout. ",
  },
  {
    img: "/womandoingcardio.jpg",
    workout: "Cardio Blast",
    description:
      " Boost your heart rate and burn calories with this high-intensity workout. ",
  },
  {
    img: "/women.jpg",
    workout: "Yoga Flexibility",
    description:
      "  Enhance your flexibility and reduce stress with this calming yoga routine. ",
  },
  {
    img: "/woman4.jpg",
    workout: "HIIT Challenge",
    description:
      "  Push your limits with this high-intensity interval training workout. ",
  },
  {
    img: "/cardio.jpg",
    workout: "Core Strength",
    description: " Strengthen your core with this targeted abdominal workout. ",
  },
  {
    img: "/cardio.jpg",
    workout: "Pilates Flow",
    description:
      " Improve your posture and balance with this low-impact Pilates workout. ",
  },
];
