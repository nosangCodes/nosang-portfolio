import Footer from "@/components/footer";
import HeroLogo from "@/components/hero-logo";
import List from "@/components/list";

const homeNavItems = [
  {
    text: "Experience",
    link: "experience",
  },
  {
    text: "Projects",
    link: "projects",
  },
  {
    text: "Contact",
    link: "contact",
  }
];

export default function Home() {
  return (
    <main>
      <List items={homeNavItems} />
    </main>
  );
}
