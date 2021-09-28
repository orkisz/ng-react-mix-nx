module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  previewHead: head => `
    ${head}
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' >
    <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700' >
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel='stylesheet' href='https://apps-static.pyracloud.com/pyra-ui/24.2.1/styles/pyra-theme-no-font.min.css'>
  `
};
