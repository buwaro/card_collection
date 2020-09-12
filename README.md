# mtg_collection

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### generate app icons
- navigate to project root folder
- execute: `yarn vue-asset-generate -a [IMAGE FILE] -o public/img/icons`

### Run locally with service workers
- execute: `NODE_ENV="development" yarn build`
- run web server for chrome (https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)
- Select the dist folder of the app
- Switch 'Web Server' to 'Started'

### References
- setup tailwindcss: https://medium.com/backticks-tildes/how-to-configure-your-vue-js-app-to-use-tailwind-css-a6f95d06e1c7
- configure pwa settings: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
- vue persist: https://github.com/championswimmer/vuex-persist#note-on-localforage-and-async-stores
- tailwind modal: https://www.tailwindtoolbox.com/components/modal
- vuex modules: https://vuex.vuejs.org/guide/modules.html
- seup pwa: https://medium.com/@n11sh1/how-to-build-pwa-w-vue-cli-3-service-workers-add-to-home-screen-push-notifications-b519c49e142d
