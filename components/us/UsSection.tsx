import Image from "next/image";
import React from "react";

import GlowCard from "../helper/glow-card";

const aboutOCW = [
  {
    id: 1,
    title: "ABOUT ONCHAIN WIN",
    process: "process",
    description: "description",
  },
  {
    id: 2,
    title: "Onchain",
    process: "process",
    description: "description",
  },
  {
    id: 3,
    title: "Onchain",
    process: "process",
    description: "description",
  },
];

const contractOCW = [
  {
    id: 1,
    title: "Onchain",
    process: "process",
    description: "description",
  },
  {
    id: 2,
    title: "Onchain",
    process: "process",
    description: "description",
  },
  {
    id: 3,
    title: "Onchain",
    process: "process",
    description: "description",
  },
];

const UsSection = () => {
  return (
    <section className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={"/hero.png"}
        alt="logo"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-volet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="text-orange-500 text-[14px] my-24 flex justify-center uppercase tracking-widest">
        [ PROCESS ]
      </div>

      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-6">
            {aboutOCW.map((item) => (
              <GlowCard key={item.id} identifier={`award-${item.id}`}>
                <div className="p-3 relative">
                  <Image
                    src={"/blur-23.svg"}
                    alt="Hero"
                    width={200}
                    height={200}
                    className="absolute bottom-0 right-5 z-10 opacity-80"
                  />

                  <div className="flex justify-end absolute right-0 mr-5 mt-3">
                    <p className="text-zs sm:text-sm bg-[#16f2b3] rounded-full text-black px-3 py-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-8 px-3 py-2">
                    <Image
                      src={"/placeholder.png"}
                      alt="Placeholder"
                      width={80}
                      height={40}
                      className="hover:scale-125 transition-all duration-500 rounded-xl"
                    />
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base">{item.process}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {contractOCW.map((item) => (
              <GlowCard key={item.id} identifier={`experience-${item.id}`}>
                <div className="p-3 relative">
                  <Image
                    src={"/blur-23.svg"}
                    alt="Hero"
                    width={200}
                    height={200}
                    className="absolute bottom-0 right-5 z-10 opacity-80"
                  />

                  <div className="flex justify-end absolute right-0 mr-5 mt-3">
                    <p className="text-zs sm:text-sm bg-[#16f2b3] rounded-full text-black px-3 py-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-8 px-3 py-2">
                    <Image
                      src={"/0.jpg"}
                      alt="Placeholder"
                      width={80}
                      height={40}
                      className="hover:scale-125 transition-all duration-500 rounded-xl"
                    />
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base">{item.process}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsSection;
