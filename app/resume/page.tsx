"use client";

import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Define a function to resize the embedded PDF
    const resizeEmbed = () => {
      // Retrieve the embedded PDF element by its ID
      const embed = document.getElementById("pdfEmbed");
      if (embed) {
        // Get the height of the window
        const windowHeight = window.innerHeight;
        // Set the height of the embedded PDF to match the window height
        embed.style.height = `${windowHeight}px`;
      }
    };

    resizeEmbed();
    window.addEventListener("resize", resizeEmbed);
    return () => window.removeEventListener("resize", resizeEmbed);
  }, []);

  return (
    <div>
      <h1>Resume</h1>
      <div>
        <div className="">
          <embed
            className="b-0"
            id="pdfEmbed"
            src="Karthikeyan_GR_Lead_Engineer_Resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
