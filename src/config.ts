export const siteConfig = {
  name: "Davidson Siga",
  title: "Applied AI Engineer • MLOps • GenAI",
  description: "Portfolio of Davidson Siga - Senior Data Scientist specializing in Applied AI, MLOps, and Generative AI",
  accentColor: "#2563EB",
  social: {
    email: "sigadavid96@gmail.com",
    linkedin: "https://linkedin.com/in/davidsonsiga",
    twitter: "https://x.com/",
    github: "https://github.com/sigadavid96",
  },
  aboutMe:
    "Applied AI Engineer with expertise in MLOps and Generative AI, currently serving as Senior Data Scientist at IBM. Master's in Information Systems Management from Carnegie Mellon University (GPA: 3.77). Specialized in building production-grade ML systems, LLM-powered applications, and self-service data platforms. Successfully deployed AI solutions serving 1,000+ users at Fortune 100 companies, achieving significant improvements in efficiency and automation. Passionate about leveraging cutting-edge AI technologies to solve complex business problems and mentoring teams on MLOps best practices.",
  skills: [
    "Python",
    "SQL",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "RAG",
    "LLMs",
    "GPT",
    "BERT",
    "FastAPI",
    "React",
    "Docker",
    "Terraform",
    "AWS",
    "GCP",
    "Snowflake",
    "MLOps",
    "CI/CD",
    "Scikit-learn",
    "XGBoost",
    "FAISS",
    "Vector Databases",
  ],
  projects: [
    {
      name: "LSTM Time Series Forecasting",
      description:
        "Forecasted Apple's stock values using PyTorch with LSTM architecture on 5+ years of Yahoo Finance data, achieving clear pattern recognition and good test MSE (~6.8). Available as a comprehensive GitHub tutorial.",
      link: "https://github.com/sigadavid96/LSTM_TimeSeriesForecasting",
      skills: ["PyTorch", "Deep Learning", "Time Series", "Python"],
    },
    {
      name: "StoryGenerator (GPT2/BART)",
      description:
        "Developed story generation models using GPT2 and BART with custom loss functions on WikiPlots dataset. Evaluated with BLEU and ROUGE metrics to assess narrative quality and coherence.",
      link: "https://github.com/sigadavid96/StoryGenerator",
      skills: ["NLP", "GenAI", "Transformers", "Research"],
    },
    {
      name: "DART — Prompted 16-shot GLUE",
      description:
        "Re-implemented and improved DifferentiAble pRompT (DART) for prompt-based sentence classification on 16-shot learning, achieving ~93% accuracy on GLUE datasets through regularized loss functions and hyperparameter tuning.",
      link: "https://github.com/sigadavid96/DART",
      skills: ["NLP", "Few-shot Learning", "Research", "PyTorch"],
    },
    {
      name: "Deep Compression Blog (ICLR 2016)",
      description:
        "Technical blog post explaining the ICLR 2016 best paper on Deep Compression, covering pruning and quantization techniques for deployable deep learning models. Contributed to ML reproducibility and education.",
      link: "https://github.com/sigadavid96/DeepCompression/blob/master/_posts/Deep%20Learning%20-%20Deep%20Compression%20(dsiga).md",
      skills: ["Deep Learning", "Model Efficiency", "Research", "Technical Writing"],
    },
    {
      name: "Movie Recommender Service (Production ML)",
      description:
        "Deployed production movie recommendation service with 500ms inference time for 1M users and 27K movies using collaborative filtering (SVD). Achieved 99.9% API availability with automated model retraining, CI/CD via CircleCI, and telemetry monitoring through Prometheus + Grafana.",
      link: "https://github.com/sigadavid96",
      skills: ["MLOps", "CI/CD", "Docker", "Monitoring", "Collaborative Filtering"],
    },
    {
      name: "BERT from Scratch",
      description:
        "Built BERT architecture from scratch for sentence classification, including pre-training and fine-tuning on SST and CFIMDB datasets, achieving ~0.9 F1-score. Deep dive into transformer architecture and attention mechanisms.",
      link: "https://github.com/sigadavid96",
      skills: ["Deep Learning", "NLP", "Transformers", "PyTorch"],
    },
  ],
  experience: [
    {
      company: "IBM",
      title: "Senior Data Scientist",
      dateRange: "Feb 2023 - Present",
      bullets: [
        "Technical lead for 20-member global team building AI Enablement Zone, a self-service ML platform serving 1,000+ data scientists with governed Snowflake provisioning reducing environment setup time by ~70%",
        "Designed and deployed scalable LGBM forecasting pipeline for mainframe resource utilization at Fortune 500 bank, reducing runtime from 1 hour to 10 minutes while supporting 60+ dynamic models",
        "Built LLM-powered systems for regulatory checklist generation using RAG and LangChain, automating compliance processes from unstructured architectural documents",
        "Led AI-powered code generation initiative with GPT-3.5 Turbo, achieving 97% accuracy in C# code generation and 70% in Gherkin, boosting operational productivity by 30%",
        "Implemented full-stack ML pipelines using AWS (Lambda, SQS), Terraform, ReactJS, and GitLab CI/CD with RBAC for data governance",
        "Fine-tuned BERT and GPT2 models on IBM CP4D platform for financial complaint classification, improving regulatory response speed",
        "Achieved 80% time reduction for insurance underwriters through RAG-based document analysis and Langchain AI agents",
      ],
    },
    {
      company: "IBM",
      title: "Cognitive Engineer Consultant Intern (DS/ML)",
      dateRange: "May 2022 - Aug 2022",
      bullets: [
        "Spearheaded design of custom AI solutions for Fortune 100 bank using NLP, ML/DL on IBM Cloud & Watson",
        "Streamlined design for 6 sentiment and text classification models on customer complaint call transcripts",
        "Achieved breakthrough performance with ensemble modeling, improving F1 scores from 0.72 to ~0.9 using TF-IDF, W2V, BERT, and LSTM",
      ],
    },
    {
      company: "Wells Fargo",
      title: "Credit Risk Analytics Associate",
      dateRange: "Jun 2020 - May 2021",
      bullets: [
        "Created and monitored ML and statistical risk models for $30+ million unsecured credit card portfolios",
        "Monitored model stability and performance using PSI, VSI, KS, and ML metrics for regulatory compliance",
        "Fine-tuned logistic and tree-based architectures through segmentation, exclusions, and hyperparameter optimization",
        "Introduced quality checklist process that improved team error rate from 15% to 0% quarter-over-quarter",
      ],
    },
    {
      company: "Mu Sigma Business Solutions",
      title: "Decision Scientist",
      dateRange: "Jul 2018 - Jun 2020",
      bullets: [
        "Devised end-to-end analytics and data science solutions for Fortune 100 companies using Python, R, SQL, SAS, and Excel",
        "Generated Real World Evidence (RWE) for Fortune 100 pharmaceuticals using HEOR methods on 1+ million rows of longitudinal data",
        "Reduced 100+ work hours to minutes through survival analysis automation in Python and SAS for 150+ colleagues",
        "Won CEO's Interstellar Award (most innovative project) for treatment patterns analysis on cancer forums using NLP",
      ],
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "Master of Information Systems Management (Distinction)",
      dateRange: "Aug 2021 - Dec 2022",
      achievements: [
        "GPA: 3.77/4.0",
        "Graduate Teaching Assistant: Data Science, Data Mining, Decision Analytics, Disruptive Technologies, Object-Oriented Programming",
        "Relevant Courses: Machine Learning (10601), ML for Large Datasets, Practical Data Science, Deep Learning, Advanced NLP, ML in Production",
        "Student Consultant at Verizon: Built XGBoost classifier for cybersecurity threat detection with 87% accuracy",
      ],
    },
    {
      school: "KIIT University",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      dateRange: "Jul 2014 - Apr 2018",
      achievements: [
        "GPA: 3.76/4.0",
        "Strong foundation in algorithms, data structures, and software engineering principles",
        "Active participant in coding competitions and hackathons",
      ],
    },
  ],
};
