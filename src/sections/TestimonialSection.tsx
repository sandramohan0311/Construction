import TestimonialComponent from "@/components/TestimonialComponent"

const TestimonialSection = () => {
  return (
    <div className='h-auto w-full flex flex-col gap-5 pb-10'>
        <p className='lg:text-4xl text-2xl text-black font-medium w-full flex justify-center items-center'>Testimonials</p>
        <p className='lg:text-xl text-md text-black font-medium w-full flex justify-center items-center'>Real stories from clients who’ve built success with us.</p>
        <div className="h-auto w-full flex lg:flex-row lg:justify-center flex-col items-center gap-5">
            <TestimonialComponent TstlName='John Mathews' TstlPlace='Project Director, UrbanRise Developers' TstlDescription='"Working with [Company Name] was a seamless experience. Their attention to detail, timely delivery, and commitment to safety ensured our project exceeded expectations. They’re not just contractors — they’re trusted partners in growth."' />
            <TestimonialComponent TstlName='John Mathews' TstlPlace='Project Director, UrbanRise Developers' TstlDescription='"Working with [Company Name] was a seamless experience. Their attention to detail, timely delivery, and commitment to safety ensured our project exceeded expectations. They’re not just contractors — they’re trusted partners in growth."' />
            <TestimonialComponent TstlName='John Mathews' TstlPlace='Project Director, UrbanRise Developers' TstlDescription='"Working with [Company Name] was a seamless experience. Their attention to detail, timely delivery, and commitment to safety ensured our project exceeded expectations. They’re not just contractors — they’re trusted partners in growth."' />
        </div>
        
    </div>
  )
}

export default TestimonialSection
