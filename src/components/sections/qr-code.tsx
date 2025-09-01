import Image from 'next/image';
import type { FC } from 'react';

const QrCodeSection: FC = () => {
  return (
    <section className="bg-background text-foreground dark">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row sm:gap-12 sm:text-left">
          <div className="flex-shrink-0">
            <Image
              src="https://framerusercontent.com/images/62fNASKUmm2VnTJ5NilsRBOhnIY.png"
              alt="QR code to join the Superpower community waitlist"
              width={112}
              height={112}
            />
          </div>
          <div>
            <p className="max-w-xs text-xl font-medium text-foreground">
              Join the Superpower community. Use the QR code to get on the waitlist.
            </p>
            <p className="mt-2 text-base text-primary">superpower.health</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrCodeSection;