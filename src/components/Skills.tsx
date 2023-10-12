export interface SkillsProps {
	skills: string[] | undefined
}

export default function Skills({ skills }: SkillsProps) {
	return (
		skills ?
		<ul className='flex flex-wrap gap-3'>
			{ skills.map(sk => {
				return (
					<li key={sk}
					className='bg-blue-400 bg-opacity-10 hover:bg-blue-500 px-4 py-1 rounded text-xs font-medium text-blue-300 hover:text-blue-100
					cursor-default hover:shadow-lg transition-colors duration-150'>
						{ sk }
					</li>
				)
			}) }
		</ul>
		: null
	)
}