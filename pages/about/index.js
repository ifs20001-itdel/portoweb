import React, { useState } from 'react'

// icons
import { FaNodeJs, FaLaravel, FaBootstrap, FaFigma } from 'react-icons/fa'

import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiMysql,
  SiMongodb,
  SiGoland,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiCanva,
  SiKatacoda,
  SiPostman
} from 'react-icons/si'

//  data
const aboutData = [
  {
    title: 'education',
    info: [
      {
        title: 'Institut Teknologi Del (IPK 3.63) - Laguboti',
        stage: 'Aug 2020 - Oct 2024'
      },
      {
        title: 'SMA Negeri 1 Tarutung - Top 10 best students',
        stage: 'Jun 2017 - Jun 2020'
      },
      {
        title: 'SMP NEGERI 3 Tarutung - Top 5 best students',
        stage: 'Jun 2014 - Jun 2017'
      },
      {
        title: 'SD Swasta Filadelfia - Top 5 best students',
        stage: 'Jun 2008 - Jun 2014'
      }
    ]
  },
  {
    title: 'skills',
    info: [
      {
        title: 'Backend',
        icons: [
          <SiExpress />,
          <FaNodeJs />,
          <SiPostgresql />,
          <SiSequelize />,
          <FaLaravel />,
          <SiMysql />,
          <SiMongodb />,
          <SiGoland />
        ]
      },
      {
        title: 'Frontend',
        icons: [
          <SiReact />,
          <SiNextdotjs />,
          <FaBootstrap />,
          <SiTailwindcss />,
          <SiHtml5 />,
          <SiJavascript />,
          <SiCss3 />
        ]
      },
      {
        title: 'UI / UX',
        icons: [<FaFigma />, <SiCanva />]
      },
      {
        title: 'Testing',
        icons: [<SiPostman />]
      }
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Fullstack Web Developer - Bold & Underline',
        stage: 'JUN 2023 - AUG 2023'
      },
      {
        title: 'Fullstack Web - Rakamin Academy',
        stage: 'AUG 2023 - JAN 2024'
      },
      {
        title: 'Intern - BTPN Syariah Fullstack Developer',
        stage: 'DES 2023 - JAN 2024'
      }
    ]
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Full Stack Web Development, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title: 'BTPN Syariah Fullstack Developer, BTPN Syariah',
        stage: '2023'
      },
      {
        title: ' Data Science, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title: 'Design Thinking, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title:
          'Kickstart Fullstack Web Development Journey, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title:
          'Full Stack Web Development EXCELLENT GRADE, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title: ' Product Management, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title:
          ' Product Management EXCELLENT GRADE, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title: 'Teamwork Journey, PT.Rakamin Kolektif Madani',
        stage: '2023'
      },
      {
        title: 'UI UX Design, PT.Rakamin Kolektif Madani',
        stage: '2023'
      }
    ]
  }
]

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[350px]'
        style={{
          width: "550px",
          height: "550px",
        }}
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-[40px] xl:mx-[90px]'
          >
            It's <span className='text-accent text-[40px]'>A Part</span> About Me
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] text-[15px] mx-auto xl:mx-[90px] mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I am an ambitious individual who approaches every task with
            meticulous attention to detail. My primary interest lies in the
            field of Information Technology, particularly in website
            development.
          </motion.p>

          {/* <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4 max-w-[100px">TEst</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4 max-w-[100px">TEst</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4 max-w-[100px">TEst</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4 max-w-[100px">TEst</div>
              </div>
            </div>
          </div> */}
        </div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:-left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <span className='text-[15px]'>{item.title}</span>
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  <div className='font-light text-[15px] mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div className='text-[15px]'>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
