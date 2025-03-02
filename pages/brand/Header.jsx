
import { useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from 'next/link';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b animate-slide-down">
      <div className="flex items-center gap-2">
      <Link href='/' className='flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md'>
            <div className='flex justify-center items-center'>
              <img className="h-16 w-16 object-cover rounded-xl p-2" src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1740647241/CONFERIO/dbbzjpqczmrz7cw8pf3w.png" alt="" />
            </div>
          </Link>      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant="outline"
          size="sm"
          className="relative"
          onClick={toggleNotifications}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </Button>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium">Jane Smith</div>
            <div className="text-xs text-muted-foreground">Brand Manager</div>
          </div>
          <Avatar className="h-9 w-9">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="User" />
          </Avatar>
        </div>
      </div>
      
      {showNotifications && (
        <div className="absolute right-6 top-16 w-80 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg border p-4 animate-fade-in">
          <h3 className="font-medium mb-2">Notifications</h3>
          <div className="space-y-2">
            <div className="p-2 hover:bg-muted rounded-md transition-colors">
              <p className="text-sm">New influencer applied for your campaign</p>
              <span className="text-xs text-muted-foreground">2 minutes ago</span>
            </div>
            <div className="p-2 hover:bg-muted rounded-md transition-colors">
              <p className="text-sm">Content for "Summer Collection" is ready for review</p>
              <span className="text-xs text-muted-foreground">1 hour ago</span>
            </div>
            <div className="p-2 hover:bg-muted rounded-md transition-colors">
              <p className="text-sm">Campaign "Spring Launch" completed</p>
              <span className="text-xs text-muted-foreground">Yesterday</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-2">View all</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
