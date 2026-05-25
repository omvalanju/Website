export interface Experience {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  details: string[];
  tech: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const OM_VALANJU_ASCII = `
 ██████╗ ███╗   ███╗    ██╗   ██╗ █████╗ ██╗      █████╗ ███╗   ██╗     ██╗██╗   ██╗
██╔═══██╗████╗ ████║    ██║   ██║██╔══██╗██║     ██╔══██╗████╗  ██║     ██║██║   ██║
██║   ██║██╔████╔██║    ██║   ██║███████║██║     ███████║██╔██╗ ██║     ██║██║   ██║
██║   ██║██║╚██╔╝██║    ╚██╗ ██╔╝██╔══██║██║     ██╔══██║██║╚██╗██║██   ██║██║   ██║
╚██████╔╝██║ ╚═╝ ██║     ╚████╔╝ ██║  ██║███████╗██║  ██║██║ ╚████║╚█████╔╝╚██████╔╝
 ╚═════╝ ╚═╝     ╚═╝      ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝
`;

export const portfolioData = {
  personalInfo: {
    name: "Om Valanju",
    title: "Software Engineer & Test Automation Specialist",
    location: "Heidelberg, Germany",
    college: "SRH Hochschule Heidelberg",
    github: "github.com/omvalanju",
    linkedin: "linkedin.com/in/omvalanju",
    email: "om.valanju@gmail.com",
    about: "Software Engineer with 3+ years of experience in developing internal tools, building robust automation frameworks, and optimizing CI/CD pipelines. Passionate about creating reliable, scalable software systems and leveraging software quality engineering to excel in Software Development and DevOps."
  },
  
  experience: [
    {
      id: "sap",
      company: "SAP",
      role: "Working Student",
      dateRange: "2025 - Present",
      tech: ["Java", "TypeScript", "Automation", "Cloud Services"],
      details: [
        "Developing and optimizing automation frameworks and scripts for enterprise cloud systems.",
        "Collaborating on internal tools to enhance development pipeline efficiencies.",
        "Contributing to QA engineering processes within an agile development team."
      ]
    },
    {
      id: "oneandone",
      company: "1&1 Mail & Media",
      role: "Test Automation Engineer (Working Student)",
      dateRange: "Feb 2025 - Present",
      tech: ["Spring Boot", "GitLab CI/CD", "TypeScript", "Allure", "POM", "REST APIs"],
      details: [
        "Designed and deployed internal Spring Boot microservices (such as a User Management Service to isolate test logins and a Test Data Generator for synthetic data) to reduce flaky tests and enable reliable scale testing.",
        "Enhanced GitLab CI/CD pipelines and integrated Allure for automated quality reporting.",
        "Built a reusable, page-object-model (POM) testing library in TypeScript adopted across multiple teams.",
        "Boosted test coverage by 25% by engineering end-to-end (E2E) and API automation for registration flows.",
        "Supported the defect lifecycle in Jira, achieving a 99% resolution rate through developers collaboration."
      ]
    },
    {
      id: "capgemini",
      company: "Capgemini India",
      role: "QA Automation Engineer",
      dateRange: "May 2021 - Sep 2024",
      tech: ["Python", "Playwright", "Git", "Power Automate", "Agile", "SQL", "Jenkins"],
      details: [
        "Automated 450+ test cases for transaction-driven Point of Sale (POS) systems, safeguarding critical workflows across 25+ major releases.",
        "Elevated regression suite efficiency, raising execution pass rates from 70% to 90% by optimizing legacy scripts and improving test data management.",
        "Deployed Robotic Process Automation (RPA) solutions using Power Automate, eliminating 10+ hours of manual effort weekly.",
        "Introduced Git-based version control for test scripts and integrated QA workflows directly into agile ceremonies.",
        "Authored high-coverage test cases with requirements traceability and collaborated on root cause analyses."
      ]
    }
  ] as Experience[],

  education: [
    {
      degree: "Master of Science in Applied Computer Science",
      institution: "SRH Hochschule Heidelberg",
      dateRange: "Oct 2024 - Sep 2026"
    },
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Manipal Institute of Technology",
      dateRange: "Sep 2016 - May 2019"
    }
  ],

  skills: [
    {
      category: "Programming & Scripting",
      items: ["Python", "Java", "TypeScript", "JavaScript", "Bash", "PowerShell", "CMD"]
    },
    {
      category: "Software Development",
      items: ["REST APIs", "Microservices Architecture", "Spring Boot", "Object-Oriented Programming (OOP)"]
    },
    {
      category: "Test Automation",
      items: ["Playwright", "Selenium", "Robot Framework", "REST Assured", "PyTest"]
    },
    {
      category: "CI/CD & DevOps",
      items: ["GitLab CI/CD", "Jenkins", "Docker", "Maven", "Gradle"]
    },
    {
      category: "Cloud & Databases",
      items: ["AWS", "Azure", "MySQL", "PostgreSQL"]
    },
    {
      category: "Tools & Frameworks",
      items: ["Postman", "TestRail", "Jira", "Allure", "Power Automate", "Git", "GitHub", "IntelliJ IDEA", "VS Code"]
    },
    {
      category: "Languages",
      items: ["English (C1 - Fluent)", "German (A1 - Beginner)"]
    }
  ] as SkillCategory[]
};

export function generateTerminalResume(): string {
  // ANSI Escape Codes
  const reset = "\x1b[0m";
  const bold = "\x1b[1m";
  const dim = "\x1b[2m";

  const blue = "\x1b[34m";
  const magenta = "\x1b[35m";
  const white = "\x1b[37m";

  const brightGreen = "\x1b[92m";
  const brightYellow = "\x1b[93m";
  const brightCyan = "\x1b[96m";
  const gray = "\x1b[90m";

  let out = "";

  // 1. ASCII Art Title (Cyan)
  out += brightCyan + OM_VALANJU_ASCII + reset + "\n";

  // 2. Personal Info Header
  const info = portfolioData.personalInfo;
  out += `${bold}${info.name}${reset} | ${info.title}\n`;
  out += `${dim}Location:${reset} ${info.location}  |  ${dim}Email:${reset} ${brightYellow}${info.email}${reset}\n`;
  out += `${dim}GitHub:${reset} ${blue}https://${info.github}${reset}  |  ${dim}LinkedIn:${reset} ${blue}https://${info.linkedin}${reset}\n`;
  out += "\n" + gray + "=".repeat(80) + reset + "\n\n";

  // 3. About Section
  out += `${bold}${brightCyan}ABOUT${reset}\n`;
  out += `${gray}${"-".repeat(80)}${reset}\n`;
  const aboutWords = info.about.split(" ");
  let aboutLine = "  ";
  for (const word of aboutWords) {
    if ((aboutLine + word).length > 80) {
      out += aboutLine + "\n";
      aboutLine = "  " + word + " ";
    } else {
      aboutLine += word + " ";
    }
  }
  out += aboutLine + "\n\n";

  // 4. Experience Section
  out += `${bold}${brightCyan}EXPERIENCE${reset}\n`;
  out += `${gray}${"-".repeat(80)}${reset}\n`;

  for (const exp of portfolioData.experience) {
    out += `  ${bold}${white}${exp.role}${reset} @ ${bold}${brightGreen}${exp.company}${reset} ${gray}(${exp.dateRange})${reset}\n`;
    out += `  ${dim}Tech:${reset} ${magenta}${exp.tech.join(", ")}${reset}\n`;
    for (const detail of exp.details) {
      const detailPrefix = "  • ";
      const words = detail.split(" ");
      let detailLine = detailPrefix;
      for (const word of words) {
        if ((detailLine + word).length > 78) {
          out += detailLine + "\n";
          detailLine = "    " + word + " ";
        } else {
          detailLine += word + " ";
        }
      }
      out += detailLine + "\n";
    }
    out += "\n";
  }

  // 5. Skills Section
  out += `${bold}${brightCyan}SKILLS${reset}\n`;
  out += `${gray}${"-".repeat(80)}${reset}\n`;
  for (const skillCat of portfolioData.skills) {
    out += `  ${bold}${white}${skillCat.category}:${reset} ${skillCat.items.join(", ")}\n`;
  }
  out += "\n";

  // 6. Education Section
  out += `${bold}${brightCyan}EDUCATION${reset}\n`;
  out += `${gray}${"-".repeat(80)}${reset}\n`;
  for (const edu of portfolioData.education) {
    out += `  ${bold}${white}${edu.degree}${reset}\n`;
    out += `  ${edu.institution} ${gray}(${edu.dateRange})${reset}\n\n`;
  }

  // Footer
  out += gray + "=".repeat(80) + reset + "\n";
  out += `  ${dim}curl resume.omvalanju.in | Web: https://omvalanju.in${reset}\n`;
  out += gray + "=".repeat(80) + reset + "\n";

  return out;
}

