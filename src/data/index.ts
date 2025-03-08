import { Education, Experience, Project, Skill, SocialLink, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Workflow Designer Web Tool",
    description: "Developed a no-code automation platform using Flowbased programming paradigm, enabling non-technical users to create complex workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Node.js", "AWS Lambda"],
    category: "automation"
  },
  {
    id: 2,
    title: "Generative AI Agents",
    description: "Built intelligent AI agents capable of performing complex tasks through natural language processing and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "NLP", "AWS"],
    category: "ai"
  },
  {
    id: 3,
    title: "Automated Invoice Processing Bot",
    description: "Developed a bot that processes invoices with a 0.5% error rate, significantly reducing manual processing time and improving accuracy.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Machine Learning", "OCR", "AWS Lambda"],
    category: "automation"
  },
  {
    id: 4,
    title: "Real-time RPA Dashboard",
    description: "Created a real-time dashboard to monitor RPA bots status, providing insights into performance and identifying bottlenecks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Angular", "Node.js", "WebSockets", "AWS"],
    category: "web"
  },
  {
    id: 5,
    title: "Machine Learning Framework for ServiceNow",
    description: "Developed a framework for identifying ServiceNow tickets and corresponding assignment groups using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "scikit-learn", "Django", "ServiceNow API"],
    category: "ai"
  },
  {
    id: 6,
    title: "One-Click ML REST API",
    description: "Designed a one-click ready ML REST API for RPA bots using Python, Django, and scikit-learn, simplifying integration of ML capabilities.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Django", "scikit-learn", "REST API"],
    category: "ai"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Electronic Arts",
    position: "Software Development Engineer III",
    duration: "10/2022 - Present",
    location: "Hyderabad",
    description: "Game Development Company",
    achievements: [
      "Product Development",
      "Workflow Designer Web tool (Flowbased No code Automation)",
      "Generative AI Agents"
    ],
    companyType: "Game Development Company"
  },
  {
    id: 2,
    company: "Electronic Arts",
    position: "Consultant",
    duration: "09/2018 - 10/2022",
    location: "Hyderabad, Telangana",
    description: "Game Development Company",
    achievements: [
      "Automated Invoice processing bot with a 0.5% error rate",
      "Designed Machine learning server to create a cognitive automation process",
      "Made real-time dashboard to monitor the RPA bots status",
      "Created Slack bot in AWS Lambda function",
      "Worked on Client Interview companion app in Angular 9, AWS Lambda"
    ],
    companyType: "Game Development Company"
  },
  {
    id: 3,
    company: "Gilead Sciences, Inc.",
    position: "Consultant",
    duration: "02/2019 - 05/2019",
    location: "Hyderabad, Telangana",
    description: "Pharmaceutical Company",
    achievements: [
      "Created Machine learning framework for identifying a servicenow ticket and corresponding assignment group",
      "Cluster most similar past tickets to provide suggestive solutions to the ticket",
      "Designed a one click ready ML Rest API for the RPA bots to use python django and sklearn"
    ],
    companyType: "Pharmaceutical Company"
  },
  {
    id: 4,
    company: "Novartis",
    position: "Software Developer",
    duration: "02/2018 - 09/2018",
    location: "Hyderabad, Telangana",
    description: "Pharmaceutical Company",
    achievements: [
      "Automated the process of filtering and identifying the adverse event case files by comparing them with an excel dataset of 120k drug list",
      "Designed multi-bot architecture for parallel processing",
      "Made a record of the fastest developed Bot moved to production"
    ],
    companyType: "Pharmaceutical Company"
  }
];

export const employmentHistory = [
  {
    id: 1,
    company: "Electronic Arts",
    position: "Software Development Engineer III",
    duration: "10/2022 - Present"
  },
  {
    id: 2,
    company: "Deloitte USI",
    position: "Consultant",
    duration: "09/2018 - 10/2022"
  },
  {
    id: 3,
    company: "Accenture",
    position: "Software Developer",
    duration: "05/2016 - 09/2018"
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "MSc In Machine Learning & AI",
    institution: "Liverpool John Moores University",
    duration: "10/2020 - 02/2023",
    location: "Liverpool, England"
  },
  {
    id: 2,
    degree: "BTech In Electronics & TeleComm",
    institution: "KIIT University",
    duration: "06/2012 - 06/2016",
    location: "Bhubaneswar, Orissa"
  }
];

export const skills: Skill[] = [
  { id: 1, name: "Adaptive Learner", category: "soft" },
  { id: 2, name: "Automation", category: "technical" },
  { id: 3, name: "Design/Architecture", category: "technical" },
  { id: 4, name: "Docker", category: "technical" },
  { id: 5, name: "Machine Learning", category: "technical" },
  { id: 6, name: "Problem Solver", category: "soft" },
  { id: 7, name: "Serverless & Cloud", category: "technical" },
  { id: 8, name: "Software Development", category: "technical" },
  { id: 9, name: "C#", category: "technical" },
  { id: 10, name: "C++", category: "technical" },
  { id: 11, name: "Python", category: "technical" },
  { id: 12, name: "JavaScript/TypeScript", category: "technical" },
  { id: 13, name: "Angular", category: "technical" },
  { id: 14, name: "Node.js", category: "technical" },
  { id: 15, name: "AWS Lambda", category: "technical" },
  { id: 16, name: "Docker", category: "technical" },
  { id: 17, name: "OpenCV", category: "technical" },
  { id: 18, name: "Python", category: "technical" },
  { id: 19, name: "SK Learn", category: "technical" },
  { id: 20, name: "Pandas", category: "technical" },
  { id: 21, name: "Numpy", category: "technical" },
  { id: 22, name: "Tensorflow", category: "technical" },
  { id: 23, name: "PyTorch", category: "technical" },
  { id: 24, name: "Keras", category: "technical" },
  { id: 25, name: "Linear Regression", category: "technical" },
  { id: 26, name: "Logistic Regression", category: "technical" },
  { id: 27, name: "Decision Tree", category: "technical" },
  { id: 28, name: "Boosting", category: "technical" },
  { id: 29, name: "KNN", category: "technical" },
  { id: 30, name: "K-mean clustering", category: "technical" },
  { id: 31, name: "Naive Bayes", category: "technical" }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sayantan Lahiri",
    position: "Technical Lead",
    company: "Accenture",
    text: "We worked together for an Agro based client.\nHe was not only an excellent developer but also timely completed all the delivery in time.\nHe also optimised the solutions to make Automations run faster a real expert .",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH2QMHQEs4tcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692545657298?e=1746662400&v=beta&t=Bm7LcF4r6TA4rpzGwfuzc00Z4KhoEInU62auECXPGOQ"
  },
  {
    id: 3,
    name: "Rajasheker Reddy K",
    position: "Senior Developer",
    company: "Accenture",
    text: "I have worked with Anirban on RPA projects within Accenture. He is extremely talented and helpful to others.\nHe is having sound knowledge on various technologies.He is great asset to the team.Very professional and courteous.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHqdj7e--73zw/profile-displayphoto-shrink_200_200/B56ZUx3QZwHoAY-/0/1740298326729?e=1746662400&v=beta&t=vXZDqL_OtxdXQk8QRtWWZ_wmJxGztinLHnyswLTIsVE"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:anirbankar21@gmail.com",
    icon: "Mail"
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/anirban-kar-developer",
    icon: "Linkedin"
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/thecodacus",
    icon: "Github"
  },
  {
    id: 4,
    name: "Website",
    url: "https://anirbankar.info",
    icon: "Globe"
  }
];

export const personalInfo = {
  name: "Anirban Kar",
  title: "Software Developer",
  subtitle: "AWS Serverless | AI & ML | Python | Node.js | Fullstack Developer",
  email: "anirbankar21@gmail.com",
  phone: "+919692379688",
  location: "Hyderabad, India",
  website: "anirbankar.info",
  profileImage: "/profile.jpg" // This will be replaced with the actual image
};
