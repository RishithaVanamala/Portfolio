import styled from "styled-components";
import tw from "twin.macro";
import ReactGa from "react-ga4";

const Project = () => {
  return (
    <>
      <header
        id="Project"
        className="flex flex-col items-center gap-4 mt-28 mb-16"
      >
        <h2 className="text-5xl tablet:text-6xl text-center font-headings text-indigo-500 dark:text-teal-500">
          PROJECTS
        </h2>
        <h1 className="text-3xl tablet:text-4xl text-center font-headings dark:text-gray-200">
          Academic and Personal Projects
        </h1>
      </header>

      {/* //* 1st Project  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
          Dynamic Task Management System
          </h2>
          <p>
          Developed a Dynamic Task Management System, inspired by Trello, leveraging Spring Boot and MySQL. 
          This platform enhances project management by offering advanced task tracking, real-time analytics, 
          and a comprehensive view of task history. Designed to simplify project lifecycle management, it provides 
          essential data-driven insights, enabling more efficient workflows and informed decision-making for project teams.
          </p>
          <div>
            <Button
              href="https://github.com/RishithaVanamala/Dynamic-Task-Management-System"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Dynamic Task Management System",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
            Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="Dynamic Task Management System"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Dynamic Task Management System"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/5wqmnjnj5/Task.png?updatedAt=1708916791832"
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
        


      {/* //* 2nd Project  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-6xl dark:text-gray-200"> Apple Home - Feed the Need </h2>
          <p>
          Developed a MERN stack application to streamline the 'Apple Home – Feed the Need' initiative, 
          allowing for efficient management of food donations in India. This platform effectively manages donor and food information, 
          such as expiration and storage dates, improving the accessibility and utility of food donations.
          </p>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="Apple Home - Feed the Need"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Apple Home - Feed the Need"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/5wqmnjnj5/Apple%20Home.png?updatedAt=1709003914660"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 3rd Project  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-6xl dark:text-gray-200">Gesture Control Media Player</h2>
          <p>
          Led the development of a Gesture Control Media Player leveraging OpenCV and TensorFlow to create an engaging, 
          gesture-responsive experience. This innovative player uses a webcam interface for intuitive control, enhancing 
          user interaction by responding to hand signals and facial cues for playback navigation. 
          </p>
          <div>
          <Button
              href="https://github.com/RishithaVanamala/Gesture-Control-Media-Player"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Gesture Control Media Player",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="Gesture Control Media Player"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Gesture Control Media Player"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/5wqmnjnj5/Gesture.png?updatedAt=1708916792883"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 4th Project  */}
      <MainGrid className="bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-5xl dark:text-gray-200">Health Records Management System</h2>
          <p>
          Designed and developed a comprehensive health records system using .NET and Azure, 
          streamlining patient record management with heightened security and real-time functionality.
          The platform serves as a centralized hub for patient history, appointments, and billing information, 
          thereby optimizing healthcare workflows and improving the accessibility of critical health data. 
          </p>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="Health Records Management System"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Health Records Management Syste"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/5wqmnjnj5/Health.png?updatedAt=1708916791938"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 5th Project  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
            Treasure Dash
          </h2>
          <p>
          Developed 'Treasure Dash,' a 2.5D Unity game with C# programming, featuring time-sensitive levels 
          for coin collection, obstacle navigation, and bonus gems. Managed development with Git, ensuring a challenging 
          gameplay where scores increase with pickups and end with enemy contact. 
          </p>
          <div>
            <Button
              href="https://github.com/RishithaVanamala/TreasureDash"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Treasure Dash",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
            Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="Treasure Dash"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Treasure Dash"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/5wqmnjnj5/Treasure%20dash.png?updatedAt=1709003915260"
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
      
      {/* 6th Project */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-5xl dark:text-gray-200">Quora Sincere and Insincere Questions Filtering</h2>
          <p>
          Developed a machine learning model to discern sincere questions from insincere ones on Quora. 
          Utilized data analytics on a Kaggle dataset, evaluating various preprocessing methods and ML algorithms. 
          Key techniques included TF-IDF for feature representation and BERT for model accuracy, significantly improving
          the F1-Score from 47% to 81%.   
          </p>
          <div>
            <Button
              href="https://github.com/RishithaVanamala/Quora-Sincere-and-Insincere-Questions-filtering"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Quora Sincere and Insincere Questions Filtering",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="Quora Sincere and Insincere Questions Filtering"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Quora Sincere and Insincere Questions Filtering"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/5wqmnjnj5/Quora.png?updatedAt=1708916791989"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
    </>
  );
};

const MainGrid = styled.section`
  ${tw`
    grid
    grid-cols-1
    gap-2
    rounded-[2.5rem]
    mb-20
    p-2
    md:p-0
    md:grid-cols-2
    `}
`;

const LeftGrid = styled.article`
  ${tw`
  flex
  flex-col
  self-end 
  col-span-1 
  text-center 
  !mb-20 
  md:text-left
  md:m-8
  md:ml-20 
`}

  &>h2 {
    ${tw` 
    font-headings 
    font-bold 
    mt-0 
    ml-2 
    mb-10
    `}
  }

  & > p {
    ${tw`
      font-sans 
      text-3xl
      ml-2 
      pr-4
      md:text-left
      dark:text-gray-200
    `}
  }
`;

const Button = styled.a`
  ${tw`
    bg-midnight 
    text-white 
    inline-flex 
    text-[1.7rem] 
    items-center 
    rounded-full 
    font-semibold 
    no-underline
    transition
    px-10 
    py-3.5 
    mt-16 
    dark:bg-gray-200 
    dark:text-midnight 
    hover:bg-slate-700 
    select-none
  `}

  svg {
    ${tw`
      stroke-2 
      stroke-white 
      mt-0.5 
      ml-4 
      -mr-3 
      dark:stroke-midnight
    `}
  }
`;


const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  max-width: 100%;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  object-fit: fill;
  border: none;
  padding: 0rem;
  margin: auto;
  width: auto !important;
  min-width: 100%;
  min-height: 100%;

  ${tw`
    md:ml-32
    md:[height: 68rem]
  `}
`;

export { Project, Button };