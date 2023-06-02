export type Experience = {
	title: string,
	description: string
	date: string,
	place: string,
	skills: string[]
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