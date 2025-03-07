import { useEffect, useState } from "react";
// Define the types for the program
type Program = {
  name: string;
  time: string;
  duration: string;
  coach: string;
  description: string;
  finished: boolean; // Add finished property
};
type Props = {
  schedule: {
    day: string;
    programs: {
      name: string;
      time: string;
      duration: string;
      coach: string;
      description: string;
      finished: boolean;
    }[];
  }[];
};
// Define the weekly schedule

// Generate a unique color for each workout
const generateUniqueColor = (index: number): string => {
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
  ];
  return colors[index % colors.length]; // Cycle through the colors array
};

//Component that filters workouts male/female

const WeeklySchedule = ({ schedule }: Props) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [today, setToday] = useState("");
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate
      .toLocaleDateString("en-US", {
        weekday: "long",
      })
      .toUpperCase();

    setSelectedDay(currentDay);
    setToday(currentDay);
    setHour(currentHour);
  }, []);

  const handleProgramClick = (program: Program) => {
    setSelectedProgram(program);
  };

  const convertTimeToHour = (time: string) => {
    const [hour, minutePart] = time.split(":");

    const period = minutePart.slice(2).trim(); // AM or PM

    let hourNumber = parseInt(hour, 10);
    if (period === "PM" && hourNumber !== 12) {
      hourNumber += 12;
    } else if (period === "AM" && hourNumber === 12) {
      hourNumber = 0;
    }
    return hourNumber;
  };

  return (
    <div className=' font-body p-4 md:p-8 bg-secondary'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-center text-2xl text-gray-100 uppercase'>
          Kampala’s Biggest Fitness Class Community
        </h1>
        <p className=' py-4 mb-8 text-center text-gray-300  md:w-[50%]'>
          Choose from a wide range of Fitness Classes to suit every ability and
          every goal. Whether you want to lose weight, tone up, improve
          strength, or just have fun with others, there's something for
          everyone. Our Fitness Class Coaches will empower you to reach your
          goals in a fun and supportive community. See the class timetable at
          your gym and book your spot at reception.
        </p>
      </div>

      <p className='text-primary'>
        {selectedDay == "SUNDAY" && "Wizz gym is closed on Sunday"}
      </p>
      {schedule
        .filter((day) => day.day.toLocaleUpperCase() === selectedDay)
        .map((day) => (
          <div key={day.day} className=''>
            <h2 className='text-2xl text-gray-100 font-bold mb-4'>{day.day}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {day.programs.map((program, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg shadow-md cursor-pointer ${
                    program.finished
                      ? "bg-gray-400"
                      : generateUniqueColor(index)
                  }`}
                  onClick={() => handleProgramClick(program)}
                >
                  <h3 className=' font-bold'>{program.name}</h3>
                  <p className='text-gray-700 text-sm'>{program.time}</p>
                  <p className='text-gray-500 text-sm'>{program.duration}</p>
                  <p className='text-gray-500 text-sm'>
                    Coach: {program.coach}
                  </p>

                  {day.day.toUpperCase() == today && (
                    <div>
                      {convertTimeToHour(program.time) === hour && (
                        <p className='font-bold text-green-600 animate-pulse'>
                          Happening Now!
                        </p>
                      )}
                      {convertTimeToHour(program.time) < hour && (
                        <p className='text-primary'>Finished</p>
                      )}
                      {convertTimeToHour(program.time) > hour && (
                        <p className='text-blue-500'>Upcoming</p>
                      )}
                    </div>
                  )}
                  <div className='flex justify-center mt-2 items-center'>
                    <p className='bg-primary text-xs font-bold w-fit p-2 rounded-lg text-center text-accent hover:bg-red-800'>
                      Click to view
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      {selectedProgram && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-accent p-6 rounded shadow-lg'>
            <h2 className='text-2xl font-bold'>{selectedProgram.name}</h2>
            <p className='text-gray-700'>{selectedProgram.time}</p>
            <p className='text-gray-500'>{selectedProgram.duration}</p>
            <p>
              <strong>Coach:</strong> {selectedProgram.coach}
            </p>
            <p className='mt-4'>{selectedProgram.description}</p>{" "}
            {/* Program description here */}
            <button
              className='mt-4 bg-primary text-accent px-4 py-2 rounded'
              onClick={() => setSelectedProgram(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklySchedule;
