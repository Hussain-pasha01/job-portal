export interface Job {
  id: number;
  title: string;
  companyId: number;
  company: string;
  location: string;
  salary: number;
  experience: string;
  jobType: string;
  skills: string[];
  description: string;
  requirements: string[];
  postedDate: string;
  logo: string;
}