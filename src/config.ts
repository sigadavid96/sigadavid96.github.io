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
  cmu: { name: "Carnegie Mellon University", hue: "#C41230" },
  kiit: { name: "KIIT", hue: "#1E8E3E" },
  verizon: { name: "Verizon", hue: "#EE0000" },
  aiesec: { name: "AIESEC", hue: "#037EF3" },
};

export const siteConfig = {
  name: "Davidson Siga",
  title: "Senior Data Scientist · Applied AI & LLM Systems",
  description:
    "Davidson Siga, Senior Data Scientist at Humana. Builds agentic LLM systems in production. Carnegie Mellon MISM.",
  social: {
    email: "sigadavid96@gmail.com",
    linkedin: "https://www.linkedin.com/in/davidsonsiga",
    github: "https://github.com/sigadavid96",
  },

  // The four facts a visitor should read first; each links to its detail.
  mainResults: [
    { text: "Agentic LLM pipelines at Humana delivering $20M+ in annual savings", href: "#work-humana" },
    { text: "A U.S. patent application filed for LLM-explained anomaly detection, with 2 more pending", href: "#patent" },
    { text: "Led a global team of 10 at IBM that shipped a year of features in 3 months", href: "#work-ibm" },
    { text: "Carnegie Mellon Master's with Distinction, and graduate TA five times", href: "#edu-cmu" },
  ],

  abstract: [
    "Senior Data Scientist at Humana, building agentic LLM systems that run in production. That work delivers $20M+ in annual savings and has 2 patents pending, with 1 more submitted.",
    "I started in data in 2018, right after a Bachelor's in Computer Science at KIIT. Two years at Mu Sigma on pharma analytics, then a year of credit risk modeling at Wells Fargo. In 2021 I went to Carnegie Mellon for a Master's in Information Systems Management, focused on ML and NLP, and graduated with Distinction. Then three years at IBM shipping RAG agents, LLM code generation and an ML platform used by 5,000+ data scientists. I joined Humana in January 2026.",
    "Outside work I re-implement papers and build models from scratch, BERT included.",
  ],
  business: "Healthcare, banking, insurance, credit risk and pharma research.",

  // Online, part-time, taken alongside full-time work. Lives in Education only.
  certificate: {
    org: "cmu" as OrgKey,
    school: "School of Computer Science",
    program: "Graduate Certificate, Generative AI & Large Language Models",
    dateRange: "Aug 2026 – Dec 2027",
    link: "https://www.cmu.edu/online/generative-ai-llms",
    note: "30% scholarship",
    status: "(Ongoing, Online & Part Time)",
    summary: "Program designed by Graham Neubig.",
    courses: [
      { code: "11-967", name: "Large Language Models: Methods and Applications", now: true },
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
      projects: [
        {
          name: "Document extraction with LLM agents",
          skills: ["LangGraph", "OCR", "Databricks", "PySpark"],
          points: [
            "Designed an on-prem pipeline for unstructured documents: OCR, then LangGraph agents, a self-healing step and a rubric validator",
            "Runs at 98%+ precision",
            "Took it from POC to production in under 3 months",
            "Scaled to 15M+ documents",
          ],
        },
        {
          name: "Unsupervised anomaly detection",
          skills: ["Representation learning", "Ensemble outlier detection", "SparkML", "LLMs"],
          points: [
            "Learned representations give each entity a baseline against its peers",
            "An ensemble of outlier detectors scores about 2B records on SparkML",
            "An LLM explains each flag in plain language, grounded in the model's attribution signals, so every decision stays auditable",
          ],
          patent: {
            title: "Anomaly Detection and Action Recommendation Using Time Series Entity Data",
            number: "19/750,840",
            filed: "Jul 22, 2026",
            role: "Second-named inventor",
          },
        },
        {
          name: "Evaluation and drift monitoring",
          skills: ["Golden datasets", "Model tuning", "Drift monitoring"],
          points: [
            "Built golden datasets and a tuning framework that never touches the holdout set",
            "Automated data and model drift tracking in production",
            "Cleared model-risk governance before launch",
          ],
        },
        {
          name: "Topic modeling for agent routing",
          skills: ["NLP", "Topic modeling", "LangGraph"],
          points: [
            "Trained a topic model on about 25M past requests",
            "Improves intent routing for a LangGraph agent",
          ],
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
      projects: [
        {
          name: "Self-service ML platform",
          skills: ["AWS Lambda", "SQS", "Terraform", "React", "GitLab CI/CD", "GitHub Copilot"],
          points: [
            "Led a global team of 10",
            "Gives 5,000+ data scientists governed access to Snowflake",
            "Moved the team onto GitHub Copilot and delivered a year's worth of planned features in 3 months",
            "Dev to prod with zero bugs, with RBAC and Pytest and Locust test suites",
          ],
        },
        {
          name: "Automated AI workflow: document RAG agents",
          skills: ["LangChain", "RAG", "Document parsing"],
          points: [
            "An automated workflow where RAG agents turn long unstructured documents into checklists",
            "Extracts plots, tables and text into queryable stores",
            "Finding information got 80% faster",
          ],
        },
        {
          name: "Automated AI workflow: LLM code generation",
          skills: ["GPT-3.5 Turbo", "Prompt engineering"],
          points: [
            "An automated workflow that generates C# at 97%+ accuracy and Gherkin at 70%",
            "Team productivity went up 30%",
          ],
        },
        {
          name: "Forecasting and search",
          skills: ["LightGBM", "TF-IDF", "Watson ML"],
          points: [
            "Replaced static alerting on 150+ mainframe applications with LightGBM forecasts, retrained weekly and run daily",
            "Search that returns results from millions of records in under 100 ms",
          ],
        },
      ],
      result: "Led a global team of 10 · a year of features in 3 months, zero bugs · 5,000+ data scientists on the platform",
    },
    {
      org: "ibm" as OrgKey,
      title: "Cognitive Engineer Intern, DS/ML",
      dateRange: "May – Aug 2022",
      location: "New York",
      business: "Customer service analytics for a Fortune 100 bank",
      projects: [
        {
          name: "Text classification ensembles",
          skills: ["BERT", "LSTM", "Word2Vec", "LightGBM"],
          points: [
            "Six sentiment and text classification models on conversational text",
            "Ensembles of TF-IDF, Word2Vec, LightGBM, BERT and LSTM models",
          ],
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
      projects: [
        {
          name: "Credit risk models",
          skills: ["Logistic regression", "Tree models", "PSI / VSI / KS"],
          points: [
            "Built and monitored risk models for $30M+ unsecured credit card portfolios",
            "Tracked model stability with PSI, VSI and KS",
          ],
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
      projects: [
        {
          name: "Survival analysis",
          skills: ["Cox PH", "Kaplan–Meier", "Python", "SAS"],
          points: [
            "Pipelines on 1M+ rows of longitudinal data",
            "Automation cut 100+ hours of work to minutes for 150+ colleagues",
          ],
        },
        {
          name: "NLP on forum text",
          skills: ["NLP", "Text mining"],
          points: [
            "Analyzed public online forums with NLP",
            "Grew a team of 15+",
          ],
        },
      ],
      result: "Interstellar Award · Spot Award · Hackathon winner",
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
        { name: "Intro to ML (10-601)", by: "Tom Mitchell & Matt Gormley", link: "http://www.cs.cmu.edu/~mgormley/courses/10601-s20/schedule.html" },
        { name: "ML for Large Datasets", link: "https://10605.github.io/" },
        { name: "Deep Learning (11-785)", by: "Bhiksha Raj", link: "https://deeplearning.cs.cmu.edu/F21/index.html" },
        { name: "Advanced NLP", link: "https://phontron.com/class/anlp2022/description.html" },
        { name: "ML in Production", link: "https://ckaestne.github.io/seai/F2022/" },
        { name: "Practical Data Science", link: "http://www.datasciencecourse.org/" },
      ],
      ta: [
        { name: "Data Science for Product Managers (95-851)", by: "David Steier" },
        { name: "Data Mining (95-791)", by: "Gabriela Gongora-Svartzman" },
        { name: "Decision Analytics for Business and Policy (94-867)", by: "Peter Zhang" },
        { name: "Managing Disruptive Technologies (95-723)", by: "Ananya Sen" },
        { name: "Object-Oriented Programming in Java (95-712)", by: "Neelam Dwivedi" },
      ],
      roles: ["Vice President, Heinz Analytics Club"],
      consult: { org: "verizon" as OrgKey, text: "Student consultant: built an XGBoost classifier that flags suspicious sources for a cybersecurity team, with 87% accuracy" },
    },
    {
      org: "kiit" as OrgKey,
      unit: "Kalinga Institute of Industrial Technology",
      degree: "B.Tech, Computer Science & Engineering",
      dateRange: "2014 – 2018",
      detail: "GPA 3.76",
      coursework: [],
      ta: [],
      roles: [],
      consult: { org: "aiesec" as OrgKey, text: "Team Leader of Marketing and Innovation for the Bhubaneswar chapter, running UN Sustainable Development Goals campaigns. Named in AIESEC India's Top 20 of 2,500+ members" },
    },
  ],

  honors: [
    { date: "Sep 2026", title: "Humana Inventor", org: "humana" as OrgKey, issuer: "Humana", text: "One of 15 people at Humana recognized for submitting patent applications in Q2 2026." },
    { date: "Dec 2019", title: "Interstellar Award", org: "musigma" as OrgKey, issuer: "Mu Sigma", text: "For one of the most innovative and impactful projects at Mu Sigma in 2019." },
    { date: "Dec 2019", title: "Spot Award", org: "musigma" as OrgKey, issuer: "Mu Sigma", text: "For contributions to the team and to client engagement." },
    { date: "Jul 2018", title: "Winner, Mu Sigma Hackathon", org: "musigma" as OrgKey, issuer: "Mu Sigma", text: "Data-driven decision making with Python and machine learning." },
    { date: "Jun 2017", title: "AIESEC India's Top 20", org: "aiesec" as OrgKey, issuer: "AIESEC India", text: "Out of 2,500+ members, as Team Leader of Marketing and Innovation in Bhubaneswar." },
  ],

  toolbox: [
    { id: "llm", group: "LLMs & agents", items: "LangGraph, LangChain, Deep Agents, RAG, FAISS, Chroma, fine-tuning, prompt engineering, LLM evaluation and drift monitoring" },
    { id: "model", group: "Modeling", items: "PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost, BERT, LLaMA, GPT" },
    { id: "data", group: "Data & cloud", items: "Databricks, PySpark, Snowflake, BigQuery, Vertex AI, SageMaker, Azure, AWS, IBM watsonx" },
    { id: "eng", group: "Engineering", items: "Python, SQL, Go, FastAPI, Docker, Terraform, GitLab / ADO / Jenkins CI/CD" },
    { id: "ai", group: "AI coding tools", items: "Claude Code, GitHub Copilot" },
  ],

  // Logos on the wheel behind Notation (Simple Icons, CC0; IBM uses the site's own mark).
  // `g` matches a toolbox row id so hovering that row lights up its logos.
  wheel: [
    { src: "langchain", name: "LangChain", g: "llm" },
    { src: "pytorch", name: "PyTorch", g: "model" },
    { src: "databricks", name: "Databricks", g: "data" },
    { src: "python", name: "Python", g: "eng" },
    { src: "claude", name: "Claude Code", g: "ai" },
    { src: "langgraph", name: "LangGraph", g: "llm" },
    { src: "tensorflow", name: "TensorFlow", g: "model" },
    { src: "apachespark", name: "Apache Spark", g: "data" },
    { src: "docker", name: "Docker", g: "eng" },
    { src: "huggingface", name: "Hugging Face", g: "llm" },
    { src: "scikitlearn", name: "scikit-learn", g: "model" },
    { src: "snowflake", name: "Snowflake", g: "data" },
    { src: "terraform", name: "Terraform", g: "eng" },
    { src: "githubcopilot", name: "GitHub Copilot", g: "ai" },
    { src: "anthropic", name: "Anthropic", g: "llm" },
    { src: "keras", name: "Keras", g: "model" },
    { src: "googlebigquery", name: "BigQuery", g: "data" },
    { src: "go", name: "Go", g: "eng" },
    { src: "meta", name: "Meta LLaMA", g: "llm" },
    { src: "numpy", name: "NumPy", g: "model" },
    { src: "googlecloud", name: "Google Cloud", g: "data" },
    { src: "fastapi", name: "FastAPI", g: "eng" },
    { src: "pandas", name: "pandas", g: "model" },
    { src: "ibm", name: "IBM watsonx", g: "data" },
    { src: "gitlab", name: "GitLab", g: "eng" },
    { src: "jupyter", name: "Jupyter", g: "model" },
    { src: "postgresql", name: "SQL", g: "data" },
    { src: "jenkins", name: "Jenkins", g: "eng" },
    { src: "react", name: "React", g: "eng" },
    { src: "streamlit", name: "Streamlit", g: "eng" },
    { src: "git", name: "Git", g: "eng" },
    { src: "github", name: "GitHub", g: "eng" },
  ],

  offBoard: "Badminton, swimming, basketball, singing, and beatboxing.",
};
