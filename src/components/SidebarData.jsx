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
import purchases from "../assets/images/purchases.svg";

export const SidebarData = [
  {
    image: home,
    alt: "home",
    text: "Home",
    link: "/dashboard/dashboard-home",
  },
  {
    image: products,
    alt: "products",
    text: "Products",
    link: "#",
    subNav: [
      { text: "My Products", link: "/dashboard/my-products" },
      { text: "Add Product", link: "/dashboard/add-products" },
    ],
  },
  {
    image: purchases,
    alt: "purchases",
    text: "Purchases",
    link: "/dashboard/",
  },
  {
    image: marketing,
    alt: "marketing",
    text: "Marketing",
    link: "/dashboard/",
  },
  {
    image: analytics,
    alt: "analytics",
    text: "Analytics",
    link: "/dashboard/",
  },
  { image: wallet, alt: "wallet", text: "Wallet", link: "/dashboard/" },
  { image: refer, alt: "refer", text: "Refer", link: "/dashboard/" },
  {
    image: integrations,
    alt: "integrations",
    text: "Integrations",
    link: "/dashboard/",
  },
  {
    image: billing,
    alt: "billing",
    text: "Billing",
    link: "/dashboard/",
  },
  {
    image: settings,
    alt: "settings",
    text: "Settings",
    link: "/dashboard/",
  },
  {
    image: upgrade,
    alt: "upgrade",
    text: "Upgrade",
    link: "/dashboard/",
  },
];
