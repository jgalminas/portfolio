import { Experience } from '@/data';
import Skills from './Skills';

export interface ExperienceProps {
	data: Experience
}

export default function Experience({ data }: ExperienceProps) {
	return (
		<div className='flex gap-6'>

			<p className='text-slate-400 min-w-fit'> { data.date } </p>
			
			<div className='flex flex-col gap-3'>
				<h4 className='text-xl text-slate-200 font-semibold'> { data.title } </h4>
				<h5 className='text-lg text-slate-300'> at <span className='font-semibold'> { data.place } </span> </h5>
				<p className='text-slate-400 mb-3'> { data.description } </p>

				<Skills skills={data.skills}/>

			</div>

		</div>
	)
}