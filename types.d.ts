type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  description: string;
  skills: Array<string>;
};
type Project = {
  name: string;
  description: string;
  link: string;
  tech: Array<string>;
};

type ContactForm = {
  name: string;
  email: string;
  message: string;
};
