export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6225d4a65865b0ec4d78f9af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3hzik777',
                  apiId: 'ac6e6cfb-a9c1-443e-84d9-505c3fd0fd1d'
                },
                {
                  buildHookId: '6225d4a65865b0e89378ff4a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xe6gmz8z',
                  apiId: '88659be6-4232-4f84-9261-9b94951f7595'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/serkanbektas/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xe6gmz8z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
