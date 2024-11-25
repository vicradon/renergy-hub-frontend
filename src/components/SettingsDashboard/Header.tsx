import { Bell, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Man from "../../assets/man.png";

interface TopbarProps {
  className?: string;
}

const Topbar = ({ className }: TopbarProps) => {
  return (
    <div className="hidden md:flex sticky top-0 z-30 h-16 w-[72rem] items-center justify-between bg-white px-6 ml-24">
      {/* Search Bar */}
      <div className="flex flex-1 items-center max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-[33rem] top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            className="w-full pl-10 bg-gray-100 border-none"
          />
        </div>
      </div>

      {/* Right Section - Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white grid place-items-center">
            3
          </span>
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full overflow-hidden">
                  <img
                    src={Man}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium">Gabriel James</div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;
