import React from "react";
import Spotify from "../../assets/Spotify.svg";
import Google from "../../assets/Google.svg";
import Ubar from "../../assets/Ubar.svg";
import Microsoft from "../../assets/Microsoft.svg";
import Shopify from "../../assets/Shopify.svg";
import Evernote from "../../assets/Evernote.svg";
import Adobe from "../../assets/Adobe.svg";
import PayPal from "../../assets/PayPal.svg";
import Amazon from "../../assets/Amazon.svg";
import Asana from "../../assets/Asana.svg";

function logo() {
  const partnerLogo = [
    { svg: Spotify },
    { svg: Google },
    { svg: Ubar },
    { svg: Microsoft },
    { svg: Shopify },
    { svg: Evernote },
    { svg: Adobe },
    { svg: PayPal },
    { svg: Amazon },
    { svg: Asana },
  ];
  return (
    <section>
      <div className="mt-36 media-margin-top bg-[#FAFAFA]">
        <div className=" py-14">
          <h1 className="text-2xl font-semibold text-center">
            Compaines We Work With
          </h1>
          <div
            className="grid grid-cols-5 gap-y-
          7 place-items-center w-full mt-20"
          >
            {partnerLogo.map((item, index) => {
              return (
                <div key={index} className="mb-5 w-[50%] h-14">
                  <img
                    src={item.svg}
                    className="text-4xl object-contain m-auto"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default logo;
