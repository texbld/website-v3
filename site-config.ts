import LinkList from "./components/linklist";

interface SiteConfig {
  navbarlinks: LinkList;
}

const config: SiteConfig = {
  navbarlinks: [
    { name: "About", href: "/about/" },
    { name: "Featured", href: "/featured/" },
    { name: "Docs", href: "/docs/" },
    { name: "GitHub", href: "https://github.com/texbld", isExternal: true },
  ],
};

export default config;
