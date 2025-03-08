import Link from "next/link";

export const Pricing = () => {
  return (
    <>
      <div className=' bg-secondary font-body text-accent min-h-screen py-6'>
        <h1 className='text-lg font-custom  font-bold mb-3 text-center'>
          OUR MEMBERSHIP PLANS
        </h1>
        <div className='flex items-center justify-center'>
          <p className=' txt-lg text-center p-3 mb-8 text-accent md:w-[50%]'>
            Our plans are inclusive with professional coaches, access to every
            equipment and machines . We offer value for money and state of the
            art equipment from UK !
          </p>
        </div>

        {/**men membership */}
        <div className='flex flex-row  space-x-2   justify-center items-center'>
          <div className='text-lg font-semibold w-[46%] md:w-full max-w-sm p-2 bg-secondary border border-primary hover:border-primary rounded-lg  sm:p-8 '>
            <h2 className='text-primary text-bold text-lg'>ONE DAY PASS</h2>
            <div className='text-xl text-secondary bg-primary p-2 w-[100%]   rounded-md my-2'>
              Ugs 0
            </div>
            <div className=' font-light text-lg text-accent m-2'>VISITOR</div>
            <ul className=' text-sm md:text-lg'>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Fitness tips</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Group Classes</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Free weight</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Machines</span>
              </li>
              <li className=' border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-gray-500  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className='line-through whitespace-nowrap'>
                  {" "}
                  Training plans
                </span>
              </li>
              <li className='p-2 text-center font-light   text-gray-500  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className='line-through whitespace-nowrap'>
                  Meal plans
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE Wizz gym one day pass UGx 0")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='border border-primary bg-white md:w-[70%]  md:text-lg text-sm text-primary p-2 rounded-md text-center   hover:bg-red-700 hover:text-accent'
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className='text-lg font-semibold w-[46%] md:w-full max-w-sm p-2 bg-secondary border border-primary hover:border-primary rounded-lg  sm:p-8 '>
            <h2 className='text-primary text-bold text-lg'>MEN'S PLAN</h2>
            <div className='text-xl text-secondary bg-primary p-2 w-[100%]  rounded-md my-2'>
              Ugs 120,000
            </div>
            <div className=' font-light text-lg text-accent m-2'>
              PER MONTH
            </div>
            <ul className=' text-sm md:text-lg'>
              <li className=' border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'> Fitness tips</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'> Group classes</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Free weight</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Training plans</span>
              </li>
              <li className='p-2 text-center font-light   text-secondary  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Meal plans</span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE Wizz gym    Men's plan    Ugs 120,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='border border-primary bg-white md:w-[70%]  md:text-lg text-sm text-primary p-2 rounded-md text-center   hover:bg-red-700 hover:text-accent'
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        {/**WOmen membership */}
        <h2 className='text-center p-3  text-lg  '>
          Women & Students Membership Plans
        </h2>
        <div className='flex flex-row  space-x-2   justify-center items-center'>
          <div className='text-lg font-semibold w-[46%] md:w-full max-w-sm p-2 bg-secondary border border-primary hover:border-primary rounded-lg  sm:p-8 '>
            <h2 className='text-primary text-bold text-lg'>STUDENT'S PLAN</h2>
            <div className='text-xl text-secondary bg-primary p-2 w-[100%]   rounded-md my-2'>
              Ugs 100,000
            </div>
            <div className=' font-light text-lg text-secondary m-2'>
              PER MONTH
            </div>
            <ul className=' text-sm md:text-lg'>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Fitness tips</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Group Classes</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Free weight</span>
              </li>

              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Training plans</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Meal plans</span>
              </li>
              <li className='p-2 text-center font-light   text-gray-500  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className='line-through whitespace-nowrap'>
                  Private classes
                </span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE Wizz gym Student Ugs 100,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='border border-primary bg-white md:w-[70%]  md:text-lg text-sm text-primary p-2 rounded-md text-center   hover:bg-red-700 hover:text-accent'
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className='text-lg font-semibold w-[46%] md:w-full max-w-sm p-2 bg-secondary border border-primary hover:border-primary rounded-lg  sm:p-8 '>
            <h2 className='text-primary text-bold text-lg'>WOMEN'S PLAN</h2>
            <div className='text-xl text-secondary bg-primary p-2 w-[100%]  rounded-md my-2'>
              Ugs 120,000
            </div>
            <div className=' font-light text-lg text-secondary m-2'>
              PER MONTH
            </div>
            <ul className=' text-sm md:text-lg'>
              <li className=' border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'> Fitness tips</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'> Group classes</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Free weight</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Training plans</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Meal plans</span>
              </li>
              <li className='p-2 text-center font-light   text-secondary  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Private clases</span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE Wizz gym Women Ugs 120,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='border border-primary bg-white md:w-[70%]  md:text-lg text-sm text-primary p-2 rounded-md text-center   hover:bg-red-700 hover:text-accent'
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center p-12 mx-2'>
          <h2 className='font-semibold text-2xl'>CORPORATE </h2>
          <p className=' text-center md:w-[55%] text-accent'>
            Save up to
            <span className='text-primary text-2xl font-bold mx-2'>20%</span> on
            memberships when you sign your employees up to one of our great {" "}
            <Link
              href='/contact'
              className='whitespace-nowrap text-blue-600 underline'
            >
              corporate packages.
            </Link>
          </p>
        </div>
        <div className='flex flex-col justify-center items-center p-4 mx-2'>
          <h2 className='font-semibold text-2xl p-2'>A SOLUTION FOR EVERYONE.</h2>
          <div className='md:w-[56%] flex flex-col space-y-3 md:space-y-1 text-center text-accent'>
            <p>
              Here at Wizz Gym we want to be able to offer individuals and
              companies a gym option that is flexible, easy to set up and with
              no hidden clauses.
            </p>
            <p>
              That's why we tell you from the start what our corporate packages
              are, no lengthy emails and no messing around!
            </p>
            <p>
              You choose the option that works best for your business. To set up
              a corporate package or to find out more please email us.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center my-3'>
          <div className='text-lg font-semibold w-[90%] md:w-full max-w-sm p-2 bg-secondary border border-primary hover:border-primary rounded-lg  sm:p-8 '>
            <h2 className='text-primary text-bold text-center text-lg'>
              CORPORATE PLAN
            </h2>
            <div className='text-xl text-secondary  bg-primary p-2 w-[100%]  rounded-md my-2'>
              Ugs 120,000
            </div>
            <div className=' font-light text-lg text-secondary m-2'>
              PER MONTH
            </div>
            <ul className=' text-sm md:text-lg'>
              <li className=' border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'> Fitness tips</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'> Group classes</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Free weight</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Machines</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Training plans</span>
              </li>
              <li className='border-0 border-b-[1px] border-b-gray-400 border-dotted p-2 text-center font-light   text-accent  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Meal plans</span>
              </li>
              <li className='p-2 text-center font-light   text-secondary  flex flex-row items-center space-x-2'>
                <TickIcone />
                <span className=' whitespace-nowrap'>Private clases</span>
              </li>
            </ul>
            <div className='flex justify-center mt-4  items-center'>
              <button
                onClick={() => {
                  const url = `https://wa.me/+256705746131?text=${encodeURIComponent("SUBSCRIBE Wizz gym  Corporate Ugs 120,000")}`;
                  window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
                }}
                className='bg-white border border-primary md:w-[70%]  md:text-lg text-sm text-primary p-2 rounded-md text-center   hover:bg-red-700 hover:text-accent'
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TickIcone = () => {
  return (
    <svg
      width='20px'
      height='20px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
          fill='currentColor'
        ></path>
        <path
          d='M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z'
          fill='currentColor'
        ></path>
      </g>
    </svg>
  );
};
