const projects = [{
  name: 'Dolly Blogs',
  introByChinese: '一款Vuepress开发的Blog主题',
  introByEnglish: 'A blog theme developed by Vuepress',
  imageUrl: require('../images/dolly-blogs.jpg'),
  link: 'http://106.53.250.228/blogs',
  onlyMobile: false,
  filtered: false,
  show: true
}, {
  name: 'Dolly Music',
  introByChinese: '一款功能全面的移动端音乐Web App',
  introByEnglish: 'A full-featured music Web App for mobile',
  imageUrl: require('../images/dolly-music.jpg'),
  codeUrl: require('../images/dolly-music-code.png'),
  link: 'http://106.53.250.228/music',
  onlyMobile: true,
  filtered: false,
  show: true
}, {
  name: 'Dolly Take Away',
  introByChinese: '一款移动端外卖App商家展示页面',
  introByEnglish: 'A takeaway App merchant display page',
  imageUrl: require('../images/dolly-take-away.jpg'),
  codeUrl: require('../images/dolly-take-away-code.png'),
  link: 'http://106.53.250.228/take-away',
  onlyMobile: true,
  filtered: false,
  show: true
}, {
  name: 'Dolly Axios',
  introByChinese: '用TypeScript重写的axios库',
  introByEnglish: 'Axios rewritten in TypeScript',
  imageUrl: require('../images/dolly-axios.jpg'),
  link: 'https://github.com/zsqzsq1993/ts-axios',
  onlyMobile: false,
  filtered: false,
  show: true
}, {
  name: 'Free Drag',
  introByChinese: '一款轻量级PC、移动端皆可使用的拖拽库',
  introByEnglish: 'A lightweight drag and drop library suitable for both PC and mobile',
  imageUrl: require('../images/free-drag.gif'),
  link: 'https://dolly5zhang.com/free-drag',
  onlyMobile: false,
  filtered: true,
  show: true
}, {
  name: 'What\'s next ?',
  introByChinese: 'What\'s next project ?',
  introByEnglish: 'What\'s next project ?',
  imageUrl: require('../images/continue.jpg'),
  filtered: false,
  show: true,
  clickDisable: true
}]

const leng = projects.length
projects[leng - 1].show = leng % 2 === 0

export default projects
