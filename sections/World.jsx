'use client'

import { motion } from 'framer-motion'
import { TitleText, TypingText } from '../components'
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'

const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col `}
        >
            <TypingText
                title='| People on the World'
                textStyles='text-center'
            />
            <TitleText
                title={
                    <>
                        Track friends around you and invite them to play
                        together in the same world
                    </>
                }
                textStyles='text-center'
            />
            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='relative mt-[68px] flex w-full h-[550px]'
            >
                <img
                    src='/map.png'
                    alt='map'
                    className='w-full h-full object-cover'
                />
                <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-map shadow-orange-600'>
                    <img
                        src='/people-01.png'
                        alt='people'
                        className='h-full w-full'
                    />
                </div>
                <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-map shadow-pink-500'>
                    <img
                        src='/people-02.png'
                        alt='people'
                        className='h-full w-full'
                    />
                </div>
                <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-map shadow-sky-500'>
                    <img
                        src='/people-03.png'
                        alt='people'
                        className='h-full w-full'
                    />
                </div>
                <div className='flex absolute md:top-[40%] top-[70%] md:left-[11%] left-[5%]'>
                    <div className='absolute'>
                        <div className='relative h-[140px] w-[210px] p-[28px] rounded-[12px] bg-purple-600 shadow-map shadow-purple-400 flex justify-center content-center'>
                            <img
                                src='/planet-02.png'
                                alt='people'
                                className='self-center absolute h-[130px] w-[200px] object-cover rounded-[12px] '
                            />
                        </div>
                    </div>
                    <h2 className='relative top-[100px] px-[10px] font-bold text-[20px] text-white z-[1]'>
                        The Upside Down
                    </h2>

                    {/* imo tu daj jeszcze jednego diva i w nim obrazek tak jak wyzej a potem dwa divy ktore beda juz w flexie i jakies justify-end by sie zaczynalo od konca czy cos takeigo */}
                </div>
                <div className='flex absolute top-[10%] right-[18%]'>
                    <div className='absolute'>
                        <div className='relative h-[140px] w-[210px] p-[28px] rounded-[12px] bg-indigo-600 shadow-map shadow-indigo-400 flex justify-center content-center'>
                            <img
                                src='/planet-04.png'
                                alt='people'
                                className='self-center absolute h-[130px] w-[200px] object-cover rounded-[12px] '
                            />
                        </div>
                    </div>
                    <h2 className='relative top-[100px] px-[10px] font-bold text-[20px] text-white z-[1]'>
                        Hawkins Labs
                    </h2>

                    {/* imo tu daj jeszcze jednego diva i w nim obrazek tak jak wyzej a potem dwa divy ktore beda juz w flexie i jakies justify-end by sie zaczynalo od konca czy cos takeigo */}
                </div>
            </motion.div>
        </motion.div>
    </section>
)

export default World
