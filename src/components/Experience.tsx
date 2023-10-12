import { Experience } from '@/data';
import Skills from './Skills';
import { marked } from 'marked';

export interface ExperienceProps {
	data: Experience[]
}

export default function Experience({ data }: ExperienceProps) {
	return (
		<div className='flex flex-col gap-12'>
			{ data.map((exp, key) => {
				return (
					<div key={key} className='flex flex-col sm:flex-row gap-3 sm:gap-6'>
						<p className='text-slate-400 min-w-[8rem]'> { exp.date } </p>
						
						<div className='flex flex-col gap-3'>
							<h2 className='text-xl text-slate-200 font-semibold'> { exp.title } </h2>
							<h3 className='text-lg text-slate-300'> at <span className='font-semibold'> { exp.place } </span> </h3>
							<div className='text-slate-400 mb-3 [&>ul]:list-disc [&>ul]:list-outside [&>ul]:mt-3 [&>ul]:ml-[1.125rem] [&>ul>li]:mt-1.5'
							dangerouslySetInnerHTML={{ __html: marked.parse(exp.description) }}/>
			
							<Skills skills={exp.skills}/>
						</div>
					</div>
				)
			}) }
		</div>
	)
}