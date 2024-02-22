import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Call me at +91 8960758532 for work</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://tinyurl.com/Ankit132">
          <a className="underline underline-offset-1">Ankit Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
