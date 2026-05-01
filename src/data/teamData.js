// 1. We import the image from the assets folder at the top of the file
import naolImage from '../assets/Naol.png';

export const teamMembers = [  
  // -- Top Row (3 members) --
  { name: 'Yeabsera hairu', role: 'President', image: '' },
  { name: 'Elsabet amanuel', role: 'Vice President', image: '' },
  { name: 'Nathan eshetu', role: 'Secretary', image: '' },

  // -- Middle Row (5 members) --
  { name: 'Hawi taye', role: 'Arts Track', image: '' },
  { name: 'Mahlet shiferaw', role: 'Chess Track', image: '' },
  
  // 2. Here is the DEMO: We assign the imported 'naolImage' variable directly to Naol's image property
  { name: 'Naol bayisa', role: 'Event Track', image: naolImage },
  
  { name: 'Dibora wendu', role: 'News Track', image: '' },
  { name: 'Hawi asefa', role: 'News Track', image: '' },

  // -- Bottom Row (4 members) --
  { name: 'Jalene Nemera', role: 'News Track', image: '' },
  { name: 'Ruhama Teshager', role: 'Tech Track', image: '' },
  { name: 'Tsihon adisu', role: 'Tech Track', image: '' },
  { name: 'Bikila Keneni', role: 'Tech Track', image: '' },
];
