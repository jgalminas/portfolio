import Contacts from './Contacts';

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
        
        <small className='absolute w-80 h-80 pb-80 bg-gray-200 left-0 top-0 rounded-br-full bg-gradient-to-br from-background2 to-background blur-3xl
        -z-10'/>

        <a href='/cv.pdf' download='Justas Galminas CV.pdf'
        className='bg-cyan-700 px-4 py-2 hover:shadow-lg text-sm font-medium rounded-sm transition-colors hover:bg-cyan-600 text-white mt-12 w-fit
        duration-200'>
          Download CV
        </a>

        <div className='mt-auto pt-24'>
          <Contacts/>
        </div>

      </section>
	)
}