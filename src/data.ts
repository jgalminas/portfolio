export type Experience = {
	title: string,
	description: string
	date: string,
	place: string,
	skills?: string[]
}

export const EXPERIENCE: Experience[] = [
	{
		title: 'Full-stack Software Developer',
		description: "Worked alongside a team to produce a range of different software — complex single-page web applications, statically rendered websites " +
		"and internal developer tooling. \n" + 
		"- Proficiently operated across the entire software stack, adapted and contributed to unfamiliar technologies and codebases quickly. \n" +
		"- Successfully developed a diverse range of applications with varying levels of complexity. \n" +
		"- Consistently delivered new features promptly to accommodate challenging deadlines.",
		date: '2023 Jun — 2023 Oct',
		place: 'Freelance',
		skills: [ 'TypeScript', 'Next.js', 'React', 'Node.js', 'GPT', 'MySQL', 'tRPC', 'Tailwind', 'Docker']
	},
	{
		title: 'Software Developer',
		description: "Worked on a multi-year project alongside a small team, creating an interactive learning platform where lecturers can test students' " +
		"knowledge and provide feedback and additional support.\n" +
		"- Worked with the Agile framework and planned sprints with well-defined minimal viable product goals.\n" +
		"- Collectively re-designed and re-factored more than three sprints worth of work in just a single sprint.\n" +
		"- Developed and deployed a full-stack web application using relatively new and unfamiliar technologies.",
		date: '2022 Aug — 2022 Sep',
		place: 'University of Plymouth',
		skills: [ 'ASP.NET', 'C#', 'Blazor', 'Bootstrap', 'CSS' ]
	}
];

export const EDUCATION: Experience[] = [
	{
		title: 'BSc Computer Science & Software Development',
		description: 'Grade: 80%',
		date: '2021 — Present',
		place: 'University of Plymouth'
	},
	{
		title: 'Access to HE (Computing)',
		description: 'Grade: Distinction',
		date: '2020 — 2021',
		place: 'City College Plymouth'
	}
];

export type Project = {
	title: string,
	description: string,
	imageUrl: string,
	imageAlt: string,
	repositoryUrl?: string,
	websiteUrl?: string,
	skills?: string[]
}

export const PROJECTS: Project[] = [
	{
		title: 'Project Management Application',
		description: "A web application providing the ability to plan, create and manage tasks using the Kanban scheduling framework. " +
		"Created during the first year of university.",
		imageUrl: '/planner_dashboard.png',
		imageAlt: 'Image of a project management application',
		repositoryUrl: 'https://github.com/jgalminas/planner',
		websiteUrl: 'https://planner.galminas.net',
		skills: [ 'React', 'JavaScript', 'Firebase', 'Redux', 'CSS' ]
	},
	{
		title: 'Marine Aquarium Drawing Software',
		description: "I led the development in creating an intuitive drawing application which allows users to sketch their perception of the National " +
		"Marine Park. Alongside the drawing application, the project includes an admin portal and a back-end to store and manage the collected drawings. " +
		"This project was created during the second year as part of a group.",
		imageUrl: '/nma_dashboard.png',
		imageAlt: 'Image of a dashboard',
		repositoryUrl: 'https://github.com/jgalminas/nma',
		skills: [ 'C#', 'ASP.NET', 'SQL Server', 'Android SDK', 'Java', 'React', 'TypeScript', 'Tailwind', 'Electron', 'Docker']
	},
	{
		title: 'Blog',
		description: "A simple statically rendered blog website I created to learn Next.js.",
		imageUrl: '/blog_home.png',
		imageAlt: 'Image of a blog home page',
		websiteUrl: 'https://blog.galminas.net',
		repositoryUrl: 'https://github.com/jgalminas/blog',
		skills: [ 'React', 'Next.js', 'JavaScript', 'CSS']
	},
	{
		title: 'Static Painting & Decorating Business Website',
		description: 'A simple, but responsive painting an decorating business website that was created during my studies at City College.',
		imageUrl: '/gsd_home.png',
		imageAlt: 'Image of a landing page',
		repositoryUrl: 'https://github.com/jgalminas/college-web-assignment',
		websiteUrl: 'https://gsd.galminas.net',
		skills: [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript' ]
	}
];

export const CV_NAME = 'Justas Galminas CV.pdf';

export const LINKS = {
	linked_in: 'https://linkedin.com/in/jgalminas/',
	github_profile: 'https://github.com/jgalminas',
	github_projects: 'https://github.com/jgalminas?tab=repositories',
	email: 'j@galminas.net',
	cv: '/Justas Galminas CV.pdf'
}