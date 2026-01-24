import React from "react";

const Tech = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-900">My Tech Stack</h1>
      <div className="m-4">Technologies I have worked with</div>
      <div className="m-4">
        <p>
          <span className="text-base font-semibold">Frontend:</span>
          <span className="px-2">
            React.js, TypeScript, Redux, Angular, AngularJS, JavaScript, HTML
          </span>
        </p>
        <p>
          <span className="text-base font-semibold">AI:</span>
          <span className="px-2">Agentic AI development, GitHub Copilot</span>
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
            Git, Gitlab, SVN, VS Code, Postman, Web Accessibility Tools (AXE dev
            tools), SonarQube, ESLint
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
  );
};

export default Tech;
