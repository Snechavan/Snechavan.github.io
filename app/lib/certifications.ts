export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  badgeUrl?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-101',
    title: 'AWS Educate Introduction to Cloud 101',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/5fd11b80-fedb-4fc1-88b0-bbdcb5997759/linked_in_profile',
  },
  {
    id: 'lfc108-cybersecurity',
    title: 'LFC108: Cybersecurity Essentials',
    issuer: 'Linux Foundation',
    link: 'https://www.credly.com/badges/4993a581-614c-424a-8af1-2b6c7be1f2fa/linked_in_profile',
  },
  {
    id: 'cyberfrat-risk',
    title: 'Certificate of Demistifying Cyber Risk Session',
    issuer: 'CyberFrat',
    link: 'https://app.netcredential.com/verify/qjHyvhvske',
  },
  {
    id: 'chatgpt-everyone',
    title: 'Course Completion Certificate - ChatGPT for Everyone',
    issuer: 'Online Course',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
  },
  {
    id: 'aws-ml-foundations',
    title: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    id: 'python-myths',
    title: 'Is It The End of Python? Debunking Myths and Exploring the Future of Python Programming Bootcamp',
    issuer: 'Online Bootcamp',
  },
  {
    id: 'powerbi-viz',
    title: 'Data Visualization with Power BI',
    issuer: 'Online Course',
  },
  {
    id: 'python-guvi',
    title: 'Course Completion Certificate – Python',
    issuer: 'GUVI',
  },
]; 