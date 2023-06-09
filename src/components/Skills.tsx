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
					className='bg-cyan-900 hover:bg-cyan-800 px-4 py-0.5 rounded-lg text-sm font-medium text-cyan-400 hover:text-cyan-300
					cursor-default hover:shadow-lg transition-colors duration-150'>
						{ sk }
					</li>
				)
			}) }
		</ul>
		: null
	)
}