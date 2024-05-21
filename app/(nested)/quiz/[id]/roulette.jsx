import { Button } from "@/components/ui/button";
import { Wheel } from "react-custom-roulette";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Roulette = ({
  mustSpin,
  quizDisabled,
  prizeNumber,
  data,
  setMustSpin,
  handleSpinClick,
  disable,
  pointerProps,
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="super" disabled={quizDisabled}>
            Try Your Luck
          </Button>
        </DialogTrigger>
        <DialogContent className="shadow-inner w-full py-8 rounded- px-4 lg:px-12 z-50">
          <div className="flex items-center w-full justify-center flex-col space-y-4">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              outerBorderColor={["#f2f2f2"]}
              outerBorderWidth={[15]}
              innerBorderColor={["#f2f2f2"]}
              radiusLineColor={["#f2f2f2"]}
              radiusLineWidth={[5]}
              textColors={["#ffffff"]}
              fontSize={[20]}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
              pointerProps={pointerProps}
            />
            <Button
              variant="primary"
              className="px-8"
              onClick={handleSpinClick}
              disabled={disable}
            >
              SPIN
            </Button>
            <div className="p-2 h-12 w-full">
              {!mustSpin && disable && (
                <p className="text-center text-xs font-medium">
                  {data[prizeNumber].result === "lost" ? (
                    <span className="font-semibold text-xs text-red-800">
                      {data[prizeNumber].text}
                    </span>
                  ) : (
                    <>
                      <span className="font-semibold text-xs text-sky-800">
                        Congratulations!{" "}
                      </span>
                      You won{" "}
                      <span className="font-semibold text-xs text-sky-800">
                        {data[prizeNumber].option}
                      </span>{" "}
                      Coupon
                      <br />
                      <span className="font-semibold text-xs text-sky-800">
                        {data[prizeNumber].subText}
                      </span>
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <p className="text-sm text-center text-gray-500 py-5">
        {quizDisabled
          ? "Answer all questions to unlock chance to win exciting prizes"
          : "Congratulations! You can now take part and win exciting prizes"}
      </p>
    </>
  );
};

export default Roulette;
