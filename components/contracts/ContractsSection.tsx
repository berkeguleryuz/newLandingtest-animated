import Image from "next/image";
import React from "react";
import ContractCard from "./ContractCard";

export const contractsData = [
  {
    id: 1,
    name: "Paid Raffle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium a quae officia ducimus minima. Repellendus eius quisquam, unde reiciendis veniam eveniet in a repellat recusandae placeat sed! Exercitationem repellendus dicta vitae labore assumenda, quia voluptas dolor aspernatur sit dolores cum asperiores doloremque excepturi, distinctio facilis mollitia ad enim, iure incidunt ipsum at illo eveniet eaque. Culpa, consequuntur! Quasi illum, non, atque molestiae magni possimus nam, dolorum laudantium magnam cumque placeat animi aliquid aliquam temporibus nihil sint laborum at eaque! Hic, doloribus rem. Ex vel, esse cupiditate necessitatibus maxime eveniet nesciunt odit labore voluptatum inventore rerum amet adipisci similique rem veniam dolorem pariatur aliquam, aut reiciendis. Iusto porro saepe eos suscipit dolores asperiores tempore omnis quo repellendus, magni amet facilis! Est nobis voluptatibus repellendus. Voluptas consequuntur, laboriosam at quo, explicabo nostrum odit incidunt neque magni nihil voluptate consequatur, sapiente eos itaque beatae ex soluta excepturi ab cupiditate voluptates perferendis voluptatibus! Nemo.",
    trigger: "trigger",
    type: "ETH & SCR",
  },
  {
    id: 2,
    name: "Free Raffle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium a quae officia ducimus minima. Repellendus eius quisquam, unde reiciendis veniam eveniet in a repellat recusandae placeat sed! Exercitationem repellendus dicta vitae labore assumenda, quia voluptas dolor aspernatur sit dolores cum asperiores doloremque excepturi, distinctio facilis mollitia ad enim, iure incidunt ipsum at illo eveniet eaque. Culpa, consequuntur! Quasi illum, non, atque molestiae magni possimus nam, dolorum laudantium magnam cumque placeat animi aliquid aliquam temporibus nihil sint laborum at eaque! Hic, doloribus rem. Ex vel, esse cupiditate necessitatibus maxime eveniet nesciunt odit labore voluptatum inventore rerum amet adipisci similique rem veniam dolorem pariatur aliquam, aut reiciendis. Iusto porro saepe eos suscipit dolores asperiores tempore omnis quo repellendus, magni amet facilis! Est nobis voluptatibus repellendus. Voluptas consequuntur, laboriosam at quo, explicabo nostrum odit incidunt neque magni nihil voluptate consequatur, sapiente eos itaque beatae ex soluta excepturi ab cupiditate voluptates perferendis voluptatibus! Nemo.",
    trigger: "trigger şekli",
    type: "Free Ticket",
  },
  {
    id: 3,
    name: "Free3 Raffle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium a quae officia ducimus minima. Repellendus eius quisquam, unde reiciendis veniam eveniet in a repellat recusandae placeat sed! Exercitationem repellendus dicta vitae labore assumenda, quia voluptas dolor aspernatur sit dolores cum asperiores doloremque excepturi, distinctio facilis mollitia ad enim, iure incidunt ipsum at illo eveniet eaque. Culpa, consequuntur! Quasi illum, non, atque molestiae magni possimus nam, dolorum laudantium magnam cumque placeat animi aliquid aliquam temporibus nihil sint laborum at eaque! Hic, doloribus rem. Ex vel, esse cupiditate necessitatibus maxime eveniet nesciunt odit labore voluptatum inventore rerum amet adipisci similique rem veniam dolorem pariatur aliquam, aut reiciendis. Iusto porro saepe eos suscipit dolores asperiores tempore omnis quo repellendus, magni amet facilis! Est nobis voluptatibus repellendus. Voluptas consequuntur, laboriosam at quo, explicabo nostrum odit incidunt neque magni nihil voluptate consequatur, sapiente eos itaque beatae ex soluta excepturi ab cupiditate voluptates perferendis voluptatibus! Nemo.",
    trigger: "trigger",
    type: "Free Ticket",
  },
  {
    id: 4,
    name: "Token Raffle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium a quae officia ducimus minima. Repellendus eius quisquam, unde reiciendis veniam eveniet in a repellat recusandae placeat sed! Exercitationem repellendus dicta vitae labore assumenda, quia voluptas dolor aspernatur sit dolores cum asperiores doloremque excepturi, distinctio facilis mollitia ad enim, iure incidunt ipsum at illo eveniet eaque. Culpa, consequuntur! Quasi illum, non, atque molestiae magni possimus nam, dolorum laudantium magnam cumque placeat animi aliquid aliquam temporibus nihil sint laborum at eaque! Hic, doloribus rem. Ex vel, esse cupiditate necessitatibus maxime eveniet nesciunt odit labore voluptatum inventore rerum amet adipisci similique rem veniam dolorem pariatur aliquam, aut reiciendis. Iusto porro saepe eos suscipit dolores asperiores tempore omnis quo repellendus, magni amet facilis! Est nobis voluptatibus repellendus. Voluptas consequuntur, laboriosam at quo, explicabo nostrum odit incidunt neque magni nihil voluptate consequatur, sapiente eos itaque beatae ex soluta excepturi ab cupiditate voluptates perferendis voluptatibus! Nemo.",
    trigger: "trigger",
    type: "ETH & SCR",
  },
];

const ContractsSection = () => {
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
          [ CONTRACTS ]
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {contractsData.slice(0, 4).map((contract, index) => (
            <div
              className="sticky-card w-full mx-auto sticky"
              key={contract.id}
              id={`sticky-card-${index + 1}`}>
              <ContractCard contract={contract} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;
