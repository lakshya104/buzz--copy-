import Card from "./card";
import { getRewards } from "@/data/queries";

const List = async () => {
  const rewards = await getRewards()

  return (
      <div className="py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {rewards.map((reward) => (
          <Card
            key={reward.id}
            id={reward.id}
            name={reward.name}
            image={reward.image}
            description={reward.description}
            text={reward.text}
            active={reward.isActive}
            code={reward.couponCode}
          />
        ))}
      </div>
  );
};

export default List;
