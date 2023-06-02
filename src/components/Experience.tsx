import { Experience } from '@/data';
import Skills from './Skills';

export interface ExperienceProps {
	data: Experience[]
}

export default function Experience({ data }: ExperienceProps) {
	return (
		<section className='flex flex-col gap-12'>
			{ data.map((exp, key) => {
				return (
					<div key={key} className='flex gap-6'>

						<p className='text-slate-400 min-w-fit'> { exp.date } </p>
						
						<div className='flex flex-col gap-3'>
							<h4 className='text-xl text-slate-200 font-semibold'> { exp.title } </h4>
							<h5 className='text-lg text-slate-300'> at <span className='font-semibold'> { exp.place } </span> </h5>
							<p className='text-slate-400 mb-3'> { exp.description } </p>
			
							<Skills skills={exp.skills}/>
			
						</div>
		
					</div>
				)
			}) }
		</section>
	)
}