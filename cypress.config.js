const { defineConfig } = require("cypress");

module.exports = defineConfig({
   //  watchForFileChanges:false, // bu kod cypress'in otomatik çalışmasını (command+s) durdurur.
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // videosFolder:'Failed Scenarios',
  // video:true,
  // screenshotsFolder:false,
  env: {
    URL: "https://www.beymen.com/",
  },
});