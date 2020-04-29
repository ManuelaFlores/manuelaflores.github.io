const config = {
    siteTitle: "Manuela Flores",
    siteTitleShort: "Manuela Flores",
    siteTitleAlt: "Manuela Flores",
    siteUrl: "https://manuelaflores.github.io",
    siteLogo: "/logos/",//in progress
    repo: "https://github.com/manuelaflores/manuelaflores.github.io",
    dateFromFormat: "YYYY-MM-DD",
    dateFormat: "MMMM Do, YYYY",
    siteDescription: "Manuela Flores, Android Developer in progress",
    siteRss: "/rss.xml",
    googleAnalyticsID: "",//in progress
    postDefaultCategoryID: "code",
    userName: "Manuela",
    userEmail: "fmanuela499@gmail.com",
    userTwitter: "manuflowers_",
    menuLinks: [
      {
        name: "About me",
        link: "/about-me/"
      }
    ],
    themeColor: "#B90015", // Used for setting manifest and progress theme colors.
    backgroundColor: "#ffffff"
  };
  
  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1);
  
  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== "/")
    config.siteRss = `/${config.siteRss}`;
  
  module.exports = config;