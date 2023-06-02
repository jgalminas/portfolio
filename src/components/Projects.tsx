import { Project } from '@/data';
import Skills from './Skills';
import Image from 'next/image';
import IconLink from './IconLink';
import GitHubIcon from '../icons/GitHubIcon.svg';
import LinkIcon from '../icons/LinkIcon.svg';

export interface ProjectsProps {
	data: Project[]
}

export default function Projects({ data }: ProjectsProps) {
	return (
		<div className='flex flex-col gap-12'>
			{ data.map((prj, key) => {
				return (
					<div key={key} className='flex gap-6'>
						
						<div className='w-2/3'>
							<Image className='object-cover rounded-lg' width={250} height={140.63} src={prj.imageUrl} alt={prj.imageAlt}/>
						</div>
						
						<div className='flex flex-col gap-3'>
							<h4 className='text-xl text-slate-200 font-semibold'> { prj.title } </h4>
							<p className='text-slate-400 mb-3'> { prj.description } </p>

							{ (prj.repositoryUrl || prj.websiteUrl) &&
								<div className='flex gap-6 mb-2'>
									{ prj.repositoryUrl && <IconLink icon={<GitHubIcon/>} href={prj.repositoryUrl}> Repository </IconLink> }
									{ prj.websiteUrl && <IconLink icon={<LinkIcon/>} href={prj.websiteUrl}> Website </IconLink> }
								</div>
							}


							<Skills skills={prj.skills}/>
			
						</div>
		
					</div>
				)
			}) }
		</div>
	)
}