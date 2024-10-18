"use client";
import Image from "next/image";
import React from "react";
import { personalData } from "@/utils/personal-data";

import { RiGamepadLine, RiGuideLine } from "react-icons/ri";

// Lottie
import AnimationLottie from "@/components/helper/animation-lottie";

import Link from "next/link";
import LottieHero from "./LottieHero";
import herolottie from "@/public/lottie/ticket.json";

import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-between py-24">
      <Image
        src={"/hero.png"}
        alt="hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <Fade
            direction="down"
            triggerOnce={true}
            delay={200}
            cascade
            damping={1e-1}>
            <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              <span className="text-orange-500 text-[14px] uppercase tracking-widest">
                [ {personalData.name} ]
              </span>
              <br />
              {` The first decentralized Web3 Raffle `}
              <span className="text-orange-500">
                {personalData.designation}
              </span>
            </h1>

            <p className="text-[18px] my-5 leading-10">
              {personalData.description}
            </p>
          </Fade>

          <Fade
            direction="left"
            triggerOnce={true}
            delay={200}
            cascade
            damping={1e-1}>
            <div className="flex items-center gap-3">
              <Link
                href={"/#contact"}
                className="bg-gradient-to-r to-orange-500 from-violet-300 p-[1px] rounded-full transition-all duration-300 hover:from-orange-500 hover:to-violet-600">
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0a0a0a] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#fff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-2 hover:gap-4">
                  <span>Start now</span>
                  <RiGamepadLine size={16} />
                </button>
              </Link>

              <Link
                href={personalData.resume}
                role="button"
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-300 text-black px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:text-black/80 hover:no-underline md:font-semibold">
                <span>Guide</span>
                <RiGuideLine />
              </Link>
            </div>
          </Fade>
        </div>

        <div className="flex flex-row order-1 lg:order-2 relative rounded-lg">
          <div className="sm:absolute sm:-top-40 sm:z-10 sm:-right-40">
            <AnimationLottie animationPath={herolottie} />
          </div>
          <div className="sm:absolute sm:z-0 sm:top-10">
            <LottieHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
