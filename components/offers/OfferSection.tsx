import Image from "next/image";
import React from "react";
import GlowCard from "../helper/glow-card";
import { BsBack, BsBasket } from "react-icons/bs";

export const offersData = [
  {
    id: 1,
    title: "Offer 1",
    action: "Learn More",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore consectetur ratione quam ipsa quibusdam doloribus consequatur molestias assumenda debitis natus aspernatur laborum quaerat corrupti odio eligendi repellat sed ex aut, commodi doloremque et. Ipsum vero nobis fugit deleniti beatae, dolorem recusandae voluptate sunt! Obcaecati ea ullam distinctio magni itaque.",
    icon: <BsBasket size={36} />,
  },
  {
    id: 2,
    title: "Offer 2",
    action: "Learn More",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore consectetur ratione quam ipsa quibusdam doloribus consequatur molestias assumenda debitis natus aspernatur laborum quaerat corrupti odio eligendi repellat sed ex aut, commodi doloremque et. Ipsum vero nobis fugit deleniti beatae, dolorem recusandae voluptate sunt! Obcaecati ea ullam distinctio magni itaque.",
    icon: <BsBasket size={36} />,
  },
  {
    id: 3,
    title: "Offer 3",
    action: "Learn More",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore consectetur ratione quam ipsa quibusdam doloribus consequatur molestias assumenda debitis natus aspernatur laborum quaerat corrupti odio eligendi repellat sed ex aut, commodi doloremque et. Ipsum vero nobis fugit deleniti beatae, dolorem recusandae voluptate sunt! Obcaecati ea ullam distinctio magni itaque.",
    icon: <BsBasket size={36} />,
  },
  {
    id: 4,
    title: "Offer 4",
    action: "Learn More",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore consectetur ratione quam ipsa quibusdam doloribus consequatur molestias assumenda debitis natus aspernatur laborum quaerat corrupti odio eligendi repellat sed ex aut, commodi doloremque et. Ipsum vero nobis fugit deleniti beatae, dolorem recusandae voluptate sunt! Obcaecati ea ullam distinctio magni itaque.",
    icon: <BsBack size={36} />,
  },
  {
    id: 5,
    title: "Offer 5",
    action: "Learn More",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore consectetur ratione quam ipsa quibusdam doloribus consequatur molestias assumenda debitis natus aspernatur laborum quaerat corrupti odio eligendi repellat sed ex aut, commodi doloremque et. Ipsum vero nobis fugit deleniti beatae, dolorem recusandae voluptate sunt! Obcaecati ea ullam distinctio magni itaque.",
    icon: <BsBack size={36} />,
  },
  {
    id: 6,
    title: "Offer 6",
    action: "Learn More",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore consectetur ratione quam ipsa quibusdam doloribus consequatur molestias assumenda debitis natus aspernatur laborum quaerat corrupti odio eligendi repellat sed ex aut, commodi doloremque et. Ipsum vero nobis fugit deleniti beatae, dolorem recusandae voluptate sunt! Obcaecati ea ullam distinctio magni itaque.",
    icon: <BsBack size={36} />,
  },
];

const OfferSection = () => {
  return (
    <section className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={"/hero.png"}
        alt="hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-volet-500 to-transparent w-full"></div>
        </div>
      </div>

      <div className="sticky top-10 ">
        <div className="text-orange-500 text-[14px] my-24 flex justify-center uppercase tracking-widest">
          [ OFFERS ]
        </div>
      </div>

      <div className="py-8 items-center text-center justify-center flex">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {offersData.map((offer) => (
            <GlowCard key={offer.id} identifier={`offer-${offer.id}`}>
              <div className="p-5 relative">
                <div className="gap-x-8 px-3 py-5">
                  <div className="text-orange-500 mb-5 transition-all duration-300 flex items-center justify-center">
                    {offer.icon}
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-xl mt3 font-medium">
                    {offer.title}
                  </p>
                  <p className="text-sm sm:text-base leading-8 mt-3">
                    {offer.description}
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm mt-3 text-orange-500 hover:text-orange-700 inline-block border border-orange-500 px-3 py-2 hover:bg-orange-100 rounded-lg">
                    {offer.action}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
