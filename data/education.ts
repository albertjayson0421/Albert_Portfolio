export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "university-of-cyberjaya",
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Cyberjaya",
    location: "Malaysia",
    startDate: "2012",
    endDate: "2015"
  }
];