import GitHubIcon from '../icons/GitHubIcon.svg';
import LinkedInIcon from '../icons/LinkedInIcon.svg';
import EmailIcon from '../icons/EmailIcon.svg';

export default function Contacts() {

	return (
		<section className='flex gap-6 items-center flex-wrap'>
			
			<a href='https://linkedin.com/in/jgalminas/' aria-label='Link to LinkedIn profile'>
				<LinkedInIcon className='w-6 h-6'/>
			</a>

			<a href='https://github.com/jgalminas' aria-label='Link to GitHub profile'>
				<GitHubIcon className='w-6 h-6'/>
			</a>

			<span className='hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#343F4E]'/>

			<div className='w-full sm:w-fit flex gap-3 text-slate-200 font-medium'>
				<EmailIcon className='w-6 h-6'/>
				<p> j.galminas@gmail.com </p>
			</div>

		</section>
	)
}