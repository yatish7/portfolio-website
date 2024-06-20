/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yatish Manne",
  title: "Hi, I am Yatish",
  subTitle: emoji(
    "A passionate Full Stack Developer and  Machine Learning Engineer🚀 having an experience training ML Models and building Web  applications with JavaScript / Reactjs / Nodejs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19EKkT_wG_YRujuSPT5LVlUFh3-57E6ka/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yatish7",
  linkedin: "https://www.linkedin.com/in/yatish-manne-ab2836254/",
  gmail: "yatish.manne09@gmail.com",
  twitter: "https://twitter.com/Yatishmanne7",
  facebook: "https://www.facebook.com/yatish.manne",
  medium: "https://medium.com/@yatish.manne09",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Developer who is curious to learn and apply new technologies to solve real world problems.",
  skills: [
    emoji(
      "⚡ Train  Machine Learning and Deep Learning models for different use cases with high accuracy."),
    emoji("⚡ Develop highly interactive Full-Stack web applications."),
    emoji(
      "⚡ Familiar in working with various technologies like Git,GitHub,Linux,Bash."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname:"fas fa-brain" 
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "My-SQL",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git "
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal  "
    },
    {
      skillName: "Programming",
      fontAwesomeClassname: "fas fa-code "
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chaitanya Bharathi Institute of Technology",
      logo: require("./assets/images/CBITLogo.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "December 2021 (Current)",
      descBullets: [
        "Organized a technical event and got one of the highest registrations in our department .",
        "Participated in various Hackathons and coding competitions.",
        "Volunteered in organizing various events and workshops."
      ]
    },
    {
      schoolName: "Sri Chaitanya Junior College",
      logo: require("./assets/images/sri_logo.jpeg"),
      subHeader: "Intermediate Education",
      duration: "April 2019 - October 2021",
      descBullets: [
        "Achieved a commendable rank of 3686 out of 40,000 candidates in the EAMCET-Telangana entrance examination.",
        "Performed consistently very well in weekly tests and was in top 10 of my batch always.",
        "Participated in various Olympiads.",
        "Secured 97.6% in Intermediate final exams."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Codegnan",
      companylogo: require("./assets/images/codegnan_logo.jpeg"),
      date: "June 2023 – August 2023",
      desc: "Worked on various projects like Customer Churn Prediction etc. using Machine Learning techniques.",
      descBullets: [
        "Predicted telecom churn with ML model (Flask).",
        "Engineered features & optimized models (LR, RF).",
        "Identified churn factors & recommended solutions.",
        "Deployed web app for user-friendly predictions.",
        "Increased customer retention through actionable insights.",
      ]
    },
    /*{
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },*/
    /*{
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }*/
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE DEVELOPED AND WORKED ON.",
  projects: [
    {
      image: require("./assets/images/Translator.jpeg"),
      projectName: "Chat Translator",
      projectDesc: "Developed an English-to-French translator using LSTMs and attention mechanisms. Preprocessed data for improved accuracy over baseline methods and evaluated performance with standard metrics, achieving significant enhancements in translation quality.",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/yatish7/Chat-Translator"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cbit_logo_2.jpeg"),
      projectName: "CBIT-MIS",
      projectDesc: "Developed a Management Information System for my college using React JS,Node JS,MongoDB to manage the infrastructure of the college,users can view the details of infrastructure and can conduct classes and seminars by booking the class rooms and seminar halls.",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/yatish7/miscbit"
        }
      ]
    },
    {
      image: require("./assets/images/telecom.jpeg"),
      projectName: "Telecom Churn Prediction",
      projectDesc: "Created a Flask web app using scikit-learn to predict telecom customer churn. Users input attributes for predictions via a Random Forest Classifier, which provides confidence scores. Conducted EDA to extract insights from the dataset, enhancing prediction accuracy.",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/yatish7/End-End-Telecommunication-Churn"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc*/

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

/*const blogSection = {
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
  display: true // Set false to hide this section, defaults to true
};*/

// Talks Sections

/*const talkSection = {
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
  display: true // Set false to hide this section, defaults to true
};*/

// Podcast Section

/*const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};*/

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 6302809351",
  email_address: "yatish.manne09@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Yatishmanne7", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  /*blogSection,
  talkSection,
  podcastSection*/
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
