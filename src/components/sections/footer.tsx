import Link from 'next/link';
import { SVGProps } from 'react';

const FramerLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Framer Logo"
    {...props}
  >
    <path d="M0 0H7V7H0V0Z" fill="black" />
    <path d="M7 0H14V7H7V0Z" fill="black" />
    <path d="M0 7H7V14H0V7Z" fill="black" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden font-primary">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-[140px] sm:text-[200px] lg:text-[260px] font-black text-[#222222] leading-[0.8] tracking-[-0.05em] select-none text-center whitespace-nowrap">
          NOTHING
        </h1>
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-10 pt-32 pb-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-24 md:mb-32">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">
              WE ARE NOTHING,<br />
              BUT SOMETHING ELSE!
            </p>
            <p className="text-lg font-medium max-w-lg text-muted">
              We strive for the extraordinary in every project fueled by a tremendous passion for design.
            </p>
          </div>
          <div className="text-lg font-medium flex flex-col gap-2 items-start lg:items-end flex-shrink-0">
            <a href="mailto:HELLO@NOTHING.STUDIO" className="hover:text-primary transition-colors uppercase">
              HELLO@NOTHING.STUDIO
            </a>
            <a href="tel:+01123456789" className="hover:text-primary transition-colors uppercase">
              +01 123456789
            </a>
          </div>
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap justify-between items-center gap-y-6 gap-x-6">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase font-medium tracking-wider">
            <li>
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                COOKIE POLICY
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-end gap-x-10 gap-y-4">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase font-medium tracking-wider">
              <li>
                <a href="https://twitter.com/basit_designs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TWITTER
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/basitakhan/?originalSubdomain=sa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/basit.designs/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  INSTAGRAM
                </a>
              </li>
            </ul>
            
            <a 
              href="https://www.framer.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold"
            >
              <span>Made in</span>
              <FramerLogo className="inline-block" />
              <span>Framer</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;