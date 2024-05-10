import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import Questions from "./questions";
import { pointDecrease, pointIncrease } from "@/actions/redeem";
import { BackHeader } from "../../backHeader";

const Main = async ({ ques, id }) => {
  const pointIncrement = async () => {
    "use server"
     pointIncrease();
  };

  const pointDecrement = async () => {
    "use server"
    await pointDecrease();
  };

  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
          <BackHeader title={"Quiz"}/>
        <div className="flex justify-center items-center flex-col">
          <div className="flex items-start flex-col max-w-[720px] justify-start">
            <Questions
              ques={ques}
              inc={pointIncrement}
              dec={pointDecrement}  
              id={id}
            />
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
      <strong>To DO later</strong>
      </StickyWrapper>
      </div>
  );
};

export default Main;
