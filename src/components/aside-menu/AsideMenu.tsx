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

const menuItems = [
  { text: "Home", icon: <HomeIcon />, href: "", id: "" },
  { text: "Pacttos (Chats)", icon: <QuestionAnswerIcon />, href: "", id: "" },
  { text: "Items to review", icon: <VideoLibraryIcon />, href: "", id: "" },
  { text: "Web links you created", icon: <InsertLinkIcon />, href: "", id: "" },
  {
    text: "Personal information",
    icon: <ManageAccountsIcon />,
    href: "#",
    id: "personal-information",
  },
  {
    text: "Review packages for sale",
    icon: <CardGiftcardIcon />,
    href: "#",
    id: "packages-sale",
  },
  {
    text: "Pactto website",
    icon: <ViewCarouselIcon />,
    href: "#",
    id: "pactto-website",
  },
  {
    text: "Reference video library",
    icon: <OndemandVideoIcon />,
    href: "#",
    id: "reference-video-library",
  },
  {
    text: "Subscription",
    icon: <SubscriptionsIcon />,
    href: "#",
    id: "subscription",
  },
  {
    text: "Review Settings",
    icon: <SettingsIcon />,
    href: "#",
    id: "review-settings",
  },
];

export default function AsideMenu() {
  return (
    <ul className="text-pactto-gray text-sm">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="flex gap-2 h-12 items-center hover:bg-[#3a363f] p-8 cursor-pointer"
          >
            {item.icon}
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
