export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '$2.4B', label: 'Client Revenue Generated' },
  { value: '98%', label: 'Client Retention' },
  { value: '12', label: 'Industry Awards' },
]

export const brands = [
  'Rolex',
  'Cartier',
  'Four Seasons',
  'Net-a-Porter',
  'Bang & Olufsen',
  'Aman Resorts',
  'Bottega Veneta',
  'Rimowa',
  'Moncler',
  'Bentley',
]

function brandWordmark(name: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="32" viewBox="0 0 180 32"><text x="90" y="22" text-anchor="middle" fill="#a3a3a3" font-family="Georgia, serif" font-size="13" letter-spacing="2.5">${name.toUpperCase()}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const brandLogos = brands.map((name) => ({
  src: brandWordmark(name),
  alt: `${name} logo`,
  width: 140,
  height: 24,
}))

export const techLogos = [
  {
    src: 'https://svgl.app/library/nvidia-wordmark-light.svg',
    alt: 'Nvidia Logo',
  },
  {
    src: 'https://svgl.app/library/supabase_wordmark_light.svg',
    alt: 'Supabase Logo',
  },
  {
    src: 'https://svgl.app/library/openai_wordmark_light.svg',
    alt: 'OpenAI Logo',
  },
  {
    src: 'https://svgl.app/library/turso-wordmark-light.svg',
    alt: 'Turso Logo',
  },
  {
    src: 'https://svgl.app/library/vercel_wordmark.svg',
    alt: 'Vercel Logo',
  },
  {
    src: 'https://svgl.app/library/github_wordmark_light.svg',
    alt: 'GitHub Logo',
  },
  {
    src: 'https://svgl.app/library/claude-ai-wordmark-icon_light.svg',
    alt: 'Claude AI Logo',
  },
  {
    src: 'https://svgl.app/library/clerk-wordmark-light.svg',
    alt: 'Clerk Logo',
  },
]

export const services = [
  {
    id: 'web-design',
    title: 'Website Designing & Development',
    description:
      'We create professional websites that combine modern design with advanced functionality. Our websites are developed to deliver fast performance, responsive layouts, and seamless user experiences across desktops, tablets, and mobile devices.',
    icon: 'Compass' as const,
    span: 'col-span-1 md:col-span-2 row-span-1',
    featured: true,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description:
      'We develop customised mobile applications designed to improve customer accessibility and business operations. Our applications are built with modern technologies to ensure smooth performance, security, and scalability.',
    icon: 'Layers' as const,
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    id: 'erp-software',
    title: 'ERP Software Development',
    description:
      'Our ERP solutions are designed to simplify and automate business operations through integrated management systems. We develop customised ERP software that improves productivity, workflow efficiency, and data management across departments.',
    icon: 'Film' as const,
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    id: 'custom-digital',
    title: 'Custom Digital Solutions',
    description:
      'In addition to our core services, we provide customised digital solutions tailored to unique business requirements. We work closely with businesses to develop scalable platforms that support operational growth and digital transformation.',
    icon: 'TrendingUp' as const,
    span: 'col-span-1 md:col-span-2 row-span-1',
    featured: true,
  },
]

export const serviceCarouselSteps = [
  {
    id: '1',
    name: 'Web Design',
    title: 'Website Designing & Development',
    description:
      'Your website is often the first impression of your business. We design and develop visually appealing, fast-loading, and mobile-friendly websites that reflect your brand identity while delivering a smooth browsing experience. Our websites are built with user engagement, search visibility, and conversion-focused layouts in mind.',
  },
  {
    id: '2',
    name: 'Mobile Apps',
    title: 'Mobile App Development',
    description:
      'Bring your business closer to your customers with innovative mobile applications designed for Android and iOS platforms. Our app development services focus on intuitive user interfaces, seamless functionality, and reliable performance.',
  },
  {
    id: '3',
    name: 'ERP Solutions',
    title: 'ERP Software Solutions',
    description:
      'Simplify business operations with intelligent ERP systems designed to improve productivity and workflow management. Our ERP solutions integrate multiple business functions into one efficient platform.',
  },
  {
    id: '4',
    name: 'Custom',
    title: 'Custom Digital Solutions',
    description:
      'We are committed to providing innovative digital services that combine functionality, design quality, and long-term performance. We deliver solutions designed to support your business success.',
  },
] as const

export const serviceCarouselImages = {
  alt: 'Aether agency services',
  step1img1:
    'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop',
  step1img2:
    'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop',
  step2img1:
    'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop',
  step2img2:
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1674&auto=format&fit=crop',
  step3img:
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop',
  step4img:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop',
}

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Deep immersion into your brand DNA, market landscape, and audience psychology to uncover strategic opportunities.',
    icon: 'Search' as const,
    span: 'col-span-1 md:col-span-2',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Comprehensive roadmap development with clear KPIs, creative direction, and channel architecture.',
    icon: 'Map' as const,
    span: 'col-span-1',
  },
  {
    step: '03',
    title: 'Creation',
    description:
      'Meticulous execution across design, development, and content with uncompromising quality standards.',
    icon: 'Palette' as const,
    span: 'col-span-1',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'Precision deployment with rigorous testing, optimization, and seamless rollout across all channels.',
    icon: 'Rocket' as const,
    span: 'col-span-1 md:col-span-2',
  },
  {
    step: '05',
    title: 'Evolution',
    description:
      'Continuous refinement through data analysis, A/B testing, and strategic iteration for sustained growth.',
    icon: 'RefreshCw' as const,
    span: 'col-span-1 md:col-span-2',
  },
]

export const caseStudies = [
  {
    id: 'lumiere',
    title: 'Lumière Paris',
    category: 'Luxury Fashion',
    description: 'Complete brand transformation and e-commerce experience for a haute couture house.',
    metrics: [
      { label: 'Revenue Growth', value: '+340%' },
      { label: 'Conversion Rate', value: '4.8%' },
    ],
    gradient: 'from-amber-900/40 via-stone-900/60 to-obsidian',
    image: 'linear-gradient(135deg, #1a1510 0%, #2d2418 50%, #0a0a0a 100%)',
  },
  {
    id: 'verde',
    title: 'Verde Estate',
    category: 'Real Estate',
    description: 'Premium property marketing platform with immersive virtual experiences.',
    metrics: [
      { label: 'Lead Quality', value: '+215%' },
      { label: 'Time on Site', value: '8.2min' },
    ],
    gradient: 'from-emerald-900/40 via-stone-900/60 to-obsidian',
    image: 'linear-gradient(135deg, #0f1a14 0%, #1a2e22 50%, #0a0a0a 100%)',
  },
  {
    id: 'atlas',
    title: 'Atlas Private',
    category: 'Wealth Management',
    description: 'Digital presence overhaul for an exclusive wealth advisory firm.',
    metrics: [
      { label: 'AUM Growth', value: '+$180M' },
      { label: 'Client Acquisition', value: '+92%' },
    ],
    gradient: 'from-blue-900/40 via-stone-900/60 to-obsidian',
    image: 'linear-gradient(135deg, #0f1419 0%, #1a2433 50%, #0a0a0a 100%)',
  },
]

export const testimonials = [
  {
    id: 1,
    quote:
      'Aether transformed our digital presence from ordinary to extraordinary. The attention to detail and strategic thinking exceeded every expectation.',
    author: 'Isabella Chen',
    role: 'Chief Marketing Officer',
    company: 'Lumière Paris',
    avatar: 'IC',
    result: '+340% revenue growth',
  },
  {
    id: 2,
    quote:
      'Working with Aether felt like having an extension of our executive team. They understand luxury brands at a level few agencies can match.',
    author: 'Marcus Sterling',
    role: 'Founder & CEO',
    company: 'Verde Estate',
    avatar: 'MS',
    result: '+215% qualified leads',
  },
  {
    id: 3,
    quote:
      'The ROI speaks for itself. Aether delivered a platform that not only looks stunning but drives real, measurable business outcomes.',
    author: 'Alexandra Wright',
    role: 'Managing Partner',
    company: 'Atlas Private',
    avatar: 'AW',
    result: '+$180M AUM growth',
  },
  {
    id: 4,
    quote:
      'Their process is as refined as their output. Every interaction felt premium, every deliverable was flawless.',
    author: 'James Hartley',
    role: 'Brand Director',
    company: 'Monarch Collective',
    avatar: 'JH',
    result: '12 industry awards',
  },
]

export const columnTestimonials = [
  {
    text: 'Aether transformed our digital presence from ordinary to extraordinary. The attention to detail exceeded every expectation.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    name: 'Isabella Chen',
    role: 'CMO, Lumière Paris',
  },
  {
    text: 'Working with Aether felt like having an extension of our executive team. They understand luxury brands at a level few agencies can match.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    name: 'Marcus Sterling',
    role: 'Founder & CEO, Verde Estate',
  },
  {
    text: 'The support team is exceptional — guiding us through strategy and providing ongoing assistance that ensures our satisfaction.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    name: 'Alexandra Wright',
    role: 'Managing Partner, Atlas Private',
  },
  {
    text: 'Aether delivered a platform that not only looks stunning but drives real, measurable business outcomes. The ROI speaks for itself.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    name: 'James Hartley',
    role: 'Brand Director, Monarch Collective',
  },
  {
    text: 'Their robust creative process and quick turnaround transformed our workflow, making us significantly more efficient across every channel.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    name: 'Sophie Laurent',
    role: 'Marketing Director, Cartier',
  },
  {
    text: 'The seamless implementation exceeded expectations. It streamlined our brand operations and improved overall business performance.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    name: 'Elena Vasquez',
    role: 'Head of Digital, Four Seasons',
  },
  {
    text: 'Our online presence and conversions improved dramatically. Aether understood our needs and enhanced every touchpoint of our brand.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    name: 'Thomas Reid',
    role: 'CEO, Rimowa Digital',
  },
  {
    text: 'Every interaction felt premium, every deliverable was flawless. They delivered a solution that truly exceeded our expectations.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face',
    name: 'Camille Dubois',
    role: 'Creative Director, Bottega Veneta',
  },
  {
    text: 'Using Aether, our brand perception and customer engagement significantly improved — boosting performance across all metrics.',
    image:
      'https://images.unsplash.com/photo-1539571196387-b0f063784573?w=80&h=80&fit=crop&crop=face',
    name: 'Daniel Okonkwo',
    role: 'VP Marketing, Aman Resorts',
  },
]

export const aboutParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop',
    subheading: 'About Us',
    heading: 'Professional digital solutions company.',
    contentTitle: 'Helping businesses establish a strong digital presence',
    paragraphs: [
      'We are a professional digital solutions company specialising in website designing and development, mobile app development, and customised ERP software solutions. Our focus is on helping businesses establish a strong digital presence while improving operational efficiency through innovative technology solutions.',
      'With a dedicated team of designers, developers, and technology experts, we create modern platforms that combine functionality, creativity, and performance. Our approach is centred around understanding business objectives and delivering solutions tailored to specific operational requirements.',
    ],
    ctaLabel: 'Our services',
    ctaHref: '#services',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop',
    subheading: 'Our Vision & Mission',
    heading: 'Empower and adapt.',
    contentTitle: 'High-quality digital solutions',
    paragraphs: [
      'Our vision is to empower businesses with reliable digital technologies that improve customer engagement, simplify operations, and support long-term business growth.',
      'Our mission is to provide high-quality digital solutions through innovative design, advanced development practices, and customer-focused strategies. We aim to help businesses adapt to the evolving digital landscape with scalable and efficient technology services.',
    ],
    ctaLabel: 'View our process',
    ctaHref: '#process',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop',
    subheading: 'Our Approach',
    heading: 'Unique digital solutions.',
    contentTitle: 'Collaborative process for high-quality delivery',
    paragraphs: [
      'We believe every business requires unique digital solutions. Our team works closely with clients to understand their goals, industry requirements, and operational challenges before creating customised strategies and technology platforms.',
      'From planning and design to development and deployment, we maintain a transparent and collaborative process to ensure high-quality project delivery.',
    ],
    ctaLabel: 'See our work',
    ctaHref: '#work',
  },
]

export const trustedByParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2670&auto=format&fit=crop',
    subheading: 'Partnerships',
    heading: 'Trusted by industry leaders.',
    contentTitle: 'Brands that define excellence',
    paragraphs: [
      'From haute couture to hospitality, we partner with organizations that set the standard in their categories.',
      'Our clients choose Aether because we understand the nuances of premium positioning and the expectations of discerning audiences.',
    ],
    showCta: false,
  },
]

export const servicesParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    subheading: 'Our Services',
    heading: 'Comprehensive digital solutions.',
    contentTitle: 'Strengthen online presence and efficiency',
    paragraphs: [
      'We provide comprehensive digital solutions designed to help businesses strengthen their online presence, improve operational efficiency, and enhance customer engagement.',
      'Our services combine modern technology, creative design, and strategic development to deliver reliable business solutions.',
    ],
    showCta: false,
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    subheading: 'Why Choose Us',
    heading: 'Grow Your Business Digitally.',
    contentTitle: 'Reliable Technology Solutions',
    paragraphs: [
      'We combine creativity, technology, and strategy to deliver digital solutions that help businesses strengthen their online presence and improve operational performance.',
      'Whether you need a professional website, a powerful mobile application, or a complete ERP system, we deliver solutions that support your business growth efficiently.',
    ],
    showCta: false,
  },
]

export const processParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
    subheading: '01 — Discovery',
    heading: 'Deep immersion.',
    contentTitle: 'Understanding your brand DNA',
    paragraphs: [
      'Deep immersion into your brand DNA, market landscape, and audience psychology to uncover strategic opportunities others miss.',
    ],
    showCta: false,
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    subheading: '02 — Strategy',
    heading: 'Clear direction.',
    contentTitle: 'Roadmap to excellence',
    paragraphs: [
      'Comprehensive roadmap development with clear KPIs, creative direction, and channel architecture tailored to your goals.',
    ],
    showCta: false,
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop',
    subheading: '03 — Creation',
    heading: 'Meticulous craft.',
    contentTitle: 'Uncompromising quality',
    paragraphs: [
      'Meticulous execution across design, development, and content with the same standards that define the brands we serve.',
    ],
    showCta: false,
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    subheading: '04 — Launch',
    heading: 'Precision deployment.',
    contentTitle: 'Flawless rollout',
    paragraphs: [
      'Rigorous testing, optimization, and seamless rollout across all channels — because first impressions define lasting perception.',
    ],
    showCta: false,
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    subheading: '05 — Evolution',
    heading: 'Continuous growth.',
    contentTitle: 'Sustained excellence',
    paragraphs: [
      'Continuous refinement through data analysis, A/B testing, and strategic iteration — because premium brands never stop evolving.',
    ],
    ctaLabel: 'Start a project',
    ctaHref: '#contact',
  },
]

export const workParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2669&auto=format&fit=crop',
    subheading: 'Luxury Fashion',
    heading: 'Lumière Paris.',
    contentTitle: 'Complete brand transformation',
    paragraphs: [
      'Complete brand transformation and e-commerce experience for a haute couture house — redefining digital luxury from the ground up.',
    ],
    metrics: [
      { label: 'Revenue Growth', value: '+340%' },
      { label: 'Conversion Rate', value: '4.8%' },
    ],
    ctaLabel: 'View case study',
    ctaHref: '#work',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1600596542811-ffad6c7680e1?q=80&w=2675&auto=format&fit=crop',
    subheading: 'Real Estate',
    heading: 'Verde Estate.',
    contentTitle: 'Premium property marketing',
    paragraphs: [
      'Premium property marketing platform with immersive virtual experiences that elevate every listing to an editorial showcase.',
    ],
    metrics: [
      { label: 'Lead Quality', value: '+215%' },
      { label: 'Time on Site', value: '8.2min' },
    ],
    ctaLabel: 'View case study',
    ctaHref: '#work',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    subheading: 'Wealth Management',
    heading: 'Atlas Private.',
    contentTitle: 'Digital presence overhaul',
    paragraphs: [
      'Digital presence overhaul for an exclusive wealth advisory firm — projecting authority, trust, and understated sophistication.',
    ],
    metrics: [
      { label: 'AUM Growth', value: '+$180M' },
      { label: 'Client Acquisition', value: '+92%' },
    ],
    ctaLabel: 'View case study',
    ctaHref: '#work',
  },
]

export const testimonialsParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop',
    subheading: 'Testimonials',
    heading: 'Voices from our partners.',
    contentTitle: 'Relationships built on results',
    paragraphs: [
      'The relationships we build are as important as the work we create. Our clients stay because we deliver — consistently, measurably, beautifully.',
    ],
    showCta: false,
  },
]

export const ctaParallaxSections = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
    subheading: 'Grow Your Business Digitally',
    heading: 'Let\'s create together.',
    contentTitle: 'Your vision, our craft',
    paragraphs: [
      'We combine creativity, technology, and strategy to deliver digital solutions that help businesses strengthen their online presence and improve operational performance.',
    ],
    showCta: false,
  },
]

export const footerLinks = {
  services: [
    { label: 'Brand Strategy', href: '#services' },
    { label: 'Digital Experience', href: '#services' },
    { label: 'Content Production', href: '#services' },
    { label: 'Performance Marketing', href: '#services' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Careers', href: '#' },
  ],
  connect: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
}
