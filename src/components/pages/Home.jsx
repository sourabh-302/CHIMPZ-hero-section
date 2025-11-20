import image from "../../assets/gorilla.png";

export default function Home() {
  return (
    <div className="flex grow justify-center items-center "> 
    <div className="max-w-[1270px] mx-auto px-3">
      <div className="flex flex-row flex-wrap -mx-3 items-center">
        
        <div className="flex w-full md:w-[58.33%] px-3">
          <div className="flex flex-col justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85.54%,rgba(255,255,255,0)_100%)] backdrop-blur-[3px] pt-8 pb-8 px-2">
            
            <h1 className="font-roboto font-semibold text-[16px] text-white [text-shadow:1px_1px_4px_rgb(255,255,255)]">
              APE TOGETHER STRONG
            </h1>

            <p className="font-exo font-bold text-[64px] max-sm:text-5xl text-white leading-[100%] [text-shadow:1px_1px_4px_rgb(255,255,255)]">
              <span className="text-green-400 [text-shadow:1px_1px_4px_rgb(255,255,255)]">
                CHIMPZ
              </span>{" "}
              A Green
              <br /> Revolution for Your <br /> Wallet
            </p>

            <p className="font-fira text-[16px] text-white pt-4 [text-shadow:1px_1px_4px_rgb(255,255,255)]">
              Dedicated to all the chimps around the world, we have created
              a safe haven for all the<br/> risk-takers and degenerates who have
              their helmets ready for the next moon landing.
            </p>

          </div>
        </div>

        <div className="w-full md:w-[41.66%] px-3 flex justify-center">
          <img
            src={image}
            alt="gorilla"
            className="flex justify-center gorilla"
          />
        </div>

      </div>
    </div>
    </div>
  );
}

