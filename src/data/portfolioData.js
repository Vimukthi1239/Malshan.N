/**
 * portfolioData.js
 * ----------------
 * Centralized data store for the portfolio.
 * Projects and photos defined here are the PERMANENT defaults.
 * Users can ADD more via the UI (saved to localStorage), but these
 * defaults are always included and cannot be lost on browser clear.
 */

// ─────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────
export const DEFAULT_PROJECTS = [
    {
        title: "Ceylon Nature",
        badge: "Fullstack Project",          // Production AI | MLOps Framework | Database Design | Analytics | Serverless | Full-Stack Dev
        time: "Jan 2026 - Present",
        description: "Modern Serverless Full-Stack Development: Developed a high-performance Single Page Application (SPA) using React 19 and Google Firebase (Realtime Database), featuring interactive mapping (Mapbox/Leaflet), secure user authentication, and multi-language support (i18n).AI & Workflow Automation: Eliminated traditional backend constraints by integrating n8n.io to power an intelligent AI Chatbot (EcoBot) using LLMs and to deploy automated email workflows for seamless booking confirmations.",
        tech: ["React", "Firebase", "Node.js", "n8n.io", "LLMs", "Mapbox"],
        github: "https://github.com/Vimukthi1239/Hoteleco-pro",
        demo: null   // Optional — remove if no demo
    },
    {
        title: "ML-Ops Automation Framework",
        badge: "ML-Ops Framework",
        time: "March 2026",
        description: "Automated the end-to-end ML lifecycle (preprocessing to evaluation) using GitHub Actions for CI/CD.Optimized model deployment reliability through containerization with Docker.",
        tech: ["Python", "Docker", "GitHub Actions", "DVC", "MLflow"],
        github: "https://github.com/Vimukthi1239/ML-OPS",
        demo: "https://www.linkedin.com/posts/malshan-nawarathna-0b515b227_hashtags-mlops-machinelearning-activity-7438116313589252096-RcR3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjMG8kB8oXZTOr0U7f353HPRWLp69EF5k4"
    },
    {
        title: "Database Architecture",
        badge: "Database Design",          // Production AI | MLOps Framework | Database Design | Analytics | Serverless | Full-Stack Dev
        time: "Jan 2026 – Feb 2026",
        description: "Developed a complete MySQL parking management database script, emphasizing referential integrity and ER deign.",
        tech: ["MySQL", "ER Design", "java"],
        github: "https://github.com/Vimukthi1239/Carparking-System-.git",
        demo: null   // Optional — remove if no demo
    },
    {
        title: "Luxary Stay",
        badge: "Fullstack Project",
        time: "Aug 2025 – Nov 2025",
        description: " Developed an interactive dashboard to track KPIs (occupancy, ADR) and analyze booking trends. Cleaned and visualized complex customer datasets to provide real-time operational insights.",
        tech: ["HTML", "CSS", "n8n.io", "Firebase"],
        github: "https://github.com/Vimukthi1239/hotel-analytics-dashboard-new.git",
        demo: "https://www.linkedin.com/posts/malshan-nawarathna-0b515b227_fullstackdevelopment-webdevelopment-hoteltech-activity-7397628775997456384-ow6L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjMG8kB8oXZTOr0U7f353HPRWLp69EF5k4"   // Optional — remove if no demo
    },
    {
        title: "Serverless Backend",
        badge: "Serverless",
        time: "Jan 2025 – Feb 2025",
        description: "Designed and deployed an AWS Lambda serverless backend to process core business logic and HTTP API requests.",
        tech: ["AWS Lambda", "API Gateway", "Node.js", "AWS SDK", "Serverless Framework"],
        github: "https://github.com/Vimukthi1239/AWS-.git",
        demo: null  // Optional — remove if no demo
    }
];

// ─────────────────────────────────────────────
//  PHOTOGRAPHY
// ─────────────────────────────────────────────
// Base path for all photos stored in /public/assets/photography/
// import.meta.env.BASE_URL resolves to '/Malshan.N/' in both dev and production
const BASE = import.meta.env.BASE_URL;
const PHOTO_BASE = `${BASE}assets/photography/`;

export const DEFAULT_PHOTOS = [
    {
        src: `${PHOTO_BASE}photo_1.jpeg`,
        alt: "Photography 1",
        title: "Sport Day",
        description: "Sport day photography at SLTC Research University.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_2.jpeg`,
        alt: "Photography 2",
        title: "IEEE AGM",
        description: "Anual General Meeting of IEEE Sri Lanka.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_3.jpeg`,
        alt: "Photography 3",
        title: "Techno Odyssey",
        description: "Arduino, Robotics based Event at SLTC Research University.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_4.jpeg`,
        alt: "Photography 4",
        title: "Mathaka",
        description: "Calm musical event",
        category: "nature",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_5.jpeg`,
        alt: "Photography 5",
        title: "SIS Installation ceremony",
        description: "Installation ceremony of SIS.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_7.jpeg`,
        alt: "Photography 7",
        title: "Wasath Hiru Udanaya 2023",
        description: "Wasath Hiru Udanaya 2023 at SLTC Research University.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_8.jpeg`,
        alt: "Photography 8",
        title: "Mohothak 02",
        description: "Musical Event",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_9.jpeg`,
        alt: "Photography 9",
        title: "Conovocation",
        description: "Conovocation at SLTC Research University.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_12.jpeg`,
        alt: "Photography 12",
        title: "Masterdesign V2",
        description: "Design competition.",
        category: "landscape",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_16.jpeg`,
        alt: "Photography 16",
        title: "Udawalawa Field visit",
        description: "School of business field visit at Udawalawa national park.",
        category: "wildlife",
        externalLink: null
    },
    {
        src: `${PHOTO_BASE}photo_17.jpeg`,
        alt: "Photography 17",
        title: "Aircraft Workshop",
        description: "Aircraft Workshop event at Taxila Central College.",
        category: "landscape",
        externalLink: null
    },
];
