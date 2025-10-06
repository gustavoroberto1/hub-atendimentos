import { Header } from "@/components/Header";
import { MenuNavigation } from "@/components/MenuNavigation";
import { ScrollProvider } from "@/context/scroll";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <Header />
      <MenuNavigation>{children}</MenuNavigation>
    </ScrollProvider>
  );
}
