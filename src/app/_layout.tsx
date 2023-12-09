import "../global.css";

import { Header } from "@/components/header";
import { Navigator, Slot } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  return (
    <Navigator>
      <div className="overflow-scroll flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <Header className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search />
          <UserNav /> */}
            </div>
          </div>
        </div>
        <Slot />
      </div>
    </Navigator>
  );
}
