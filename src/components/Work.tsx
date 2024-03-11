import tw from "twin.macro";
import Ruler from "./Hr";
import ReactGa from "react-ga4";

const Work = () => {
  return (
    <>
      <main>
        <h1
          id="Work"
          className="text-5xl font-headings mt-36 font-bold dark:text-teal-500"
        >
          Work Experience <br /><br />
        </h1>
      </main>

      <section>
       
        
      </section>
      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://github.com/Bhanu1776/IT-Dept-Website"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Internships",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Engineer
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                Loyalty Juggernaut
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; July 2021 - July 2022 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.6rem] font-sans">
          Embarking on a journey fueled by a passion for backend technologies, I've had the opportunity to work on developing and refining over ten Django REST API solutions, focusing on performance improvements and contributing to the existing codebase. I've enjoyed the challenge of integrating APIs for three clients, working closely with teams across different functions to ensure everything runs smoothly. My projects have led me into the cloud, where I've gotten to use AWS services like DynamoDB, EMR, EC2, and Redshift, helping to make our infrastructure more scalable and reliable. Keeping an eye on Sentry logs, I've been part of efforts to maintain system uptime at 99% during key migrations and updates. I've also embraced the practice of test-driven development and used tools like Postman to address technical issues, which has helped reduce bugs by 10%. On the efficiency front, I've implemented payment solutions and automated tasks with Celery, seeing a significant improvement in our processes. By participating in code reviews, I've learned a lot about maintaining high standards of code quality, which has greatly reduced post-deployment issues. It's been a rewarding journey of growth, collaboration, and learning.
          </p>
        </Article>
      </section>

      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a>
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Engineer Intern
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                Loyalty Juggernaut
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; Jan 2021 - Jun 2021 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.6rem] font-sans">
          Diving into the world of software development, I had the opportunity to significantly enhance our APIs by adding advanced data filters and expanding response fields, leading to a 20% improvement in functionality. While employing Git for version control to enhance collaboration, I contributed to the use of CI/CD pipelines, utilizing Jenkins and Docker, which significantly increased our deployment efficiency. My development work extended to crafting database-driven applications, skillfully working with both relational and non-relational databases. In adopting the Agile methodology, I actively participated in daily Scrum meetings, contributing to our team's efforts to navigate the software development life cycle (SDLC) effectively.  My focus on optimizing performance also led me to utilize tools like Datadog, enhancing our API's efficiency and reliability.
          </p>
        </Article>

        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a>
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Engineer Intern
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                Model N
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; May 2020  - Dec 2020 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.6rem] font-sans">
Starting my journey as a full-stack developer, I played a key role in developing a sophisticated application with Spring Boot for REST API microservices and integrating a React-based frontend, aimed at bridging server and client-side technologies. My efforts in implementing efficient pagination enhanced user navigation, while architecting a Lambda-based webhook framework automated communications and data synchronization. Additionally, I played a key role in the integration of Apache Kafka, a move that significantly improved our API's performance by approximately 20% and strengthened our data handling capabilities. This experience underscored the value of collaboration, innovation, and the continuous pursuit of improvement in the evolving landscape of software development.
          </p>
        </Article>
      </section>
      <Ruler />
    </>
  );
};

const Article = tw.article` 
  relative 
  grid 
  md:grid-cols-5 
  md:pl-8 
  -mb-12 
  md:gap-10 
  before:content-[''] 
  mx-12 
  before:block 
  before:h-full 
  before:absolute 
  before:left-[-25px] 
  md:before:left-[-17px] 
  before:border-l-2 
  before:border-gray-300 
  dark:before:border-gray-700 
  md:space-x-4 pb-8
`;

export default Work;
