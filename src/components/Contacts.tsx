import GitHubIcon from '../icons/GitHubIcon.svg';
import LinkedInIcon from '../icons/LinkedInIcon.svg';
import EmailIcon from '../icons/EmailIcon.svg';
import { LINKS } from '@/data';

export default function Contacts() {

	return (
		<section className='flex items-center flex-wrap'>
			
			<a href={LINKS.linked_in} aria-label='Link to Linked In profile' className='p-2 hover:bg-background2 rounded-sm
			transition-colors duration-200 mr-4'>
				<LinkedInIcon className='w-6 h-6'/>
			</a>

			<a href={LINKS.github_profile} aria-label='Link to GitHub profile' className='p-2 hover:bg-background2 rounded-sm
			transition-colors duration-200'>
				<GitHubIcon className='w-6 h-6'/>
			</a>

			<small className='hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#343F4E] mx-6'/>

			<a href={`mailto:${LINKS.email}`} className='w-full sm:w-fit flex gap-3 text-slate-200 font-medium mt-6 sm:ml-0 sm:mt-0
			hover:bg-background2 rounded-sm p-2 transition-colors duration-200'>
				<EmailIcon className='w-6 h-6'/>
				<p> { LINKS.email } </p>
			</a>

		</section>
	)
}