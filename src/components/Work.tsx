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
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Designed and developed over 10 new high-performance and efficient Django REST API solutions, concurrently improving
            existing ones for optimal performance. Documented and updated technical API documentation.<br />
          • Headed API integration for 3 clients, collaborating with cross-functional teams to ensure seamless functionality.<br />
          • Deployed end-to-end cloud-based solutions utilizing AWS services such as DynamoDB, EMR, EC2, and Redshift to enhance
            infrastructure scalability and reliability.<br />
          • Handled production incidents by monitoring Sentry logs, ensuring 99% system uptime during migrations and updates.<br />
          • Resolved technical issues, implemented unit tests in existing applications using test-driven development (TDD)
            methodologies and Postman, reducing overall bugs by 10%.<br />
          • Implemented payment solutions with secure card linking and increased efficiency by 40% with automated Celery jobs.<br />
          • Conducted code reviews to enforce high code quality standards, leading to a 50% reduction in post-deployment bugs.<br />
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
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Upgraded existing APIs with advanced data filters and expanded response fields, resulting in 20% improved functionality.<br />
          • Integrated Git for version control, facilitating collaboration. Orchestrated CI/CD pipelines for automated software delivery,
            boosting deployment efficiency, utilizing Jenkins and Docker. Deployed Datadog for API performance optimization.<br />
          • Developed database-driven applications working with relational databases and non-relational databases.<br />
          • Adapted Agile methodology for development, orchestrating daily Scrum meetings to drive collaborative projects through the
            software development life cycle (SDLC).<br />
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
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Developed full-stack application using Spring Boot for REST API microservices, optimizing CRUD operations, and
            integrating with a React-based frontend. <br />
          • Enhanced user experience by implementing robust front-end and back-end pagination across all features.<br />
          • Architected a flexible framework for webhooks using Lambda, enabling automatic email triggers and data synchronization.<br />
          • Played a pivotal role in Apache Kafka integration, facilitating efficient data transfer across multiple organizations, which
            improved API performance by about 20% and upgraded data handling capabilities.<br />
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
