// Content for the portfolio. Employer work is described by AI technique and
// business area only — no internal use cases, data types, or client names.

export type OrgKey =
  | "humana"
  | "ibm"
  | "wellsfargo"
  | "musigma"
  | "cmu"
  | "kiit"
  | "verizon"
  | "aiesec";

// Brand hues, used only as the colored-chalk smear behind each name.
// `logo`: a chalk-white rendition of the company's own mark, set on its smear.
// `withName`: the mark is a symbol, so the name is set beside it.
type Logo = { src: string; w: number; h: number; em: number; withName?: boolean };
export const orgs: Record<OrgKey, { name: string; hue: string; hue2?: string; logo?: Logo }> = {
  humana: { name: "Humana", hue: "#5BA908", logo: { src: "/logos/humana.svg", w: 312, h: 66, em: 0.66 } },
  ibm: { name: "IBM", hue: "#0F62FE", logo: { src: "/logos/ibm.svg", w: 1075, h: 401, em: 0.8 } },
  wellsfargo: { name: "Wells Fargo", hue: "#D71E28", hue2: "#FFCD41", logo: { src: "/logos/wellsfargo.svg", w: 606, h: 342, em: 1.1 } },
  musigma: { name: "Mu Sigma", hue: "#CD5827", logo: { src: "/logos/musigma-mark.png", w: 376, h: 236, em: 0.82, withName: true } },
  cmu: { name: "Carnegie Mellon", hue: "#C41230" },
  kiit: { name: "KIIT", hue: "#1E8E3E" },
  verizon: { name: "Verizon", hue: "#EE0000" },
  aiesec: { name: "AIESEC", hue: "#037EF3" },
};

export const siteConfig = {
  name: "Davidson Siga",
  title: "Senior Data Scientist · Applied AI & LLM Systems",
  description:
    "Davidson Siga, Senior Data Scientist at Humana. Builds agentic LLM systems in production. Carnegie Mellon MISM, now in the CMU School of Computer Science Graduate Certificate in Generative AI & LLMs.",
  social: {
    email: "sigadavid96@gmail.com",
    linkedin: "https://www.linkedin.com/in/davidsonsiga",
    github: "https://github.com/sigadavid96",
  },

  abstract: [
    "At Humana, I'm a Senior Data Scientist building LLM systems for production: agentic document pipelines, retrieval, evaluation and drift monitoring. I've worked in machine learning for over seven years, from survival analysis to LangGraph agents.",
    "I like to understand models from the inside, so I re-implement papers and build models from scratch. Since August 2026 I've been studying LLMs, LLM systems and multimodal learning at Carnegie Mellon's School of Computer Science.",
  ],
  business: "Healthcare, banking, insurance, credit risk and pharma research.",

  now: {
    org: "cmu" as OrgKey,
    school: "School of Computer Science",
    program: "Graduate Certificate, Generative AI & Large Language Models",
    dateRange: "Aug 2026 – Dec 2027",
    link: "https://www.cmu.edu/online/generative-ai-llms",
    note: "30% scholarship",
    courses: [
      { code: "11-967", name: "Large Language Models: Methods and Applications" },
      { code: "11-968", name: "Large Language Model Systems" },
      { code: "11-977", name: "Multimodal Machine Learning" },
    ],
  },

  experience: [
    {
      org: "humana" as OrgKey,
      title: "Senior Data Scientist",
      dateRange: "Jan 2026 – now",
      location: "New York",
      business: "Healthcare quality, cost and payment integrity",
      lemmas: [
        {
          name: "Document extraction with LLM agents",
          text: "Designed an on-prem pipeline for unstructured documents: OCR, then LangGraph agents, a self-healing step and a rubric validator. It runs at 98%+ precision. We took it from POC to production in under three months and scaled it to 15M+ documents on Databricks and PySpark.",
        },
        {
          name: "Evaluation and drift monitoring",
          text: "Built golden datasets, a tuning framework that never touches the holdout set, and automated data and model drift tracking in production. Cleared model-risk governance before launch.",
        },
        {
          name: "Unsupervised anomaly detection",
          text: "Clustered about 2B records by behavior with SparkML to flag anomalies.",
        },
        {
          name: "Topic modeling for agent routing",
          text: "Trained an NLP topic model on about 25M past requests to improve intent routing for a LangGraph agent.",
        },
      ],
      result: "$20M+ annual savings in production · 2 patents pending · 1 submitted",
    },
    {
      org: "ibm" as OrgKey,
      title: "Senior Data Scientist",
      dateRange: "Feb 2023 – Jan 2026",
      location: "New York",
      business: "Enterprise AI for banking and insurance clients",
      lemmas: [
        {
          name: "RAG agents",
          text: "Built LangChain RAG agents that turn long unstructured documents into checklists and extract plots, tables and text into queryable stores. Finding information got 80% faster.",
        },
        {
          name: "LLM code generation",
          text: "Used GPT-3.5 Turbo to generate C# (97%+ accuracy) and Gherkin (70%). Team productivity went up 30%.",
        },
        {
          name: "Self-service ML platform",
          text: "Led an enterprise platform that gives 1,000+ data scientists governed access to Snowflake. Built with AWS Lambda and SQS, Terraform, React, GitLab CI/CD and RBAC, tested with Pytest and Locust.",
        },
        {
          name: "Forecasting and search",
          text: "Replaced static alerting on 150+ mainframe applications with LightGBM forecasts, retrained weekly and run daily. Also built a search that returns results from millions of records in under 100 ms.",
        },
      ],
      result: "1,000+ data scientists on the platform · +30% team productivity from LLM codegen",
    },
    {
      org: "ibm" as OrgKey,
      title: "Cognitive Engineer Intern, DS/ML",
      dateRange: "May – Aug 2022",
      location: "New York",
      business: "Customer service analytics for a Fortune 100 bank",
      lemmas: [
        {
          name: "Text classification ensembles",
          text: "Built six sentiment and text classification models on conversational text using TF-IDF, Word2Vec, LightGBM, BERT and LSTMs.",
        },
      ],
      result: "F1 0.72 → ≈0.90",
    },
    {
      org: "wellsfargo" as OrgKey,
      title: "Credit Risk Analytics Associate",
      dateRange: "Jun 2020 – May 2021",
      location: "Bangalore",
      business: "Consumer credit risk",
      lemmas: [
        {
          name: "Credit risk models",
          text: "Built and monitored logistic and tree-based risk models for $30M+ unsecured credit card portfolios, tracking stability with PSI, VSI and KS.",
        },
      ],
      result: "Team error rate 15% → 0% after I introduced a QA checklist",
    },
    {
      org: "musigma" as OrgKey,
      title: "Decision Scientist",
      dateRange: "Jul 2018 – May 2020",
      location: "Bangalore",
      business: "Pharma real-world evidence for Fortune 100 clients",
      lemmas: [
        {
          name: "Survival analysis",
          text: "Built Cox PH and Kaplan–Meier pipelines on 1M+ rows of longitudinal data. Automating them cut 100+ hours of work to minutes for 150+ colleagues.",
        },
        {
          name: "NLP on forum text",
          text: "Analyzed public online forums with NLP. Also grew a team of 15+.",
        },
      ],
      result: "CEO's Interstellar Award · Spot Award",
    },
  ],

  // Bibliography-style: recipe → result.
  research: [
    {
      key: "Sig22a",
      title: "BERT from scratch",
      recipe: "Implemented, pre-trained and fine-tuned BERT for sentence classification on SST and CFIMDB",
      result: "≈0.90 F1",
      venue: "CMU Advanced NLP",
      link: "",
    },
    {
      key: "Sig22b",
      title: "DART re-implementation",
      recipe: "Prompt-based 16-shot text classification, improved with loss regularization and the AdamP optimizer",
      result: "≈93% on GLUE",
      venue: "Research re-implementation",
      link: "https://github.com/sigadavid96/DART",
    },
    {
      key: "Sig22c",
      title: "Movie recommender service",
      recipe: "SVD collaborative filtering for 1M users and 27k movies, containerized with CI/CD, automatic retraining and Prometheus/Grafana monitoring",
      result: "500 ms · 99.9% uptime",
      venue: "CMU ML in Production",
      link: "",
    },
    {
      key: "Sig21",
      title: "ML algorithms in NumPy",
      recipe: "Decision trees, logistic regression, a neural network and Q-learning for MountainCar",
      result: "No ML libraries used",
      venue: "CMU 10-601 Machine Learning",
      link: "",
    },
    {
      key: "Sig22d",
      title: "Deep Compression, explained",
      recipe: "Walks through pruning, quantization and Huffman coding from the ICLR 2016 best paper",
      result: "ICLR blog post",
      venue: "Technical writing",
      link: "https://github.com/sigadavid96/DeepCompression/blob/master/_posts/Deep%20Learning%20-%20Deep%20Compression%20%28dsiga%29.md",
    },
    {
      key: "Sig22e",
      title: "LSTM forecasting tutorial",
      recipe: "Forecasted stock prices from 5+ years of market data with a PyTorch LSTM",
      result: "Test MSE ≈6.8",
      venue: "Tutorial notebook",
      link: "https://github.com/sigadavid96/LSTM_TimeSeriesForecasting/blob/main/dsiga_LSTM_TimeSeriesForecasting_Tutorial.ipynb",
    },
    {
      key: "Sig22f",
      title: "COVID and small businesses",
      recipe: "Analyzed sentiment in millions of small-business tweets from the Twitter Research API",
      result: "Sentiment by place and time",
      venue: "Data science",
      link: "https://github.com/sigadavid96/TwitterSentimentResearch",
    },
    {
      key: "Sig22g",
      title: "Public reaction to COVID",
      recipe: "Compared Google Trends searches with WHO case data across countries",
      result: "How fast people reacted",
      venue: "Data science",
      link: "https://github.com/sigadavid96/Time-To-React-Google-Covid",
    },
  ],

  education: [
    {
      org: "cmu" as OrgKey,
      unit: "Heinz College",
      degree: "Master of Information Systems Management",
      dateRange: "2021 – 2022",
      detail: "GPA 3.77 · Graduated with Distinction",
      coursework: [
        { name: "Machine Learning (10-601)", link: "http://www.cs.cmu.edu/~mgormley/courses/10601-s20/schedule.html" },
        { name: "ML for Large Datasets", link: "https://10605.github.io/" },
        { name: "Deep Learning", link: "https://deeplearning.cs.cmu.edu/F21/index.html" },
        { name: "Advanced NLP", link: "https://phontron.com/class/anlp2022/description.html" },
        { name: "ML in Production", link: "https://ckaestne.github.io/seai/F2022/" },
        { name: "Practical Data Science", link: "http://www.datasciencecourse.org/" },
      ],
      roles: [
        "Graduate TA: Data Science, Data Mining, Decision Analytics, Disruptive Tech, OOP",
        "Vice President, Heinz Analytics Club",
      ],
      consult: { org: "verizon" as OrgKey, text: "Student consultant: built an XGBoost classifier that flags suspicious sources for a cybersecurity team, with 87% accuracy" },
    },
    {
      org: "kiit" as OrgKey,
      unit: "Kalinga Institute of Industrial Technology",
      degree: "B.Tech, Computer Science & Engineering",
      dateRange: "2014 – 2018",
      detail: "GPA 3.76",
      coursework: [],
      roles: [],
      consult: { org: "aiesec" as OrgKey, text: "Volunteered on UN Sustainable Development Goals campaigns and was named one of AIESEC India's Top 30 members" },
    },
  ],

  toolbox: [
    { group: "LLMs & agents", items: "LangGraph, LangChain, Deep Agents, RAG, FAISS, Chroma, fine-tuning, prompt engineering, LLM evaluation and drift monitoring" },
    { group: "Modeling", items: "PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost, BERT, LLaMA, GPT" },
    { group: "Data & cloud", items: "Databricks, PySpark, Snowflake, BigQuery, Vertex AI, SageMaker, Azure, AWS, IBM watsonx" },
    { group: "Engineering", items: "Python, SQL, Go, FastAPI, Docker, Terraform, GitLab / ADO / Jenkins CI/CD" },
    { group: "AI coding tools", items: "Claude Code, GitHub Copilot" },
  ],

  offBoard: "Badminton, swimming, basketball, singing, and beatboxing.",
};
