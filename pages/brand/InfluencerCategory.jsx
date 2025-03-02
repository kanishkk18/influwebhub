import React from 'react';
import { Influencer } from '@/components/assets/influencers';
import InfluencerCard from './InfluencerCard';
import { Instagram, Youtube } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const InfluencerCategory = ({ 
  platform, 
  influencers 
}) => {
  const isMobile = useIsMobile();
  const filteredInfluencers = influencers.filter(inf => inf.platform === platform);
  
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6 animate-slide-in">
        {platform === 'instagram' ? (
          <Instagram size={24} className="mr-3 text-pink-500" />
        ) : (
          <Youtube size={24} className="mr-3 text-red-500" />
        )}
        <h2 className="text-2xl font-bold">
          {platform === 'instagram' ? 'Instagram' : 'YouTube'}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInfluencers.map((influencer, index) => (
          <InfluencerCard 
            key={influencer.id} 
            influencer={influencer} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
export default InfluencerCategory;