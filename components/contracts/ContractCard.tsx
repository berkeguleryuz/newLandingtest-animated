import React from "react";

const ContractCard = ({ contract }: { contract: any }) => {
  return (
    <div className="from-neutral-950 relative rounded-lg border bg-gradient-to-r to-neutral-900 w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-lime-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-lime-600 to-transparent"></div>
      </div>

      <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          {/* <Image
            src={"/lines.png"}
            alt="contract"
            width={500}
            height={500}
            className="absolute z-0 top-0 left-0 bg-repeat w-full h-full opacity-5"
          /> */}
          <div className="z--10">
            <div className="p-3 bg-orange-500 text-white inline-block mr-3">
              {contract.id}
            </div>
            <div className="text-amber-300 mt-3 text-2xl font-semibold">
              {contract.name}
            </div>
          </div>

          <div>
            <span className="mr-2">Trigger:</span>
            <span className="text-orange-500">{contract.trigger}</span>
          </div>

          <div className="mr-2 mt-5">
            <span>{contract.description}</span>
          </div>

          <div className="mr-2 mt-5 bg-[#16f2b3] rounded-full px-3 py-2 inline-block cursor-pointer">
            <span className="text-black">{contract.type}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default ContractCard;
