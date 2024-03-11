import React from 'react';
import tw from 'twin.macro';

const EducationContainer = tw.main`mt-40 container mx-auto px-4 lg:px-8`;
const EducationTitle = tw.h1`
font-headings 
tracking-wide 
font-extrabold
leading-tight 
text-slate-900
text-center
md:text-left
text-3xl 
md:text-5xl 
dark:text-gray-200
mb-8
`;
const EducationEntry = tw.div`mb-8 p-4 md:p-6 border-l-4 border-blue-600 bg-gray-100 space-y-2 md:flex items-center`;
const Degree = tw.h3`text-xl md:text-3xl font-semibold`; 
const Institution = tw.h4`text-lg md:text-2xl`; 
const Period = tw.p`text-base md:text-xl`; 
const CGPA = tw.p`text-base md:text-xl`; 
const UniversityLogo = tw.img`w-60 h-60 mr-4`;
const CourseWork =  tw.p`text-base md:text-xl font-semibold`; 

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer and Information Sciences",
      university: "Syracuse University College of Engineering and Computer Science",
      period: "Aug 2022 - May 2024",
      cgpa: "CGPA: 3.96/4",
      logoUrl: "https://ik.imagekit.io/5wqmnjnj5/Syracuse-Orange-logo.png?updatedAt=1708821163869",
      courseWork: "Course Work : Design and Analysis of Algorithms, Computer Architecture, Operating Systems, Structured Programming and Formal Methods(Haskell), Introduction to Machine learning",
    },
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      university: "Osmania University, Vasavi College of Engineering",
      period: "July 2017 - July 2021",
      cgpa: "CGPA: 9.21/10",
      logoUrl: "https://ik.imagekit.io/5wqmnjnj5/images.jpeg?updatedAt=1708821220822",
      courseWork: "Course Work : Data Structures, Design and Analysis of Algorithms, Object Oriented Programming, Operating Systems, Natural Language Processing",
    }
  ];

  return (
    <EducationContainer  id="Education">
      <EducationTitle>Education</EducationTitle>
      {educationData.map((edu, index) => (
        <EducationEntry key={index}>
          <UniversityLogo src={edu.logoUrl} alt={`${edu.university} logo`} />
          <div>
            <Degree>{edu.degree}</Degree>
            <Institution>{edu.university}</Institution>
            <Period>{edu.period}</Period>
            <CGPA>{edu.cgpa}</CGPA>
            <CourseWork>{edu.courseWork}</CourseWork>
          </div>
        </EducationEntry>
      ))}
    </EducationContainer>
  );
};

export default Education;
