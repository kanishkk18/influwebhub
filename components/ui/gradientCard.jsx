import React from 'react';
import { Palette, Type, Grid, Image, BookOpen, Layers } from 'lucide-react';

function GradientCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-blue-950 flex flex-col items-center justify-center p-6">
      <div className="bg-purple-600 text-white font-medium px-6 py-2 rounded-full mb-4">
        544 Components
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
        Pro-Grade Brand Management
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Card 1 - Logo System */}
        <Card 
          icon={<Layers className="w-10 h-10 text-purple-300" />}
          title="Logo System"
          description="Professional scale logo management & guidelines"
        />
        
        {/* Card 2 - Color System */}
        <Card 
          icon={
            <div className="relative">
              <div className="absolute w-8 h-8 rounded-full bg-cyan-300 -left-2"></div>
              <div className="absolute w-8 h-8 rounded-full bg-blue-600 left-2"></div>
            </div>
          }
          title="Color System"
          description="Professional scale logo management & guidelines"
        />
        
        {/* Card 3 - Type System */}
        <Card 
          icon={<Type className="w-10 h-10 text-white" />}
          title="Type System"
          description="Professional scale logo management & guidelines"
        />
        
        {/* Card 4 - Grid System */}
        <Card 
          icon={<Grid className="w-10 h-10 text-blue-400" />}
          title="Grid System"
          description="Professional scale logo management & guidelines"
        />
        
        {/* Card 5 - Icon & Image Library */}
        <Card 
          icon={<Image className="w-10 h-10 text-orange-400" />}
          title="Icon & Image Library"
          description="Professional scale logo management & guidelines"
        />
        
        {/* Card 6 - Full Brand Book */}
        <Card 
          icon={<BookOpen className="w-10 h-10 text-white" />}
          title="Full Brand Book"
          description="Professional scale logo management & guidelines"
        />
      </div>
    </div>
  );
}

// Card component with shining border effect
function Card({ icon, title, description }) {
  return (
    <div className="relative group">
      {/* Shining border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
      
      <div className="relative flex flex-col items-center p-8 bg-black rounded-lg">
        {/* Icon container */}
        <div className="w-24 h-24 flex items-center justify-center border border-gray-800 rounded-lg mb-6">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm text-center">{description}</p>
      </div>
    </div>
  );
}

export default GradientCard;