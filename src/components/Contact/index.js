import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
// import KakaoTalkIcon from '../../assets/images/kakao-talk.png'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_gao670e', 
            'template_onsv7tl',
            refForm.current,
            'o_s01uBQea5LGHmp4'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
        )

    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray = {['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx = {15} 
                        />
                    </h1>
                    <p>
                    I am actively seeking opportunities in software engineering, both as an intern and for future full-time positions, as I am graduating soon. Please don't hesitate to reach out to me through the provided form or via social networking platforms.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                   <input type='text' name='name' placeholder='Name' required /> 
                                </li>
                                <li className='half'>
                                   <input type='email' name='email' placeholder='Email' required /> 
                                </li>
                                <li>
                                   <input type='text' name='subject' placeholder='Subject' required /> 
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className='socnet-icons'>
                        <ul>
                            <li>
                                <a target='_blank' rel="noreferrer" href='https://github.com/mirasnag'>
                                    <FontAwesomeIcon icon={faGithub} color='#fff'/>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/miras-nagashbek-8250a7254'>
                                    <FontAwesomeIcon icon={faLinkedin} color='#fff'/>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' rel="noreferrer" href='mailto:nagashbek.miras27@gmail.com'>
                                    <FontAwesomeIcon icon={faEnvelopeSquare} color='#fff'/>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' rel="noreferrer" href='https://t.me/mirai_nagai'>
                                    <FontAwesomeIcon icon={faTelegram} color='#fff'/>
                                </a>
                            </li>
                            {/* <li>
                                <a target='_blank' rel="noreferrer" href='https://t.me/mirai_nagai'>
                                    <img className='kakaotalkicon' src={KakaoTalkIcon}/>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div> 
                <div className='info-map'>
                    South Korea, Ulsan, 
                    <br />
                    Ulju-gun, Eonyang-eup, 50 UNIST-gil.
                
                    <br />
                    <span>
                        010 2134 0571 (KOR)
                        <br />
                        +7 777 125 93 16 (KAZ)
                    </span>
                </div>
                <div className='map-wrap'> 
                    <MapContainer center = {[35.573485, 129.190059]} zoom ={17}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[35.573485, 129.190059]}>
                            <Popup>Hey</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact