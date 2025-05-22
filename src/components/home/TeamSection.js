"use client"
import Image from 'next/image';

const people = [
  {
    name: 'Irma',
    nativeLanguage: 'German',
    learningLanguage: 'English',
    imageSrc: 'https://res.cloudinary.com/dh20zdtys/image/upload/v1723734938/jane_xtm2nz.jpg', // Replace with actual image path
},
{
    name: 'Jane',
    nativeLanguage: 'English',
    learningLanguage: 'Spanish',
    imageSrc: 'https://res.cloudinary.com/dh20zdtys/image/upload/v1723734935/irma_ycsya6.jpg', // Replace with actual image path
  },
];

const TeamSection = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#074C77]">What is Enlighten?</h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#074C77] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          The language learning app where people teach each other languages while kindling a shared commitment to safeguarding our environment.
        </p>
        <p className="mt-2 text-base sm:text-lg font-medium text-[#407023]">
          Join us as we learn from each other and unite in our mission to protect our planet!
        </p>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row w-full justify-center md:space-x-6 lg:space-x-10 space-y-8 md:space-y-0 mx-auto">
        {people.map((person, index) => (
          <div key={index} className="relative max-w-[350px] mx-auto md:mx-0 w-full">
            <div className="relative">
              <Image
                src={person.imageSrc}
                alt={person.name}
                width={500}
                height={500}
                className="object-cover rounded-lg w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 sm:p-4 rounded-b-lg">
                <p className="text-white text-sm sm:text-lg md:text-xl">
                  {person.name} – native speaker of {person.nativeLanguage}. Learns {person.learningLanguage}.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
