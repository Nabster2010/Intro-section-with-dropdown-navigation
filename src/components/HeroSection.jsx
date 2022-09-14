import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse items-center justify-between md:flex-row gap-8 lg:px-8 md:px-2 mt-10">
      <aside className="flex flex-col items-start justify-between min-w-[50%] pt-8 md:pt-16 ">
        <div className="space-y-8 w-full flex flex-col items-center md:items-start text-center md:text-left ">
          <h1 className="text-4xl md:text-6xl   font-bold text-AlmostBlack">
            Make remote work
          </h1>
          <p className="text-MediumGray">
            Get your team in sync, no matter your location.
            <br /> Streamline processes, create team rituals, and
            <br /> watch productivity soar.
          </p>
          <button className="text-white bg-AlmostBlack px-6 py-3 border border-AlmostBlack rounded-2xl   hover:text-AlmostBlack hover:bg-white transition">
            Learn more
          </button>
        </div>
        <div className=" w-full  flex justify-start items-center gap-8 py-4 md:mt-0 mt-16">
          <img src="/images/client-audiophile.svg" alt="" />
          <img src="/images/client-databiz.svg" alt="" />
          <img src="/images/client-maker.svg" alt="" />
          <img src="/images/client-meet.svg" alt="" />
        </div>
      </aside>

      <picture className="">
        <source
          media="(min-width:768px)"
          srcSet="/images/image-hero-desktop.png"
        />
        <source
          media="(max-width:768px)"
          srcSet="/images/image-hero-mobile.png"
        />
        <img
          className="min-w-full block max-w-[50%] h-[450px] object-scale-down  "
          src="/images/image-hero-mobile.png"
          alt=""
        />
      </picture>
    </main>
  );
};

export default HeroSection;
