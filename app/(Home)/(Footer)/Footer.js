import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/Container/Container';
import { NewsLetter } from '@/components/Newsletter/NewsLetter';

export const Footer = () => {
  return (
    <div>
      {/* <div> */}
      <Container>
        {/* footer top */}
        <div className="text-center bg-background">
          <p className="mb-4">We&apos;d love to hear what you think</p>
          <Button className="bg-[#DADEFF] text-[#021236]">Give FeedBack</Button>
        </div>
      </Container>

      {/* footer middle */}
      <div className="bg-[#DADEFF] text-[#021236]">
        <Container>
          <div className="lg:flex justify-between items-center">
            <div className="flex lg:space-x-4 space-x-6 pb-8 md:pb-0">
              {/* logo */}
              <p>Logo</p>
              <div>
                <div>
                  <div>
                    <h4 className="font-extrabold uppercase text-sm">
                      download ikhuku mobile app
                    </h4>
                    <p className="text-xs capitalize">get exclusive offer!</p>
                  </div>
                  <div className="flex space-x-5 pt-3">
                    <div className="flex flex-col">
                      <small className="font-extrabold capitalize">
                        download on the
                      </small>
                      <Link href={''}>App Store</Link>
                    </div>
                    <div className="flex flex-col">
                      <small className="font-extrabold capitalize">
                        download on the
                      </small>
                      <Link href={''}>Google Store</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-4 md:pb-0">
              <div className="pb-4">
                <h4 className="font-extrabold capitalize">new on ikhuku ?</h4>
                <p className="test-sm">
                  Subscripe of our newsletter for updates on our latest offers!
                </p>
              </div>

              {/* email form for the nesletter */}
              <div>
                <NewsLetter />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* footer bottom */}
      <div className="bg-[#021236]">
        <div>
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-thin text-center text-white">
              <Link href="/">Heed Help?</Link>
              <Link href="/">Useful links</Link>
              <Link href="/">About Ikuku</Link>
              <Link href="/">Make money with Ikhuku</Link>
              <Link href="/">Safety data sheet</Link>
              <Link href="/">Rrivacy ans security</Link>
              <Link href="/">Request my personal information</Link>
              <Link href="/">Notce at collection</Link>
              <Link href="/">Become a partner with us</Link>
              <Link href="/">Join us at</Link>
              <Link href="/">Payment methods and delivery partners</Link>
              <Link href="/">Terms of use</Link>
            </div>
          </Container>
        </div>

        <div className="w-full h-0.5 bg-white my-2 opacity-20"></div>

        {/* footer bottom */}
        <div className="bg-[#021236] text-white">
          <Container>
            <div className="text-center">
              <p className="capitalize text-white text-xs md:text-sm lg:text-base xl:text-base">
                &copy; 2025
                <Link href="/" className="pr-1 pl-1 font-extrabold">
                  Ikhuku
                </Link>
                All rights reserved.
              </p>
            </div>
          </Container>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
