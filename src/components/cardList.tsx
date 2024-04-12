import React from "react";
import TextCard from "./TextCard";
import { TbPoint } from "react-icons/tb";
interface cardListProps {
  children: React.ReactNode[];
  content: PlanType[];
  iconHeader?: JSX.Element;
  iconFooter?: JSX.Element;
}
const CardList: React.FC<cardListProps> = ({
  children,
  content,
  iconFooter,
  iconHeader,
}) => {
  return (
    <section>
      <div className="text-center mb-8">{children}</div>

      <div className="card-grid md:max-w-[90%] mx-auto">
        {content.map((item: PlanType, index: number) => {
          return (
            <TextCard
              heading={item.title}
              iconFooter={iconFooter}
              iconHeader={iconHeader}
              key={index}
              description={item.description}
            >
              {item.perk.map((text: string) => {
                return <h1 className="text-2xl">&bull; {text}</h1>;
              })}
            </TextCard>
          );
        })}
      </div>
    </section>
  );
};
export default CardList;
