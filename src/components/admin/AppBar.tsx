import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  Image,
  LogOut,
  LucideIcon,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/image/eng_logo.png";
import NavChip from "@/components/admin/NavChip";

// Define item type
type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const items: NavItem[] = [
  
  {
    title: "Gallery",
    url: "/admin/gallery",
    icon: Image,
  },
];

const AppBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <img
          src={Logo}
          alt="Logo"
          onClick={() => navigate("/admin")}
          className="cursor-pointer h-auto w-auto"
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={currentPath === item.url}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavChip
          navTitle="Logout"
          Icon={LogOut}
          onClick={handleLogout}
          isLogout={true}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppBar;
