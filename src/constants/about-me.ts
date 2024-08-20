//TODO: ADD EMOJIS
const high_school = {
  details: `{
    "high_school": [
      {
        "school": "Mount Carmel School, Chandigarh",
        "achievements": [
          {
            "grade": "10th",
            "result": "92.2%",
            "year": 2019,
            "comment": "Soared through with flying colors! 🚀"
          },
          {
            "grade": "12th",
            "result": "92.4%",
            "year": 2021,
            "comment": "Triumphed once again with a stellar performance! 🏆"
          }
        ],
        "leadership": {
          "position": "Prestigious key cabinet position in 10th grade 🔑"
        }
      }
    ]
  }`
};

const university = {
  details: `{
  "university": {
    "university_name": "Panjab University",
    "college_name": "Chandigarh College of Engineering and Technology",
    "degree": "BE in Computer Science and Engineering",
    "current_cgpa": 8.23,
    "total_credits": 184,
    "semesters": [
      {
        "semester": 1,
        "sgpa": 9.3,
        "cgpa": 9.3,
        "courses": ["C Language 💻"],
        "comment": "Nailed it from the start!",
        "trend": "⬆️"
      },
      {
        "semester": 2,
        "sgpa": 7.73,
        "cgpa": 8.54,
        "courses": ["OOP with C++ 🧱"],
        "comment": "Explored OOP concepts.",
        "trend": "⬇️"
      },
      {
        "semester": 3,
        "sgpa": 7.82,
        "cgpa": 8.29,
        "courses": ["Data Structures 🌳", "DBMS 🗄️"],
        "comment": "Dove into DS and DBMS.",
        "trend": "⬆️"
      },
      {
        "semester": 4,
        "sgpa": 8.54,
        "cgpa": 8.36,
        "courses": ["Algorithms 🧮", "OS 💽", "Web Development 🌐"],
        "comment": "Mastered core CS concepts.",
        "trend": "⬆️"
      },
      {
        "semester": 5,
        "sgpa": 8.00,
        "cgpa": 8.28,
        "courses": ["AI 🤖", "Data Communication 📡"],
        "comment": "Explored cutting-edge tech.",
        "trend": "⬇️"
      },
      {
        "semester": 6,
        "sgpa": 8.00,
        "cgpa": 8.23,
        "courses": ["Data Mining ⛏️", "Computer Networks 🖧"],
        "comment": "Delved into data and networking.",
        "trend": "⬇️",
        "additional_activities": [
          {
            "type": "Publication",
            "description": "Published a paper on improving AODV",
            "link": "http://doi.one/10.1729/Journal.40670",
            "link_text": "View Paper 📄"
          }
        ]
      }
    ]
  }
}`
};

const summary = {
  details: `{
  "profile": {
    "title": "Innovative Computer Science Engineer-in-Training 🚀",
    "tagline": "Bridging Theory and Practice in the Digital Realm",
    "education": {
      "degree": "BE in Computer Science and Engineering",
      "institution": "Chandigarh College of Engineering and Technology, Panjab University",
      "expected_graduation": "June 2025",
      "current_cgpa": 8.28
    },
    "key_attributes": [
      "Full-stack enthusiast with a passion for mobile development 📱💻",
      "Open-source contributor and Hacktoberfest participant 🌟",
      "Published researcher in network protocols 📊",
      "Adept problem-solver with a track record of academic excellence 🏆"
    ],
    "technical_proficiencies": [
      "Full-stack Development",
      "Mobile App Development",
      "Data Structures & Algorithms",
      "Database Management",
      "Object-Oriented Programming",
      "Emerging Technologies (AI/ML)"
    ],
    "soft_skills": [
      "Self-directed learning",
      "Adaptability to new technologies",
      "Effective communication",
      "Team collaboration"
    ],
    "career_objectives": [
      "Contribute to cutting-edge software solutions",
      "Drive innovation in the global tech industry",
      "Continuously expand expertise in emerging technologies",
      "Develop scalable and efficient applications that solve real-world problems"
    ],
    "aspirations": "Eager to drive innovation in the global software industry. 🚀"
  }
}`
};

const techInterests = {
  details: `{
  "interests": {
    "passions": ["Full-Stack Development 🌐", "Mobile App Development 📱"],
    "favorite_languages": ["C++ 💻", "Python 🐍"],
    "expertise": ["Full Stack Development 🕸️", "Mobile Development 📱"],
    "current_focus": "Exploring AI and Machine Learning 🤖",
    "excitement": "Eager to dive into emerging technologies! 🚀"
  }
}`
};

const workExperience = {
  details: `{
  "work_experience": {
    "summary": "Actively engaged in open-source contributions.",
    "events": [
      {
        "event": "Hacktoberfest 🍂",
        "description": "Contributed to two open-source projects.",
        "year": 2023
      }
    ]
  }
}`
};

const techStack = {
  details: `{
  "tech_stack": {
    "languages 📚": ["C++", "JavaScript", "Python", "Go", "TypeScript", "Solidity"],
    "front_end 💻": ["HTML", "CSS", "React.js", "Next.js", "Vue.js", "SvelteKit"],
    "back_end ⚙️": ["Node.js", "Express.js", "Appwrite", "Flask"],
    "databases 🗄️": ["MySQL", "MongoDB"],
    "mobile 📱": ["React Native", "Flutter"],
    "tools 🛠️": ["Git", "VS Code", "Postman", "Docker", "Kubernetes"],
    "blockchain 🔗": ["Hardhat"],
    "cloud ☁️": ["AWS"],
    "other 🌐": ["Machine Learning", "Linux", "Data Mining"]
  }
}`
};

const nonNerdy = {
  details: `{
  "non_nerdy_hobbies": [
    "Photography 📷",
    "Reading 📖",
    "Traveling ✈️"
  ]
}`
};

const nerdy = {
  details: `{
  "nerdy_hobbies": [
    "Video Gaming 🎮",
    "Sci-Fi/Fantasy Book Reading 📚",
    "Coding/Programming 💻",
    "Model Building 🛠️"
  ]
}`
};

export {
  high_school,
  university,
  summary,
  techInterests,
  workExperience,
  techStack,
  nonNerdy,
  nerdy
};