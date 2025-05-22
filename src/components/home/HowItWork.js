import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Join the community",
      description:
        "Download the app and register – it’s free! We review each application individually to ensure the Enlighten’s community remains a safe and welcoming place for our users.",
      imgSrc: "/phone2.png",
    },
    {
      title: "2. Find your partner",
      description:
        "Immediately after registration, we will help you to find suitable interlocutors, partners. Use filters by language, location, interests and other parameters.",
      imgSrc: "/phone3.png",
    },
    {
      title: "3. Start communicating!",
      description:
        "Use message correction and translation functions right in the application.",
      imgSrc: "/phone4.png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-6 sm:py-8 px-4 sm:px-6 md:px-8 bg-[url('/bg.webp')] bg-cover bg-center w-full mt-12 sm:mt-16 md:mt-20 lg:mt-28 pt-12 sm:pt-16 md:pt-20 lg:pt-28">
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        How does Enlighten work?
      </h2>

      <div className="max-w-[1440px] mx-auto w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between w-full max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6`}
          >
            {/* Phone Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img 
                src={step.imgSrc} 
                alt={`Step ${index + 1}`} 
                className="max-w-[200px] sm:max-w-[220px] md:max-w-xs h-auto" 
              />
            </div>

            {/* Text Content */}
            <div className="md:px-4 lg:px-8 w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{step.title}</h3>
              <p className="text-base sm:text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
