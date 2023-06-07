import { EDUCATION, EXPERIENCE, PROJECTS } from '@/data';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '@/components/Projects';

export default function Home() {

  return (
    <main className='container mx-auto flex flex-col lg:flex-row justify-between px-5'>

      <About/>

      <section className='w-full lg:w-6/12 flex flex-col gap-24 py-12 md:py-24 lg:py-36'>

        <section>
          <h3 className='text-2xl font-semibold text-white mb-12'> Industry Experience </h3>
          <Experience data={EXPERIENCE}/>
        </section>

        <section>
          <h3 className='text-2xl font-semibold text-white mb-12'> Education </h3>
          <Experience data={EDUCATION}/>
        </section>

        <section>
          <h3 className='text-2xl font-semibold text-white mb-12'> Projects </h3>
          <Projects data={PROJECTS}/>
        </section>

      </section>

    </main>
  )
}
