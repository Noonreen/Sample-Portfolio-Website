import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work With</h2>
                <p className='text-cyan-100 pt-4'> 
                Passionate about web development, I specialize in building modern, high-performance applications using React,
                 Next.js, TypeScript, and TailwindCSS. My expertise includes state management with React Hooks (useState, useEffect, 
                 useRef, useContext, useMemo), UI design with Shadcn/UI, and creating fully responsive and dynamic user interfaces. 
                 I also work with Node.js, APIs, and CLI-based tools to enhance functionality. Constantly learning and improving,
                  I focus on writing clean, scalable, and maintainable code to deliver seamless user experiences.
                </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-accent text-2xl sm:text-2xl items-center mt-8 ml-12'>
                <div className='space-y-3'>
                  <h2 data-aos="zoom-in-up">TypeScript</h2>
                  <h2 data-aos="zoom-in-up">React.js</h2>
                  <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='space-y-3'>
                  <h2 data-aos="zoom-in-up">Tailwind</h2>
                  <h2 data-aos="zoom-in-up">CSS</h2>
                  <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills