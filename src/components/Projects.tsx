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
					<div key={key} className='grid sm:grid-cols-[4fr,8fr] gap-6'>
						
						<div className='min-w-full sm:w-2/3'>
							<Image className='rounded-sm' quality={100} width={1920} height={1080} src={prj.imageUrl} alt={prj.imageAlt}/>
						</div>
						
						<div className='flex flex-col gap-3'>
							<h2 className='text-xl text-slate-200 font-semibold'> { prj.title } </h2>
							<p className='text-slate-400 mb-3'> { prj.description } </p>

							{ (prj.repositoryUrl || prj.websiteUrl) &&
								<div className='flex gap-6'>
									{ prj.repositoryUrl && <IconLink icon={<GitHubIcon className='w-5 h-5'/>} href={prj.repositoryUrl}> Repository </IconLink> }
									{ prj.websiteUrl && <IconLink icon={<LinkIcon className='w-5 h-5'/>} href={prj.websiteUrl}> Website </IconLink> }
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