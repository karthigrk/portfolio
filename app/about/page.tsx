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
          <div>{company}</div>
          <div>{location}</div>
          <div className="italic">
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
        <h1 className="text-2xl font-semibold text-blue-900">About Me</h1>
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
          <div>
            <div className="text-lg py-4">Specializations</div>
            <p>
              <span className="text-base font-semibold">Frontend:</span>
              <span className="px-2">
                React.js, TypeScript, Redux, Angular, AngularJS, JavaScript,
                HTML
              </span>
            </p>
            <p>
              <span className="text-base font-semibold">AI:</span>
              <span className="px-2">
                Agentic AI development, GitHub Copilot
              </span>
            </p>
            <p>
              <span className="text-base font-semibold">Styling:</span>
              <span className="px-2">CSS3, SCSS, Bootstrap, Tailwind CSS</span>
            </p>
            <p>
              <span className="text-base font-semibold">UI Libraries:</span>
              <span className="px-2">Custom UI Library, Material UI</span>
            </p>
            <p>
              <span className="text-base font-semibold">Bundlers:</span>
              <span className="px-2">
                Vite, Webpack, Mono Repo with Turbo, Micro frontend with Module
                federation
              </span>
            </p>
            <p>
              <span className="text-base font-semibold">Tesing:</span>
              <span className="px-2">
                Vitest, React Tesing Library, Automation on with Testcafé and
                Cucumber
              </span>
            </p>
            <p>
              <span className="text-base font-semibold">Backend:</span>
              <span className="px-2">Node.js, Ruby on Rails</span>
            </p>
            <p>
              <span className="text-base font-semibold">Database:</span>
              <span className="px-2">GraphQL, Mongo DB, PostgreSQL</span>
            </p>
            <p>
              <span className="text-base font-semibold">Tools:</span>
              <span className="px-2">
                Git, Gitlab, SVN, VS Code, Postman, Web Accessibility Tools (AXE
                dev tools), SonarQube, ESLint
              </span>
            </p>
            <p>
              <span className="text-base font-semibold">Other Skills:</span>
              <span className="px-2">
                RESTful APIs, CI/CD Pipelines (Jenkins, Gitlab), Cross browser
                compatibility, Agile Development
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-blue-900">
          Work Experience
        </h2>
        <div className="flex flex-col gap-4 p-4">
          <WorkExpRow
            title="Lead Software Engineer"
            company="EC Group Datasoft Pvt Ltd"
            jobType="Full-time"
            location="Chennai"
            startDate="Jan 17, 2012"
            endDate="Apr 28, 2017"
          />
          <WorkExpRow
            title="Software Programmer"
            company="Neoryx Technologies"
            jobType="Full-time"
            location="Chennai"
            startDate="Oct 10, 2010"
            endDate="Dec 20, 2011"
          />
        </div>
      </section>
      <h2 className="text-2xl font-semibold text-blue-900">Education</h2>
    </div>
  );
};

export default About;
