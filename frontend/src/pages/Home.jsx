import React from 'react'  
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle';

import SearchBar from "./../shared/SearchBar";
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
    return <>
    

    {/* ====== hero section start ====== */}
    <section>
      <Container>
        <Row>
            <Col lg='6'>
              <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Know Before You Go"}/>
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>Traveling opens the door to creating <span classNmae="highlight">memories</span></h1>
                  <p>
                  Traveling is a captivating symphony that orchestrates the melody of life.
                  It beckons us to venture beyond the confines of familiarity and immerse ourselves in the harmonious diversity of the world. 
                  With every step we take, we dance to the rhythm of new cultures, colors, and landscapes, our hearts synchronized with the beating pulse of humanity. 
                  Each destination becomes a brushstroke, painting a masterpiece of memories on the canvas of our souls. 
                  Through travel, we unravel the secrets of the universe and discover the interconnectedness that binds us all. 
                  It is a journey of self-discovery, where the destination is not merely a place on a map but a portal to the core of our being. 
                  As we traverse the globe, we collect fragments of wonder, weaving them into a tapestry of experiences that forever shape who we are. 
                  In the embrace of foreign lands, we find ourselves both lost and found, realizing that the world is both vast and intimate, waiting to be explored and cherished. 
                  So, let us wander with wide-eyed wonder, for in travel, we find the beauty that resides in the depths of our wandering hearts.
                  </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>
        </Row>
      </Container>
    </section>
      {/* ====== hero section start ====== */}
    <section>
      <Container>
        <Row>
          <Col lg= "3">
            <h5 classname= "service__subtitle"> What we serve </h5>
            <h2 className = "service__title"> We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* ------featured tour section start----- */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ------featured tour section end----- */}

    {/*-------experience section start------ */}
    <section>
      <Container>
        <Row>
          <Col lg = '6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>

              <h2>With our all experience <br/> we will serve you</h2>
              <p>Loren ipsum dolor sit amet, consectetur adipisicing elit
                <br/>
                Quas aliquam, hic tempora inventore suscipit unde.
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5 ">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>
          <Col lg = '6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*-------experience section end------ */}

    {/*-------gallery section start------*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle = {'Gallery'}/>
            <h2 className= "gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImageGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*-------gallery section end------*/}

    {/*-------testimonial section start-----*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle = {'Fans Love'}/>
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/*-------testimonial section end-----*/}
    <Newsletter/>
    </>
};

export default Home;