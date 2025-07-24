"use client";
<<<<<<< HEAD
=======

>>>>>>> main
import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
<<<<<<< HEAD
=======
  CollapsibleContent,
>>>>>>> main
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
<<<<<<< HEAD
} from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router";
=======
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router";
// import { ROUTE_PATH } from "@/lib/route-path";
>>>>>>> main

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
<<<<<<< HEAD
=======
    items?: {
      title: string;
      url: string;
    }[];
>>>>>>> main
  }[];
}) {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (url: string) => location.pathname === url;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={isActive(item.url)}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  onClick={() => navigate(item.url)}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {item.items && item.items.length > 0 && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
<<<<<<< HEAD
              {/* <CollapsibleContent>
=======
              <CollapsibleContent>
>>>>>>> main
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        onClick={() => navigate(subItem.url)}
                      >
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
<<<<<<< HEAD
              </CollapsibleContent> */}
=======
              </CollapsibleContent>
>>>>>>> main
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
