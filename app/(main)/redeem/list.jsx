import { getUserPoints } from "@/actions/server-utils";
import Card from "./card";
import { auth } from "@/auth";
import { getRewards } from "@/data/queries";

const List = async () => {
  const [session, rewards] = await Promise.all([auth(), getRewards()]);
  const points = await getUserPoints(session.user.email);

  return (
    <>
      <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {rewards.map(
          (reward) =>
            reward.isActive && (
              <Card
                key={reward.id}
                id={reward.id}
                name={reward.name}
                image={reward.image}
                description={reward.description}
                disabled={points < 25}
                userEmail={session.user.email}
                points={points}
              />
            )
        )}
      </div>
      {points < 25 && (
        <p className="text-muted-foreground text-sm mt-5 ml-2 text-red-500">
          * You need at least 25 points to redeem any of these items.
        </p>
      )}
    </>
  );
};

export default List;
