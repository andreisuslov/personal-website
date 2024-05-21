let password = "terminal123";
let linkedin = "https://www.linkedin.com/in/andrei-suslov/";
let github = "https://github.com/andreisuslov/";

whois = [
  "<br>",
  "Hey, I'm Andrei!👋",
  "I'm an SDET with " + getYearsOfExperience() + " years of experience in test automation, CI/CD, and cloud migration.",
  "Proficient in Java, JavaScript, and Python, I have a proven track record of reducing manual testing efforts",
  "and ensuring high-quality software delivery. I'm also an effective communicator and mentor.",
  "After completing coursework towards a Bachelor's Degree in Business Economics, I transitioned into the world",
  "of software development and found my passion in test automation and quality assurance.",
  "Throughout my career, I've worked with various companies, including Avid Technology and Liberty Mutual,",
  "where I've contributed to developing efficient testing frameworks, implementing CI/CD pipelines,",
  "and facilitating seamless cloud migrations.",
  "In addition to my professional work, I've also enjoyed sharing my knowledge and experience as a mentor",
  "and instructor at DevMountain and DevX School, helping aspiring developers gain valuable skills.",
  "I'm constantly exploring new technologies and finding ways to improve software quality and development processes.",
  "<br>"
];

whoami = [
  "<br>",
  "Who am I? It's a question that haunts us all, isn't it?",
  "It's not some leisurely journey of self-discovery", 
  "It's a constant battle, a relentless struggle to find meaning in the chaos of existence.",
  "Every day, we're faced with the harsh realities of life, and it's in those moments of confrontation",
  "that we're forced to dig deep and carve out our own sense of purpose.",
  "There's no single 'aha!' moment that defines us. No, our identity is shaped by the scars we bear from our",
  "experiences, the endless chatter of our thoughts, and the weight of the choices we make.",
  "We're not some static, unchanging being. We're a work in progress, constantly evolving and adapting to",
  "the curveballs life throws our way. Our choices, our passions, our fears - they all weave together to create",
  "the complex tapestry of who we are.",
  "In the grand scheme of things, we're all just trying to make sense of the madness, to find our place",
  "in the dissonant symphony of life. We're the creators of our own destiny, but at the same time, we're at the mercy", 
  "of the unpredictable tides of fate.",
  "So, maybe the key is to embrace the chaos, to accept that the search for self-discovery is a lifelong journey",
  "filled with both triumph and tribulation. It's through this constant seeking and struggle that we slowly",
  "unravel the mystery of who we truly are.",
  "<br>"
];

social = [
  "<br>",
  'linkedin <a href="' + linkedin + '" target="_blank">linkedin/andrei-suslov' + "</a>",
  'github <a href="' + github + '" target="_blank">github/andreisuslov' + "</a>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span> Only use if you\'re admin',
  "<br>"
];

exploit = [
  "<br>",
  "No you won't",
  "<br>"
];

projects = [
  "<br>",
  "Still curating... most projects are offline, or on <a href='" + github + "' target='_blank'>GitHub</a>, or confidential.",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span> Who is Andrei?',
  '<span class="command">whoami</span> Who are you?',
  '<span class="command">social</span> Display social networks',
  '<span class="command">secret</span> Find password',
  '<span class="command">projects</span> View coding projects',
  '<span class="command">history</span> View command history',
  '<span class="command">help</span> You obviously already know what this does',
  '<span class="command">email</span> use with caution',
  '<span class="command">clear</span> Clear terminal',
  '<span class="command">banner</span> Display header / banner',
  "<br>",
];

banner = [
  '<br>',
  '<span class="index">Andrei Suslov\'s  personal website, no rights reserved. </span>',
  '<br>',
  '  ___            _          _   _____           _            ',
  '  /  \\          | |        (_) /  ___|         | |           ',
  '/ /_\\ \\_ __   __| |_ __ ___ _  \\ `--. _   _ ___| | _____   __',
  '|  _  | \'_ \\ / _` | \'__/ _ \\ |  `--. \\ | | / __| |/ _ \\ \\ / /',
  '| | | | | | | (_| | | |  __/ | /\\__/ / |_| \\__ \\ | (_) \\ V / ',
  '\\_| |_/_| |_|\\__,_|_|  \\___|_| \\____/ \\__,_|___/_|\\___/ \\_/  ',
  '                                                             ',
  '                                                             ',
  '<span class="color2">Welcome to my highly interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">"help"</span><span class="color2">.</span>',
  '<br>'
];

// Function to calculate years of experience
function getYearsOfExperience() {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  return yearsOfExperience;
}