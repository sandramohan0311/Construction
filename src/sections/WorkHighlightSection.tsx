import WelcomeSection from './WelcomeSection'
import ProjectDetails from '@/components/ProjectDetails'

const WorkHighlightSection = () => {
  return (
    <div className='lg:h-screen h-auto w-full flex flex-col justify-center items-center'>
        <WelcomeSection/>
        <div className="h-auto w-full flex lg:flex-row lg:justify-evenly flex-col items-center lg:mt-20">
            <ProjectDetails ProjectNumber='109' ProjectTitle='Expert Workers'/>
            <ProjectDetails ProjectNumber='485' ProjectTitle='Happy Clients'/>
            <ProjectDetails ProjectNumber='54' ProjectTitle='Completed Projects'/>
            <ProjectDetails ProjectNumber='485' ProjectTitle='Running Projects'/>
        </div>
      
    </div>
  )
}

export default WorkHighlightSection
