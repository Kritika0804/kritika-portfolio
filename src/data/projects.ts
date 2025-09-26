import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PostgresIcon from '../assets/logos/Postgres-logo.svg?raw';
import AstroIcon from '../assets/logos/Astro-logo.svg?raw';
import NotionIcon from '../assets/logos/Notion-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';

export const projects = [
	{
		title: "QuickServ - Service Aggregator Platform",
		techStack: "React • Spring Boot • MongoDB • JWT • Firebase",
		description: "Developed a comprehensive service aggregator platform connecting users with local service providers like electricians and carpenters. Implemented secure authentication, role-based access control, and advanced search filters.",
		ctaText: "View Project →",
		ctaLink: "#",
		icon: SupabaseIcon
	},
	{
		title: "Bookmate - Book Reselling Platform",
		techStack: "HTML • CSS • React • Firebase",
		description: "Built a book reselling website where users can sell their old books and browse available books. Integrated Firebase for authentication and data storage with a dynamic cart system.",
		ctaText: "View Project →",
		ctaLink: "#",
		icon: AstroIcon
	},
	{
		title: "Data Pipeline Optimization",
		techStack: "Python • Java • Apache Kafka • Kubernetes",
		description: "Built and optimized robust data pipelines and real-time streaming solutions supporting scalable analytics and transactional workflows with comprehensive monitoring.",
		ctaText: "View Details →",
		ctaLink: "#",
		icon: PythonIcon
	},
	{
		title: "AWS Bulk Operations System",
		techStack: "AWS • DynamoDB • S3 • Lambda • State Machines",
		description: "Designed and implemented asynchronous bulk operations for Amazon Payment team using AWS services, improving seller experience with microservices architecture.",
		ctaText: "View Case Study →",
		ctaLink: "#",
		icon: PostgresIcon
	},
	{
		title: "Object Detection Research",
		techStack: "Python • Computer Vision • AR/VR • Algorithms",
		description: "Researched algorithms for object detection systems and AR/VR Technology for defense applications, presenting findings to senior engineers and scientists.",
		ctaText: "Read Research →",
		ctaLink: "#",
		icon: NotionIcon
	},
	{
		title: "Database Migration Project",
		techStack: "Cassandra • ClickHouse • ETL • Data Migration",
		description: "Led migration and integration of database systems from Cassandra to ClickHouse, enabling advanced OLAP-to-OLTP transformations and infrastructure automation.",
		ctaText: "View Details →",
		ctaLink: "#",
		icon: N8nIcon
	},
];