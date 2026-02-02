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
      "I am a Senior Software Engineer with a Master's in Computer Science and a passion for building beautiful, intuitive user interfaces. My expertise lies at the intersection of React/Next.js and Web3, where I architect scalable systems that solve complex engineering challenges. I pride myself on being a reliable, easy-to-work-with collaborator who balances technical rigors with a focus on delivering high-quality user experiences that actually engage.",
    // 'I build beautiful, engaging user experiences and intuitive user interfaces for the web. I pride myself on reliable communication and being an easy to work with, friendly person who delivers high-quality solutions.',
    yearsOfExperience: 5,
    projectsCompleted: 25,
    clientSatisfactionRate: 100,
    resumeLink: '/resume/Muhammad_Usama_Zuberi_Resume.pdf',
    profileImage: '/images/profile.jpeg',
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
          'JavaScript',
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
      techStack: ['React.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'REST APIs', 'Redux', 'SCSS'],
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
      title: 'Master of Science (MS)',
      major: 'Computer Science and IT',
      institutionName: 'NED University of Engineering and Technology',
      location: 'Karachi, Pakistan',
      startDate: 'Oct 2023',
      endDate: 'Dec 2025',
      status: 'completed',
      gpa: '3.58',
      gpaScale: '4.0',
      summary: [
        // 'Specialized in Advanced Algorithms and Data Structures',
        // 'Research focus on Web3 technologies and distributed systems',
        // 'Machine learning applications in modern web development',
      ],
    },
    {
      title: 'Bachelor of Science (BS)',
      major: 'Software Engineering',
      institutionName: 'University of Karachi',
      location: 'Karachi, Pakistan',
      startDate: 'Jan 2017',
      endDate: 'Feb 2021',
      status: 'completed',
      gpa: '3.23',
      gpaScale: '4.0',
      summary: [
        // 'Comprehensive study of software development lifecycle',
        // 'Specialized in web technologies and modern frameworks',
        // 'Strong foundation in data structures and algorithms',
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
    // SoftThree Projects
    {
      id: '1',
      slug: 'natours',
      title: 'Natours',
      description: 'A website for fictional tour company Natours.',
      longDescription:
        'A fictional travel agency landing page built to practice advanced CSS, Sass structure, animations, and responsive design techniques. It focuses on creating visually appealing layouts without relying on Flexbox or Grid.',
      startYear: 2020,
      endYear: 2020,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['SCSS', 'HTML', 'JavaScript', 'Web Design'],
      isFeatured: false,
      link: 'https://usamazuberi.github.io/Natours',
    },
    {
      id: '2',
      slug: 'trillo',
      title: 'Trillo',
      description: 'A website for fictional all in one tour company Trillo.',
      longDescription:
        'An all-in-one hotel booking web app designed to master modern Flexbox layouts while keeping the interface responsive and maintainable. The project emphasizes arranging elements harmoniously using advanced CSS concepts.',
      startYear: 2020,
      endYear: 2020,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['SCSS', 'HTML', 'JavaScript', 'Flexbox', 'Web Design'],
      isFeatured: false,
      link: 'https://usamazuberi.github.io/Trillo',
    },
    {
      id: '3',
      slug: 'nexter',
      title: 'Nexter',
      description: 'A website for fictional real state company Nexter',
      longDescription:
        'A real-estate company website created as the final project to learn complex layouts with CSS Grid and animations. It helps developers better understand grid principles and modern web layout techniques.',
      startYear: 2020,
      endYear: 2020,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['SCSS', 'HTML', 'JavaScript', 'Grid Layout', 'Web Design'],
      isFeatured: false,
      link: 'https://usamazuberi.github.io/Nexter',
    },
    {
      id: '4',
      slug: 'eberhard-capital',
      title: 'Eberhard Capital',
      description:
        'Official website of Eberhard Capital with modern design and investment portfolio.',
      longDescription:
        'Professional corporate website featuring investment portfolio management, financial analytics, and client resources.',
      startYear: 2020,
      endYear: 2020,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Web Design'],
      isFeatured: false,
      link: 'http://eberhardcapital.com/',
    },
    {
      id: '5',
      slug: 'ehj-and-sj-consultancy',
      title: 'EHJ & SJ Consultancy',
      description: 'Official website of EHJ & SJ Consultancy providing professional services.',
      longDescription:
        'Corporate website for consultancy services with service offerings, case studies, and client testimonials.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['React.js', 'Next.js', 'CSS', 'Web Design', 'Corporate'],
      isFeatured: false,
      link: 'https://ehjsjconsultancy.com/',
    },
    {
      id: '6',
      slug: 'novospace',
      title: 'Novospace',
      description:
        'A SaaS web app for hardware & product configurations with advanced customization.',
      longDescription:
        'Enterprise-level configuration management system for hardware and product customization with real-time updates and advanced analytics.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['React.js', 'Redux', 'Node.js', 'PostgreSQL', 'SaaS'],
      isFeatured: false,
      link: 'https://novo-back.herokuapp.com/',
    },
    {
      id: '7',
      slug: 'cylinder',
      title: 'Cylinder',
      description: 'Web application to calculate and visualize residential hot water demand.',
      longDescription:
        'A web-based engineering tool that calculates residential hot water requirements by analyzing household usage patterns, system efficiency, storage capacity, and heat loss. Designed to help municipalities and system planners accurately size hot water infrastructure.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['SCSS', 'HTML', 'JavaScript', 'Grid Layout', 'Web Design'],
      isFeatured: false,
      link: 'https://cylinder-41ed8.firebaseapp.com/',
    },
    {
      id: '8',
      slug: 'pixtool',
      title: 'Pixtool',
      description:
        'A SaaS web app for video editing, sharing & stage simulation with advanced features.',
      longDescription:
        'A comprehensive SaaS platform for video editing, sharing, and stage simulation. Features include real-time collaboration, advanced editing tools, and cloud storage integration.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['React.js', 'Video Processing', 'SaaS', 'Node.js', 'Firebase', 'Video.js'],
      isFeatured: false,
      link: 'https://pixtool-66579.firebaseapp.com/home',
    },
    {
      id: '9',
      slug: '7-star-training',
      title: '7 Star Training',
      description:
        'A SaaS web app for apprenticeship trainings with comprehensive course management.',
      longDescription:
        'Educational platform for managing apprenticeship programs with course scheduling, progress tracking, and certification management.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'SaaS', 'Education'],
      isFeatured: false,
      link: 'https://star-309014.ew.r.appspot.com/',
    },
    {
      id: '10',
      slug: 'goldpesa',
      title: 'Goldpesa',
      description:
        'A sophisticated DeFi platform merging gold-backed tokenization with algorithmic trading strategies.',
      longDescription:
        'Worked on the frontend architecture and decentralized integration for GoldPesa, a platform that utilizes an AI-powered trading strategy (PAWN) to generate returns for gold-backed token holders. Integrated Uniswap V3 subgraphs for real-time liquidity and price tracking of the GPXT token.',
      startYear: 2022,
      endYear: 2023,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['React.js', 'GraphQL', 'The Graph', 'Uniswap V3 SDK', 'Web3', 'DeFi'],
      isFeatured: true,
      link: 'https://goldpesa-v1.netlify.app/',
    },
    // Va8ive Digital / 8th Loop Projects
    {
      id: '11',
      slug: 'mattress-review',
      title: 'Mattress Review',
      description: 'A data-driven comparison engine and review platform for the sleep industry.',
      longDescription:
        'Developed a comprehensive comparison platform for mattress brands. Built custom rating components and data visualization tables to help users compare specs across dozens of international sleep brands.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Architecture',
        'Data Comparison',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://mattressreview.com/',
    },
    {
      id: '12',
      slug: 'vape-and-pods',
      title: 'Vape & Pods',
      description:
        'A specialized digital publication focusing on the vaping industry and product analysis.',
      longDescription:
        'Architected a content-first website for high-volume blog publishing. Implemented advanced category filtering and brand-specific product showcases to enhance user discovery.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Strategy',
        'Responsive Design',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://vapeandpods.com/',
    },
    {
      id: '13',
      slug: 'the-vitamin-plus',
      title: 'The Vitamin Plus',
      description:
        'An educational health portal focused on supplement analysis and nutritional advice.',
      longDescription:
        'Developed a niche health and wellness blog platform emphasizing supplement reviews and nutritional guidance. Integrated SEO best practices to drive organic traffic and implemented affiliate marketing strategies for monetization.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Strategy',
        'Responsive Design',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://thevitaminplus.com/',
    },
    {
      id: '14',
      slug: 'opio-glow-studio',
      title: 'Shop Glow Studio / OpioGlow',
      description: 'A premium E-commerce destination for cosmetics and skincare essentials.',
      longDescription:
        'Engineered a high-conversion E-commerce storefront for beauty products. Focused on visual storytelling, seamless cart transitions, and mobile-first navigation for a luxury shopping experience.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: ['Nuxt 2', 'Vue.js', 'Responsive Design', 'SEO', 'E-commerce'],
      isFeatured: false,
      link: 'https://opioglow.com/',
    },
    {
      id: '15',
      slug: 'just-parenting-advice',
      title: 'Just Parenting Advice',
      description:
        'A resource-rich community platform providing expert guidance for child development and parenting.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Strategy',
        'Responsive Design',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://justparentingadvice.com/',
    },
    {
      id: '16',
      slug: 'go-nutritious',
      title: 'Go Nutritious',
      description:
        'A nutrition-focused web publication advocating for healthy lifestyles through expert-led content.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Strategy',
        'Responsive Design',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://gonutritious.com/',
    },
    {
      id: '17',
      slug: 'jockhabits',
      title: 'Jockhabits',
      description:
        'A performance-focused sports lifestyle publication reviewing athletic gear and brand-name footwear.',
      longDescription:
        'Created a high-engagement blog platform for sports enthusiasts. Integrated product review schemas and dynamic brand comparisons to assist users in selecting athletic equipment.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Strategy',
        'Responsive Design',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://jockhabits.com/',
    },
    {
      id: '18',
      slug: 'shaping-nutrition',
      title: 'Shaping Nutrition',
      description:
        'A nutrition-focused web publication advocating for healthy lifestyles through expert-led content.',
      startYear: 2021,
      endYear: 2021,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Nuxt 2',
        'Vue.js',
        'Content Strategy',
        'Responsive Design',
        'SEO',
        'Affiliate Marketing',
      ],
      isFeatured: false,
      link: 'https://shapingnutrition.com/',
    },
    {
      id: '19',
      slug: 'supersavermama',
      title: 'Super Saver Mama',
      description:
        'A high-traffic global affiliate marketing platform and coupon aggregator serving multiple regions.',
      longDescription:
        'As a core Frontend Developer, I contributed to the evolution of this flagship affiliate platform. I focused on building highly performant, SEO-optimized landing pages and complex coupon filtering systems. The project involved managing dynamic data across multiple locales (US, AU, CA), ensuring sub-second load times to maintain high search engine rankings and user conversion rates.',
      startYear: 2021,
      endYear: 2023,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'PHP',
        'Laravel',
        'SCSS / Sass',
        'JavaScript',
        'Performance Optimization',
        'SEO Optimization',
      ],
      isFeatured: true,
      link: 'https://supersavermama.com/us-en/',
    },
    {
      id: '20',
      slug: 'barterrup',
      title: 'Barterrup',
      description:
        'A community-driven social initiative platform promoting sustainable living through a digitized barter system.',
      longDescription:
        'Developed a social-first platform designed to reduce environmental waste by facilitating the exchange of goods and services. The system features multiple interaction models including direct bartering, a "Giveaway" option for NGO donations, and an "I-need" category for community support requests. Integrated secure social authentication (Google/Facebook) to build a trusted community of users.',
      startYear: 2022,
      endYear: 2023,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Vue.js v2',
        'Nuxt.js v2',
        'Vuex',
        'AWS Cognito',
        'AWS S3',
        'AWS Lambda',
        'AWS EC2',
        'AWS SNS',
        'Redis',
        'SCSS / Sass',
        'Javascript',
      ],
      isFeatured: false,
      link: 'https://barterrup.com',
    },
    {
      id: '21',
      slug: 'brijjd',
      title: 'Brijjd',
      description:
        'A specialized social network dedicated to democratizing access to scientific research and bridging the gap between academia and the public.',
      longDescription:
        'Engineered a community-focused social platform designed for "Open Science" communication. Developed features that allow researchers to translate complex academic insights into accessible content for a broader audience. The platform prioritizes high-performance content delivery and real-time engagement tools to foster connection between scientific communities and the general public without traditional paywalls or gatekeepers.',
      startYear: 2022,
      endYear: 2023,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'Vue.js v2',
        'Nuxt.js v2',
        'Vuex',
        'AWS Cognito',
        'AWS S3',
        'AWS Lambda',
        'AWS EC2',
        'AWS SNS',
        'Redis',
        'SCSS / Sass',
        'Javascript',
      ],
      isFeatured: false,
      link: 'https://brijjd.com',
    },
    {
      id: '22',
      slug: 'catalyst-computers',
      title: 'Catalyst Computers',
      description:
        'A comprehensive digital presence for a leading Sydney-based Managed IT Services Provider (MSP).',
      longDescription:
        'Architected and developed the digital platform for Catalyst Computers, focusing on a service-oriented UI that highlights their complex IT offerings. Integrated lead generation workflows, Office 365 migration service portals, and custom service-area mapping to support their operations across Sydney. The platform is optimized for high conversion rates and technical SEO to maintain a competitive edge in the Australian MSP market.',
      startYear: 2024,
      endYear: 2025,
      // Use your Vercel Blob URLs here
      images: [
        'https://[your-id].public.blob.vercel-storage.com/catalyst-hero.png',
        'https://[your-id].public.blob.vercel-storage.com/catalyst-services.png',
      ],
      usedSkills: ['Wordpress', 'Elementor', 'HTML', 'CSS / Sass', 'SEO Optimization'],
      isFeatured: true,
      link: 'https://catalystcomputers.com.au/',
    },
    // Hashcore Projects
    {
      id: '23',
      slug: 'todo-app',
      title: 'Cloud Task Manager (Todo App)',
      description: 'A real-time, authenticated CRUD application for personal task management.',
      longDescription:
        'Developed a full-stack Task Management system featuring secure user authentication and persistent cloud storage. The application implements a complete CRUD (Create, Read, Update, Delete) cycle, allowing users to manage personalized task lists with real-time data synchronization across devices via Firebase Firestore.',
      startYear: 2023,
      endYear: 2023,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'React.js',
        'Firebase Authentication',
        'Cloud Firestore',
        'SCSS / Sass',
        'Context API',
        'Responsive Design',
      ],
      isFeatured: false,
      link: 'https://todo-app-v100.netlify.app/',
    },
    {
      id: '24',
      slug: 'zeroliquid',
      title: 'ZeroLiquid.xyz',
      description:
        'A revolutionary DeFi lending protocol offering self-repaying, liquidation-free loans backed by LSDs.',
      longDescription:
        'Architected the frontend for the ZeroLiquid ecosystem, focusing on a secure and intuitive interface for automated debt-repayment systems. Integrated Ethereum-based smart contracts to allow users to borrow against Liquid Staking Derivatives (LSDs) without the risk of liquidation. Developed real-time health factor monitors, yield-tracking dashboards, and complex transaction state management to ensure a seamless Web3 user experience.',
      startYear: 2023,
      endYear: 2025,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'React.js',
        'JavaScript',
        'TypeScript',
        'Ethers.js / Wagmi',
        'Web3Modal',
        'Wallet Integration',
        'GraphQL / The Graph',
        'Smart Contract Integration',
      ],
      isFeatured: true,
      link: 'https://zeroliquid.xyz/',
    },
    {
      id: '25',
      slug: 'pumpkin',
      title: 'Pumpkin.fun',
      description:
        'A high-performance Solana-based fair launch platform for community-driven meme tokens.',
      longDescription:
        'Developed the frontend for a decentralized token launchpad on the Solana blockchain. Engineered a "fair launch" mechanism that utilizes bonding curves to determine token pricing and liquidity pool graduation. Integrated real-time transaction streaming via Solana Web3.js and optimized the UI for sub-second trade execution, ensuring a seamless experience for high-frequency traders in the meme coin ecosystem.',
      startYear: 2025,
      endYear: 2026,
      images: ['/images/placeholder-project.svg'],
      usedSkills: [
        'React.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'Socket.io',
        'Ethers.js',
        'Solana Web3.js',
        '@solana/wallet-adapter',
        'Real-time Data Streaming',
        'Wallet Integration',
        'GraphQL / The Graph',
        'Smart Contract Integration',
      ],
      isFeatured: true,
      link: 'https://pumpkin.fun',
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
      name: 'Rizwan Ahmed Siddiqui',
      role: 'Node JS Developer',
      company: 'SoftThree',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        "It gives me great pleasure to write this recommendation for Usama. I have worked side-by-side with him for the last seven months in the web development department at Soft Three. He served as a front-end web developer and was a nice colleague to me.As a colleague, He was a successful, easy to manage associate, and he always gave that extra effort to meet deadlines.While I’ll certainly miss the working relationship I had with him, I'm confident he will be able to make an immediate as well as positive impact on your organization.",
    },
    {
      id: 2,
      name: 'Taha Imtiaz',
      role: 'MERN Stack Engineer',
      company: 'SoftThree',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        "I have worked with many colleagues in my company but Usama is a unique one to work. His UI skills impressed me a lot. He is so passionate towards work in the company and he is easily adjustable in a given situation. His ability to go out of his way to help others has made him stand out. We've joined our hands on several projects, and Usama is one of the best people I had as a partner He is the most profound person I have met, and his ability to tackle any problem is remarkable. I highly recommend his expertise to any person looking for an React.js Developer.",
    },
    {
      id: 3,
      name: 'Muhammad Mujtaba',
      role: 'Senior Software Developer',
      company: 'BenchMatrix',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        "A thorough professional! Usama really knows his job and delivers up to the mark, always. I don't think he is in competition with anyone else but his own self when it comes to setting standards and raising the bar of excellence. He is a successful, easy to manage associate, hard working and he always gave that extra effort to meet deadlines.",
    },
    {
      id: 4,
      name: 'Wahab Kazmi',
      role: 'Software Engineer',
      company: '8th Loop',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        'Working with him has always been a wonderful experience. He is the best team player I have ever worked with, he takes complete accountability of his tasks and always works with the complete planning.',
    },
    {
      id: 5,
      name: 'Hammad Ahmed',
      role: 'Software Engineer',
      company: '8th Loop',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'female',
      testimonial:
        'As a frontend developer, Usama has a deep understanding of Modern Javascript frontend frameworks and libraries and is always up-to-date with the latest web technologies. They have a keen eye for design and user experience, and have demonstrated the ability to create visually appealing and intuitive user interfaces. I have had the pleasure of working with Usama and have been consistently impressed by their technical skills and work ethic. As a frontend developer, Usama has a deep understanding of Modern Javascript frontend frameworks and libraries and is always up-to-date with the latest web technologies. They have a keen eye for design and user experience, and have demonstrated the ability to create visually appealing and intuitive user interfaces.',
    },
    {
      id: 6,
      name: 'Syed Hassan',
      role: 'Full Stack Developer',
      company: '8th Loop',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        'Usama has excellent learning capabilities and is eager to gain an understanding of a broad range of domains surrounding development and design. He works transparently with a focus on timely deliveries, transparent workplace practices and well structured/documented code.',
    },
    {
      id: 7,
      name: 'Muhammad Yousuf',
      role: 'Full Stack Developer',
      company: '8th Loop',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial: 'He is very dedicated and hard working.',
    },
    {
      id: 8,
      name: 'Taha Haq',
      role: 'Product Manager',
      company: 'Hashcore',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        'Usama has worked at Hashcore for over three years. During this time, he has proven to be an invaluable asset to our product development process. He is a skilled developer who consistently turns product requirements into great user experiences. He is reliable, meets every deadline, and is a true professional.',
    },
    {
      id: 9,
      name: 'Maaz Jawaid',
      role: 'Operations Manager',
      company: 'Hashcore',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        "Usama joined Hashcore as our first frontend developer. Despite tight deadlines, his ownership and problem-solving skills set a high bar for the product. Beyond his technical talent, he is the 'gel' of our team, someone everyone loves working with. Usama, it's been a pleasure, and I look forward to working with you again.",
    },
    {
      id: 10,
      name: 'Abdul Mannan',
      role: 'Blockchain Engineer',
      company: 'Hashcore',
      image: '/images/placeholder-profile.svg',
      rating: 5,
      gender: 'male',
      testimonial:
        "I highly recommend Usama Zuberi. I've worked with him on the same team, and he's an excellent Senior Software Engineer, especially on frontend work. He completes tasks quickly, delivers high-quality results, and often goes beyond what's expected. Usama is reliable, easy to work with, communicates clearly, and is a real team player. Any team would be lucky to have him.",
    },
  ],
};

export default portfolioData;
