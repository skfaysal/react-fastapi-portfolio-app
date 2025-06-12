import axios from 'axios';
import { 
  ApiResponse,
  PortfolioData,
  ChatRequest,
  ChatResponse,
  PersonalInfo,
  Education,
  Experience,
  SkillGroup,
  Project,
  Blog,
  Certification
} from '../types/api';

// Configure axios with default settings
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Simple cache implementation for each data type
const cache = {
  personalInfo: { data: null as PersonalInfo | null, timestamp: 0 },
  education: { data: null as Education[] | null, timestamp: 0 },
  certifications: { data: null as Certification[] | null, timestamp: 0 },
  experiences: { data: null as Experience[] | null, timestamp: 0 },
  skillGroups: { data: null as SkillGroup[] | null, timestamp: 0 },
  projects: { data: null as Project[] | null, timestamp: 0 },
  blogs: { data: null as Blog[] | null, timestamp: 0 },
  maxAge: 5 * 60 * 1000, // 5 minutes cache
  
  isValid(key: keyof typeof cache) {
    if (key === 'maxAge') return false;
    return this[key].data && (Date.now() - this[key].timestamp < this.maxAge);
  },
  
  set<T>(key: string, data: T) {
    if (key in this && key !== 'maxAge') {
      (this as any)[key] = { data, timestamp: Date.now() };
    }
  },
  
  invalidateAll() {
    this.personalInfo.data = null;
    this.education.data = null;
    this.certifications.data = null;
    this.experiences.data = null;
    this.skillGroups.data = null;
    this.projects.data = null;
    this.blogs.data = null;
  }
};

// Helper function to handle errors consistently
const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message || 'An unknown error occurred');
  }
  console.error('Unexpected error:', error);
  throw new Error('An unexpected error occurred');
};

// Component-specific API methods with caching
export const getPersonalInfo = async (forceRefresh = false): Promise<PersonalInfo> => {
  try {
    // Return cached data if valid and not forcing refresh
    if (!forceRefresh && cache.isValid('personalInfo')) {
      console.log('Using cached personal info data');
      return cache.personalInfo.data!;
    }
    
    // Fetch fresh data
    const response = await apiClient.get<ApiResponse<PersonalInfo>>('/api/portfolio/personal-info');
    const data = response.data.data;
    
    // Cache the response
    cache.set('personalInfo', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().personalInfo;
    }
    return handleApiError(error);
  }
};

export const getEducation = async (forceRefresh = false): Promise<Education[]> => {
  try {
    if (!forceRefresh && cache.isValid('education')) {
      console.log('Using cached education data');
      return cache.education.data!;
    }
    
    const response = await apiClient.get<ApiResponse<Education[]>>('/api/portfolio/education');
    const data = response.data.data;
    
    cache.set('education', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().education;
    }
    return handleApiError(error);
  }
};

export const getCertifications = async (forceRefresh = false): Promise<Certification[]> => {
  try {
    if (!forceRefresh && cache.isValid('certifications')) {
      console.log('Using cached certifications data');
      return cache.certifications.data!;
    }
    
    const response = await apiClient.get<ApiResponse<Certification[]>>('/api/portfolio/certifications');
    const data = response.data.data;
    
    cache.set('certifications', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().certifications;
    }
    return handleApiError(error);
  }
};

export const getExperiences = async (forceRefresh = false): Promise<Experience[]> => {
  try {
    if (!forceRefresh && cache.isValid('experiences')) {
      console.log('Using cached experiences data');
      return cache.experiences.data!;
    }
    
    const response = await apiClient.get<ApiResponse<Experience[]>>('/api/portfolio/experiences');
    const data = response.data.data;
    
    cache.set('experiences', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().experiences;
    }
    return handleApiError(error);
  }
};

export const getSkillGroups = async (forceRefresh = false): Promise<SkillGroup[]> => {
  try {
    if (!forceRefresh && cache.isValid('skillGroups')) {
      console.log('Using cached skill groups data');
      return cache.skillGroups.data!;
    }
    
    const response = await apiClient.get<ApiResponse<SkillGroup[]>>('/api/portfolio/skill-groups');
    const data = response.data.data;
    
    cache.set('skillGroups', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().skillGroups;
    }
    return handleApiError(error);
  }
};

export const getProjects = async (forceRefresh = false): Promise<Project[]> => {
  try {
    if (!forceRefresh && cache.isValid('projects')) {
      console.log('Using cached projects data');
      return cache.projects.data!;
    }
    
    const response = await apiClient.get<ApiResponse<Project[]>>('/api/portfolio/projects');
    const data = response.data.data;
    
    cache.set('projects', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().projects;
    }
    return handleApiError(error);
  }
};

export const getBlogs = async (forceRefresh = false): Promise<Blog[]> => {
  try {
    if (!forceRefresh && cache.isValid('blogs')) {
      console.log('Using cached blogs data');
      return cache.blogs.data!;
    }
    
    const response = await apiClient.get<ApiResponse<Blog[]>>('/api/portfolio/blogs');
    const data = response.data.data;
    
    cache.set('blogs', data);
    return data;
  } catch (error) {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
      return getMockPortfolioData().blogs;
    }
    return handleApiError(error);
  }
};

export const sendChatMessage = async (query: string): Promise<ChatResponse> => {
  try {
    const response = await apiClient.post<ApiResponse<ChatResponse>>('/chat/', { query } as ChatRequest);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// Legacy method for backwards compatibility
export const getPortfolioData = async (): Promise<PortfolioData> => {
  try {
    const [
      personalInfo,
      education,
      certifications,
      experiences,
      skillGroups,
      projects,
      blogs
    ] = await Promise.all([
      getPersonalInfo(true),
      getEducation(true),
      getCertifications(true),
      getExperiences(true),
      getSkillGroups(true),
      getProjects(true),
      getBlogs(true)
    ]);
    
    return {
      personalInfo,
      education,
      certifications,
      experiences,
      skillGroups,
      projects,
      blogs
    };
  } catch (error) {
    return handleApiError(error);
  }
};

// Mock API for development and testing
export const getMockPortfolioData = (): PortfolioData => {
  return {
    personalInfo: {
      name: "Sheikh Md. Faysal",
      title: "Senior Machine Learning Engineer",
      location: "Dhaka, Bangladesh",
      profileImage: "/my_profile.png",
      bio: "5+ years experienced Data Scientist with a demonstrated ability to deliver valuable insights via data analytics and advanced data-driven methods like Machine Learning and Deep Learning.",
      socialLinks: {
        github: "https://github.com/skfaysal",
        linkedin: "https://www.linkedin.com/in/md-faysal-030800147/",
        cv: "/CV-SheikhMdFaysal.pdf",
        email: "mailto:skmdfaysal@gmail.com"
      }
    },
    education: [
      {
        degree: "B.Sc in Computer Science and Engineering",
        institution: "National University of Bangladesh, Dhaka",
        startDate: "04/2016",
        endDate: "11/2019",
        location: "Dhaka, Bangladesh",
        thesis: "An Intelligent Surveillance System For Crime Detection"
      }
    ],
    certifications: [
      {
        title: "AWS Certified AI Practitioner",
        issuer: "AWS",
        iconUrl: "/aws-icon.png",
        url: "https://www.credly.com/badges/b0923177-7e0d-4d14-be6c-513831224178/linked_in?t=so52rt"
      },
      {
        title: "Introduction to Machine Learning in Production",
        issuer: "Coursera",
        iconUrl: "/coursera-icon.png",
        url: "https://www.coursera.org/account/accomplishments/verify/XLAYXDPDN9TQ"
      },
      {
        title: "Mathematics for Machine Learning: Linear Algebra",
        issuer: "Coursera",
        iconUrl: "/coursera-icon.png",
        url: "https://www.coursera.org/account/accomplishments/verify/ZTR6LQSXLWTR"
      },
      {
        title: "NLP with Classification and Vector Spaces",
        issuer: "Coursera",
        iconUrl: "/coursera-icon.png",
        url: "https://www.coursera.org/account/accomplishments/verify/E6CHPMWUUJDB"
      },
      {
        title: "Introduction to Data Science with Python – BUET",
        issuer: "University",
        iconUrl: "/buet-icon.png"
      }
    ],
    experiences: [
      {
        title: "Sr. Machine Learning Engineer",
        company: "IQVIA",
        location: "Dhaka",
        dateRange: "03/2024 to present",
        description: [
          "Migrated ML algorithms from Kubeflow to SageMaker Pipeline with MLflow integration for enhanced model management.",
          "Implemented Multi-Agentic AI for data augmentation and created synthetic data to fine-tune LLM, enhancing its accuracy and robustness.",
          "Developed GitLab CI/CD pipelines and unit tests to improve code quality and deployment processes."
        ],
        logoUrl: "/iqvia-logo.png",
        websiteUrl: "#"
      },
      {
        title: "Lead Data Scientist",
        company: "SELISE Digital Platforms ltd.",
        location: "Dhaka, Bangladesh",
        dateRange: "04/2022 – 03/2024",
        description: [
          "Implemented Deep Learning techniques to identify various in-game events in FIFAe game streams/videos.",
          "Led a project converting 16:9 footage to mobile-friendly 9:16 with intelligent motion tracking for scene relevance and signal processing for seamless transitions.",
          "Video stream embedding extraction through OpenAI's CLIP and VIT. Completed the 1st version, incorporating clustering to group similar scenes across all stream chunks.",
          "Integrated MLflow, Airflow throughout training and production pipelines for comprehensive machine learning lifecycle management."
        ],
        logoUrl: "/selise-logo.png",
        websiteUrl: "#"
      },
      {
        title: "Machine Learning Engineer",
        company: "Smart Retina Ltd.",
        location: "Dhaka, Bangladesh",
        dateRange: "11/2020 – 02/2022",
        description: [
          "Attained 92% sensitivity in Diabetic Retinopathy classification from fundus images.",
          "Employed GradCam for precise model interpretation, pinpointing fundus image ROIs to aid ophthalmologists.",
          "Demonstrated a 3.2% accuracy boost in DR classification through Ensemble methods.",
          "Achieved 98% accuracy in classifying Left/Right fundus images.",
          "Image clustering based on learned model features."
        ],
        logoUrl: "/smart-retina-logo.png",
        websiteUrl: "#"
      },
      {
        title: "Machine Learning Engineer",
        company: "Daffodil Software Ltd.",
        location: "Dhaka, Bangladesh",
        dateRange: "10/2019 – 10/2020",
        description: [
          "Led a pilot project under the ICT Ministry of Bangladesh achieving 96% sensitivity in detecting Covid-19 and Pneumonia from chest X-rays and CT scans.",
          "Attained 98% accuracy in predicting student dropouts, resulting in a 2% reduction in retention rate over 2 semesters.",
          "Created a sentiment analysis model achieving 90% accuracy in evaluating mentor feedback to students."
        ],
        logoUrl: "/daffodil-logo.png",
        websiteUrl: "#"
      }
    ],
    skillGroups: [
      {
        title: "Languages",
        skills: [
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            iconAlt: "Python Logo",
            name: "Python",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
            iconAlt: "Go Logo",
            name: "Go",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
            iconAlt: "Rust Logo",
            name: "Rust",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            iconAlt: "Typescript Logo",
            name: "Typescript",
          },
        ],
      },
      {
        title: "ML/DL",
        skills: [
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
            iconAlt: "PyTorch Logo",
            name: "PyTorch",
          },
          {
            iconSrc: "/lightning.png",
            iconAlt: "Lightning Logo",
            name: "Lightning",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
            iconAlt: "ScikitLearn Logo",
            name: "SciKit Learn",
          },
          {
            iconSrc: "/polars.png",
            iconAlt: "Polars Logo",
            name: "Polars",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
            iconAlt: "NumPy Logo",
            name: "NumPy",
          },
        ],
      },
      {
        title: "Databases",
        skills: [
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
            iconAlt: "SQL Database Logo",
            name: "SQL",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            iconAlt: "PostgreSQL Logo",
            name: "Postgres",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            iconAlt: "MongoDB Logo",
            name: "MongoDB",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
            iconAlt: "Redis Logo",
            name: "Redis",
          },
        ],
      },
      {
        title: "DevOps",
        skills: [
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            iconAlt: "Docker Logo",
            name: "Docker",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            iconAlt: "Git Logo",
            name: "Git",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
            iconAlt: "CICD Logo",
            name: "CI",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            iconAlt: "Linux Logo",
            name: "Linux",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            iconAlt: "AWS Logo",
            name: "AWS",
          },
        ],
      },
      {
        title: "WebDev",
        skills: [
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            iconAlt: "React Logo",
            name: "React",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            iconAlt: "Next.js Logo",
            name: "Next.js",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            iconAlt: "Tailwind CSS Logo",
            name: "Tailwind CSS",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
            iconAlt: "Bootstrap Logo",
            name: "Bootstrap",
          },
          {
            iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
            iconAlt: "Material-UI Logo",
            name: "Material-UI",
          },
        ],
      },
    ],
    projects: [
      {
        title: "CloudSync",
        description: "Cloud-Based File Synchronization Tool",
        websiteUrl: "https://cloudsync.io",
        githubUrl: "https://github.com/johndoe/CloudSync",
        listItems: [
          "Designed a cloud-based tool to sync files across multiple devices in real time",
          "Implemented end-to-end encryption for secure data storage and transmission",
          "Built using Node.js, React, and AWS Lambda for serverless architecture",
        ]
      },
      {
        title: "RoboFarm",
        description: "Automated Farming and Crop Monitoring System",
        githubUrl: "https://github.com/johndoe/RoboFarm",
        listItems: [
          "Developed an automated system to monitor soil quality and optimize crop watering",
          "Integrated IoT devices for real-time data collection and analysis",
          "Used Python, MQTT protocol, and AWS IoT for connectivity and automation",
        ]
      },
      {
        title: "QuantumSolver",
        description: "Quantum Computing Simulation Platform",
        githubUrl: "https://github.com/johndoe/QuantumSolver",
        listItems: [
          "Created a platform to simulate quantum computing algorithms on classical machines",
          "Implemented Grover's and Shor's algorithms to solve search and factorization problems",
          "Built using Python's Qiskit library and integrated with IBM Q for quantum simulation",
        ]
      },
      {
        title: "SolarEnergyOptimizer",
        description: "AI-Based Solar Energy Efficiency Optimizer",
        githubUrl: "https://github.com/johndoe/SolarEnergyOptimizer",
        listItems: [
          "Developed a machine learning model to optimize the energy output of solar panels",
          "Used TensorFlow and Keras for model training, with real-time weather data integration",
          "Deployed the model on AWS EC2 for continuous performance monitoring",
        ]
      },
      {
        title: "TravelMate",
        description: "Personalized Travel Itinerary Generator",
        websiteUrl: "https://travelmate.com",
        githubUrl: "https://github.com/johndoe/TravelMate",
        listItems: [
          "Built a web app to generate personalized travel itineraries based on user preferences",
          "Used Google Maps API and OpenWeather API for location and weather data",
          "Built with React, Express, and MongoDB for the backend",
        ]
      }
    ],
    blogs: [
      {
        title: "Serve Machine Learning models using Django REST API Part 1",
        url: "https://www.linkedin.com/pulse/serve-machine-learning-models-using-django-rest-api-part-md-faysal/?trackingId=BHRBhJDKQuuF4V3okBUoLg%3D%3D",
        description: "This series shows hands-on steps for productionizing ML models: 1. Train a Machine Learning model 2. Create a REST API using Django 3. Dockerize and deploy the REST API.",
        thumbnailUrl: "/blog1-thumbnail.jpg"
      }
    ]
  };
};
