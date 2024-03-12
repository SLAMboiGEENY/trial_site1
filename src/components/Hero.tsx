import React from 'react';

interface HeroProps {
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div 
      className='relative bg-cover bg-center py-20'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hero section of my shit site</h1>
            <p className="text-lg md:text-xl">Explore my body sexually and metaphysically</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;