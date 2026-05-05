import { Navigation, Footer } from "../components/layout";
import { Hero, Skills, Projects, Experience } from "../components/sections";

export default function Home() {
  const name = "Parvathy Rajasekharan";

  const heroData = {
    name,
    title: "Full Stack Software Engineer",
    location: "Tottori, Japan",
    company: "TOA Software Corp.",
    description: [
      "I’m a software engineer based in Japan, currently building products at TOA Software Corp.",
      "I currently do Full Stack Web Development.",
      "My goal is to keep learning, keep building, and contribute to meaningful, well-crafted software.",
    ],
  };

  const skills = [
    { label: "JavaScript", src: "/skills/javascript.svg" },
    { label: "TypeScript", src: "/skills/typescript.svg" },
    { label: "React", src: "/skills/react.svg" },
    { label: "Next.js", src: "/skills/nextjs.svg" },
    { label: "Node.js", src: "/skills/node.svg" },
    { label: "Ruby on Rails", src: "/skills/rails.svg" },
    { label: "Python", src: "/skills/python.svg" },
    { label: "Java", src: "/skills/java.svg" },
    { label: "PostgreSQL", src: "/skills/postgresql.svg" },
    { label: "MySQL", src: "/skills/mysql.svg" },
    { label: "HTML/CSS", src: "/skills/html.svg" },
    { label: "Git & GitHub", src: "/skills/github.svg" },
    { label: "Figma", src: "/skills/figma.svg" },
  ];
  
  const projects = [
    {
      title: "DeepWeather - Weather Analysis with Deep Learning",
      date: "February 2024",
      tags: ["Python", "Deep Learning", "ML"],
      bullets: [
        "Developed deep learning models to predict weather conditions, with a focus on temperature forecasting.",
        "Built and fine-tuned models to improve prediction accuracy.",
        "Addressed challenges such as missing data handling, normalization, multicollinearity, overfitting, and vanishing gradients.",
      ],
    },
    {
      title: "Multiple Disease Prediction System",
      date: "December 2022",
      tags: ["Python", "Machine Learning", "Healthcare"],
      bullets: [
        "Designed and coded a web application to predict multiple diseases using machine learning.",
        "Trained and tested multiple models to improve accuracy and personalization in predictions.",
      ],
    },
    {
      title: "TDC Play - Gamified Tourism Web App",
      date: "November 2025",
      // featured: true,
      tags: ["React", "Node.js", "PostgreSQL", "Hackathon"],
      bullets: [
        "Built an interactive web application using React, Node.js, and PostgreSQL.",
        "Implemented QR code scanning, mission tracking, scoring, and rewards UI.",
        "Designed dynamic and engaging user flows, improving user interaction.",
        "Collaborated with an international agile team of engineers.",
        "Awarded Silver Yakumo Award - Hack Yakumo 2025.",
      ],
    },
    {
      title: "Folio - Secure Rich-Text Notes App",
      date: "April 2026",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "JWT Auth",
        "2FA (TOTP)",
        "Lexical",
        "TailwindCSS",
      ],
      bullets: [
        "Built a full-stack notes application using Next.js (App Router), React, and PostgreSQL with user-scoped CRUD APIs.",
        "Implemented secure authentication with bcrypt password hashing and JWT sessions stored in HTTP-only cookies, plus route protection via Next.js middleware.",
        "Added optional Two-Factor Authentication (TOTP) including QR-based setup, verification, and disable flows integrated into the login experience.",
        "Developed a rich-text editor using Lexical with history/undo and custom media nodes (image/video), persisting content as JSON editor state.",
      ],
    },
    {
      title: "Expense Tracker App",
      date: "December 2024",
      tags: ["React", "Node.js", "Full Stack"],
      bullets: [
        "Built a web application using React and Node.js.",
        "Implemented features for tracking expenses and managing budgets.",
        "Designed a clean and intuitive user interface for easy navigation.",
      ],
    }
  ];

  const workExperience = [
    {
      company: "TOA Software Corp.",
      logoSrc: "/images/toa_logo.jpg",
      logoAlt: "TOA Software Corp.",
      location: "Tottori, Japan",
      roles: [
        {
          title: "Software Engineer",
          from: "October 2024",
          to: "Present",
          bullets: [
            "Currently developing an internal certification management system with a focus on frontend architecture and UI implementation using React and TypeScript.",
            "Contributed to a web-based attendance management app using React.js on the frontend and Node.js to streamline staff tracking and operations.",
            "Worked on a web-based daily report and employee operations system using React.js and Ruby on Rails.",
            "Developed a full-stack reporting workflow using React.js and Node.js to simplify report submission and management.",
          ],
        },
        {
          title: "Software Engineering Intern",
          from: "February 2024",
          to: "March 2024",
          bullets: [
            "Developed the frontend and backend of a web application using ReactJS and FastAPI.",
            "Developed responsive UI screens and components aligned with design specs.",
            "Worked closely with engineers to iterate quickly and deliver production-ready features.",
          ],
        },
      ],
    },
    {
      company: "Aspire Systems",
      logoSrc: "/images/aspire_systems_logo.jpg",
      logoAlt: "Aspire Systems",
      location: "Ernakulam, Kerala, India",
      roles: [
        {
          title: "Software Engineer",
          from: "July 2021",
          to: "March 2022",
          bullets: [
            "Worked on backend services for an employee management system using Spring Boot.",
            "Built backend services and APIs with an emphasis on clean contracts and maintainability.",
            "Worked in an agile environment to deliver features, fixes, and improvements on schedule.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navigation />

      <main id="main-content" className="mx-auto max-w-6xl px-6 lg:px-8">
        <Hero {...heroData} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experiences={workExperience} />
      </main>
    </div>
  );
}
