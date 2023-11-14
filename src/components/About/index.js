import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJsSquare, faReact, faCss3, faGitAlt, faPython, faGithub } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import cppsvg from '../../assets/images/cplusplus.svg'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
            clearTimeout(timeoutId)
        }
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'> 
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={(['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'])}
                        idx = {15}
                    />
                </h1>
                <p>Welcome! You are in a portfolio website of a passionate junior web developer! </p>
                <p>My name is Miras Nagashbek, a 20 years old Computer Science student in UNIST. Throughout high school, I excelled as a winner in numerous international math and programming competitions, shaping my core strengths in problem solving, mathematics, and algorithms. Also, I am a futuristic person interested in various topics in AI, including Autonomous Robots and Natural Language Processing.</p>
                <p>My approach to projects is characterized by a futuristic mindset and a pragmatic problem-solving approach, guided by my deliberative nature. I am excited about the prospect of contributing my skills to the dynamic field of software engineering. Feel free to explore my portfolio to witness the intersection of my academic achievements, practical experiences, and future aspirations.</p>
            
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#00A373'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <img class="custom-icon" src={cppsvg} alt="C++ Icon" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About