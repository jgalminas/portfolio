import { EDUCATION, EXPERIENCE, PROJECTS } from '@/data';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '@/components/Projects';
import ArrowIcon from '../icons/ArrowIcon.svg';

export default function Home() {

  return (
    <main className='container mx-auto flex flex-col lg:flex-row justify-between px-5'>

      <About/>

      <section className='w-full lg:w-6/12 flex flex-col gap-24 py-12 md:py-24 lg:py-36'>

        <section>
          <h1 className='text-2xl font-semibold text-white mb-12'> Industry Experience </h1>
          <Experience data={EXPERIENCE}/>
        </section>

        <section>
          <h1 className='text-2xl font-semibold text-white mb-12'> Education </h1>
          <Experience data={EDUCATION}/>
        </section>

        <section>
          <h1 className='text-2xl font-semibold text-white mb-12'> Projects </h1>
          <Projects data={PROJECTS}/>

          <a href='https://github.com/jgalminas?tab=repositories'
          target='_blank'
          className='float-right mt-12 text-slate-200 text-sm font-medium flex items-center gap-3 px-4 py-2 hover:bg-background2 rounded-sm
          transition-colors duration-200'>
            View more
            <ArrowIcon/>
          </a>

        </section>

      </section>

    </main>
  )
}