import Martket01 from "./img/Market01.svg";
import Martket02 from "./img/Market02.svg";
import Martket03 from "./img/Market03.svg";
import Martket04 from "./img/Market04.svg";
import Martket05 from "./img/Market05.svg";

const people = [
  {
    id: 1,
    image: Martket01,
    name: "Talent Sourcing, Engagement & Collaboration Platform",
    useCase:
      "LinkedIn Recruiter is a subscription-based service where recruiters can find candidates among its user database. Recruiters can connect with candidates using the InMail features, and share profiles with team members or clients.",
    missing:
      "Despite its influence and scale with over 675 million users, LinkedIn Recruiter ",
    missingBold: " up to only 150 InMail messages",
    missing2:
      " per month. Recruiters often need to reach out to thousands of candidates within a limited time for the most constructive talent placements."
  },
  {
    id: 2,
    image: Martket02,
    name: "Customer Relationship Management (CRM)",
    useCase:
      "Outreach is a sales engagement platform, where users can engage with customers. Recruiters particularly use the sequence feature in which they can customize email threads, and schedule them to be sent to candidates and companies.",
    missing:
      "One of the biggest issue with a CRM system is that its ",
    missingBold: " data expires over time",
    missing2:
      ".Meaning, candidate information previously scraped from resumes and social profiles could become obsolete with changes in a candidate's title, location, contact information, and more."
  },
  {
    id: 3,
    image: Martket03,
    name: "Application Tracking System (ATS)",
    useCase:
      "Greenhouse is an intelligent talent acquisition software. It takes the CRM databases and creates an algorithm in which it parses the candidate information into categories then scans it to determine the qualification according to the user's guided limits.",
    missing:
      "Many leading ATS platforms ",
    missingBold: " fall short in targeting",
    missing2:
      ". For instance, a recruiter could be looking for software engineers, yet the results may include candidates who are no longer software engineers, or not qualify or certain technical skill(s)."
  },
  {
    id: 4,
    image: Martket04,
    name: "Business Analytics Database",
    useCase:
      "Crunchbase is a platform for acquiring business insights about companies. Crunchbase information includes company funding stage, investments, scale, industry, news and founding members and individuals in leadership positions.",
    missing:
      "One difficulty that recruiters feel when using Crunchbase is that they have to ",
    missingBold: " re-direct from the current operation ",
    missing2:
      "to the Crunchbase website to find information about companies of their candidates, clients, and/or potential business partners are from."
  },
  {
    id: 5,
    image: Martket05,
    name: "Jobs and Career Community",
    useCase:
      "Glassdoor is a community where users anonymously review, submit or view salaries of their current or previous companies. Whereas Crunchbase provides business information, Glassdoor provides how well  companies provides experiences for their employees.",
    missing:
      "Similar to when using Crunchbase, recruiters have to ",
    missingBold: " move out their current operation",
    missing2:
      " to look up company information."
  }
];

export default people;
