import Contacts from './Contacts';
import DownloadIcon from '../icons/DownloadIcon.svg';

export default function About() {
	return (
		<section className='w-full lg:w-5/12 lg:sticky lg:top-0 lg:max-h-screen py-16 md:py-24 lg:py-36 flex flex-col'>
        <h1 className='text-5xl font-bold text-white'> Justas Galminas </h1>
        <h2 className='text-2xl font-semibold text-slate-300 mt-4'> Final Year Software Development Student </h2>

        <p className='text-slate-400 mt-6'>
          Hello! I&apos;m Justas, a passionate software engineer specialising in full-stack web development. I am most experienced with React, Next.js, TypeScript, C#, ASP.NET and Node.js, however, I like to continuously learn and keep up-to-date with the latest trends and technologies.
          <br/><br/>
          I thrive in creating innovative solutions and delivering exceptional user experiences. Let&apos;s connect and turn ideas into reality!
        </p>
        
        <small className='absolute w-80 h-80 pb-80 bg-gray-200 left-0 top-0 rounded-br-full bg-gradient-to-br from-[#21212E] to-background blur-3xl
        -z-10'/>

        <a href='/cv.pdf' download='Justas Galminas CV.pdf'
        className='font-semibold hover:text-slate-200 transition-colors duration-200 transform text-cyan-400 mt-12 flex gap-3 items-center w-fit'>
          <DownloadIcon className='w-6 h-6'/>
          Download CV
        </a>

        <div className='mt-auto pt-24'>
          <Contacts/>
        </div>

      </section>
	)
}