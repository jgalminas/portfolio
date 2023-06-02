export type Experience = {
	title: string,
	description: string
	date: string,
	place: string,
	skills?: string[]
}

export const EXPERIENCE: Experience[] = [
	{
		title: 'BSc Computer Science (Software Engineering)',
		description: 'Worked on a multi-year project alongside a small team, creating an interactive learning platform where lecturers can test students\' knowledge and provide feedback and additional support.',
		date: '2018 — 2019',
		place: 'University of Plymouth',
		skills: [ 'ASP.NET', 'C#', 'Blazor', 'Bootstrap', 'CSS' ]
	}
];

export const EDUCATION: Experience[] = [
	{
		title: 'BSc Computer Science (Software Engineering)',
		description: 'Grade',
		date: '2018 — 2019',
		place: 'University of Plymouth'
	},
	{
		title: 'Access to HE (Computing)',
		description: 'Distinction',
		date: '2018 — 2019',
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
		description: 'Project description of at least a paragraph or less. Also containing links to GitHub and the hosted website wherever possible.',
		imageUrl: '/nma_dashboard.png',
		imageAlt: 'Image of a project management application',
		repositoryUrl: 'repository',
		websiteUrl: 'website',
		skills: [ 'ASP.NET', 'C#', 'Blazor', 'Bootstrap', 'CSS' ]
	}
];