/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 200 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siddharth Beniwal",
  title: "Hi, I'm Siddharth Beniwal",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with 3+ years of experience developing efficient, responsive, and feature-rich web applications using HTML5, CSS3, JavaScript(ES6), ReactJS and Redux."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11f3eUJ24hfbHZXx26Hgz9fNilWep_bPo/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Siddharthbeniwal",
  linkedin: "https://www.linkedin.com/in/siddharthbeniwal",
  gmail: "siddharthben16@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle:
    "An ambitious developer, always growing and refining my skills to create dynamic and comprehensive web applications. Proficient in:",
  skills: [
    emoji(
      "⚡ Developing scalable, high-performance, responsive web applications."
    ),
    emoji(
      "⚡ Optimizing code efficiency and maintainability by creating reusable components that ensure scalability, readability, and performance."
    ),
    emoji(
      "⚡ Integrating RESTful APIs for seamless communication between frontend and backend systems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      imageUrl: "/skill-icons/html5.svg"
    },
    {
      skillName: "CSS3",
      imageUrl: "skill-icons/css3.svg"
    },
    {
      skillName: "Sass",
      imageUrl: "skill-icons/sass.svg"
    },
    {
      skillName: "JavaScript",
      imageUrl: "skill-icons/javascript.svg"
    },
    {
      skillName: "React JS",
      imageUrl: "skill-icons/react-js.svg"
    },
    {
      skillName: "Redux",
      imageUrl: "skill-icons/redux.svg"
    },
    {
      skillName: "Jest",
      imageUrl: "skill-icons/jest.png"
    },
    {
      skillName: "Node JS",
      imageUrl: "skill-icons/node-js.svg"
    },
    {
      skillName: "MongoDB",
      imageUrl: "skill-icons/mongo-db.png"
    },
    {
      skillName: "AWS",
      imageUrl: "skill-icons/aws.svg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: "ggsipu-logo.png",
      subHeader:
        "Bachelor of Technology in Instrumentation and Control Engineering",
      duration: "2016 - 2020",
      desc: "Acquired in-depth knowledge of industrial automation, process control systems, and instrumentation engineering principles.",
      descBullets: [
        "Learned embedded systems, IoT, and Arduino, focusing on microcontrollers, sensors, and automation.",
        "Conducted a workshop on Arduino basics for students, sparking interest in technology."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML & CSS",
      progressPercentage: "89%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "React JS",
      progressPercentage: "90%"
    },
    {
      Stack: "Node JS",
      progressPercentage: "35%"
    },
    {
      Stack: "Database",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Infosys",
      companylogo: "infosys-logo.png",
      date: "November 2021 - Present",
      desc: "Working as a Frontend Developer",
      descBullets: [
        "Building responsive and user-focused web applications using React JS, JavaScript, and Redux, with some exposure to Node JS, all within an Agile environment, collaborating with cross-functional teams to deliver high-performance solutions."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "A collection of projects that I have worked on.",
  projects: [
    {
      image: "project-images/food-express.png",
      projectName: "Food Ordering App",
      projectDesc:
        "A dynamic food ordering web app developed using the MERN stack, integrated with Redux Toolkit for efficient state management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodexpress123.netlify.app/"
        },
        {
          name: "Watch Demo Video",
          url: "https://drive.google.com/file/d/11QUvA5GaTwPHY-CXkIG2jOGtNKd070Rz/preview"
        },
        {
          name: "Go to Repo",
          url: "https://github.com/Siddharthbeniwal/Food-Express"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "project-images/to-do-list.png",
      projectName: "To-do List",
      projectDesc:
        "A simple task organizing app created in React JS that allows user to add, edit or delete their to-do tasks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siddharth-todolist.netlify.app/"
        },
        {
          name: "Watch Demo Video",
          url: "https://drive.google.com/file/d/1lj7HrmCRd-ztdYClOm2AzeVmLQz57QY5/preview"
        },
        {
          name: "Go to Repo",
          url: "https://github.com/Siddharthbeniwal/to-do-list"
        }
      ]
    },
    {
      image: "project-images/text-styler.png",
      projectName: "Text Styler",
      projectDesc:
        "A simple text-styler app allows users to input text and apply various styles for easy formatting and customization of text.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siddharth-textstyler.netlify.app/"
        },
        {
          name: "Watch Demo Video",
          url: "https://drive.google.com/file/d/1fxHStGuBI7hqwf1J1Ak6BSw2WFfq1ZPj/preview"
        },
        {
          name: "Go to Repo",
          url: "https://github.com/Siddharthbeniwal/TextStyler"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  // title: emoji("Contact Me 📧 |☎️"),
  subtitle: `Have something in mind? Whether it's a project or just a friendly hello, I’d love to hear from you!`,
  number: "",
  email_address: "siddharthben16@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
