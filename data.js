/**
 * Portfolio Data Source
 * This file contains all static data for the portfolio website
 * Following best practices: centralized data management, easy updates, and type-safe structure
 */

export const portfolioData = {
  // ==================== HERO SECTION ====================
  hero: {
    name: 'Muhammad Usama Zuberi',
    nameWords: ['Muhammad', 'Usama', 'Zuberi'],
    designation: 'Senior Front-end Web Developer',
    summary:
      'I build beautiful, engaging user experiences and intuitive user interfaces for the web. I pride myself on reliable communication and being an easy to work with, friendly person who delivers high-quality solutions.',
    yearsOfExperience: 5,
    projectsCompleted: 25,
    clientSatisfactionRate: 98,
    resumeLink: '/resume/Muhammad_Usama_Zuberi_Resume.pdf',
    profileImage: '/images/profile.png',
    technicalSkills: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Node.js',
    ],
    availabilityStatus: 'Available for new opportunities',
  },

  // ==================== SKILLS SECTION ====================
  skills: {
    categories: [
      {
        title: 'Core Technologies',
        skills: [
          'JavaScript (ES6+)',
          'TypeScript',
          'React.js',
          'Next.js',
          'Vue.js',
          'Nuxt.js',
          'Node.js',
          'Redux',
          'Tailwind CSS',
          'SCSS',
          'HTML/CSS',
          'Bootstrap',
        ],
        colorScheme: 'primary',
        gradientFrom: 'from-primary-500',
        gradientTo: 'to-secondary-500',
      },
      {
        title: 'Web3 Expertise',
        skills: [
          'Ethers.js',
          'Solana Web3.js',
          'The Graph (GraphQL)',
          'Smart Contracts',
          'DeFi Protocols',
          'Wallet Integration',
        ],
        colorScheme: 'secondary',
        gradientFrom: 'from-secondary-500',
        gradientTo: 'to-accent-500',
      },
      {
        title: 'Tools & Others',
        skills: [
          'Git',
          'REST APIs',
          'Apollo Client',
          'Python',
          'SQL',
          'GSAP',
          'Three.js',
          'Gulp',
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Figma',
          'Canvas',
        ],
        colorScheme: 'accent',
        gradientFrom: 'from-accent-500',
        gradientTo: 'to-primary-500',
      },
    ],
    highlights: [
      {
        title: 'Frontend Excellence',
        description:
          'Expert in building responsive, performant web applications with modern frameworks',
        icon: 'presentation',
      },
      {
        title: 'Web3 Development',
        description:
          'Specialized in blockchain integration, DeFi platforms, and decentralized applications',
        icon: 'cube-transparent',
      },
      {
        title: 'Performance Optimization',
        description: 'Proven track record of reducing load times and improving user experience',
        icon: 'lightning-bolt',
      },
      {
        title: 'Full Stack Ready',
        description: 'Backend experience with Node.js, Python, and database management',
        icon: 'server',
      },
    ],
  },

  // ==================== PROFESSIONAL EXPERIENCE SECTION ====================
  experience: [
    {
      company: 'Hashcore',
      location: 'Karachi, Pakistan',
      currentlyWorking: true,
      startDate: 'Apr 2023',
      careerProgression: [
        {
          title: 'Sr. Software Engineer',
          startDate: 'Oct 2023',
          endDate: 'Present',
        },
        {
          title: 'Software Engineer',
          startDate: 'Jun 2023',
          endDate: 'Oct 2023',
        },
        {
          title: 'Frontend Developer',
          startDate: 'Apr 2023',
          endDate: 'Jun 2023',
        },
      ],
      keyAchievements: [
        'Leading frontend development for Ethereum and Solana based Web3 protocols using Next.js and TypeScript',
        'Integrating smart contracts and managing complex state for DeFi platforms including lending and DEX aggregators',
        'Engineered high-performance data-fetching layers using The Graph indexers (GraphQL) and REST APIs to ensure sub-second UI updates',
        'Mentoring junior developers and conducting code reviews to maintain high code quality standards',
      ],
      techStack: ['Next.js', 'TypeScript', 'Ethers.js', 'Solana Web3.js', 'GraphQL', 'Redux'],
    },
    {
      company: '8th Loop',
      location: 'Karachi, Pakistan',
      currentlyWorking: false,
      startDate: 'Jul 2021',
      careerProgression: [
        {
          title: 'Frontend Developer - II',
          startDate: 'Jul 2022',
          endDate: 'Jun 2023',
        },
        {
          title: 'Jr. Software Engineer',
          startDate: 'Feb 2022',
          endDate: 'Jul 2022',
        },
        {
          title: 'Trainee React JS Developer',
          startDate: 'Jul 2021',
          endDate: 'Feb 2022',
        },
      ],
      keyAchievements: [
        'Advanced to Frontend Developer II to lead frontend logic for complex client-facing SaaS products',
        'Implemented modular component architectures and optimized application state management for reliability',
        'Collaborated with cross-functional teams to deliver high-quality features on tight deadlines',
        'Reduced application load time by 40% through code splitting and lazy loading implementations',
      ],
      techStack: ['React.js', 'Vue.js', 'TypeScript', 'REST APIs', 'Redux', 'SCSS'],
    },
    {
      company: 'SoftThree',
      location: 'Karachi, Pakistan',
      currentlyWorking: false,
      startDate: 'Oct 2020',
      careerProgression: [
        {
          title: 'Jr. Software Engineer',
          startDate: 'Jan 2021',
          endDate: 'Jul 2021',
        },
        {
          title: 'Software Engineering Intern',
          startDate: 'Oct 2020',
          endDate: 'Jan 2021',
        },
      ],
      keyAchievements: [
        'Engineered frontend structures for SaaS platforms and apprenticeship modules using React.js and Angular',
        'Earned a promotion to Jr. Software Engineer within 4 months of initial internship',
        'Developed reusable component libraries that improved development efficiency by 30%',
        'Participated in agile development processes and daily standups',
      ],
      techStack: ['React.js', 'Angular', 'JavaScript', 'Bootstrap', 'REST APIs'],
    },
  ],

  // ==================== EDUCATION SECTION ====================
  education: [
    {
      title: 'Master of Science',
      major: 'Computer Science and IT',
      institutionName: 'NED University of Engineering and Technology',
      location: 'Karachi, Pakistan',
      startDate: 'Oct 2023',
      endDate: 'Dec 2025',
      status: 'completed',
      gpa: '3.8',
      gpaScale: '4.0',
      summary: [
        'Specialized in Advanced Algorithms and Data Structures',
        'Research focus on Web3 technologies and distributed systems',
        'Machine learning applications in modern web development',
      ],
    },
    {
      title: 'Bachelor of Science',
      major: 'Software Engineering',
      institutionName: 'University of Karachi',
      location: 'Karachi, Pakistan',
      startDate: 'Jan 2017',
      endDate: 'Feb 2021',
      status: 'completed',
      gpa: '3.6',
      gpaScale: '4.0',
      summary: [
        'Comprehensive study of software development lifecycle',
        'Specialized in web technologies and modern frameworks',
        'Strong foundation in data structures and algorithms',
      ],
    },
  ],

  // ==================== CONTINUOUS LEARNING SECTION ====================
  continuousLearning: [
    {
      title: 'Advanced Web3 Development',
      description:
        'Continuously exploring blockchain technologies, smart contracts, and decentralized finance protocols',
    },
    {
      title: 'Performance Optimization & Web Vitals',
      description:
        'Staying updated with latest techniques for improving Core Web Vitals and user experience metrics',
    },
    {
      title: 'AI & Machine Learning Integration',
      description:
        'Learning to integrate AI/ML capabilities into web applications and understanding model deployment',
    },
  ],

  // ==================== PROJECTS SECTION ====================
  projects: [
    {
      id: '1',
      title: 'Pixtool',
      description:
        'A SaaS web app for video editing, sharing & stage simulation with advanced features.',
      longDescription:
        'A comprehensive SaaS platform for video editing, sharing, and stage simulation. Features include real-time collaboration, advanced editing tools, and cloud storage integration.',
      startYear: 2023,
      endYear: 2024,
      images: [
        '/images/Pixtool.png',
      ],
      usedSkills: ['React', 'Video Processing', 'SaaS', 'Node.js', 'Firebase', 'Video.js'],
      isFeatured: true,
      link: 'https://pixtool-66579.firebaseapp.com/home',
    },
    {
      id: '2',
      title: 'Eberhard Capital',
      description:
        'Official website of Eberhard Capital with modern design and investment portfolio.',
      longDescription:
        'Professional corporate website featuring investment portfolio management, financial analytics, and client resources.',
      startYear: 2023,
      endYear: 2023,
      images: [
        '/images/EberhardCapital.png',
      ],
      usedSkills: ['React', 'TypeScript', 'Tailwind CSS', 'Web Design'],
      isFeatured: false,
      link: 'http://eberhardcapital.com/',
    },
    {
      id: '3',
      title: '7 Star Training',
      description:
        'A SaaS web app for apprenticeship trainings with comprehensive course management.',
      longDescription:
        'Educational platform for managing apprenticeship programs with course scheduling, progress tracking, and certification management.',
      startYear: 2022,
      endYear: 2023,
      images: [
        '/images/SevenStarTraining.png',
      ],
      usedSkills: ['React', 'Node.js', 'MongoDB', 'Express', 'SaaS', 'Education'],
      isFeatured: true,
      link: 'https://star-309014.ew.r.appspot.com/',
    },
    {
      id: '4',
      title: 'EHJ & SJ Consultancy',
      description: 'Official website of EHJ & SJ Consultancy providing professional services.',
      longDescription:
        'Corporate website for consultancy services with service offerings, case studies, and client testimonials.',
      startYear: 2022,
      endYear: 2022,
      images: [
        '/images/EHJAndSJConsultancy.png',
      ],
      usedSkills: ['React', 'Next.js', 'CSS', 'Web Design', 'Corporate'],
      isFeatured: false,
      link: 'https://ehjsjconsultancy.com/',
    },
    {
      id: '5',
      title: 'Novospace',
      description:
        'A SaaS web app for hardware & product configurations with advanced customization.',
      longDescription:
        'Enterprise-level configuration management system for hardware and product customization with real-time updates and advanced analytics.',
      startYear: 2021,
      endYear: 2022,
      images: [
        '/images/Novospace.png',
      ],
      usedSkills: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'SaaS'],
      isFeatured: false,
      link: 'https://novo-back.herokuapp.com/',
    },
  ],

  // ==================== CONTACT SECTION ====================
  contact: {
    email: 'usama.zuberi1010@gmail.com',
    location: 'Karachi, Pakistan',
    responseTime: '24 hours',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/usama-zuberi',
        icon: 'github',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/usama-zuberi',
        icon: 'linkedin',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/usama_zuberi',
        icon: 'twitter',
      },
      {
        name: 'WhatsApp',
        url: 'https://wa.me/923332169871',
        icon: 'whatsapp',
      },
    ],
  },

  // ==================== CONTACT FORM ====================
  contactForm: {
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your full name',
        required: true,
        validation: {
          minLength: 2,
          errorMessage: 'Name must be at least 2 characters',
        },
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Enter your email address',
        required: true,
        validation: {
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          errorMessage: 'Please enter a valid email address',
        },
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Share your message, ideas, or project details',
        required: true,
        validation: {
          minLength: 10,
          errorMessage: 'Message must be at least 10 characters',
        },
      },
    ],
    submitButton: {
      text: 'Send Message',
      loadingText: 'Sending...',
    },
  },

  // ==================== TESTIMONIALS SECTION ====================
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      testimonial:
        'Working with Usama was an absolute pleasure. His attention to detail and ability to translate complex requirements into elegant solutions is outstanding. The project was delivered ahead of schedule and exceeded our expectations.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupHub',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      testimonial:
        'Usama is a rare find - a developer who combines technical excellence with great communication skills. He helped us build a scalable platform that has been running flawlessly for over a year. Highly recommended!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Senior Developer',
      company: 'Digital Innovations',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      testimonial:
        'I had the privilege of collaborating with Usama on multiple projects. His expertise in React and Next.js is impressive, and his code quality is always top-notch. A true professional!',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder & CEO',
      company: 'GrowthLabs',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      testimonial:
        "Usama transformed our outdated web presence into a modern, responsive platform that has significantly improved user engagement. His problem-solving skills and dedication to quality are exceptional.",
    },
    {
      id: 5,
      name: 'Aisha Malik',
      role: 'UI/UX Designer',
      company: 'Creative Studio',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      testimonial:
        'As a designer, working with Usama was seamless. He brought my designs to life with pixel-perfect precision and even suggested improvements that enhanced the user experience. Looking forward to future collaborations!',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Project Lead',
      company: 'Enterprise Systems Inc.',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      testimonial:
        'Usama consistently delivered high-quality work under tight deadlines. His ability to quickly understand business requirements and implement robust solutions made him an invaluable team member.',
    },
  ],
};

export default portfolioData;
