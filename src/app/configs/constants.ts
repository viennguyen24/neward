import { ICONS } from "../../shared/utils/icons";
import { atom } from "jotai";

export const navItems: NavItems[] = [
  {
    title: "Features",
  },
  {
    title: "Pricing",
  },
  {
    title: "Resources",
  },
  {
    title: "Docs",
  },
];

export const partners: PartnersTypes[] = [
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
  },
];
export const Plans:PlanType[]=[
  {
    title: "Free Plan",
    perk: ["Up to 2,500 subscribers", "Unlimited sends", "Custom newsletter","Newsletter analytics"],
    description : "Ideal for individuals or small businesses starting out.",
  },
  {
    title: "Grow Plan",
    perk: ["Up to 10,000 subscribers", "Custom domains", "API access", "Newsletter community"  ],
    description: "Tailored for expanding businesses by advanced features.",
  },
  {
    title: "Scale Plan",
    perk: ["Up to 100,000 subscribers", "Referal program", "AI support", "Advanced support system",  "Ad Network"],
    description : "Designed to support a significant subscriber bases.",
  }
]
// export const freePlan: PlanType[] = [
//   {
//     perk: ["Up to 2,500 subscribers", "Unlimited sends", "Custom newsletter","Newsletter analytics"]
//   },
// ];

// export const GrowPlan: PlanType[] = [
//   {
//     perk: ["Up to 10,000 subscribers", "Custom domains", "API access", "Newsletter community"  ],
//   },
// ];

// export const scalePlan: PlanType[] = [
//   {
//     perk: ["Up to 100,000 subscribers", "Referal program", "AI support", "Advanced support system",  "Ad Network"],
//   },
// ];

export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Profile");

export const sideBarItems: DashboardSideBarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems: DashboardSideBarTypes[] = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/",
    icon: ICONS.world,
  },
];

export const subscribersData: subscribersDataTypes[] = [
  {
    _id: "64f717a45331088de2ce886c",
    email: "programmershahriarsajeeb@gmail.com",
    createdAt: "5Feb 2024",
    source: "Becodemy website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886c",
    email: "support@becodemy.com",
    createdAt: "8Feb 2024",
    source: "External website",
    status: "subscribed",
  },
];
