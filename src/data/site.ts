import type { ImageMetadata } from 'astro';
import circuitBoard from '../assets/img/circuit-board.jpg';
import memoryCards from '../assets/img/memory-cards.webp';
import thinFilms from '../assets/img/thin-films.png';
import eScrap from '../assets/img/e-scrap.webp';
import pcb from '../assets/img/pcb.webp';
import goldParts from '../assets/img/gold-plated-components.png';
import techWaste from '../assets/img/tech-waste.webp';
import phones from '../assets/img/phones-recycling.webp';

export const SITE = {
  name: 'Alchemy Recyclers',
  legalName: 'Alchemy Recyclers Private Limited',
  url: 'https://alchemyrecycling.co.in',
  tagline: 'E-waste recycling & precious metal recovery in Vadodara, Gujarat',
  description:
    'Alchemy Recyclers is an e-waste recycling and precious metal recovery company in Vadodara, Gujarat. We recover gold, silver, platinum, palladium, rhodium and copper from e-waste and industrial waste.',
  phone: '+91 78789 74409',
  phoneHref: 'tel:+917878974409',
  whatsappHref: 'https://wa.me/917878974409',
  email: 'alchemyrecyclers@gmail.com',
  address: {
    street: 'RS No. 634 / paiki, P-2, Moje Manjusar, Savli',
    locality: 'Vadodara',
    region: 'Gujarat',
    postalCode: '391775',
    country: 'IN',
    countryName: 'India',
  },
  geo: { lat: 22.469095, lng: 73.195089 },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.93451525831!2d73.195089!3d22.469095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjLCsDI4JzA4LjciTiA3M8KwMTEnNDIuMyJF!5e0!3m2!1sen!2sin!4v1654659052060!5m2!1sen!2sin',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=22.469095,73.195089',
  brochure: '/alchemy-recyclers-brochure.pdf',
  areaServed: [
    'Vadodara',
    'Savli',
    'Manjusar',
    'Halol',
    'Anand',
    'Bharuch',
    'Ankleshwar',
    'Ahmedabad',
    'Surat',
    'Gandhinagar',
    'Rajkot',
    'Gujarat',
  ],
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/materials/', label: 'Materials' },
  { href: '/process/', label: 'Process' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export const METALS = [
  { symbol: 'Au', name: 'Gold', number: 79, mass: '196.97', tone: 'gold' },
  { symbol: 'Ag', name: 'Silver', number: 47, mass: '107.87', tone: 'silver' },
  { symbol: 'Pt', name: 'Platinum', number: 78, mass: '195.08', tone: 'platinum' },
  { symbol: 'Pd', name: 'Palladium', number: 46, mass: '106.42', tone: 'palladium' },
  { symbol: 'Rh', name: 'Rhodium', number: 45, mass: '102.91', tone: 'rhodium' },
  { symbol: 'Cu', name: 'Copper', number: 29, mass: '63.55', tone: 'copper' },
] as const;

export type Material = {
  slug: string;
  name: string;
  image: ImageMetadata;
  imageAlt: string;
  summary: string;
  sources: string[];
};

export const MATERIALS: Material[] = [
  {
    slug: 'plastic-ics',
    name: "Plastic ICs",
    image: circuitBoard,
    imageAlt: 'Circuit board with plastic and ceramic integrated circuits',
    summary:
      'Integrated circuits (chips) have tiny gold bonding wires and plated leads inside them. We recover these precious metals from sorted IC lots.',
    sources: [
      'Computers and servers',
      'Televisions and video processors',
      'Radar and telecom equipment',
      'Microcontrollers and memory chips',
      'Audio and microwave amplifiers',
      'Voltage regulators, timers and counters',
      'Calculators, wristwatches and clock chips',
      'Temperature sensors and logic devices',
    ],
  },
  {
    slug: 'thin-films',
    name: 'Thin Films',
    image: thinFilms,
    imageAlt: 'Applications of flexible thin film batteries: RFID, photovoltaics, medical devices',
    summary:
      'Flexible thin films are used from aerospace to consumer and medical products. Many carry precious-metal layers that can be reclaimed.',
    sources: [
      'Aerospace components',
      'Consumer electronics',
      'Medical devices',
      'Battery backup devices',
      'Energy harvesting devices',
      'RFID tags and photovoltaics',
    ],
  },
  {
    slug: 'memory-cards',
    name: 'Memory Cards',
    image: memoryCards,
    imageAlt: 'A pile of SD memory cards with gold-plated contacts',
    summary:
      'SD and microSD cards have gold-plated contacts and memory chips. Bulk lots of old or rejected cards are a good source of precious metals.',
    sources: [
      'Cameras',
      'Smartphones',
      'Drones',
      'Game consoles',
      'Dash cams and CCTV recorders',
      'Rejected production lots',
    ],
  },
  {
    slug: 'e-scrap',
    name: 'E-Scrap',
    image: eScrap,
    imageAlt: 'Pile of discarded computers, keyboards and electronic scrap',
    summary:
      'End-of-life electrical and electronic equipment from offices, factories and homes. We take it in and route every part to the right recovery stream.',
    sources: [
      'Computers and telecom equipment',
      'TVs, monitors and screens',
      'Fridges, freezers and cooling equipment',
      'Consumer electronics and solar panels',
      'LED bulbs and electrical panels',
      'Vending machines, toys and medical devices',
    ],
  },
  {
    slug: 'medical-devices',
    name: 'Medical Devices',
    image: pcb,
    imageAlt: 'Electronic circuit board from a device',
    summary:
      'Electronic medical devices contain precious-metal contacts and boards. We handle non-infectious, decontaminated devices only.',
    sources: [
      'Diagnostic and monitoring equipment',
      'Device circuit boards',
      'Sensors and electrodes',
      'Rejected or expired device lots',
    ],
  },
  {
    slug: 'rags-and-wipes',
    name: 'Rags & Wipes',
    image: goldParts,
    imageAlt: 'Gold-plated electronic components on a circuit board',
    summary:
      'Rags, wipes, filters and sweeps from jewellery, plating and electronics units hold fine precious-metal dust. Thermal reduction turns them into recoverable ash.',
    sources: [
      'Jewellery workshop sweeps and polishing waste',
      'Plating line wipes and filters',
      'Gloves and cloths from precious-metal work',
      'Floor sweeps and dust',
    ],
  },
  {
    slug: 'manufacturing-waste',
    name: 'Manufacturing Waste',
    image: techWaste,
    imageAlt: 'Mixed technological and manufacturing waste',
    summary:
      'Rejected parts, off-cuts and production debris from electronics and precious-metal manufacturing. Even low-grade material can be worth processing.',
    sources: [
      'Rejected PCBs and assemblies',
      'Production off-cuts and debris',
      'Plating solutions waste',
      'Spent catalysts',
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageMetadata;
  imageAlt: string;
  intro: string[];
  accept: string[];
  metals: string[];
  why: { title: string; text: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'e-waste-recycling',
    name: 'E-Waste Recycling',
    short:
      'Responsible recycling of old computers, phones, circuit boards and electronic scrap for businesses in Vadodara and across Gujarat.',
    metaTitle: 'E-Waste Recycling in Vadodara, Gujarat',
    metaDescription:
      'E-waste recycling in Vadodara, Gujarat for businesses, factories and offices. We recycle computers, circuit boards, ICs, memory cards and e-scrap and recover precious metals.',
    image: phones,
    imageAlt: 'Old mobile phones collected for e-waste recycling',
    intro: [
      'Old electronics are not just waste. A tonne of phone circuit boards can hold around 150 grams of gold, while a tonne of gold ore gives about 5 grams. That is why e-waste is often called an "urban mine".',
      'Alchemy Recyclers takes e-waste from companies, factories, IT offices and institutions and recovers the valuable metals in it, with emission control built into our process. Our plant is at Manjusar, Savli, in Vadodara district.',
    ],
    accept: [
      'Computers, laptops and servers',
      'Printed circuit boards (PCBs)',
      'Plastic and ceramic ICs',
      'Memory cards and chips',
      'Mobile phones and telecom boards',
      'TVs, monitors and screens',
      'LED bulbs and electrical panels',
      'Other electrical and electronic scrap',
    ],
    metals: ['Gold', 'Silver', 'Palladium', 'Platinum', 'Copper'],
    why: [
      { title: 'Local plant', text: 'Our facility is in Vadodara district, close to the industrial belts of Savli, Manjusar, Halol and Vadodara GIDC.' },
      { title: 'Metal value recovered', text: 'We focus on recovering precious metals, so the value in your e-waste is not lost.' },
      { title: 'Emission control', text: 'An afterburner above 1100 °C and a venturi wet scrubber clean the exhaust from our thermal process.' },
    ],
  },
  {
    slug: 'precious-metal-recovery',
    name: 'Precious Metal Recovery & Refining',
    short:
      'Reclamation, recovery and refining of gold, silver, platinum, palladium, rhodium and copper from low- and high-grade waste.',
    metaTitle: 'Precious Metal Recovery & Refining in Gujarat',
    metaDescription:
      'Precious metal recovery in Gujarat: gold, silver, platinum, palladium, rhodium and copper recovered from e-waste, jewellery waste, catalysts and plating waste by Alchemy Recyclers, Vadodara.',
    image: goldParts,
    imageAlt: 'Gold-plated electronic components ready for precious metal recovery',
    intro: [
      'Reclamation, Recovery and Refining (RRR) of precious metals is at the heart of what we do. Gold, silver, palladium, platinum and rhodium are the five major precious metals found in electronic and jewellers’ waste.',
      'We use thermal reduction and solvent extraction. Thermal reduction turns organic-rich material into a concentrated ash. Solvent extraction recovers metals from surface-plated items. Our plant is designed to handle even material with a low percentage of precious metal.',
    ],
    accept: [
      'Electronic waste and e-scrap',
      'Jewellery industry waste',
      'Spent catalysts',
      'Plating solutions and plating waste',
      'Medical devices',
      'Manufacturing waste and debris',
    ],
    metals: ['Gold', 'Silver', 'Platinum', 'Palladium', 'Rhodium', 'Copper'],
    why: [
      { title: 'Low-grade friendly', text: 'Our systems are engineered to work efficiently even at low volumes and low metal content.' },
      { title: 'Batch processing', text: 'We sort and separate material into individual lots and treat each batch on its own.' },
      { title: '20+ years in the trade', text: 'Our founders bring over two decades of experience in electronic and electrical scrap.' },
    ],
  },
  {
    slug: 'jewellery-waste-refining',
    name: 'Jewellery Waste Recovery',
    short:
      'Recovery of gold and silver from jewellery workshop sweeps, polishing dust, rags, filters and rejected pieces.',
    metaTitle: 'Jewellery Waste Gold & Silver Recovery in Gujarat',
    metaDescription:
      'Recover gold and silver from jewellery waste in Gujarat. Alchemy Recyclers, Vadodara, processes sweeps, polishing dust, rags, filters and workshop waste.',
    image: techWaste,
    imageAlt: 'Mixed waste containing precious metals',
    intro: [
      'Every jewellery workshop loses fine gold and silver into dust, rags, gloves, water filters and floor sweeps. Over months this adds up to real value.',
      'Our thermal reduction process burns off the organic part of this waste and leaves an ash rich in metal. The ash is crushed, sized and blended into a uniform, well-characterised material, so its precious metal content can be measured and recovered.',
    ],
    accept: [
      'Floor sweeps and bench dust',
      'Polishing and buffing waste',
      'Rags, wipes and gloves',
      'Water and air filters',
      'Rejected or broken pieces',
      'Crucibles and melting waste',
    ],
    metals: ['Gold', 'Silver', 'Platinum', 'Palladium', 'Rhodium'],
    why: [
      { title: 'Nothing wasted', text: 'Low-grade waste that looks worthless can still hold recoverable gold and silver.' },
      { title: 'Uniform sampling', text: 'Ash is crushed, classified and blended so the metal content can be measured accurately.' },
      { title: 'Clean process', text: 'Multi-stage exhaust scrubbing controls emissions from the thermal process.' },
    ],
  },
  {
    slug: 'spent-catalyst-recovery',
    name: 'Spent Catalyst Recovery',
    short:
      'Recovery of platinum group metals from spent catalysts used in chemical, pharma and refining industries.',
    metaTitle: 'Spent Catalyst Recovery (Pt, Pd, Rh) in Gujarat',
    metaDescription:
      'Spent catalyst recovery in Gujarat. Alchemy Recyclers, Vadodara, recovers platinum, palladium and rhodium from spent catalysts from chemical, pharma and industrial units.',
    image: pcb,
    imageAlt: 'Industrial material for precious metal recovery',
    intro: [
      'Many chemical, pharmaceutical and industrial processes use catalysts containing platinum group metals such as platinum, palladium and rhodium. When a catalyst is spent, those metals are still there.',
      'Gujarat has one of India’s largest chemical and pharma clusters, around Vadodara, Bharuch, Ankleshwar and Dahej. We help these units recover value from spent catalysts instead of letting it go to waste.',
    ],
    accept: [
      'Spent palladium catalysts',
      'Spent platinum catalysts',
      'Rhodium-bearing catalysts',
      'Catalyst fines and residues',
    ],
    metals: ['Platinum', 'Palladium', 'Rhodium'],
    why: [
      { title: 'Near the chemical belt', text: 'Our Vadodara plant is close to Gujarat’s chemical and pharma clusters.' },
      { title: 'Strategic metals', text: 'Platinum group metals are rare and not renewable. Recovering them locally reduces imports.' },
      { title: 'Emission control', text: 'Off-gases are re-burned in an afterburner and cleaned in a wet scrubber.' },
    ],
  },
  {
    slug: 'plating-waste-recovery',
    name: 'Plating & Manufacturing Waste',
    short:
      'Recovery of precious metals from plating solutions, plated rejects and manufacturing debris.',
    metaTitle: 'Plating Waste & Manufacturing Waste Metal Recovery',
    metaDescription:
      'Precious metal recovery from plating solutions, plated rejects and manufacturing waste in Gujarat. Alchemy Recyclers, Vadodara uses solvent extraction and thermal reduction.',
    image: circuitBoard,
    imageAlt: 'Circuit board with gold-plated contacts',
    intro: [
      'Plating units and electronics manufacturers produce waste that carries gold, silver and other precious metals: used plating solutions, plated rejects, off-cuts and production debris.',
      'We use solvent extraction to recover metal from surface-plated items, and thermal reduction for mixed, organic-rich waste. This lets us process mixed lots with different metals.',
    ],
    accept: [
      'Plating solutions waste',
      'Gold- and silver-plated rejects',
      'Connector and contact scrap',
      'Rejected PCBs and assemblies',
      'Production off-cuts and debris',
    ],
    metals: ['Gold', 'Silver', 'Palladium', 'Copper'],
    why: [
      { title: 'Two proven methods', text: 'Solvent extraction for plated items, thermal reduction for embedded parts and mixed waste.' },
      { title: 'Mixed metals', text: 'Our plant design allows us to process multiple metals from complex materials.' },
      { title: 'Circular economy', text: 'Metal goes back into manufacturing instead of landfill.' },
    ],
  },
];

export const FAQS = [
  {
    q: 'Where is Alchemy Recyclers located?',
    a: 'Our plant is at RS No. 634 / paiki, P-2, Moje Manjusar, Savli, Vadodara - 391775, Gujarat, India.',
  },
  {
    q: 'What kind of e-waste do you accept?',
    a: 'We accept plastic ICs, circuit boards, memory cards, thin films, computers and IT equipment, telecom boards, e-scrap, electronic medical devices, rags and wipes, and manufacturing waste that contains precious metals.',
  },
  {
    q: 'Which metals do you recover?',
    a: 'We recover gold, silver, platinum, palladium, rhodium and copper.',
  },
  {
    q: 'Do you work with businesses outside Vadodara?',
    a: 'Yes. We work with companies across Gujarat, including Ahmedabad, Surat, Bharuch, Ankleshwar, Anand and Halol. Call or WhatsApp us to discuss your material.',
  },
  {
    q: 'How do I get a quote for my e-waste or scrap?',
    a: 'Call +91 78789 74409, send a WhatsApp message, or email alchemyrecyclers@gmail.com with the type of material, approximate quantity and a few photos.',
  },
  {
    q: 'Is your process safe for the environment?',
    a: 'Yes. Exhaust from our thermal reduction chamber is re-burned in an afterburner at over 1100 °C and then cleaned in a multi-stage wet scrubbing system with a variable-throat venturi scrubber.',
  },
];
