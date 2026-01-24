import React from "react";

const WorkExpRow = (props: any) => {
  const { title, company, location, jobType, startDate, endDate } = props;
  return (
    <>
      <div className="flex flex-col gap-1 w-8/12 pb-4 border-b border-gray-300">
        <div className="flex flex-row items-center justify-between text-gray-600">
          <div className="text-lg">{title}</div>
          <div className="text-sm text-green-600">{jobType}</div>
        </div>
        <div className="flex flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex-1 ">{company}</div>
          <div className="flex-1 text-center">{location}</div>
          <div className="flex-1 italic text-right">
            {startDate} - {endDate}
          </div>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-semibold text-blue-900">About Me</h1>
        <div className="flex flex-col gap-3 py-4 text-base justify-between">
          <p>
            A seasoned Lead Frontend Developer with 14 years of extensive
            experience in designing and implementing high-performance web
            applications. Proficient in modern frontend technologies including
            ReactJS, Angular, AngularJS, Redux, and NodeJS. Expert in crafting
            responsive and interactive user interfaces using HTML5, CSS3,
            Bootstrap, and Material UI. Adept at JavaScript programming,
            ensuring seamless and dynamic user experiences.
          </p>
          <p>
            Demonstrates a strong understanding of software development
            lifecycle, agile methodologies, and best coding practices. Possesses
            robust managerial skills with a proven track record of leading
            cross-functional teams, mentoring junior developers, and
            collaborating with stakeholders to deliver projects on time and
            within scope. Known for excellent problem-solving abilities,
            innovation, and a commitment to continuous learning and improvement.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mt-4 text-blue-900">
          Work Experience
        </h2>
        <div className="flex flex-col gap-4 p-4">
          <WorkExpRow
            title="Manager - Projects"
            company="Cognizant Technology Solutions"
            jobType="Full-time"
            location="Texas, USA"
            startDate="Feb 10, 2024"
            endDate="Till Date"
          />
          <WorkExpRow
            title="Manager - Projects"
            company="Cognizant Technology Solutions"
            jobType="Full-time"
            location="Chennai, India"
            startDate="Oct 27, 2021"
            endDate="Feb 09, 2024"
          />
          <WorkExpRow
            title="Technology Lead"
            company="Wipro Limited"
            jobType="Full-time"
            location="Chennai, India"
            startDate="Nov 07, 2019"
            endDate="Oct 20, 2021"
          />
          <WorkExpRow
            title="Technical Lead"
            company="Infosys Limited"
            jobType="Full-time"
            location="Chennai, India"
            startDate="May 02, 2017"
            endDate="Oct 25, 2019"
          />
          <WorkExpRow
            title="Lead Software Engineer"
            company="EC Group Datasoft Pvt Ltd"
            jobType="Full-time"
            location="Chennai, India"
            startDate="Jan 17, 2012"
            endDate="Apr 28, 2017"
          />
          <WorkExpRow
            title="Software Programmer"
            company="Neoryx Technologies"
            jobType="Full-time"
            location="Chennai, India"
            startDate="Oct 10, 2010"
            endDate="Dec 20, 2011"
          />
        </div>
      </section>
      <h2 className="text-3xl font-semibold mt-4 text-blue-900">Education</h2>
      <section>
        <div className="flex flex-col gap-4 p-4">
          <WorkExpRow
            title="Bachelor in Computer Science and Engineering"
            company="KCG College of Technology"
            jobType="Full-time"
            location="Chennai, India"
            startDate="Aug 2006"
            endDate="May 2010"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
