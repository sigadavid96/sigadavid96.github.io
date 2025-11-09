export const siteConfig = {
  name: "Davidson Siga",
  title: "Senior Data Scientist • AI/ML Engineer • MLOps Specialist",
  description: "Portfolio of Davidson Siga - Senior Data Scientist at IBM specializing in Applied AI, MLOps, and Generative AI solutions for Fortune 100 companies",
  accentColor: "#2563EB",
  phone: "(412) 954-8493",
  typingAnimation: [
    "GenAI",
    "Machine Learning",
    "Deep Learning",
    "Software Engineering",
    "Data Science",
    "Data Analytics",
    "Data Engineering",
  ],
  social: {
    email: "sigadavid96@gmail.com",
    linkedin: "https://linkedin.com/in/davidsonsiga",
    github: "https://github.com/sigadavid96",
  },
  aboutMe:
    "Senior Data Scientist at IBM with 7+ years of comprehensive experience spanning AI Engineering, Data Science, and Data Analytics domains. Master's in Information Systems Management from Carnegie Mellon University (GPA: 3.77).",
  aboutMeSections: [
    {
      title: "AI Engineering",
      content:
        "Building end-to-end production AI systems integrating Software Engineering, Machine Learning, and Generative AI. Architected self-service ML platforms serving 1,000+ data scientists, deployed LLM-powered compliance automation with RAG and LangChain, and led AI-powered code generation initiatives achieving 30% productivity gains.",
    },
    {
      title: "Data Science",
      content:
        "Expert in ML, Deep Learning, and NLP with hands-on experience fine-tuning BERT and GPT models, implementing LSTM forecasting pipelines serving 60+ models, and developing sentiment analysis systems processing millions of data points. Strong foundation in statistical modeling and algorithm implementation.",
    },
    {
      title: "Data Analytics",
      content:
        "Delivered high-impact analytics across Credit Risk (Wells Fargo - model validation, PD/LGD/EAD analysis, regulatory compliance) and Pharmaceutical HEOR (Mu Sigma - health economics outcomes research, pricing analytics, market access strategies). Specialized in translating complex data into actionable business insights.",
    },
  ],
  closingStatement:
    "Passionate about leveraging cutting-edge AI technologies to solve real-world problems while mentoring teams on MLOps best practices and data-driven decision making.",
  skills: [
    "Python",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "XGBoost",
    "LightGBM",
    "CatBoost",
    "LangChain",
    "RAG",
    "LLMs",
    "GPT",
    "LLaMA",
    "BERT",
    "FastAPI",
    "Flask",
    "React",
    "Docker",
    "Terraform",
    "AWS",
    "GCP",
    "Snowflake",
    "IBM Cloud",
    "MLOps",
    "CI/CD",
    "FAISS",
    "Chroma",
    "Vector Databases",
    "PySpark",
    "GoLang",
    "Shell Scripting",
    "Tableau",
  ],
  projects: [
    {
      name: "LSTM Time Series Forecasting",
      description:
        "Forecasted Apple's stock values based on Yahoo Finance 5+ years data API using LSTM architecture in PyTorch, achieving test MSE of ~6.8. Comprehensive tutorial explaining problem design, solution architecture, and implementation details for time series forecasting with deep learning.",
      link: "https://github.com/sigadavid96/LSTM_TimeSeriesForecasting/blob/main/dsiga_LSTM_TimeSeriesForecasting_Tutorial.ipynb",
      skills: ["PyTorch", "LSTM", "Time Series", "Deep Learning", "Statistics"],
    },
    {
      name: "DART: DifferentiAble pRompT",
      description:
        "Re-implemented and improved SOTA prompt-based sentence classifier using 16-shot learning, achieving ~93% accuracy on GLUE datasets. Enhanced the original model through regularized loss functions, AdamP optimizer, and comprehensive hyperparameter tuning.",
      link: "https://github.com/sigadavid96/DART",
      skills: ["NLP", "Few-shot Learning", "Prompt Engineering", "PyTorch", "Research"],
    },
    {
      name: "BERT from Scratch (Academic Project)",
      description:
        "Developed complete BERT architecture from ground up for sentence classification. Pre-trained and fine-tuned on SST and CFIMDB datasets, achieving ~0.9 F1-score. Deep dive into transformer architecture, attention mechanisms, and transfer learning. (Code unavailable - academic work)",
      link: "",
      skills: ["Deep Learning", "NLP", "Transformers", "PyTorch", "BERT"],
    },
    {
      name: "Deep Compression Blog (ICLR 2016)",
      description:
        "Technical blog post on ICLR 2016 best paper addressing mobility issues in deep learning through model compression. Covers pruning and quantization techniques for deployable models, contributing to ML reproducibility and education.",
      link: "https://github.com/sigadavid96/DeepCompression/blob/master/_posts/Deep%20Learning%20-%20Deep%20Compression%20%28dsiga%29.md",
      skills: ["Deep Learning", "Model Compression", "Research", "Technical Writing"],
    },
    {
      name: "COVID-19 Impact on Small Businesses",
      description:
        "Built NLP data science pipeline using Twitter Research API to analyze millions of SMB tweets. Quantified small business support through sentiment analysis across geographic locations and time periods, providing actionable insights to stakeholders.",
      link: "https://github.com/sigadavid96/TwitterSentimentResearch",
      skills: ["NLP", "Data Science", "Sentiment Analysis", "Twitter API", "Python"],
    },
    {
      name: "Movie Recommender Service (Academic Project)",
      description:
        "Deployed production movie recommendation system serving 1M users and 27K movies with 500ms inference time using collaborative filtering (SVD). Achieved 99.9% API availability with automated model retraining, containerized deployment, load balancing, and telemetry monitoring via Prometheus + Grafana. (Code unavailable - academic work)",
      link: "",
      skills: ["MLOps", "CI/CD", "Docker", "CircleCI", "Monitoring", "SVD"],
    },
    {
      name: "Google Trends COVID Analysis",
      description:
        "Quantified COVID-19 social reactions through comparative study of social media vs WHO data. Engineered data pipeline utilizing Google Trends API and COVID cases data to analyze public sentiment across time and countries for policy assistance.",
      link: "https://github.com/sigadavid96/Time-To-React-Google-Covid",
      skills: ["Data Science", "APIs", "Data Pipeline", "Statistics", "Python"],
    },
    {
      name: "ML Algorithms from Scratch (Academic Project)",
      description:
        "Implemented core ML algorithms using only NumPy: Decision Trees with cross-entropy, NLP sentiment analyzer with logistic regression, single-layer neural network for handwritten letter classification, and Q-learning for mountain car problem. (Code unavailable - academic work)",
      link: "",
      skills: ["Machine Learning", "NumPy", "Algorithms", "Reinforcement Learning"],
    },
  ],
  experience: [
    {
      company: "IBM",
      title: "Senior Data Scientist",
      dateRange: "Feb 2023 - Present",
      location: "New York, USA",
      bullets: [
        "ML Forecasting & Risk Monitoring: Designed and deployed scalable LGBM-based forecasting pipeline for mainframe resource utilization at Fortune 500 bank—reducing runtime from 1 hour to 10 minutes while supporting 60+ dynamic models across use cases",
        "Technical Leadership: Serving as technical lead for 20-member global team building 'AI Enablement Zone', a self-service ML platform for enterprise insurance client. Spearheaded architecture and delivery of governed Snowflake provisioning system used by 1,000+ data scientists and ML engineers to auto-discover and access datasets securely in under a minute",
        "GenAI for Compliance Automation: Built LLM-powered systems to automate regulatory checklist generation from unstructured architectural documents using RAG and LangChain, creating AI agents that surface actionable compliance insights",
        "Deep Learning for Complaint Classification: Led end-to-end development and fine-tuning of BERT and GPT2 models on IBM's CP4D platform to enhance financial complaint classification accuracy for top U.S. bank, improving regulatory response speed",
        "AI-Powered Code Generation: Led initiative deploying GPT-3.5 Turbo for automated creation of Gherkin and Selenium C# code, boosting operational productivity by 30% for prominent banking client with 97%+ accuracy in C# and 70% accuracy in Gherkin code generation",
        "Infrastructure & CI/CD: Implemented full-stack ML pipelines using AWS (Lambda, SQS), Terraform, ReactJS, and GitLab CI/CD. Established RBAC for data governance and built robust test frameworks (unit, integration, load testing with Pytest and Locust)",
        "Process Automation in Insurance: Achieved 80% time reduction for insurance underwriters through RAG-based extraction of insights from customer financial documents, automating retrieval of plots, tables, and text into structured database for Langchain AI Agent querying",
        "Enhanced Search Engine Performance: Transformed search algorithm performance using TF-IDF, cosine similarity, and caching techniques to retrieve millions of records from cloud database in under 100 milliseconds. Deployed through Watson ML with rigorous Postman testing",
      ],
    },
    {
      company: "IBM",
      title: "Cognitive Engineer Consultant Intern (DS/ML)",
      dateRange: "May 2022 - Aug 2022",
      location: "New York, USA",
      bullets: [
        "Spearheaded brainstorming and designing of custom AI solutions for Fortune 100 bank using NLP, ML/DL on IBM Cloud & Watson",
        "Streamlined model design for 6 sentiment and text classification models on transcripts of customer complaint calls",
        "Achieved breakthrough performance with ensemble modeling, improving F1 scores from 0.72 to ~0.9 using TF-IDF, Word2Vec, BERT, and LSTM techniques",
      ],
    },
    {
      company: "Wells Fargo",
      title: "Credit Risk Analytics Associate",
      dateRange: "Jun 2020 - May 2021",
      location: "Bangalore, India",
      bullets: [
        "Created and monitored ML and statistical risk models for $30+ million unsecured credit card portfolios",
        "Monitored model data stability and performance via advanced statistical metrics: PSI, VSI, KS, and ML evaluation metrics",
        "Refined and executed model building threads with stakeholders, fine-tuning logistic and tree-based architectures through segmentation, exclusions, and hyperparameter optimization",
        "Introduced and established quality checklist process that improved team's error rate from 15% to 0% quarter-over-quarter",
      ],
    },
    {
      company: "Mu Sigma Business Solutions",
      title: "Decision Scientist",
      dateRange: "Jul 2018 - Jun 2020",
      location: "Bangalore, India",
      bullets: [
        "Devised and presented end-to-end analytics and data science solutions for Fortune 100 companies using Python, R, SQL, SAS, and Excel",
        "Generated Real World Evidence (RWE) for Fortune 100 pharmaceuticals through HEOR methods (Matching in case-control studies, logistic regression, Cox PH models, KM outcomes) on 1+ million row longitudinal data",
        "Reduced 100+ work hours to minutes through survival analysis automation in Python and SAS for 150+ colleagues",
        "Spearheaded Treatment Patterns analysis on Cancer Forums using NLP and won CEO's Interstellar Award (most innovative project)",
        "Rewarded spot award for bringing tangible innovations and established team of 15+ through impeccable teamwork",
        "Analyzed (EDA) medical records, claims, and registry health data to generate insights for client's R&D publications",
      ],
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "Master of Information Systems Management — Specialized in AI & NLP",
      dateRange: "Aug 2021 - Dec 2022",
      location: "Pittsburgh, PA, USA",
      achievements: [
        "GPA: 3.77/4.0 — Graduated with Distinction & Dean's List",
        "Vice President of Heinz Analytics Club: Established Data Science and Machine Learning career path, supervised analytics learning event initiatives",
        "Graduate Teaching Assistant: Data Science, Data Mining, Decision Analytics, Disruptive Technologies, Object-Oriented Programming",
        "Capstone Project: Machine Learning for Threat Intelligence with Fortune 100 Telecom (Verizon) — Built XGBoost classifier achieving 87% accuracy",
        "AI/ML Track: Advanced NLP, Deep Learning, Machine Learning (10601), ML for Large Datasets, ML in Production, NLP for Social Good",
        "Data Science Track: Practical Data Science, Making Products Count, Statistics for IT Managers, Decision-Making Under Uncertainty",
        "Engineering: OOP, Database Management, Distributed Systems, Agile Methods, Digital Transformation",
      ],
    },
    {
      school: "KIIT - Kalinga Institute of Industrial Technology",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      dateRange: "Jul 2014 - Apr 2018",
      location: "Bhubaneswar, Odisha, India",
      achievements: [
        "GPA: 3.76/4.0",
        "Core Coursework: Artificial Intelligence, Big Data Analytics, Data Structures & Algorithms, Design & Analysis of Algorithms, Database Management Systems, Parallel and Distributed Computing",
        "Volunteered at AIESEC International: Led successful efforts to build AIESEC in Bhubaneswar, India. Fostered marketing initiatives for UN sustainable development goals, recognized as Top 30 Team Member",
        "Extra-Curricular Activities: Badminton, Basketball, Swimming, Singing, Beat-Boxing — Active participant in sports and cultural events",
      ],
    },
  ],
};
