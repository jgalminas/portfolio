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
					className='bg-[#0A3444] hover:bg-cyan-800 px-4 py-1 rounded-sm text-sm font-medium text-cyan-400 hover:text-cyan-300
					cursor-default hover:shadow-lg transition-colors duration-150'>
						{ sk }
					</li>
				)
			}) }
		</ul>
		: null
	)
}