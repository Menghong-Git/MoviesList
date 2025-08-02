// import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import SearchForm from "@/components/search-filter/Search";
import {
  Breadcrumb,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SignUpButton from "@/pages/signup";

import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <h1 className="text-black-600 font-medium ">
                  Hospital Management
                </h1>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <SearchForm />
          </div>
          <div className="flex items-end ml-auto mx-10 gap-3">
            <SignUpButton/>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
