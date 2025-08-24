"use client";

import * as React from "react";
import {
  AudioWaveform,
  Clapperboard,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react";
import { IconUser, IconReport } from "@tabler/icons-react";

import { NavMain } from "./nav-main"; 
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar";

import { ROUTE_PATH } from "@/lib/route-path";

// ------------------ Sample Data ------------------
const data = {
  user: {
    name: "Menghong",
    email: "PenMenghong7@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    { name: "Hostpital Management", logo: GalleryVerticalEnd, plan: "Enterprise" },
    { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
  navMain: [
    { title: "Dashboard", url: ROUTE_PATH.root, icon: SquareTerminal },
    { title: "Patients", url: ROUTE_PATH.PatientPage.root, icon: IconUser },
    { title: "Doctors", url: ROUTE_PATH.DoctorPage.root, icon: IconUser },
    { title: "Appointments", url: ROUTE_PATH.AppointmetPage.root, icon: IconReport },
    { title: "Movies", url: ROUTE_PATH.movies.root, icon: Clapperboard },
  ],
};

// ------------------ Sidebar Component ------------------
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
