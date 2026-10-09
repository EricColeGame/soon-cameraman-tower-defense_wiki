export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Soon Cameraman Tower Defense Wiki",
  shortName: "Soon Cameraman TD",
  logoText: "SCTD",
  tagline: "Complete Guides, Codes, Units & Tier Lists",
  description: "Your ultimate guide to Soon Cameraman Tower Defense on Roblox! Explore active working codes, unit guides, best upgrades, wave strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://soon-cameraman-tower-defense.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://soon-cameraman-tower-defense.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/132929771812494/Cameraman-Tower-Defense",
  heroVideoId: "Sv4SgTBFMWU",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
