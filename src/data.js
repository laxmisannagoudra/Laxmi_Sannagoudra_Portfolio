// All portfolio content lives here (taken from the resume). Components receive it as props.
export const profile = {
  name: "Laxmi Sannagoudra",
  role: "Java Full Stack Developer",
  summary:
    "Java Full Stack Developer with hands-on internship experience in Spring Boot, Hibernate/JPA, REST APIs, React, and MySQL. Seeking an entry-level role to build scalable, well-tested web applications.",
  phone: "8147971966",
  email: "laxmisannagoudra@gmail.com",
  linkedin: "https://www.linkedin.com/in/laxmi-sannagoudra-86275a300",
  github: "https://github.com/laxmisannagoudra",
  resume: "/Laxmi_Updated_resume.pdf",
  photo: "/images/profile.jpg",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "8.49", label: "CGPA" },
  { value: "6", label: "Months internship" },
  { value: "3", label: "Projects" },
  { value: "2", label: "Certifications" },
];

export const skills = [
  { title: "Programming", icon: "💻", items: ["Java", "JavaScript", "Python"] },
  { title: "Frontend", icon: "🎨", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", icon: "⚙️", items: ["Spring Boot", "Hibernate", "REST APIs", "Servlets"] },
  { title: "Database", icon: "🗄️", items: ["MySQL", "Oracle"] },
  { title: "Core", icon: "🧠", items: ["OOPs", "DSA", "Problem Solving", "Collections Framework"] },
];

export const experience = [
  {
    role: "Java Full Stack Intern",
    company: "TAP Academy",
    period: "Mar 2026 – Sep 2026",
    points: [
      "Built Platterly, a food delivery application using Java, Servlets, JSP, JDBC, and MySQL, and developed a banking system using Spring Boot and Hibernate/JPA.",
      "Created and tested REST APIs using Postman and integrated them with frontend applications developed using HTML, CSS, JavaScript, and React.",
      "Designed normalized SQL schemas and applied OOP, Collections, and DSA through Java practice; developed a React Expense Tracker using hooks and props.",
    ],
  },
];

export const projects = [
  {
    title: "Food Delivery Application – Platterly",
    tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "HTML", "CSS", "Tomcat"],
    link: "https://github.com/laxmisannagoudra/Platterly-_Food-Delivery-Application",
    points: [
      "Developed a full-stack food delivery application supporting user registration, login, restaurant browsing, menu selection, cart management, and order placement.",
      "Designed a normalized MySQL schema with foreign-key relationships for users, restaurants, menu items, and orders.",
      "Implemented session-based cart functionality to add, update, and remove items before checkout.",
      "Developed an admin panel to manage restaurants, menu items, and track order status.",
    ],
  },
  {
    title: "Simple Banking System",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "MySQL", "Postman"],
    link: "https://github.com/laxmisannagoudra/Simple-Banking-System-Spring-Boot-",
    points: [
      "Built a Spring Boot banking application with REST APIs for account creation, login, deposits, withdrawals, fund transfers, and transaction history.",
      "Implemented Controller, Service, and Repository layers using Spring Data JPA and Hibernate with MySQL persistence.",
      "Applied OOP principles through separate entity and service classes for accounts, customers, and transactions.",
      "Tested API endpoints using Postman.",
    ],
  },
  {
    title: "Expense Tracker",
    tech: ["React", "JavaScript", "Hooks", "localStorage", "CSS"],
    link: "https://github.com/laxmisannagoudra/expense-tracker",
    demo: "https://laxmi-expense-tracer.netlify.app",
    points: [
      "Developed a responsive React application to add, edit, filter, and delete income and expense transactions.",
      "Implemented personalized user setup with monthly income and real-time balance, income, and expense calculations.",
      "Managed application state using useState, useEffect, and localStorage for persistent data.",
      "Created reusable components, validated forms, and a category-wise spending chart.",
    ],
  },
];

export const education = [
  { degree: "B.E. – Information Science & Engineering", place: "Smt. Kamala & Sri Venkappa M. Agadi College of Engineering, Laxmeshwar, Gadag", period: "2022 – 2026", score: "CGPA: 8.49" },
  { degree: "PUC – Science", place: "Government PU College, Gadag", period: "2020 – 2022", score: "92.6%" },
  { degree: "SSLC", place: "St. John’s High School, Gadag-Betageri", period: "2018 – 2020", score: "91.2%" },
];

export const achievements = [
  { icon: "🤖", text: "KSCST Student Project Programme (49th Series): State-level selection for Quadruped Robot for Gas Leakage Detection." },
  { icon: "🎓", text: "Certifications: Full Stack Web Development (Java) – TAP Academy; Basics of Python – Infosys Springboard." },
  { icon: "🏛️", text: "State-Level Youth Parliament: Selected as Institutional Representative." },
];

