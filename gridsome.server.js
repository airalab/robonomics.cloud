// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    createPage({
      path: '/smart-home-survey/success',
        component: './src/templates/GreatResult.vue'
      }
    ),

    createPage({
      path: '/smart-home-survey/medium',
        component: './src/templates/MediumResult.vue'
      }
    ),

    createPage({
      path: '/smart-home-survey/low',
        component: './src/templates/LowResult.vue'
      }
    )
      
  })
}
