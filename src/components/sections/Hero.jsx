"use client";

const Hero = () => {
  return (
    <section
      className="h-min-screen xl:h-[90vh] pb-[62px] pt-[100px]"
      id="hero"
    >
      <div className="container mx-auto h-full xl:pt-10 flex items-center justify-center">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* Video */}
          <div className="w-full h-[607px] border-8 border-black rounded-[32px] mt-[2rem] bg-yellow-300">
            {/* Add video */}
          </div>

          {/* Text Hero Section */}
          <div>
            <h1 className="h1 mt-[32px] mb-[12px]">
              Discover the joy of learning
            </h1>
            <p className="p mb-8">
              Our app makes studying not only effective but also fun and
              engaging. Join us on a journey where learning is an exciting
              adventure.
            </p>
            <button className="btn">See Features</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
