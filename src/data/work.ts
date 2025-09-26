import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Software Engineer",
    company: "Finvu AA",
    region: "Pune, India",
    description:
      "Built and optimized robust data pipelines and real-time streaming solutions leveraging Python, Java, and Apache Kafka, supporting scalable analytics and transactional workflows. Deployed and managed services on Kubernetes across both on-premises and cloud environments, ensuring high availability and operational efficiency.",
    technologies: [
      "Python",
      "Java",
      "Apache Kafka",
      "Kubernetes",
      "Cassandra",
      "ClickHouse",
      "GCP",
      "ETL",
      "Data Pipelines",
      "Monitoring",
    ],
  },
  {
    title: "Software Development Intern (SDE)",
    company: "Amazon",
    region: "Bangalore, India",
    description:
      "Collaborated with Amazon Payment team to improve seller experience by designing and implementing asynchronous bulk operations using AWS services such as DynamoDB, S3, and Lambda functions orchestrated with state machines. Designed APIs and worked on Microservices architecture.",
    technologies: [
      "AWS",
      "DynamoDB",
      "S3",
      "Lambda",
      "Microservices",
      "JUnit",
      "Mockito",
      "State Machines",
      "API Design",
    ],
  },
  {
    title: "Research and Development Intern",
    company: "DRDO",
    region: "Hybrid",
    description:
      "Researched algorithms for object detection systems and AR/VR Technology for use in defense systems. Presented research findings to a team of senior engineers and scientists.",
    technologies: [
      "Object Detection",
      "AR/VR",
      "Research",
      "Algorithms",
      "Defense Systems",
    ],
  },
];

export type WorkItem = (typeof work)[number];

