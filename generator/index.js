const fs = require('fs');

module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      "@vuelidate/core": "^2.0.0-alpha.34",
      "@vuelidate/validators": "^2.0.0-alpha.26",
      "axios": "^0.24.0",
      "dayjs": "^1.10.7",
      "vuex-multi-tab-state": "^1.0.17",
      "vuex-persistedstate": "^4.1.0"
    },
    devDependencies: {
      "@prettier/plugin-pug": "^1.19.1",
      "pug": "^3.0.2",
      "pug-plain-loader": "^1.1.0",
      "sass-loader": "^8.0.2",
      "lint-staged": "^9.5.0",
      "node-sass": "^4.12.0",
    }
  })
  api.onCreateComplete(() => {
    fs.unlinkSync(api.resolve('src/views/Home.vue'));
    fs.unlinkSync(api.resolve('src/views/About.vue'));
    fs.unlinkSync(api.resolve('src/components/HelloWorld.vue'));
  });
  api.render(`./templates/default`)
}
