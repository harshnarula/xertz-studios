import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  useEffect(() => {
    gsap.fromTo(
      '.demo-request',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.demo-request',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
          markers: false,
        },
        clearProps: 'all',  // Clears the transform and opacity after animation
      }
    );
    
    gsap.fromTo(
      '.newsletter-signup',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.newsletter-signup',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
          markers: false,
        },
        clearProps: 'all',  // Clears the transform and opacity after animation
      }
    );
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden py-8 px-4 from-blue-300 via-blue-500 to-indigo-800 bg-gradient-to-b sm:px-6 lg:px-8">
      {/* Demo Request Section */}
      <section className="demo-request mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">Request a Demo</h2>
        <p className="text-white mb-8">
          Experience our AR/VR solutions firsthand. Schedule a demo or consultation to see how our technology can benefit you.
        </p>
        <button
          onClick={() => window.location.href = 'mailto:example@example.com'} // Replace with actual demo request link
          className="py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Request a Demo
        </button>
      </section>

      {/* Newsletter Signup Section */}
      <section className="newsletter-signup">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center font-varela">Subscribe to Our Newsletter</h2>
        <p className="text-white mb-8 text-center font-varela">
          Stay updated with the latest news and updates about our AR/VR solutions. Subscribe to our newsletter.
        </p>
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 font-varela" htmlFor="newsletter-email">Email</label>
            <input
              type="email"
              id="newsletter-email"
              name="newsletter-email"
              className="w-full p-2 rounded-lg bg-gray-700 text-white font-varela border border-gray-600 focus:outline-none focus:border-gray-500"
              placeholder="Your Email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-varela rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default CallToAction;
