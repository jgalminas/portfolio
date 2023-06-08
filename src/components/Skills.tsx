export interface SkillsProps {
	skills: string[] | undefined
}

export default function Skills({ skills }: SkillsProps) {
	return (
		skills ?
		<ul className='flex flex-wrap gap-3'>
			{ skills.map(sk => {
				return <li className='bg-cyan-900 px-4 py-0.5 rounded-lg text-sm font-medium text-cyan-400' key={sk}> { sk } </li>
			}) }
		</ul>
		: null
	)
}