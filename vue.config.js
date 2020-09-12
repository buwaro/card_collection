module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/card_collector/" : "/",
  pwa: {
    name: "Card Collector",
    themeColor: "#FFFFFF",
    msTileColor: "#FFFFFF",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW"
  }
}

