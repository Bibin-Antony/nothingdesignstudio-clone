import React from 'react';

const logos = [
  'logoipsum.',
  'logoipsum+',
  'IPSUM™',
  'Lillll.com',
  'LOGO IPSUM',
  'logoipsum',
  'logoipsum',
];

const ClientsSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-32 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-lg leading-relaxed mb-8">
            We are always open for new and exciting opportunities and we are never not on the lookout for talents and bright minds.
          </p>
          <p className="text-xs font-medium tracking-widest uppercase">
            [ OUR CLIENTS ]
          </p>
        </article>
      </div>

      <div className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li key={`logo-a-${index}`} className="flex-shrink-0">
              <span className={`text-3xl lg:text-4xl whitespace-nowrap ${logo === 'IPSUM™' ? 'font-black tracking-wider' : 'font-bold'}`}>
                {logo}
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={`logo-b-${index}`} className="flex-shrink-0">
              <span className={`text-3xl lg:text-4xl whitespace-nowrap ${logo === 'IPSUM™' ? 'font-black tracking-wider' : 'font-bold'}`}>
                {logo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsSection;