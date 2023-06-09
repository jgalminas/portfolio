import GitHubIcon from '../icons/GitHubIcon.svg';
import LinkedInIcon from '../icons/LinkedInIcon.svg';
import EmailIcon from '../icons/EmailIcon.svg';

export default function Contacts() {

	return (
		<section className='flex items-center flex-wrap'>
			
			<a href='https://linkedin.com/in/jgalminas/' aria-label='Link to LinkedIn profile' className='p-2 hover:bg-background2 rounded-sm
			transition-colors duration-200 mr-4'>
				<LinkedInIcon className='w-6 h-6'/>
			</a>

			<a href='https://github.com/jgalminas' aria-label='Link to GitHub profile' className='p-2 hover:bg-background2 rounded-sm
			transition-colors duration-200'>
				<GitHubIcon className='w-6 h-6'/>
			</a>

			<small className='hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#343F4E] mx-6'/>

			<div className='w-full sm:w-fit flex gap-3 text-slate-200 font-medium ml-2 mt-6 sm:ml-0 sm:mt-0'>
				<EmailIcon className='w-6 h-6'/>
				<p> j.galminas@gmail.com </p>
			</div>

		</section>
	)
}