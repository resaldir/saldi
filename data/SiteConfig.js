const config = {
  siteTitle: 'Saldi',
  siteTitleShort: 'Saldi',
  siteTitleAlt: 'Saldi',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://www.saldiwe.github.io/',
  repo: 'https://github.com/saldiwe/',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Resaldi Ramadhan Putra is a Developer, Designer, and DevOps.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  userName: 'saldiwe',
  userEmail: 'resaldi.ramadhan97@gmail.com',
  userTwitter: 'saldiwe',
  menuLinks: [
    {
      name: 'About',
      link: '/me/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
