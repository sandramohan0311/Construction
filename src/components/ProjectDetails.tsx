
const ProjectDetails = ({ProjectNumber, ProjectTitle }) => {
  return (
    <div className='h-[100px] w-[150px]'>
        <p className='text-4xl text-black font-bold'>{ProjectNumber} </p>
        <p className='text-md text-black medium'>{ProjectTitle}</p>
    </div>
  )
}

export default ProjectDetails