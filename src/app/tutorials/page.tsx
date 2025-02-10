import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TutorialsBreadcrumb } from "@/components/TutorialsBreadcrumb"
import { HeaderSimple } from "@/components/Blocks/Header/Simple/HeaderSimple";
import { DoubleHeader } from "@/components/Blocks/Header/MultiLayers/DoubleHeader";
import { Setting } from "@/components/Blocks/Config/Setting";
import { Column } from "@/components/Blocks/Config/Column";
import { Pages } from "@/components/Blocks/Config/Pages";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-white dark:bg-black sticky top-0 z-10 h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <TutorialsBreadcrumb />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div id="scrollspy" className="space-y-4 pe-1">
            <Pages />
            <Column />
            <Setting />
            <HeaderSimple />
            <DoubleHeader />
            <div className="h-[16.5rem]"></div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
