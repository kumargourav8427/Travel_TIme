import React from 'react'
import './section.css'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import airplane from './airplane.PNG'
import itemimg from '../../data'
import language from './language.PNG'
import computer from './computer.PNG'
import appdownloader from './appdownloader.PNG'
import scanner from './scanner.PNG'
import googleplay from './googleplay.PNG'
import appleplay from './appleplay.PNG'
import indflag from './indflag.webp'


function Section() {

    return (
        <>
            <section className='section py-5'>
                <div className='container section-3 '>
                    <div className='row  py-3'>
                        <Row xs={1} md={3} className="g-4">
                            {itemimg.map((img, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src={img.images } alt='static img'/>
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>

            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-4 slidedisc'>
                        <div><img src={airplane} alt='' /></div>
                        <div><p>Planning to book an international flight?
                            <br />
                            <a href='/'>Check Travel Guidelines</a>
                        </p></div>
                    </div>
                    <div className='col-md-4 slidedisc'>
                        <div><img src={language} alt='' /></div>
                        <div><p>We are now available in हिंदी!
                            <br />
                            <a href='/'>Change Language</a>
                        </p></div>
                    </div>
                    <div className='col-md-4 slidedisc'>
                        <div><img src={computer} alt='' /></div>
                        <div><p>Complete your web check-in on MakeMyTrip in easy steps.
                            <br />
                            <a href='/'>Know More</a>
                        </p></div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row main-appdownloader'>
                    <div className='col-md-6 left'>
                        <div className='row'>
                            <div className='col-md-2'>
                                <img src={appdownloader} alt='' />
                            </div>
                            <div className='col-md-10'>
                                <h1>Download App Now !</h1>
                                <p>Use code WELCOMEMMT and get FLAT 12% OFF* on your first domestic flight booking</p>
                            </div>
                            <div className='row'>
                                <div className='col-md-2'>
                                    <span className='indflag'>
                                        <img src={indflag} alt=''></img>
                                    </span>
                                    <span>+91 </span>
                                </div>
                                <div className='col-md-4'>
                                    <input type='number' placeholder='Enter Mobile number' style={{ width: "210px" }} />
                                </div>
                                <div className='col-md-6 px-5'>
                                    <Button>GET APP LINK</Button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-6 right'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <a href='https://play.google.com/store/apps/details?id=com.makemytrip&%24web_only=true&_branch_match_id=1194860938089536383&_branch_referrer=H4sIAAAAAAAAAw3KSQoAIAgAwB%2Flvd9IBkm5YEL0%2B5rzjEzfFQDdF%2BvcRXB2uRnspZlAB1QKY%2FqB7OgypAe6NG0fNAAAAA%3D%3D'
                                    target='/'>
                                    <img src={googleplay} alt='' className='m-2' />
                                </a>
                                <a href='https://apps.apple.com/us/app/makemytrip/id530488359?%24web_only=true&_branch_match_id=1194860938089536383&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywoyMnMyy7Wy03MTs2tLCnKLNBLzs%2FVT9XPzC8GSqbkl%2Bfl5CemAABMVDWbMAAAAA%3D%3D'
                                    target='/'>
                                    <img src={appleplay} alt='' className='m-2' />
                                </a>
                            </div>
                            <div className='col-md-6'>
                                <img src={scanner} alt='' className='m-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
