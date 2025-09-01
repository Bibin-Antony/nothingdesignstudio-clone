import React from 'react';
import Image from 'next/image';

const InvitationLetter = () => {
  return (
    <section className="bg-black py-4">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://framerusercontent.com/images/k0WSdo3PibXIbOik2gqMkaZa0is.png"
              alt="An invitation letter for Superpower early access on a textured surface."
              width={1240}
              height={1550}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://framerusercontent.com/images/62fNASKUmm2VnTJ5NilsRBOhnIY.png"
              alt="An open box showing the Superpower product packaging and invitation letter."
              width={1240}
              height={1550}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationLetter;