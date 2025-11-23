export interface CourseModule {
  id: number;
  title: string;
  topics: string[];
  duration: string;
  handson: string[];
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  price: string;
  duration: string;
  emoji: string;
  shortDescription: string;
  description: string;
  eligibility: string[];
  modules: CourseModule[];
  tools: string[];
  outcomes: string[];
  certifications: string[];
  schedule: {
    type: string;
    batchSize: string;
    mode: string[];
  };
  careerSupport: string[];
  projects: string[];
}

export const COURSES: Course[] = [
  {
    id: 1,
    slug: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    price: '₹24,999',
    duration: '4-6 Months',
    emoji: '🌐',
    shortDescription: 'Frontend & Backend mastery with real projects',
    description: 'Master end-to-end web application development with modern technologies. Build production-ready applications using React, Node.js, databases, and cloud deployment.',
    eligibility: [
      'Basic computer knowledge',
      'No prior programming experience required',
      'Passion for learning and building web applications'
    ],
    modules: [
      {
        id: 1,
        title: 'Frontend Fundamentals',
        topics: ['HTML5 & Semantic Markup', 'CSS3, Flexbox & Grid', 'JavaScript ES6+', 'Responsive Design', 'Browser DevTools'],
        duration: '4 weeks',
        handson: ['Build portfolio website', 'Create responsive landing pages', 'Interactive UI components']
      },
      {
        id: 2,
        title: 'React.js & Modern Frontend',
        topics: ['React Fundamentals & Hooks', 'State Management (Redux/Context)', 'Next.js & SSR', 'TypeScript Basics', 'Tailwind CSS'],
        duration: '6 weeks',
        handson: ['E-commerce frontend', 'Blog platform with CMS', 'Real-time dashboard']
      },
      {
        id: 3,
        title: 'Backend Development with Node.js',
        topics: ['Node.js & Express.js', 'RESTful API Design', 'Authentication & Authorization', 'Middleware & Error Handling', 'Security Best Practices'],
        duration: '5 weeks',
        handson: ['Build API for e-commerce', 'User authentication system', 'File upload service']
      },
      {
        id: 4,
        title: 'Databases & Data Management',
        topics: ['SQL (PostgreSQL/MySQL)', 'NoSQL (MongoDB)', 'Database Design & Normalization', 'ORM (Prisma/Sequelize)', 'Query Optimization'],
        duration: '4 weeks',
        handson: ['Design database schema', 'Build data models', 'Optimize slow queries']
      },
      {
        id: 5,
        title: 'Deployment & DevOps',
        topics: ['Git & GitHub', 'CI/CD Pipelines', 'Docker Basics', 'Cloud Deployment (AWS/Vercel/Railway)', 'Monitoring & Logging'],
        duration: '3 weeks',
        handson: ['Deploy full-stack app', 'Setup CI/CD pipeline', 'Monitor production app']
      }
    ],
    tools: ['VS Code', 'Git/GitHub', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Postman', 'Vercel/AWS'],
    outcomes: [
      'Build production-ready full-stack applications',
      'Design and implement RESTful APIs',
      'Work with SQL and NoSQL databases',
      'Deploy applications to cloud platforms',
      'Understand modern web development workflows',
      'Collaborate using Git and GitHub'
    ],
    certifications: [
      'DevSecIT Full-Stack Developer Certificate',
      'Project Completion Certificates (3 projects)',
      'LinkedIn-endorsed skills'
    ],
    schedule: {
      type: 'Weekend batches & Weekday batches available',
      batchSize: 'Max 15 students per batch',
      mode: ['Online (Live)', 'Hybrid (Online + Offline)', 'Self-paced with mentor support']
    },
    careerSupport: [
      'Resume building & LinkedIn optimization',
      'Mock interviews with industry experts',
      '50+ coding interview questions',
      'Freelance project guidance',
      'Job referrals to partner companies'
    ],
    projects: [
      'E-commerce Platform (Full-stack)',
      'Social Media Dashboard',
      'Real-time Chat Application',
      'Portfolio + Personal project of choice'
    ]
  },
  {
    id: 2,
    slug: 'devsecops',
    title: 'DevSecOps',
    price: '₹29,999',
    duration: '3 Months',
    emoji: '🔄',
    shortDescription: 'CI/CD, Docker, Kubernetes & Cloud Security',
    description: 'Master the DevSecOps lifecycle with hands-on experience in automation, containerization, orchestration, and security-first development practices.',
    eligibility: [
      'Basic understanding of Linux',
      'Basic programming knowledge (any language)',
      'Understanding of software development lifecycle'
    ],
    modules: [
      {
        id: 1,
        title: 'DevOps Fundamentals',
        topics: ['DevOps Culture & Principles', 'Linux Administration', 'Shell Scripting & Automation', 'Git Advanced Workflows', 'Infrastructure as Code Concepts'],
        duration: '3 weeks',
        handson: ['Automate server tasks with Bash', 'Git branching strategies', 'Linux server hardening']
      },
      {
        id: 2,
        title: 'CI/CD Pipelines',
        topics: ['Jenkins Pipeline Design', 'GitHub Actions', 'GitLab CI/CD', 'Automated Testing', 'Artifact Management'],
        duration: '4 weeks',
        handson: ['Build Jenkins pipeline', 'Setup GitHub Actions workflow', 'Automated deployment pipeline']
      },
      {
        id: 3,
        title: 'Containerization & Orchestration',
        topics: ['Docker Architecture & Images', 'Docker Compose', 'Kubernetes Fundamentals', 'Helm Charts', 'Container Security'],
        duration: '4 weeks',
        handson: ['Dockerize applications', 'Deploy to Kubernetes cluster', 'Setup K8s monitoring']
      },
      {
        id: 4,
        title: 'Security Integration (SecOps)',
        topics: ['Security Scanning (SAST/DAST)', 'Vulnerability Management', 'Secret Management (Vault)', 'Compliance as Code', 'Security Monitoring'],
        duration: '2 weeks',
        handson: ['Integrate security scans in CI/CD', 'Implement secret rotation', 'Setup SIEM']
      }
    ],
    tools: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS/Azure', 'Prometheus', 'Grafana', 'SonarQube', 'HashiCorp Vault'],
    outcomes: [
      'Build end-to-end CI/CD pipelines',
      'Deploy applications using Docker & Kubernetes',
      'Implement security in the development pipeline',
      'Automate infrastructure provisioning',
      'Monitor and troubleshoot production systems',
      'Understand cloud-native architectures'
    ],
    certifications: [
      'DevSecIT DevSecOps Professional Certificate',
      'Kubernetes Fundamentals Badge',
      'Docker Certified Associate Preparation'
    ],
    schedule: {
      type: 'Intensive 3-month program',
      batchSize: 'Max 12 students per batch',
      mode: ['Online Live', 'Hybrid']
    },
    careerSupport: [
      'DevOps Engineer interview preparation',
      'Real-world scenario practice',
      'Cloud certification guidance',
      'Portfolio review with DevOps projects',
      'Job referrals in DevOps roles'
    ],
    projects: [
      'Complete CI/CD Pipeline for Microservices',
      'Kubernetes Cluster Deployment',
      'Automated Infrastructure Setup (IaC)',
      'Security-Integrated Deployment Pipeline'
    ]
  },
  {
    id: 3,
    slug: 'cyber-security-ethical-hacking',
    title: 'Cyber Security & Ethical Hacking',
    price: '₹34,999',
    duration: '4-6 Months',
    emoji: '🔒',
    shortDescription: 'Ethical hacking, SOC analysis & penetration testing',
    description: 'Become a certified ethical hacker with comprehensive training in penetration testing, vulnerability assessment, SOC operations, and incident response.',
    eligibility: [
      'Basic networking knowledge',
      'Linux command line familiarity',
      'Passion for cybersecurity'
    ],
    modules: [
      {
        id: 1,
        title: 'Cybersecurity Fundamentals',
        topics: ['CIA Triad & Security Principles', 'Network Security Basics', 'Cryptography & Encryption', 'Security Frameworks (NIST, ISO)', 'Threat Landscape'],
        duration: '4 weeks',
        handson: ['Network traffic analysis', 'Encryption implementation', 'Security audit basics']
      },
      {
        id: 2,
        title: 'Ethical Hacking & Penetration Testing',
        topics: ['Reconnaissance & Footprinting', 'Scanning & Enumeration', 'Exploitation Techniques', 'OWASP Top 10 Vulnerabilities', 'Web Application Pentesting'],
        duration: '6 weeks',
        handson: ['Vulnerability scanning labs', 'Exploit vulnerable apps (DVWA)', 'Web app penetration testing']
      },
      {
        id: 3,
        title: 'System & Network Security',
        topics: ['Linux Security Hardening', 'Windows Security', 'Firewall Configuration', 'IDS/IPS Systems', 'VPN & Network Segmentation'],
        duration: '4 weeks',
        handson: ['Harden Linux servers', 'Setup intrusion detection', 'Configure firewalls']
      },
      {
        id: 4,
        title: 'SOC Operations & Incident Response',
        topics: ['Security Operations Center (SOC)', 'SIEM Tools (Splunk/ELK)', 'Incident Response Lifecycle', 'Digital Forensics', 'Malware Analysis'],
        duration: '4 weeks',
        handson: ['Setup SIEM dashboard', 'Investigate security incidents', 'Malware analysis in sandbox']
      },
      {
        id: 5,
        title: 'Advanced Topics & Certification Prep',
        topics: ['Mobile Security', 'Cloud Security (AWS/Azure)', 'Social Engineering', 'CEH Exam Preparation', 'Bug Bounty Programs'],
        duration: '4 weeks',
        handson: ['Mobile app security testing', 'Cloud security audit', 'Bug bounty submissions']
      }
    ],
    tools: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Nessus', 'Splunk', 'OWASP ZAP', 'John the Ripper', 'Aircrack-ng'],
    outcomes: [
      'Conduct professional penetration tests',
      'Identify and exploit vulnerabilities ethically',
      'Perform security audits and assessments',
      'Respond to security incidents effectively',
      'Work as SOC analyst or penetration tester',
      'Prepare for CEH certification'
    ],
    certifications: [
      'DevSecIT Certified Ethical Hacker',
      'Penetration Testing Certificate',
      'CEH Exam Preparation & Guidance'
    ],
    schedule: {
      type: 'Flexible 4-6 month program',
      batchSize: 'Max 10 students (hands-on intensive)',
      mode: ['Online Live', 'Hybrid with lab access']
    },
    careerSupport: [
      'SOC Analyst interview preparation',
      'Penetration testing portfolio building',
      'Bug bounty guidance',
      'Security clearance job referrals',
      'CEH certification support'
    ],
    projects: [
      'Complete Penetration Test Report',
      'Web Application Security Assessment',
      'Network Security Audit',
      'Incident Response Case Study',
      'Bug Bounty Submission'
    ]
  },
  {
    id: 4,
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    price: '₹27,999',
    duration: '3-4 Months',
    emoji: '📱',
    shortDescription: 'Flutter, Android & iOS development',
    description: 'Build beautiful, high-performance mobile applications for iOS and Android using Flutter and native development tools.',
    eligibility: [
      'Basic programming knowledge',
      'Understanding of OOP concepts',
      'Familiarity with UI/UX is a plus'
    ],
    modules: [
      {
        id: 1,
        title: 'Mobile Development Fundamentals',
        topics: ['Mobile App Architecture', 'UI/UX Principles for Mobile', 'Dart Programming Language', 'Flutter Framework Basics', 'Widget Tree & State'],
        duration: '4 weeks',
        handson: ['Build simple Flutter apps', 'Create custom widgets', 'Basic navigation']
      },
      {
        id: 2,
        title: 'Advanced Flutter Development',
        topics: ['State Management (Provider, Riverpod, Bloc)', 'API Integration & HTTP', 'Local Storage (SQLite, Hive)', 'Firebase Integration', 'Push Notifications'],
        duration: '5 weeks',
        handson: ['E-commerce app with backend', 'Chat app with Firebase', 'Offline-first application']
      },
      {
        id: 3,
        title: 'Native Development (Android/iOS)',
        topics: ['Kotlin for Android Basics', 'Swift for iOS Basics', 'Platform-specific Features', 'Native Plugins', 'Performance Optimization'],
        duration: '3 weeks',
        handson: ['Create Flutter plugin', 'Implement native features', 'Optimize app performance']
      },
      {
        id: 4,
        title: 'Publishing & Deployment',
        topics: ['Play Store Publishing', 'App Store Publishing', 'App Security', 'Analytics & Crash Reporting', 'App Monetization'],
        duration: '2 weeks',
        handson: ['Publish app to stores', 'Implement analytics', 'Setup revenue streams']
      }
    ],
    tools: ['Flutter', 'Android Studio', 'Xcode', 'Firebase', 'Postman', 'Figma', 'VS Code', 'Git'],
    outcomes: [
      'Build cross-platform mobile apps with Flutter',
      'Integrate APIs and backend services',
      'Publish apps to Play Store and App Store',
      'Implement complex state management',
      'Optimize app performance',
      'Understand mobile app architecture'
    ],
    certifications: [
      'DevSecIT Mobile App Developer Certificate',
      'Flutter Development Certification',
      '3 Published App Certificates'
    ],
    schedule: {
      type: '3-4 month intensive program',
      batchSize: 'Max 12 students',
      mode: ['Online Live', 'Hybrid']
    },
    careerSupport: [
      'Mobile developer portfolio building',
      'App Store optimization guidance',
      'Freelance mobile app project leads',
      'Interview prep for mobile roles',
      'Startup collaboration opportunities'
    ],
    projects: [
      'Social Media App Clone',
      'E-commerce Mobile Application',
      'Real-time Chat Application',
      'Personal Finance Tracker',
      'Capstone App of Choice'
    ]
  },
  {
    id: 5,
    slug: 'cloud-computing',
    title: 'Cloud Computing (AWS/Azure/GCP)',
    price: '₹22,999',
    duration: '2-3 Months',
    emoji: '☁️',
    shortDescription: 'Cloud architecture & deployment',
    description: 'Master cloud computing with hands-on experience on major platforms (AWS, Azure, GCP). Learn to design, deploy, and manage scalable cloud infrastructure.',
    eligibility: [
      'Basic IT knowledge',
      'Understanding of networking',
      'Linux command line basics'
    ],
    modules: [
      {
        id: 1,
        title: 'Cloud Fundamentals',
        topics: ['Cloud Computing Concepts', 'IaaS, PaaS, SaaS Models', 'Cloud Service Providers Overview', 'Cloud Security Basics', 'Cost Optimization'],
        duration: '2 weeks',
        handson: ['Setup cloud accounts', 'Explore cloud consoles', 'Cost analysis']
      },
      {
        id: 2,
        title: 'AWS Cloud Services',
        topics: ['EC2 & Compute Services', 'S3 & Storage Solutions', 'VPC & Networking', 'RDS & Databases', 'Lambda & Serverless', 'IAM & Security'],
        duration: '4 weeks',
        handson: ['Deploy web app on EC2', 'Setup S3 static hosting', 'Create Lambda functions']
      },
      {
        id: 3,
        title: 'Azure & GCP Essentials',
        topics: ['Azure Virtual Machines', 'Google Compute Engine', 'Cloud Storage Comparison', 'Kubernetes Services (AKS/GKE)', 'Multi-cloud Strategies'],
        duration: '3 weeks',
        handson: ['Deploy on Azure', 'Setup GCP project', 'Compare cloud services']
      },
      {
        id: 4,
        title: 'Cloud Architecture & Best Practices',
        topics: ['High Availability Design', 'Load Balancing', 'Auto Scaling', 'Disaster Recovery', 'Monitoring & Logging', 'Well-Architected Framework'],
        duration: '3 weeks',
        handson: ['Design HA architecture', 'Setup monitoring', 'Implement disaster recovery']
      }
    ],
    tools: ['AWS Console', 'Azure Portal', 'GCP Console', 'Terraform', 'CloudFormation', 'AWS CLI', 'Cloud Monitoring Tools'],
    outcomes: [
      'Design and deploy cloud infrastructure',
      'Work with EC2, S3, Lambda, and other core services',
      'Implement cloud security best practices',
      'Optimize cloud costs',
      'Prepare for AWS Solutions Architect certification',
      'Understand multi-cloud strategies'
    ],
    certifications: [
      'DevSecIT Cloud Computing Certificate',
      'AWS Solutions Architect Associate Prep',
      'Azure Fundamentals Prep'
    ],
    schedule: {
      type: '2-3 month program',
      batchSize: 'Max 15 students',
      mode: ['Online Live', 'Self-paced with mentorship']
    },
    careerSupport: [
      'Cloud certification guidance',
      'Cloud architect interview prep',
      'Resume optimization for cloud roles',
      'AWS/Azure/GCP certification vouchers (discounted)',
      'Job referrals in cloud positions'
    ],
    projects: [
      'Deploy 3-tier Web Application',
      'Serverless Application with Lambda',
      'High Availability Architecture Design',
      'Cloud Cost Optimization Project'
    ]
  },
  {
    id: 6,
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    price: '₹34,999',
    duration: '4-6 Months',
    emoji: '🧠',
    shortDescription: 'Deep learning, NLP & AI model deployment',
    description: 'Comprehensive AI/ML program covering machine learning algorithms, deep learning, NLP, computer vision, and production deployment of AI models.',
    eligibility: [
      'Python programming knowledge',
      'Basic mathematics (linear algebra, calculus)',
      'Statistical understanding is a plus'
    ],
    modules: [
      {
        id: 1,
        title: 'Python for AI & Data Science',
        topics: ['NumPy & Pandas', 'Data Visualization (Matplotlib, Seaborn)', 'Exploratory Data Analysis', 'Data Preprocessing', 'Feature Engineering'],
        duration: '3 weeks',
        handson: ['Data analysis projects', 'Visualization dashboards', 'Dataset preparation']
      },
      {
        id: 2,
        title: 'Machine Learning Algorithms',
        topics: ['Supervised Learning (Regression, Classification)', 'Unsupervised Learning (Clustering, PCA)', 'Model Evaluation & Validation', 'Scikit-learn', 'Hyperparameter Tuning'],
        duration: '5 weeks',
        handson: ['Predict house prices', 'Customer segmentation', 'Classification projects']
      },
      {
        id: 3,
        title: 'Deep Learning & Neural Networks',
        topics: ['Neural Network Fundamentals', 'TensorFlow & PyTorch', 'Convolutional Neural Networks (CNNs)', 'Recurrent Neural Networks (RNNs)', 'Transfer Learning'],
        duration: '5 weeks',
        handson: ['Image classification', 'Object detection', 'Sequence prediction']
      },
      {
        id: 4,
        title: 'Natural Language Processing',
        topics: ['Text Preprocessing', 'Word Embeddings', 'Transformers & BERT', 'ChatGPT API Integration', 'Sentiment Analysis'],
        duration: '4 weeks',
        handson: ['Build chatbot', 'Sentiment analyzer', 'Text summarization']
      },
      {
        id: 5,
        title: 'ML Model Deployment',
        topics: ['Model Serialization', 'Flask/FastAPI for ML', 'Docker for ML Apps', 'Cloud Deployment', 'MLOps Basics'],
        duration: '3 weeks',
        handson: ['Deploy ML model as API', 'Create prediction web app', 'Setup CI/CD for ML']
      }
    ],
    tools: ['Python', 'Jupyter', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI API', 'Hugging Face', 'Docker', 'AWS SageMaker'],
    outcomes: [
      'Build and train machine learning models',
      'Implement deep learning solutions',
      'Work with NLP and computer vision',
      'Deploy AI models to production',
      'Integrate AI APIs (OpenAI, Gemini)',
      'Understand MLOps principles'
    ],
    certifications: [
      'DevSecIT AI/ML Engineer Certificate',
      'TensorFlow Developer Certificate Prep',
      'AWS Machine Learning Specialty Prep'
    ],
    schedule: {
      type: '4-6 month comprehensive program',
      batchSize: 'Max 12 students',
      mode: ['Online Live', 'Hybrid']
    },
    careerSupport: [
      'ML Engineer interview preparation',
      'Portfolio project guidance',
      'Kaggle competition support',
      'Research paper guidance',
      'Job referrals in AI/ML roles'
    ],
    projects: [
      'Image Classification System',
      'NLP Chatbot with AI Integration',
      'Recommendation System',
      'Computer Vision Application',
      'Deployed ML Product (Capstone)'
    ]
  },
  {
    id: 7,
    slug: 'secure-software-engineering',
    title: 'Secure Software Engineering',
    price: '₹19,999',
    duration: '2-3 Months',
    emoji: '🛡️',
    shortDescription: 'Secure code & threat modeling',
    description: 'Learn to build secure applications from the ground up with security best practices, threat modeling, and secure coding techniques.',
    eligibility: [
      'Programming experience in any language',
      'Basic understanding of web development',
      'Interest in application security'
    ],
    modules: [
      {
        id: 1,
        title: 'Security in SDLC',
        topics: ['Secure Software Development Lifecycle', 'Threat Modeling', 'Security Requirements', 'Secure Design Principles', 'Security Testing'],
        duration: '3 weeks',
        handson: ['Create threat models', 'Define security requirements', 'Security design reviews']
      },
      {
        id: 2,
        title: 'OWASP Top 10 & Web Security',
        topics: ['Injection Attacks', 'XSS & CSRF', 'Authentication Flaws', 'Broken Access Control', 'Security Misconfiguration', 'Sensitive Data Exposure'],
        duration: '4 weeks',
        handson: ['Exploit vulnerable apps', 'Implement security fixes', 'Secure authentication']
      },
      {
        id: 3,
        title: 'API & Backend Security',
        topics: ['API Authentication (JWT, OAuth)', 'Input Validation', 'Encryption & Hashing', 'SQL Injection Prevention', 'Secure File Uploads'],
        duration: '3 weeks',
        handson: ['Secure API development', 'Implement encryption', 'Prevent injection attacks']
      },
      {
        id: 4,
        title: 'Security Testing & Tools',
        topics: ['Static Analysis (SAST)', 'Dynamic Analysis (DAST)', 'Dependency Scanning', 'Security Code Review', 'Penetration Testing Basics'],
        duration: '2 weeks',
        handson: ['Run security scanners', 'Code security reviews', 'Fix vulnerabilities']
      }
    ],
    tools: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'Snyk', 'Dependency-Check', 'Git Secrets', 'Postman'],
    outcomes: [
      'Write secure code following best practices',
      'Identify and fix security vulnerabilities',
      'Perform threat modeling',
      'Conduct security code reviews',
      'Implement secure authentication',
      'Understand OWASP Top 10'
    ],
    certifications: [
      'DevSecIT Secure Software Engineer Certificate',
      'OWASP Security Certification Prep'
    ],
    schedule: {
      type: '2-3 month program',
      batchSize: 'Max 15 students',
      mode: ['Online Live', 'Self-paced']
    },
    careerSupport: [
      'Security-focused developer roles',
      'Application security engineer prep',
      'Secure code portfolio',
      'Job referrals with security focus',
      'Bug bounty guidance'
    ],
    projects: [
      'Secure Web Application',
      'API Security Implementation',
      'Security Vulnerability Assessment',
      'Secure Authentication System'
    ]
  },
  {
    id: 8,
    slug: 'advanced-backend-engineering',
    title: 'Advanced Backend Engineering',
    price: '₹28,999',
    duration: '3-4 Months',
    emoji: '⚙️',
    shortDescription: 'Microservices, Kafka & scalable systems',
    description: 'Master advanced backend architecture with microservices, message queues, caching, and building highly scalable distributed systems.',
    eligibility: [
      'Solid backend development experience',
      'Understanding of databases and APIs',
      'Knowledge of at least one backend language'
    ],
    modules: [
      {
        id: 1,
        title: 'Microservices Architecture',
        topics: ['Monolith vs Microservices', 'Service Decomposition', 'API Gateway Pattern', 'Service Discovery', 'Inter-service Communication'],
        duration: '4 weeks',
        handson: ['Design microservices', 'Build API gateway', 'Service mesh basics']
      },
      {
        id: 2,
        title: 'Message Queues & Event-Driven Architecture',
        topics: ['RabbitMQ Fundamentals', 'Apache Kafka', 'Event Sourcing', 'CQRS Pattern', 'Async Communication'],
        duration: '4 weeks',
        handson: ['Implement message queues', 'Build event-driven system', 'Kafka producers/consumers']
      },
      {
        id: 3,
        title: 'Caching & Performance',
        topics: ['Redis In-Memory Caching', 'Cache Strategies', 'Database Query Optimization', 'Connection Pooling', 'Load Balancing'],
        duration: '3 weeks',
        handson: ['Implement caching layer', 'Optimize slow queries', 'Setup load balancer']
      },
      {
        id: 4,
        title: 'Database Scaling & Advanced Concepts',
        topics: ['Database Sharding', 'Replication & Clustering', 'Read Replicas', 'Database Migrations', 'NoSQL vs SQL Trade-offs'],
        duration: '3 weeks',
        handson: ['Setup replication', 'Implement sharding', 'Database migration strategies']
      }
    ],
    tools: ['Node.js/Python/Go', 'Docker', 'Kubernetes', 'RabbitMQ', 'Apache Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'NGINX', 'Consul'],
    outcomes: [
      'Design microservices architectures',
      'Implement event-driven systems',
      'Build highly scalable backends',
      'Optimize database performance',
      'Work with message queues',
      'Understand distributed systems'
    ],
    certifications: [
      'DevSecIT Advanced Backend Engineer Certificate',
      'Microservices Architecture Certification'
    ],
    schedule: {
      type: '3-4 month advanced program',
      batchSize: 'Max 10 students (advanced level)',
      mode: ['Online Live', 'Hybrid']
    },
    careerSupport: [
      'Senior backend engineer interview prep',
      'System design interview practice',
      'Architecture portfolio building',
      'Job referrals for senior positions',
      'Startup CTO connections'
    ],
    projects: [
      'Microservices-based E-commerce',
      'Real-time Messaging Platform',
      'High-throughput API System',
      'Distributed Caching Implementation'
    ]
  },
  {
    id: 9,
    slug: 'data-engineering-big-data',
    title: 'Data Engineering & Big Data',
    price: '₹32,999',
    duration: '4-5 Months',
    emoji: '📊',
    shortDescription: 'ETL pipelines, Spark & data warehousing',
    description: 'Become a data engineer with expertise in building ETL pipelines, data warehouses, big data processing, and real-time streaming analytics.',
    eligibility: [
      'Python or Java programming',
      'SQL database knowledge',
      'Understanding of data structures'
    ],
    modules: [
      {
        id: 1,
        title: 'Data Engineering Fundamentals',
        topics: ['Data Engineering vs Data Science', 'ETL vs ELT', 'Data Modeling', 'Data Quality', 'Python for Data Engineering'],
        duration: '3 weeks',
        handson: ['Build simple ETL pipeline', 'Data quality checks', 'Data modeling']
      },
      {
        id: 2,
        title: 'ETL Pipeline Development',
        topics: ['Apache Airflow', 'Data Extraction Techniques', 'Data Transformation', 'Data Loading Strategies', 'Workflow Orchestration'],
        duration: '5 weeks',
        handson: ['Build Airflow DAGs', 'Create complex ETL jobs', 'Schedule workflows']
      },
      {
        id: 3,
        title: 'Big Data Processing',
        topics: ['Apache Spark Fundamentals', 'PySpark', 'Hadoop Ecosystem', 'Distributed Computing', 'Spark SQL & DataFrames'],
        duration: '5 weeks',
        handson: ['Process large datasets with Spark', 'Spark streaming', 'Big data analytics']
      },
      {
        id: 4,
        title: 'Data Warehousing & Cloud',
        topics: ['Data Warehouse Concepts', 'Google BigQuery', 'AWS Redshift', 'Snowflake', 'Data Lake vs Data Warehouse'],
        duration: '4 weeks',
        handson: ['Setup data warehouse', 'Build analytics dashboards', 'Cloud data pipelines']
      },
      {
        id: 5,
        title: 'Streaming & Real-time Data',
        topics: ['Apache Kafka for Streaming', 'Real-time ETL', 'Stream Processing', 'Event-driven Pipelines', 'Change Data Capture (CDC)'],
        duration: '3 weeks',
        handson: ['Build streaming pipeline', 'Real-time analytics', 'CDC implementation']
      }
    ],
    tools: ['Python', 'Apache Airflow', 'Apache Spark', 'Kafka', 'BigQuery', 'AWS Glue', 'Snowflake', 'dbt', 'Hadoop', 'Docker'],
    outcomes: [
      'Build and maintain ETL/ELT pipelines',
      'Process big data with Spark',
      'Design data warehouses',
      'Implement real-time data streaming',
      'Work with cloud data platforms',
      'Optimize data processing workflows'
    ],
    certifications: [
      'DevSecIT Data Engineer Certificate',
      'GCP Data Engineer Certification Prep',
      'AWS Big Data Specialty Prep'
    ],
    schedule: {
      type: '4-5 month comprehensive program',
      batchSize: 'Max 12 students',
      mode: ['Online Live', 'Hybrid']
    },
    careerSupport: [
      'Data engineer interview preparation',
      'SQL + system design practice',
      'Portfolio with data projects',
      'Cloud certification guidance',
      'Job referrals in data engineering'
    ],
    projects: [
      'Complete ETL Pipeline Project',
      'Big Data Analytics with Spark',
      'Real-time Data Streaming Platform',
      'Cloud Data Warehouse Implementation',
      'End-to-end Data Platform (Capstone)'
    ]
  },
  {
    id: 10,
    slug: 'software-testing-qa',
    title: 'Software Testing & QA',
    price: '₹17,999',
    duration: '2-3 Months',
    emoji: '✅',
    shortDescription: 'Manual & automation testing',
    description: 'Master software testing with manual testing, automation frameworks, API testing, performance testing, and CI/CD integration.',
    eligibility: [
      'Basic computer knowledge',
      'Understanding of software applications',
      'No programming required (will be taught)'
    ],
    modules: [
      {
        id: 1,
        title: 'Software Testing Fundamentals',
        topics: ['Testing Principles & Lifecycle', 'Test Planning & Strategy', 'Test Case Design', 'Bug Reporting', 'QA vs QC'],
        duration: '2 weeks',
        handson: ['Write test cases', 'Execute manual tests', 'Report bugs']
      },
      {
        id: 2,
        title: 'Automation Testing',
        topics: ['Selenium WebDriver', 'Test Automation Frameworks', 'Page Object Model', 'TestNG/JUnit', 'Cross-browser Testing'],
        duration: '5 weeks',
        handson: ['Automate web tests', 'Build test framework', 'Run parallel tests']
      },
      {
        id: 3,
        title: 'API & Mobile Testing',
        topics: ['API Testing with Postman', 'REST Assured', 'Mobile Testing (Appium)', 'API Automation', 'Newman CLI'],
        duration: '4 weeks',
        handson: ['Test APIs manually', 'Automate API tests', 'Mobile app testing']
      },
      {
        id: 4,
        title: 'Performance Testing & CI/CD',
        topics: ['JMeter Load Testing', 'Performance Metrics', 'CI/CD Integration', 'Test Reporting', 'Continuous Testing'],
        duration: '3 weeks',
        handson: ['Load test applications', 'Setup CI/CD tests', 'Generate test reports']
      }
    ],
    tools: ['Selenium', 'Appium', 'Postman', 'JMeter', 'TestNG', 'Jenkins', 'Git', 'JIRA', 'BrowserStack'],
    outcomes: [
      'Design comprehensive test strategies',
      'Automate web and mobile testing',
      'Perform API testing',
      'Conduct performance testing',
      'Integrate testing in CI/CD pipelines',
      'Work as QA automation engineer'
    ],
    certifications: [
      'DevSecIT QA Automation Engineer Certificate',
      'ISTQB Foundation Level Prep',
      'Selenium Certification'
    ],
    schedule: {
      type: '2-3 month program',
      batchSize: 'Max 15 students',
      mode: ['Online Live', 'Hybrid', 'Self-paced']
    },
    careerSupport: [
      'QA engineer interview preparation',
      'Automation portfolio building',
      'Resume optimization for QA roles',
      'ISTQB certification guidance',
      'Job referrals in testing roles'
    ],
    projects: [
      'Web Automation Framework',
      'API Test Suite',
      'Mobile App Testing Project',
      'Performance Testing Report',
      'Complete CI/CD Testing Pipeline'
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find(course => course.slug === slug);
}

export function getCourseById(id: number): Course | undefined {
  return COURSES.find(course => course.id === id);
}
