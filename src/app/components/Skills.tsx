export interface SkillsProps {
	skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
	return (
		<div className='flex flex-wrap gap-3'>
			{ skills.map(sk => {
				return <p className='bg-cyan-900 px-4 py-1 rounded-lg text-sm font-medium text-cyan-500' key={sk}> { sk } </p>
			}) }
		</div>
	)
}