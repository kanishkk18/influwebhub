
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

const OrderOption = ({ 
  title, 
  description, 
  icon, 
  onClick 
}) => {
  return (
    <Card 
      className="card-glow cursor-pointer hover:border-primary/50 transition-all duration-300 animate-slide-up"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {title === "Bulk Order"
            ? "Post a bulk order open to all influencers who meet your criteria. No need to select individual influencers."
            : title === "Budget-Based"
            ? "Specify your budget and the platform will recommend the best influencers within that budget."
            : title === "Influencer Selection"
            ? "Browse and select specific influencers you want to work with. Full control over who promotes your product."
            : "Get personalized assistance from our expert team to create a custom marketing strategy."}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Select This Option
        </Button>
      </CardFooter>
    </Card>
  );
};

const OrderOptions = () => {
  const Router = useRouter();

  const handleOptionSelect = (option) => {
    toast({
      title: "Order option selected",
      description: `You've selected the ${option} option.`,
    });
    Router.push(`/brand/CreateOrder/${option.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-medium mb-2">Create New Order</h1>
        <p className="text-muted-foreground">Choose how you'd like to place your order</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OrderOption
          title="Bulk Order"
          description="Open to All Influencers"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
            </svg>
          }
          onClick={() => handleOptionSelect("Bulk Order")}
        />
        
        <OrderOption
          title="Budget-Based"
          description="Platform Recommends Influencers"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 17a5 5 0 0 0 5 5c2.76 0 5-2.24 5-5a5 5 0 0 0-5-5c-2.76 0-5 2.24-5 5Z" />
              <path d="M12 17a5 5 0 0 0 5 5c2.76 0 5-2.24 5-5a5 5 0 0 0-5-5c-2.76 0-5 2.24-5 5Z" />
              <path d="M7 17a5 5 0 0 0 0-6" />
              <path d="M17 22a5 5 0 0 0 0-10" />
            </svg>
          }
          onClick={() => handleOptionSelect("Budget Based")}
        />
        
        <OrderOption
          title="Influencer Selection"
          description="Choose Specific Influencers"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
          onClick={() => handleOptionSelect("Influencer Selection")}
        />
        
        <OrderOption
          title="Customized Offer"
          description="Connect With Our Team"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
              <path d="M8.5 2h7" />
              <path d="M14.5 16h-5" />
            </svg>
          }
          onClick={() => handleOptionSelect("Customized Offer")}
        />
      </div>
    </div>
  );
};

export default OrderOptions;
