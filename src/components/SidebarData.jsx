import home from "../assets/images/home.svg";
import products from "../assets/images/products.svg";
import marketing from "../assets/images/marketing.svg";
import analytics from "../assets/images/analytics.svg";
import wallet from "../assets/images/wallet.svg";
import refer from "../assets/images/refer.svg";
import integrations from "../assets/images/integrations.svg";
import billing from "../assets/images/billing.svg";
import settings from "../assets/images/settings.svg";
import upgrade from "../assets/images/upgrade.svg";

export const SidebarData = [
  {
    id: 1,
    image: home,
    alt: "home",
    text: "Home",
    link: "/dashboard/dashboard-home",
  },
  {
    id: 2,
    image: products,
    alt: "products",
    text: "Products",
    link: "/dashboard/my-products",
  },
  {
    id: 3,
    image: marketing,
    alt: "marketing",
    text: "Marketing",
    link: "/dashboard/",
  },
  {
    id: 4,
    image: analytics,
    alt: "analytics",
    text: "Analytics",
    link: "/dashboard/",
  },
  { id: 5, image: wallet, alt: "wallet", text: "Wallet", link: "/dashboard/" },
  { id: 6, image: refer, alt: "refer", text: "Refer", link: "/dashboard/" },
  {
    id: 7,
    image: integrations,
    alt: "integrations",
    text: "Integrations",
    link: "/dashboard/",
  },
  {
    id: 8,
    image: billing,
    alt: "billing",
    text: "Billing",
    link: "/dashboard/",
  },
  {
    id: 9,
    image: settings,
    alt: "settings",
    text: "Settings",
    link: "/dashboard/",
  },
  {
    id: 10,
    image: upgrade,
    alt: "upgrade",
    text: "Upgrade",
    link: "/dashboard/",
  },
];
