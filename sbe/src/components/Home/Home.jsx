import React from 'react'
import { AnimatedButton, RevealOnHover } from '../../animations/ButtonAnimations'
import { AnimatedCard } from '../../animations/CardHover'
import { FloatingElements, FadeInUp, SlideInLeft, SlideInRight, SlideInUp } from '../../animations/LandingPageAnimations'
import { ScrollReveal } from '../../hooks/useScrollAnimation'
import rightImage from '../../assets/right.png'
import AboutCard from '../Cards/AboutCard'
import EventCard from '../Cards/EventCArd'
import Gallery from '../Gallery/Gallery'
import GalleryCard from '../Cards/GalleryCard'
import TeamCard from '../Cards/TeamCard'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div className="font-serif snap-y snap-mandatory h-screen overflow-y-auto -mt-15"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .font-serif::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      {/* Hero Section with animations */}
      <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20">
        <FloatingElements>
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

              {/* Left Content - 2/3 width */}
              <div className="lg:col-span-2 text-center lg:text-left mt-2">
                <FadeInUp delay={100}>
                  <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-green-400 mb-7">
                    Society for Biological Engineers
                  </h1>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <h2 className="text-2xl sm:text-4xl font-bold font-serif text-blue-200 mb-7">
                    Where Biology Meets Innovation
                  </h2>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <p className="text-lg sm:text-xl text-emerald-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 font-serif">
                    Building a community of innovators and learners in biotechnology and biological engineering at UIET Chandigarh.
                  </p>
                </FadeInUp>

                {/* Call to action buttons */}
                <FadeInUp delay={400}>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 ">
                    <AnimatedButton to="/about" variant="primary" animation="slide delayed" onClick={() => window.scrollTo(0, 0)}>
                      <div>Know More</div>
                    </AnimatedButton>
                    <AnimatedButton to="/join-us" variant="secondary" animation="slide" onClick={() => window.scrollTo(0, 0)}>
                      <div className='text-white font-bold'>Join Us</div>
                    </AnimatedButton>
                  </div>
                </FadeInUp>
              </div>

              {/* Right Image - 1/3 width */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <FadeInUp delay={500}>
                  <div className="relative group">
                    <img
                      src={rightImage}
                      alt="SBE Team"
                      className="w-full max-w-md h-auto scale-y-125 rounded-2xl shadow-2xl border-4 border-green-400/30 hover:border-green-400/60 transition-all duration-300 transform "
                      style={{
                        filter: 'invert(0.5) hue-rotate(180deg) contrast(1.2) brightness(0.8)',
                        mixBlendMode: 'screen'
                      }}
                    />
                    {/* Dark overlay for better contrast */}

                  </div>
                </FadeInUp>
              </div>

            </div>
          </div>
        </FloatingElements>
      </section>

      {/* About Section */}
      <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20">
        <ScrollReveal animation="fadeInUp">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-bold text-green-400 mb-8 text-center font-serif mt-12">About Us</h3>
            <p className="text-gray-300 text-base sm:text-lg text-center max-w-4xl mx-auto mb-8">
              SBE is a student-led club under the Department of Biotechnology at UIET. We aim to promote technical growth, collaboration, and exposure through events, lectures, and projects.
            </p>
            <ScrollReveal delay={200}>
              <div className='flex flex-wrap justify-center mb-8'>
                <AboutCard
                  title="Our Mission"
                  content="To foster a collaborative environment where students can enhance their technical and soft skills through real-world exposure, hands-on projects, and active participation in the field of biological engineering."
                />
                <AboutCard
                  title="Our Vision"
                  content="To become the leading student-led biotechnology club at UIET, recognized for our impactful initiatives, national-level events, and dedication to scientific innovation and excellence."
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center mt-4">
                <AnimatedButton to="/about" variant="outline" animation="fade" onClick={() => window.scrollTo(0, 0)}>
                  Learn More About SBE
                </AnimatedButton>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* Events Section */}
      <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20">
        <ScrollReveal animation="fadeInUp" delay={100}>
          <div className="max-w-6xl mx-auto ">
            <h1 className='text-center text-green-500 font-bold text-4xl sm:text-5xl font-serif mb-13 mt-10'> Our Events </h1>

            <div className='flex flex-wrap justify-center items-stretch gap-8 mt-4 '>
              <ScrollReveal animation="slideInLeft" delay={100}>
                <div>
                  <EventCard
                    title={"Workshops"}
                    content={"Interactive sessions with hands-on experience in biotechnology tools and techniques."}
                    buttonText={"View Workshops"}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slideInUp" delay={200}>
                <div >
                  <EventCard
                    title={"Guest Lectures"}
                    content={"Industry and academic experts are sharing real-world insights with our students."}
                    buttonText={"View Lectures"}
                    variant='primary'
                    animation='fade'
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slideInRight" delay={300}>
                <div >
                  <EventCard
                    title={"Tech Fests"}
                    content={"Annual events with exciting competitions, exhibitions, and collaboration platforms."}
                    buttonText={"View Tech Fests"}
                    animation='reverse-slide'
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slideInUp" delay={400}>
                <div className="text-center mt-6">
                  <AnimatedButton to="/events" variant="primary" animation="fade" onClick={() => window.scrollTo(0, 0)}>
                    View All Events
                  </AnimatedButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>



      {/* Members/Team Section */}
      <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20">
        <ScrollReveal animation="fadeInUp">
          <div className="max-w-6xl mx-auto font-serif">
            <h3 className="text-4xl sm:text-5xl font-bold text-green-400 mb-6 text-center mt-15">Meet Our Team</h3>
            <div className="text-center">
              <p className="text-gray-300 text-lg sm:text-xl mb-6">Get to know the passionate individuals driving SBE forward.</p>
              <div className='flex flex-wrap justify-center gap-6 mb-6 cursor-pointer'>
                <ScrollReveal animation='slideInLeft' delay={200}>
                  <TeamCard name='Kritika Kaur' />
                </ScrollReveal>
                <ScrollReveal animation='slideInUp' delay={200}>
                  <TeamCard name='Abhay Bhusan' position='Vice President' />
                </ScrollReveal>
                <ScrollReveal animation='slideInRight' delay={200}>
                  <TeamCard name='Mohit Kumar' position='Secretary' />
                </ScrollReveal>
              </div>

              <div className="flex flex-wrap justify-center gap-4 ">
                <AnimatedButton to="/teams" variant="primary" animation="expand">
                  Meet the Team
                </AnimatedButton>
                <AnimatedButton to="/join-us" variant="accent" animation="slide">
                  Join Us
                </AnimatedButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery Section */}
      <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20">
        <ScrollReveal animation="fadeInUp">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-bold text-green-400 text-center font-serif mt-15 mb-6">Gallery</h3>
            <div className="mb-3">
              <GalleryCard />
            </div>
            <p className="text-center text-gray-300 mb-5">Gallery is being updated with our latest events and memories.</p>
            <div className="text-center">
              <AnimatedButton to="/gallery" variant="outline" animation="fade">
                View Full Gallery
              </AnimatedButton>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer Section */}
      <section className="snap-start">
        <Footer />
      </section>
    </div >
  );
};


export default Home