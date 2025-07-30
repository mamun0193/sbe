import React from 'react'
import { AnimatedButton } from '../../animations/ButtonAnimations'
import { ScrollReveal } from '../../hooks/useScrollAnimation'
function Events() {
  return (
    <div>

      <ScrollReveal animation="fadeInUp">
        <section id="events" className="max-w-6xl mx-auto my-16">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">Our Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="slideInLeft" delay={100}>
              <div className="bg-black/40 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 hover:scale-105 group border border-gray-700">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Workshops</h4>
                <p className="text-gray-300 mb-4">Interactive sessions with hands-on experience in biotechnology tools and techniques.</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AnimatedButton to="/events" variant="accent" animation="expand">
                    View Workshops
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slideInUp" delay={200}>
              <div className="bg-black/40 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 hover:scale-105 group border border-gray-700">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Guest Lectures</h4>
                <p className="text-gray-300 mb-4">Industry and academic experts sharing real-world insights with our students.</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AnimatedButton to="/events" variant="accent" animation="expand">
                    View Lectures
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slideInRight" delay={300}>
              <div className="bg-black/40 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-6 hover:scale-105 group border border-gray-700">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Tech Fests</h4>
                <p className="text-gray-300 mb-4">Annual events with exciting competitions, exhibitions, and collaboration platforms.</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AnimatedButton to="/events" variant="accent" animation="expand">
                    View Tech Fests
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="text-center mt-8">
            <AnimatedButton to="/events" variant="primary" animation="slide">
              View All Events
            </AnimatedButton>
          </div>
        </section>
      </ScrollReveal>

    </div>
  )
}

export default Events