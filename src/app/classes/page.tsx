"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { FooterSection } from "../components/footer";
import WeeklySchedule from "../components/weeklySchedule";
// Define the types for the program
type Program = {
  name: string;
  time: string;
  duration: string;
  coach: string;
  description: string;
  finished: boolean;
};

const ClassesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <meta
          name='description'
          content=' a variety of workout programs at Wizz Gym in Kampala, Uganda. From strength training and cardio to group fitness classes, our diverse workout options cater to all fitness levels and goals.'
        />

        <meta
          name='keywords'
          content='Wizz Gym , fitness classes Kampala, strength training Uganda, cardio workouts, group fitness sessions, workout programs, personal training, fitness goals, gym workout schedule, Kampala fitness center'
        />

        <title>Workouts | Fitness Programs at Wizz Gym Kampala, Uganda</title>
      </header>
      <Header />
      <div className='w-[100%] overflow-hidden'>
        <div className=''>
          <WeeklySchedule schedule={schedule} />
          <div className='box bg-secondary md:p-8 p-3 pt-10 text-accent font-body'>
            <h2 className='text-2xl text-center '>
              Wizz Gym offers avariety of workout classes
            </h2>

            <div className='box font-body p-2 py-4 grid grid-cols-2 md:flex md:flex-row gap-2 mt-10'>
              {classes.map((gymClass, index) => (
                <div
                  key={index}
                  className='h-56 bg-primary md:h-64 md:w-[222px] rounded-lg hover:animate-pulse'
                >
                  <img
                    src={gymClass.img}
                    alt={gymClass.title}
                    className='w-full h-28 object-cover rounded-t-lg'
                  />
                  <div className='p-2 text-accent'>
                    <h2 className='text-sm font-bold '>{gymClass.title}</h2>
                    <p className='mt-2 text-xs md:text-sm'>
                      {gymClass.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center items-center bg-secondary'>
            <Link
              href={"/classes/women"}
              className='bg-primary text-accent font-bold text-sm my-2 w-[80%] md:w-[20%] rounded-full mb-8 text-center hover:bg-red-800 p-3 '
            >
              Women Workouts
            </Link>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
};

export default ClassesPage;

const classes = [
  {
    img: "/fullbody.jpg",
    title: "Full Body Workout",
    description:
      "A full body workout for overall strength, endurance, and fitness",
  },
  {
    img: "/cardio.jpg",
    title: "Cardio Workout",
    description:
      " A cardio workout to improve cardiovascular health, endurance and burn calories.",
  },
  {
    img: "/lowerbody.jpg",
    title: "Lower Body Workout",
    description:
      " A lower body  workout targeting the muscles of in the legs, hips and glutes.",
  },
  {
    title: "Boxing",
    description: "Improve flexibility and mindfulness.",
    img: "/class-5.jpg",
  },
  {
    title: "Weight lifting",
    description:
      "High-intensity interval training targeting arms ,legs and chest",
    img: "/class-4.jpg",
  },
  {
    title: "Weight lose",
    description:
      "Cardio workout targeting belly fat , arms and other body parts",
    img: "/class-1.jpg",
  },
].reverse();

const schedule: { day: string; programs: Program[] }[] = [
  {
    day: "Monday",
    programs: [
      {
        name: "Aerobic",
        time: "08:00 AM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Free Weight",
        time: "09:30 AM",
        duration: "60 MIN",
        coach: "Dave",
        description:
          "A session focusing on weightlifting techniques to enhance muscle strength and endurance.",
        finished: false,
      },
      {
        name: "Fat Burn",
        time: "09:45 AM",
        duration: "45 MIN",
        coach: "Edward",
        description:
          "A high-energy workout designed to maximize fat loss while improving cardiovascular fitness.",
        finished: false,
      },
      {
        name: "Cardio (Women Only)",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A cardio workout for women, focusing on enjoyable exercises to enhance fitness in a supportive environment.",
        finished: false,
      },
      {
        name: "Lower Body",
        time: "01:45 PM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "An upper body workout aimed at improving strength in arms, shoulders, and back. Perfect for all fitness levels.",
        finished: false,
      },
      {
        name: "Free Weights",
        time: "04:55 PM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "A boxing class that combines technique with cardio, helping you build strength and endurance while learning boxing skills.",
        finished: false,
      },
      {
        name: "Circuit",
        time: "05:15 PM",
        duration: "30 MIN",
        coach: "Edward",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Aerobic",
        time: "06:00 PM",
        duration: "60 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Upper Body",
        time: "08:00 PM",
        duration: "60 MIN",
        coach: "Dave",
        description:
          "An upper body workout aimed at improving strength in arms, shoulders, and back. Perfect for all fitness levels.",
        finished: false,
      },
    ],
  },
  {
    day: "Tuesday",
    programs: [
      {
        name: "Aerobic",
        time: "08:30 AM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Free Weight",
        time: "09:30 AM",
        duration: "60 MIN",
        coach: "Dave",
        description:
          "A session focusing on weightlifting techniques to enhance muscle strength and endurance.",
        finished: false,
      },
      {
        name: "Circuit",
        time: "09:45 AM",
        duration: "60 MIN",
        coach: "Emily",
        description:
          "A fun circuit workout that includes a variety of exercises targeting strength and endurance. Great for all fitness levels!",
        finished: false,
      },
      {
        name: "Cardio (Women Only)",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A cardio workout for women, focusing on enjoyable exercises to enhance fitness in a supportive environment.",
        finished: false,
      },
      {
        name: "LBT",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Edward",
        description:
          "An energizing lower body workout designed to strengthen your legs and glutes.",
        finished: false,
      },
      {
        name: "Machines",
        time: "05:00 PM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "Learn to effectively use gym machines in this workout designed to enhance strength and fitness in a safe environment.",
        finished: false,
      },
      {
        name: "Total Body",
        time: "05:15 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A comprehensive total body workout that targets all major muscle groups.",
        finished: false,
      },
      {
        name: "Aerobic",
        time: "06:00 PM",
        duration: "60 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Spartans",
        time: "08:00 PM",
        duration: "60 MIN",
        coach: "Edward",
        description:
          "A challenging workout designed to push your limits and enhance your strength and endurance.",
        finished: false,
      },
    ],
  },
  {
    day: "Wednesday",
    programs: [
      {
        name: "Aerobic",
        time: "08:00 AM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Crossfit",
        time: "09:00 AM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "A high-intensity workout that combines various exercises for a full-body challenge.",
        finished: false,
      },
      {
        name: "Lower Body",
        time: "09:45 AM",
        duration: "45 MIN",
        coach: "Edward",
        description:
          "An energizing lower body workout designed to strengthen your legs and glutes.",
        finished: false,
      },
      {
        name: "Cardio (Women Only)",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A cardio workout for women, focusing on enjoyable exercises to enhance fitness in a supportive environment.",
        finished: false,
      },
      {
        name: "Box Fitness",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "An invigorating workout combining boxing techniques and cardio for a fun fitness experience.",
        finished: false,
      },
      {
        name: "Free Weights",
        time: "05:15 PM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "A session focusing on weightlifting techniques to enhance muscle strength and endurance.",
        finished: false,
      },
      {
        name: "Aerobic",
        time: "06:00 PM",
        duration: "60 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Conditi",
        time: "08:00 PM",
        duration: "60 MIN",
        coach: "Edward",
        description:
          "A conditioning workout aimed at improving strength, endurance, and overall fitness.",
        finished: false,
      },
    ],
  },
  {
    day: "Thursday",
    programs: [
      {
        name: "Aerobic",
        time: "08:30 AM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Bodybuild",
        time: "09:45 AM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "A focused session aimed at building muscle and strength through targeted exercises.",
        finished: false,
      },
      {
        name: "Crossfit",
        time: "10:00 AM",
        duration: "45 MIN",
        coach: "Edward",
        description:
          "A high-intensity workout that combines various exercises for a full-body challenge.",
        finished: false,
      },
      {
        name: "Lower Body",
        time: "10:00 AM",
        duration: "50 MIN",
        coach: "Alex",
        description:
          "An energizing lower body workout designed to strengthen your legs and glutes.",
        finished: false,
      },
      {
        name: "Cardio (Women Only)",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A cardio workout for women, focusing on enjoyable exercises to enhance fitness in a supportive environment.",
        finished: false,
      },
      {
        name: "Upper Body",
        time: "01:45 PM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "An upper body workout aimed at improving strength in arms, shoulders, and back. Perfect for all fitness levels.",
        finished: false,
      },
      {
        name: "Boxing",
        time: "05:00 PM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "A boxing class that combines technique with cardio, helping you build strength and endurance while learning boxing skills.",
        finished: false,
      },
      {
        name: "Aerobic",
        time: "06:00 PM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Body Build",
        time: "08:00 PM",
        duration: "60 MIN",
        coach: "Edward",
        description:
          "A focused session aimed at building muscle and strength through targeted exercises.",
        finished: false,
      },
    ],
  },
  {
    day: "Friday",
    programs: [
      {
        name: "Circuit",
        time: "08:00 AM",
        duration: "50 MIN",
        coach: "Edward",
        description:
          "A fun and challenging circuit workout targeting strength and endurance.",
        finished: false,
      },
      {
        name: "Lower Body",
        time: "10:00 AM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "An energizing lower body workout designed to strengthen your legs and glutes.",
        finished: false,
      },
      {
        name: "Cardio (Women Only)",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A cardio workout for women, focusing on enjoyable exercises to enhance fitness in a supportive environment.",
        finished: false,
      },
      {
        name: "Circuit",
        time: "02:30 PM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "A fun and challenging circuit workout targeting strength and endurance.",
        finished: false,
      },
      {
        name: "Crossfit",
        time: "05:00 PM",
        duration: "40 MIN",
        coach: "Edward",
        description:
          "A high-intensity workout that combines various exercises for a full-body challenge.",
        finished: false,
      },
      {
        name: "Aerobic",
        time: "06:00 PM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Bodybuild",
        time: "07:30 PM",
        duration: "60 MIN",
        coach: "Dave",
        description:
          "A focused session aimed at building muscle and strength through targeted exercises.",
        finished: false,
      },
    ],
  },
  {
    day: "Saturday",
    programs: [
      {
        name: "Aerobic",
        time: "08:30 AM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Circuit",
        time: "09:30 AM",
        duration: "45 MIN",
        coach: "Edward",
        description:
          "A fun circuit workout that includes a variety of exercises targeting strength and endurance. Great for all fitness levels!",
        finished: false,
      },
      {
        name: "Machines",
        time: "10:00 AM",
        duration: "45 MIN",
        coach: "Dave",
        description:
          "Learn to effectively use gym machines in this workout designed to enhance strength and fitness in a safe environment.",
        finished: false,
      },
      {
        name: "Cardio (Women Only)",
        time: "12:55 PM",
        duration: "45 MIN",
        coach: "Emily",
        description:
          "A cardio workout for women, focusing on enjoyable exercises to enhance fitness in a supportive environment.",
        finished: false,
      },
      {
        name: "Crossfit",
        time: "05:00 PM",
        duration: "40 MIN",
        coach: "Edward",
        description:
          "A high-intensity workout that combines various exercises for a full-body challenge.",
        finished: false,
      },
      {
        name: "Aerobic",
        time: "06:00 PM",
        duration: "45 MIN",
        coach: "Alex",
        description:
          "A fun and energetic aerobic workout to elevate your heart rate and improve your fitness through enjoyable movements.",
        finished: false,
      },
      {
        name: "Body Build",
        time: "07:30 PM",
        duration: "60 MIN",
        coach: "Dave",
        description:
          "A focused session aimed at building muscle and strength through targeted exercises.",
        finished: false,
      },
      {
        name: "Abs Assault",
        time: "08:00 PM",
        duration: "30 MIN",
        coach: "Emily",
        description:
          "A focused session aimed at strengthening your core through various ab exercises.",
        finished: false,
      },
    ],
  },
];
