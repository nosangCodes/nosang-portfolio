import Footer from "@/components/footer";
import HeroLogo from "@/components/hero-logo";
import List from "@/components/list";

const homeNavItems = [
  {
    text: "Projects",
    link: "projects",
  },
  {
    text: "Experience",
    link: "experience",
  },
  {
    text: "About",
    link: "about",
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
