import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, href: "/", id: "home" },
  {
    text: "Pacttos (Chats)",
    icon: <QuestionAnswerIcon />,
    href: "/chats",
    id: "chats",
  },
  {
    text: "Items to review",
    icon: <VideoLibraryIcon />,
    href: "/review-items",
    id: "review-items",
  },
  {
    text: "Web links you created",
    icon: <InsertLinkIcon />,
    href: "/links-created",
    id: "links-created",
  },
  {
    text: "Personal information",
    icon: <ManageAccountsIcon />,
    href: "/personal-information",
    id: "personal-information",
  },
  {
    text: "Review packages for sale",
    icon: <CardGiftcardIcon />,
    href: "/packages-for-sale",
    id: "packages-for-sale",
  },
  {
    text: "Pactto website",
    icon: <ViewCarouselIcon />,
    href: "/pactto-website",
    id: "pactto-website",
  },
  {
    text: "Reference video library",
    icon: <OndemandVideoIcon />,
    href: "/reference-video-library",
    id: "reference-video-library",
  },
  {
    text: "Subscription",
    icon: <SubscriptionsIcon />,
    href: "/subscription",
    id: "subscription",
  },
  {
    text: "Review Settings",
    icon: <SettingsIcon />,
    href: "/settings",
    id: "settings",
  },
];

export default function AsideMenu() {
  const pathname = usePathname();
  return (
    <ul className="text-pactto-gray text-sm">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={`flex gap-2 h-12 items-center hover:bg-[#3a363f] p-8 cursor-pointer ${pathname === item.href ? "bg-[#49464e] text-accent" : ""}`}
          >
            {item.icon}
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
