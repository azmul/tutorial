import { AppSidebar } from "@/components/AppSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div id="scrollspy" className="space-y-4 pe-1 pt-3">
            <div id="chapter-1">
              <p className="text-base-content text-lg font-semibold">
                Chapter 1
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div id="chapter-1-1">
              <p className="text-base-content text-lg font-semibold">
                Chapter 1-1
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div id="chapter-1-2">
              <p className="text-base-content text-lg font-semibold">
                Chapter 1-2
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div id="chapter-2">
              <p className="text-base-content text-lg font-semibold">
                Chapter 2
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div id="chapter-3">
              <p className="text-base-content text-lg font-semibold">
                Chapter 3
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div id="chapter-3-1">
              <p className="text-base-content text-lg font-semibold">
                Chapter 3-1
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div id="chapter-3-2">
              <p className="text-base-content text-lg font-semibold">
                Chapter 3-2
              </p>
              <p className="mt-1 text-sm leading-6">
                This placeholder content serves to demonstrate the functionality
                of the scrollspy page. As you scroll down, the corresponding
                navigation link is highlighted to indicate the active section.
                This example copy is continuously added to underscore the
                scrolling and highlighting feature.
              </p>
            </div>
            <div className="h-[16.5rem]"></div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
