import tw from "twin.macro";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer id="Footer" className="relative">
        <hr className="dark:bg-midnight dark:h-[1px] dark:border-none"></hr>
        <form action="https://formspree.io/f/mvoerrwv" method="POST">
          <BgImg src="https://ik.imagekit.io/sz5ttlvhz/Footerbg.png?updatedAt=1694977193462" alt="rays" loading="lazy"/>
          <MainGrid>
            <LeftGrid>
              <LeftHeading1>GENERAL</LeftHeading1>
              <UpperDiv>
                <Link
                  to="Home"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <List>Home</List>
                </Link>
                <Link
                  to="About"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-105}
                  duration={400}
                >
                  <List>About</List>
                </Link>
                <Link
                  to="Education"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  <List>Education</List>
                </Link>
                <Link
                  to="Work"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-240}
                  duration={200}
                >
                  <List>Work</List>
                </Link>
                <Link
                  to="Project"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  <List>Projects</List>
                </Link>
              </UpperDiv>
             </LeftGrid> 

            <RightGrid>
              <RightHeading>Get In Touch</RightHeading>
              <UpperInputDiv>
                <label className="sr-only">Email address</label>
                <UpperInput
                  id="username"
                  name="username"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                  autoComplete="no"
                />
                <UpperInput
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                  autoComplete="no"
                />
              </UpperInputDiv>
            </RightGrid>

            <LowerDiv>
              <TextArea
                id="message"
                name="message"
                placeholder="Enter message"
                required
              />
              <ButtonDiv>
                <PurpleBtn type="submit" onClick={()=>{navigator.vibrate(2000)}}>Let's Talk!</PurpleBtn>
              </ButtonDiv>
            </LowerDiv>
          </MainGrid>
        </form>
      </footer>
    </>
  );
};




const BgImg = tw.img`
absolute 
mt-[-5.7rem] 
xxsm:h-[60rem] 
xxsm:opacity-50 
xxsm:-ml-8
tablet:ml-0
tablet:h-[40rem] 
tablet:w-[80rem]
tablet:opacity-80 
select-none
`;

const MainGrid = tw.main`
grid 
gap-2 
xxsm:grid-cols-1
md:grid-cols-3 
md:grid-rows-2 
`;

const LeftGrid = tw.section`
flex 
flex-col
row-span-2 
z-10 
!px-2 
py-12 
md:px-20 
`;

const LeftHeading1 = tw.h1`
text-slate-700 
text-[1.7rem] 
font-semibold 
font-headings
dark:text-slate-200
`;


const UpperDiv = tw.section`
  mt-4
`;

const List = tw.a`
  [opacity: .7;]
  [font-size: 1.65rem;]
  [line-height: 1.5;]
  [margin-top: 1rem;]
  [font-weight:400;]
  [display:block;] // This will make each link a block-level element
  font-sans 
  cursor-pointer
  hover:underline 
  hover:text-teal-600 
  dark:text-slate-200
`;


const RightGrid = tw.section`
col-span-2 
z-10 
xxsm:px-2 
md:px-0 pt-12
`;

const RightHeading = tw.h1`
text-slate-700 
font-headings 
font-bold 
text-4xl 
mb-10
dark:text-teal-500
`;

const UpperInputDiv = tw.div`
relative 
flex 
flex-col
gap-8 
space-y-0 
my-4 
tablet:flex-row 
`;

const UpperInput = tw.input`
bg-[#ffffffa4] 
border-gray-300 
placeholder-slate-500 
rounded-full 
w-full 
px-5 
py-5 
text-2xl 
dark:bg-dark 
dark:border-gray-400 
dark:focus:ring-indigo-400 
dark:focus:ring-offset-midnight
focus:outline-none 
focus:ring-2 
focus:ring-indigo-500 
focus:ring-offset-2 
focus:ring-offset-[#F8FAFC] 
dark:text-slate-200
select-none
`;

const LowerDiv = tw.section`
col-span-2 
z-10 
xxsm:px-2 
md:px-0
`;

const TextArea = tw.textarea`
bg-[#ffffff8c] 
border-gray-300 
placeholder-slate-500 
text-2xl 
rounded-[2rem] 
resize-none
w-full 
px-5 
py-14 
mb-8 
select-none
focus:outline-none 
focus:ring-2 
focus:ring-indigo-500 
focus:ring-offset-2 
focus:ring-offset-[#F8FAFC] 
dark:bg-dark 
dark:border-gray-400 
dark:focus:ring-indigo-400 
dark:focus:ring-offset-midnight
md:-mt-8 
dark:text-slate-200
`;

const ButtonDiv = tw.section`
flex 
flex-row-reverse
`;

const PurpleBtn = tw.button`
flex 
justify-center 
items-center 
text-2xl 
font-medium 
border 
border-transparent 
rounded-full 
text-white 
bg-indigo-500 
w-full 
mb-4 
px-12 
py-3 
hover:bg-indigo-400 
focus:outline-none 
focus:ring-2 
focus:ring-white 
focus:ring-offset-2 
focus:ring-offset-indigo-700 
sm:mt-0 
sm:ml-3 
sm:w-auto 
sm:flex-shrink-0
select-none
`;



export default Footer;