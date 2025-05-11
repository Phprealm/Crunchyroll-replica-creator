
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  PlayCircle, 
  Bookmark, 
  Clock, 
  Calendar, 
  Heart, 
  ChevronRight, 
  ChevronLeft 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  path: string;
};

const mainMenuItems: SidebarItem[] = [
  { icon: Home, label: "Home", path: "/" },
  { icon: PlayCircle, label: "Browse", path: "/browse" },
  { icon: Bookmark, label: "My Lists", path: "/my-lists" },
  { icon: Clock, label: "History", path: "/history" },
  { icon: Calendar, label: "Release Calendar", path: "/calendar" },
];

const myListsItems: SidebarItem[] = [
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: Bookmark, label: "Watchlist", path: "/watchlist" },
];

const CrunchySidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cn(
      "h-screen fixed left-0 top-0 bg-background border-r border-border transition-all duration-300 z-40 pt-16",
      collapsed ? "w-16" : "w-60"
    )}>
      <div className="p-3 flex flex-col h-full">
        {/* Toggle button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="self-end mb-4" 
          onClick={toggleSidebar}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
        
        {/* Main menu */}
        <div className="mb-6">
          <div className={cn(
            "text-xs font-medium text-muted-foreground mb-2 px-3",
            collapsed && "text-center"
          )}>
            {!collapsed && "MAIN MENU"}
          </div>
          <ul className="space-y-1">
            {mainMenuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary text-foreground hover:text-crunchyroll-orange transition-colors"
                >
                  <item.icon size={18} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* My Lists */}
        <div className="mb-6">
          <div className={cn(
            "text-xs font-medium text-muted-foreground mb-2 px-3",
            collapsed && "text-center"
          )}>
            {!collapsed && "MY LISTS"}
          </div>
          <ul className="space-y-1">
            {myListsItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary text-foreground hover:text-crunchyroll-orange transition-colors"
                >
                  <item.icon size={18} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Premium banner */}
        {!collapsed && (
          <div className="mt-auto bg-secondary/50 rounded-lg p-4">
            <h4 className="font-bold text-sm mb-2">Upgrade to Premium</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Enjoy ad-free anime, new episodes, and exclusive content
            </p>
            <Button 
              className="w-full bg-crunchyroll-orange hover:bg-orange-600 text-white" 
              size="sm"
            >
              Try Premium
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrunchySidebar;
