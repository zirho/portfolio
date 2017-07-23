const projects = [
  {
    name: 'Chrome Extension',
    url: 'Url not available',
    location: 'Culver City, California',
    period: 'Jan 2017',
    thumb: 'img/projects/steel-ext.jpg',
    role: ['Senior Software Engineer'],
    skills: ['JavaScript', 'react', 'webpack', 'redux', 'css', 'HMR'],
    desc: 'Built a simple chrome extension for easy access to all project urls in QA, Staging and Production environments. This is built as my own side project after office hours. This is basically a webapp, so mostly anything can be possible.'
  },
  {
    name: 'SteelHouse PixelUI',
    url: 'https://pixel.steelhouse.com',
    location: 'Culver City, California',
    period: 'Dec 2016 - Jul 2017 (1 year 2 months)',
    thumb: 'img/projects/steelhouse2.png',
    role: ['Senior Software Engineer'],
    skills: ['JavaScript', 'Node.js', 'react', 'webpack', 'Flux (redux)', 'less', 'HMR'],
    desc: 'Built marketing pixel(crawler) JavaScript code and the integration apps on top three e-commerce solutions which include Shopify, Magento and Prestashop via their API or modules. Built user facing integration and walkthrough guide site with react and Node.js'
  },
  {
    name: 'SteelHouse Adsuite',
    url: 'https://ui.steelhouse.com',
    location: 'Culver City, California',
    period: 'Dec 2016 - Jul 2017 (1 year 2 months)',
    thumb: 'img/projects/steelhouse1.png',
    role: ['Senior Software Engineer'],
    skills: ['JavaScript', 'PHP', 'jQuery', 'react', 'redux', 'webpack', 'CSS', 'Sass', 'HMR'],
    desc: 'Maintained and refactored a legacy web app with the latest tech stack, such as JS ES6 with HMR-enabled on webpack. Start adding unit tests by decoupling presentational and logical components. Integrate the system with external ads apis such as Facebook, Twitter, Instagram. Refactor workflow of react-redux-based apps to have HMR enabled with webpack.'
  },
  {
    name: 'Dr Pure Natural',
    url: 'https://www.drnaturalus.com',
    location: 'La Mirada, California',
    period: 'Nov 2015 - June 2016 (8 months)',
    thumb: 'img/projects/2.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'Magento', 'jQuery', 'JavaScript', 'CSS', 'Sass', 'CoffeeScript', 'Bootstrap'],
    desc: 'Developed e-commerce website with magento on AWS platform. Front-end(jQuery, CoffeeScript, Sass, CSS3, HTML5) and back-end(PHP, MySQL) development including setting up servers on cloud services. Customized extensions per customer specifications. Utilized distributed servers from multiple location to serve international customers with multiple languages. Developed automatic polling shipment information module using vendors’ APIs. Developed automatic blockage detection to change product urls through separate located servers.'
  },
  {
    name: 'SIE Soft',
    location: 'Los Anageles, California',
    period: 'May 2015 - September 2015 (5 months)',
    // thumb: 'img/projects/ppp.png',
    role: ['Software Engineer'],
    skills: ['PHP', 'Laravel', 'jQuery', 'JavaScript', 'Scss', 'Bootstrap'],
    desc: 'Developed EMR(Electronic medical record) software front-end(jQuery) and back-end(PHP, Laravel). Worked with task runners for transpiling or bundling the result deriving continuous integration and delivery. Made customizable page template plugin with jQuery. Built system with Laravel powered server side PHP scripts and migration tool. '
  },
  {
    name: 'MightyFine',
    url: 'http://www.welovefine.com',
    location: 'Los Angeles, California',
    period: 'Jan 2011 - Apr 2015 (5 years)',
    thumb: 'img/projects/1.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'Prestashop', 'jQuery', 'JavaScript', 'CSS', 'Sass', 'CoffeeScript', 'Bootstrap'],
    desc: 'Develope nd maintained e-commerce web app which is customized for a variety of functionalities. Worked with many designers and managers to build design ecosystem. Built front-end(jQuery) and back-end(PHP, Prestashop), maintained distributed servers(AWS) and integrated it with ERP solution. Built contest ecosystem with real time notification feature. The system can handle over 1,000 submits and over 10k ratings per contest. Made a rate moderate system for faulty ratings based on geological information.'
  },
  {
    name: 'Nhn Corp.',
    url: 'http://deview.kr/2011/',
    location: 'Bundang, South Korea',
    period: 'January 2011 - February 2011 (2 months)',
    thumb: 'img/projects/deview2.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'jQuery', 'JavaScript', 'CSS'],
    desc: 'Lead NHN Deview 2011 PC, Mobile web application development. Collaborated with managers and designers to develop one of the huge dev-conferences, Deview, in Korea. Developed mobile compliant web app for real time broadcasting. '
  },
  {
    name: 'Forever21',
    location: 'Los Angeles, California',
    period: 'July 2010 - February 2011 (8 months)',
    role: ['Internship'],
    skills: ['VisualBasic', 'C#'],
    desc: 'Maintained VisualBasic based ESM, CMS, and label printing software.'
  },
  {
    name: 'PipingXE',
    url: 'http://www.zirho.net/pp_prom',
    location: 'Seoul, Korea',
    period: 'Feb, 2011',
    thumb: 'img/projects/pipingxe.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'XE (CMS)', 'jQuery', 'JavaScript', 'CSS'],
    desc: 'Developed a module cloning websites built on top of XpressEngine CMS. It has been submitted to XE open-source competition.'
  },
  {
    name: 'Tokyo Institute of Technology Community',
    url: 'http://www.titechkorea.net/',
    location: 'Seoul, Korea',
    period: 'June, 2011',
    thumb: 'img/projects/dongkyung.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'XE (CMS)', 'jQuery', 'JavaScript', 'CSS'],
    desc: 'Developed CMS website for student community. Puglishing from PSD (photoshop) files. Build themes, skins, modules for it'
  },
  {
    name: 'Cube Entertainment',
    url: 'http://www.cubeent.co.kr/',
    location: 'Seoul, Korea',
    period: 'Jan, 2011',
    thumb: 'img/projects/cube.png',
    role: ['Senior Software Engineer'],
    skills: ['PHP', 'XE (CMS)', 'jQuery', 'JavaScript', 'CSS'],
    desc: 'Developed CMS website for an entertainment company called CubeEntertainment. Puglishing from PSD (photoshop) files. Build themes, skins, modules for it'
  },
  {
    name: 'iHandong',
    url: 'http://www.zirho.net/iphone/8861',
    location: 'Pohang, Korea',
    period: 'Apr 2010 - Jun 2010 (a month)',
    thumb: 'img/projects/ihandong.jpg',
    role: ['Lead Software Engineer', 'Project Manager'],
    skills: ['Objective-C', 'Xcode'],
    desc: 'Developed an introductory app with colleagues. Details are included in the link page.'
  },
  {
    name: 'HGUBus - school bus schedule',
    url: 'http://www.zirho.net/iphone/6673',
    location: 'Pohang, Korea',
    period: 'Apr 2010',
    thumb: 'img/projects/bus.jpg',
    role: ['Lead Software Engineer', 'Project Manager'],
    skills: ['Objective-C', 'Xcode', 'Photoshop'],
    desc: 'Developed a school bus schedule app. Details are included in the link page.'
  },
  {
    name: 'HGUBob - school food menu',
    url: 'http://www.zirho.net/iphone/7265',
    location: 'Pohang, Korea',
    period: 'Apr 2010',
    thumb: 'img/projects/bob.jpg',
    role: ['Lead Software Engineer', 'Project Manager'],
    skills: ['Objective-C', 'Xcode', 'Photoshop'],
    desc: 'Developed an menu information app. Details are included in the link page.'
  },
  {
    name: 'XE widgets - open source projects',
    url: 'http://www.zirho.net/photowidgets',
    location: 'Seoul, Korea',
    period: 'Mar 2010',
    thumb: 'img/projects/widgetxe.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'XE (CMS)', 'jQuery', 'JavaScript', 'CSS'],
    desc: 'Developed XE (CMS) widgets and layouts. Lots of jQuery plugins are used for the job.'
  },
  {
    name: 'WizardXE - open source projects',
    url: 'http://www.zirho.net/?mid=intro_eng',
    location: 'Seoul, Korea',
    period: 'Jan 2010',
    thumb: 'img/projects/wizardxe.png',
    role: ['Senior Software Engineer', 'Project Manager'],
    skills: ['PHP', 'XE (CMS)', 'jQuery', 'JavaScript', 'CSS'],
    desc: 'Developed XE (CMS) module. This one is the winner of the open source competition called XE CONTEST. https://www.xpressengine.com/xe_contest_2010'
  },
  {
    name: 'jQuery Plugin',
    url: 'http://www.zirho.net/?mid=imagefader',
    location: 'Seoul, Korea',
    period: 'Nov 2009',
    thumb: 'img/projects/jquery.plugin.png',
    role: ['Senior Software Engineer'],
    skills: ['jQuery', 'JavaScript', 'CSS'],
    desc: 'Image fading slider is a jQuery plugin. That demonstrates images with effects which used to be only available in adobe flash in the past.'
  },
  // {
  //   name: 'ppp',
  //   url: 'ppp',
  //   location: 'ppp',
  //   period: 'ppp',
  //   thumb: 'img/projects/ppp.png',
  //   role: ['Senior Software Engineer', 'Project Manager'],
  //   skills: ['PHP', 'Magento', 'jQuery', 'JavaScript', 'CSS', 'Sass', 'CoffeeScript', 'Bootstrap'],
  //   desc: ''
  // },
]

export { projects as ProjectData }
