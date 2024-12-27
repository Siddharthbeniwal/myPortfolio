import React, { useState, useEffect, useRef } from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  const [progressValues, setProgressValues] = useState(
    techStack.experience.map(() => 0) // Initialize all progress bars to 0
  );
  const [isVisible, setIsVisible] = useState(false); // To track if the component is in view
  const sectionRef = useRef(null); // Reference for the component's container

  useEffect(() => {
    // Create an Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when component is visible
        }
      },
      {
        root: null, // Default is the viewport
        threshold: 0.4 // Trigger when 40% of the component is in view
      }
    );

    // Store the current sectionRef value in a variable
    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef); // Start observing the container
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef); // Cleanup observer on unmount
      }
    };
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    if (isVisible) {
      // Animate the progress bars once the component is visible
      setProgressValues(
        techStack.experience.map(exp => parseInt(exp.progressPercentage, 10))
      );
    }
  }, [isVisible]);

  if (techStack.viewSkillBars) {
    return (
      <div ref={sectionRef}>
        <Fade bottom duration={1000} distance="20px">
          <div className="skills-container">
            <div className="skills-bar">
              <h1 className="skills-heading">Proficiency</h1>
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: `${progressValues[i]}%`,
                  transition: "width 1.25s ease-in-out"
                };
                return (
                  <div key={i} className="skill">
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={progressStyle}></span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="skills-image">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
