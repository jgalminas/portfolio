import { Experience } from '@/data';

export interface ExperienceProps {
	data: Experience
}

export default function Experience({ data }: ExperienceProps) {
	return (
		<div className='flex gap-6'>

			<p className='text-slate-400 min-w-fit'> { data.date } </p>
			
			<div className='flex flex-col'>
				<h4 className='text-slate-200'> { data.title } </h4>
				<h5 className='text-slate-300'> at <b> { data.place } </b> </h5>
				<p className='text-slate-400'> { data.description } </p>
			</div>

		</div>
	)
}