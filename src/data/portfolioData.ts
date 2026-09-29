import { Project, SkillCategory, ExperienceItem, EducationItem, TestimonialItem, FaqItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Irfan Nabil Makarim',
  nickname: 'Irfan',
  title: 'Full-Stack Software Engineer & Frontend Specialist',
  shortBio: 'Pengembang perangkat lunak dengan spesialisasi ekosistem modern React, TypeScript, dan arsitektur backend berkinerja tinggi. Berfokus pada perancangan antarmuka pengguna yang bersih, responsif, dan scalable.',
  aboutDetailed: `Halo! Saya Irfan Nabil Makarim, seorang Full-Stack Software Engineer yang berbasis di Indonesia. Saya memiliki passion mendalam dalam memadukan keindahan desain antarmuka dengan performa kode rekayasa perangkat lunak tingkat tinggi.

Selama lebih dari 5 tahun berkecimpung di industri teknologi, saya telah merancang dan membangun berbagai aplikasi skala menengah hingga besar — mulai dari platform fintech analitik, ekosistem e-commerce terdistribusi, hingga sistem manajemen data real-time.

Filosofi kerja saya berpusat pada: 'Clean Architecture, Zero Clutter, and Human-First Experience'. Saya selalu memastikan setiap baris kode yang ditulis mudah dipelihara (maintainable), efisien dalam konsumsi sumber daya, serta menghadirkan pengalaman navigasi yang mulus bagi pengguna akhir.`,
  email: 'irfannabilmakarim@gmail.com',
  location: 'Jakarta & Bandung, Indonesia',
  timezone: 'WIB (UTC+7)',
  availability: 'Tersedia untuk Proyek & Kontrak Penuh Waktu',
  github: 'https://github.com/irfannabilmakarim',
  linkedin: 'https://linkedin.com/in/irfannabilmakarim',
  whatsapp: 'https://wa.me/6281234567890',
  stats: [
    { label: 'Tahun Pengalaman', value: '5+', sub: 'Sejak 2021' },
    { label: 'Proyek Selesai', value: '35+', sub: 'Web & Mobile' },
    { label: 'Klien & Mitra', value: '20+', sub: 'Startup & Korporat' },
    { label: 'Kepuasan Klien', value: '99.4%', sub: 'Rating 4.9/5' }
  ],
  specialties: [
    'Frontend Architecture (React, Next.js, TypeScript)',
    'Responsive & Accessible UI/UX Design (Tailwind CSS)',
    'Scalable Backend & REST/GraphQL API (Node.js, Go)',
    'Database Optimization (PostgreSQL, Redis, Prisma)',
    'CI/CD & Cloud Infrastructure (Docker, GCP, Vercel)'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'arthaflow-fintech',
    title: 'ArthaFlow Financial Analytics',
    category: 'Full Stack',
    tagline: 'Platform analisis kas operasional perusahaan dan peramalan arus kas cerdas.',
    description: 'Aplikasi web manajemen finansial korporat terintegrasi dengan visualisasi data real-time, audit multi-mata uang, dan rekonsiliasi otomatis.',
    fullOverview: 'ArthaFlow dirancang untuk memecahkan kerumitan pemantauan arus kas multi-rekening bagi startup dan UKM berskala menengah. Sistem ini mengonsolidasi transaksi dari 5+ payment gateway dan bank terkemuka ke dalam dashboard terpadu dengan latency pembaruan di bawah 200ms.',
    features: [
      'Dashboard analitik interaktif dengan chart interaktif berbasis WebGL',
      'Modul rekonsiliasi arus kas otomatis dengan akurasi 99.8%',
      'Sistem ekspor laporan finansial otomatis ke format PDF & XLSX berstandar akuntansi',
      'Role-based Access Control (RBAC) aman untuk akuntan, manajer, dan direktur'
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis'],
    metrics: '+45% Efisiensi Waktu Audit Bulanan',
    demoUrl: 'https://arthaflow-preview.demo',
    githubUrl: 'https://github.com/irfannabilmakarim/arthaflow-analytics',
    featured: true,
    colorAccent: '#0ea5e9',
    architecture: ['Clean Architecture', 'Event-Driven Microservices', 'Tailwind Grid Engine']
  },
  {
    id: 'nusamarket-ecommerce',
    title: 'NusaMarket Headless Commerce',
    category: 'Web App',
    tagline: 'Ekosistem e-commerce modern dengan performa Lighthouse 99 dan checkout instan.',
    description: 'Platform jual beli daring berperforma tinggi untuk produk kreatif lokal Indonesia dengan keranjang terenkripsi dan integrasi kurir instan.',
    fullOverview: 'Dibangun dengan paradigma Jamstack modern, NusaMarket menghadirkan katalog produk berkecepatan tinggi tanpa layout shift. Menggunakan server state management modern dan caching edge computing untuk memastikan katalog puluhan ribu SKU tetap responsif di jaringan 4G mobile.',
    features: [
      'Pencarian instan produk dengan filter atribut multifaset tanpa reload',
      'Integrasi checkout multilangkah yang dioptimasi untuk rasio konversi tinggi',
      'Kalkulator ongkos kirim real-time terhubung ke API logistik Indonesia',
      'Dukungan mode gelap otomatis dan rendering responsif penuh di smartphone'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'Stripe & Midtrans', 'Prisma'],
    metrics: '99 Skor Google Lighthouse & 0.4s FCP',
    demoUrl: 'https://nusamarket-app.demo',
    githubUrl: 'https://github.com/irfannabilmakarim/nusamarket-commerce',
    featured: true,
    colorAccent: '#38bdf8',
    architecture: ['Headless Storefront', 'Edge Caching', 'Atomic Design Pattern']
  },
  {
    id: 'medikasmart-emr',
    title: 'MedikaSmart Cloud Clinic',
    category: 'Full Stack',
    tagline: 'Sistem Rekam Medis Elektronik (RME) klinik terakreditasi standar SatuSehat.',
    description: 'Aplikasi klinik terpadu untuk pencatatan rekam medis pasien, antrean poli otomatis, dan manajemen inventaris farmasi berbasis cloud.',
    fullOverview: 'Solusi sistem informasi klinik modern yang mematuhi standar interoperabilitas SatuSehat Kemenkes RI. Memungkinkan dokter dan perawat mengakses riwayat diagnosis pasien secara aman dengan enkripsi AES-256 dan audit trail auditabilitas tinggi.',
    features: [
      'Pencatatan RME SOAP (Subjective, Objective, Assessment, Plan) cepat dengan template medis',
      'Display nomor antrean klinik berbasis audio sintetis dan sinkronisasi real-time via WebSocket',
      'Manajemen stok obat dengan alert masa kedaluwarsa otomatis (FEFO/FIFO)',
      'Sinkronisasi bridging data langsung dengan REST API SatuSehat'
    ],
    technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    metrics: 'Digunakan oleh 12+ Klinik Pratama Mandiri',
    demoUrl: 'https://medikasmart-demo.app',
    githubUrl: 'https://github.com/irfannabilmakarim/medikasmart-rme',
    featured: true,
    colorAccent: '#0284c7',
    architecture: ['HIPAA/Permenkes Compliant Security', 'WebSocket Realtime Sync', 'PostgreSQL JSONB']
  },
  {
    id: 'scribeai-workspace',
    title: 'ScribeWorkspace Document Studio',
    category: 'UI/UX',
    tagline: 'Ruang kerja penulisan dokumen teknis kolaboratif dengan pemformatan visual.',
    description: 'Editor teks teknis modern bergaya Notion dan Obsidian dengan kanvas mindmap interaktif dan ekspor multi-format (Markdown, HTML, PDF).',
    fullOverview: 'ScribeWorkspace berfokus pada pengalaman menulis tanpa distraksi bagi engineer dan penulis teknis. Dilengkapi dengan split view kanvas, auto-saving lokal berkala, dan penataan hirarki dokumen modular.',
    features: [
      'Editor markdown WYSIWYG bebas latensi dengan syntax highlighting kode',
      'Penyimpanan lokal cerdas dengan IndexedDB dan sinkronisasi awan',
      'Fitur grafik relasi antar dokumen untuk pemetaan pengetahuan (Knowledge Graph)',
      'Pintas keyboard menyeluruh untuk produktivitas keyboard-only tanpa mouse'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'CodeMirror', 'IndexedDB', 'SVG Engine'],
    metrics: '5,000+ Dokumen Aktif Dikelola',
    demoUrl: 'https://scribeworkspace.demo',
    githubUrl: 'https://github.com/irfannabilmakarim/scribe-workspace',
    featured: false,
    colorAccent: '#0ea5e9',
    architecture: ['Local-First Architecture', 'CRDT Collaboration Engine', 'Virtual DOM Optimizer']
  },
  {
    id: 'gologix-fleet-api',
    title: 'GoLogix Fleet Routing Engine',
    category: 'API & Backend',
    tagline: 'High-throughput microservices untuk kalkulasi rute pengiriman dan geofencing armada.',
    description: 'Arsitektur backend mikroservis yang menangani telemetri puluhan ribu kendaraan pengiriman dengan latensi komputasi rute di bawah 50ms.',
    fullOverview: 'Dirancang menggunakan bahasa Go dan Redis Cluster untuk memproses jutaan titik koordinat GPS kurir per menit, menghitung ETA pengiriman dinamis berbasis kemacetan jalan, serta mendeteksi pelanggaran batas rute geofencing.',
    features: [
      'Pemrosesan streaming data GPS 10,000+ events per detik dengan buffer Kafka',
      'Algoritma Dijkstra & A* yang dioptimasi untuk penentuan rute optimal multi-tujuan',
      'Dokumentasi API interaktif berstandar OpenAPI 3.0 dengan rate limiting cerdas',
      'Dashboard pemantauan performa server Prometheus & Grafana terintegrasi'
    ],
    technologies: ['Go (Golang)', 'Redis', 'PostgreSQL', 'Docker', 'REST API', 'gRPC'],
    metrics: '< 45ms P99 Latency pada 10k RPS',
    demoUrl: 'https://gologix-status.demo',
    githubUrl: 'https://github.com/irfannabilmakarim/gologix-routing-engine',
    featured: false,
    colorAccent: '#38bdf8',
    architecture: ['High-Concurrency Go Routines', 'Distributed Redis In-Memory', 'Docker Swarm']
  },
  {
    id: 'karyacraft-mobile',
    title: 'KaryaCraft Artisan Showcase',
    category: 'Mobile App',
    tagline: 'Aplikasi katalog interaktif kurasi karya seni dan kerajinan tangan khas Nusantara.',
    description: 'PWA & aplikasi mobile lintas platform untuk menghubungkan perajin lokal Indonesia dengan galeri internasional melalui visualisasi galeri 360.',
    fullOverview: 'Mendukung tampilan interaktif dengan gestur sentuh responsif, audio narasi cerita warisan budaya perajin, serta dukungan mode offline saat koneksi internet terbatas di wilayah sentra kerajinan pedesaan.',
    features: [
      'Navigasi gestur geser mulus 60 FPS dengan Motion transitions',
      'Dukungan penuh PWA Offline-first menggunakan Service Worker',
      'Peta interaktif sentra kerajinan dari Sabang sampai Merauke',
      'Multibahasa (Bahasa Indonesia & Bahasa Inggris) untuk pasar internasional'
    ],
    technologies: ['React', 'PWA', 'Tailwind CSS', 'Motion', 'IndexedDB', 'Web Audio API'],
    metrics: 'Telah Memamerkan 150+ Pengrajin Tradisional',
    demoUrl: 'https://karyacraft-app.demo',
    githubUrl: 'https://github.com/irfannabilmakarim/karyacraft-artisan',
    featured: false,
    colorAccent: '#0284c7',
    architecture: ['Progressive Web App (PWA)', 'Responsive Touch Gestures', 'Service Worker Cache']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & UI Engineering',
    description: 'Membangun antarmuka modern yang cepat, indah, aksesibel, dan memikat.',
    skills: [
      { name: 'React.js & Next.js', level: 96, experience: '5+ Tahun Pengalaman' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 94, experience: '5+ Tahun Pengalaman' },
      { name: 'Tailwind CSS & Modern CSS', level: 98, experience: '5+ Tahun Pengalaman' },
      { name: 'HTML5, Semantic & Web Accessibility', level: 95, experience: 'Standar WCAG AA' },
      { name: 'State Management (Zustand, Redux, Context)', level: 92, experience: 'Production Grade' },
      { name: 'Motion & Micro-interactions', level: 90, experience: 'Smooth 60fps UX' }
    ]
  },
  {
    title: 'Backend, API & Basis Data',
    description: 'Fondasi arsitektur server yang andal, aman, terdistribusi, dan teruji beban.',
    skills: [
      { name: 'Node.js & Express.js', level: 92, experience: '4+ Tahun Pengalaman' },
      { name: 'Go (Golang)', level: 82, experience: '2+ Tahun Pengalaman' },
      { name: 'PostgreSQL & SQL Query Optimization', level: 88, experience: 'Relational DB Master' },
      { name: 'Redis (Caching & Message Queues)', level: 85, experience: 'High Performance' },
      { name: 'RESTful API & GraphQL Design', level: 94, experience: 'OpenAPI 3.0 Standard' },
      { name: 'Prisma ORM & Drizzle', level: 90, experience: 'Type-Safe Database' }
    ]
  },
  {
    title: 'DevOps, Tooling & Cloud',
    description: 'Infrastruktur otomatisasi pengiriman kode dan pemeliharaan aplikasi.',
    skills: [
      { name: 'Git, GitHub Actions & CI/CD Pipelines', level: 92, experience: 'Automated Workflows' },
      { name: 'Docker & Containerization', level: 86, experience: 'Reproducible Builds' },
      { name: 'Linux / Bash Scripting', level: 85, experience: 'Server Management' },
      { name: 'Cloud Platforms (GCP, AWS, Vercel)', level: 88, experience: 'Serverless & Compute' },
      { name: 'Vite, Turborepo & Webpack', level: 90, experience: 'Build Optimization' },
      { name: 'Testing (Jest, Vitest, Playwright)', level: 84, experience: 'Unit & E2E Testing' }
    ]
  },
  {
    title: 'Desain Produk & Metodologi Kerja',
    description: 'Pola pikir terstruktur untuk mewujudkan produk digital dari ide hingga rilis.',
    skills: [
      { name: 'Figma UI/UX & Design Systems', level: 89, experience: 'Design Token & Library' },
      { name: 'Clean Architecture & Design Patterns', level: 92, experience: 'Scalable Codebase' },
      { name: 'Agile, Scrum & Code Reviews', level: 94, experience: 'Collaborative Sprint' },
      { name: 'Technical Documentation & Architecture Decision', level: 91, experience: 'Clear Prose' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Frontend / Full-Stack Engineer',
    company: 'Solusi Teknologi Nusantara',
    period: '2023 — Sekarang',
    location: 'Jakarta, Indonesia (Hybrid)',
    description: 'Memimpin tim rekayasa frontend yang terdiri dari 6 engineer dalam membangun platform SaaS b2b berskala korporat dengan tingkat retensi tinggi.',
    responsibilities: [
      'Merancang arsitektur monorepo modular yang memangkas waktu build dan deployment hingga 42%',
      'Membuat dan mengelola Design System berbasis Tailwind CSS yang digunakan di 4 produk utama perusahaan',
      'Mengurangi First Contentful Paint (FCP) dari 2.4 detik menjadi 0.8 detik melalui optimasi code-splitting dan tree-shaking',
      'Mementori engineer junior dalam best practice TypeScript, automated testing, dan clean code principles'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Software Engineer',
    company: 'Inovasi Digital Karya',
    period: '2021 — 2023',
    location: 'Bandung, Indonesia (Remote)',
    description: 'Mengembangkan aplikasi web transaksi fintech dan sistem logistik real-time untuk klien berskala menengah di Asia Tenggara.',
    responsibilities: [
      'Membangun API gateway terpusat yang menangani ribuan transaksi harian dengan jaminan ketersediaan 99.9%',
      'Mengintegrasikan payment gateway multi-metode (Virtual Account, QRIS, Kartu Kredit, E-Wallet)',
      'Mengimplementasikan sistem audit trail dan logging terstruktur untuk kepatuhan regulasi keamanan finansial',
      'Berkolaborasi erat dengan product manager dan tim UI/UX dalam iterasi fitur sprint mingguan'
    ],
    techStack: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'GCP']
  },
  {
    id: 'exp-3',
    role: 'Junior Frontend Developer',
    company: 'Studio Kreasi Mandiri',
    period: '2020 — 2021',
    location: 'Bandung, Indonesia',
    description: 'Mengembangkan antarmuka landing page responsif, dashboard internal, dan microsite kampanye interaktif untuk brand nasional.',
    responsibilities: [
      'Mengubah file desain Figma pixel-perfect menjadi antarmuka web interaktif yang responsif di semua resolusi gawai',
      'Meningkatkan kompatibilitas lintas peramban (Chrome, Firefox, Safari, Edge) dan aksesibilitas dasar WCAG',
      'Mengoptimasi aset visual dan font web untuk performa loading secepat kilat'
    ],
    techStack: ['React', 'JavaScript (ES6)', 'Tailwind CSS', 'Figma', 'REST API']
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Sarjana Komputer (S.Kom.) - Teknik Informatika',
    institution: 'Universitas Terkemuka di Indonesia',
    period: '2016 — 2020',
    grade: 'IPK 3.84 / 4.00 (Cum Laude)',
    highlights: [
      'Fokus riset tugas akhir: Optimasi Performa Arsitektur Web Single-Page Application (SPA) Berbasis Component Reusability',
      'Juara 2 National Hackathon kategori Inovasi Layanan Publik Digital',
      'Ketua Divisi Riset & Teknologi pada Himpunan Mahasiswa Informatika'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Sertifikasi Profesional Cloud & Web Architecture',
    institution: 'Google Cloud & Meta Professional Certifications',
    period: '2022 — 2023',
    highlights: [
      'Meta Certified Front-End Developer Professional',
      'Google Cloud Certified Associate Cloud Engineer',
      'Algoritma Data Structures & System Design Specialization'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Bambang Kusuma',
    role: 'Chief Technology Officer (CTO)',
    company: 'Finarta Solusi Digital',
    avatarText: 'BK',
    quote: 'Irfan Nabil Makarim adalah sosok software engineer langka yang menggabungkan ketajaman estetika UI dengan fondasi logika backend yang sangat kokoh. Pekerjaannya pada sistem analitik kami selalu tepat waktu, rapi, dan mudah di-scale.'
  },
  {
    id: 'test-2',
    name: 'Siti Sarah Rahmawati',
    role: 'Head of Product',
    company: 'Nusa Digital Global',
    avatarText: 'SR',
    quote: 'Bekerja bersama Irfan sangat menyenangkan. Komunikasinya sangat proaktif dan ia selalu memberikan alternatif arsitektur yang paling efisien untuk performa aplikasi. Skor kepuasan pengguna kami melesat setelah peluncuran fitur barunya.'
  },
  {
    id: 'test-3',
    name: 'Dimas Wicaksono',
    role: 'Lead Architect',
    company: 'Karya Integrasi Prima',
    avatarText: 'DW',
    quote: 'Kedisiplinan Irfan dalam menerapkan Clean Code dan standar TypeScript patut diacungi jempol. Seluruh codebase yang ia buat memiliki dokumentasi yang jelas dan mudah di-review oleh rekan sejawat.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Layanan dan lingkup pekerjaan apa saja yang biasa Irfan kerjakan?',
    answer: 'Saya melayani pengembangan web aplikasi skala penuh (Full-Stack), perancangan arsitektur frontend modern menggunakan React/Next.js dan Tailwind CSS, optimasi performa website (Core Web Vitals), pembangunan REST/GraphQL API yang aman, serta integrasi sistem pihak ketiga (Payment Gateway, Webhook, Cloud DB).'
  },
  {
    question: 'Berapa lama estimasi waktu pengerjaan untuk sebuah proyek?',
    answer: 'Waktu pengerjaan bergantung pada kompleksitas modul dan skala proyek. Landing page profesional atau portofolio interaktif biasanya memakan waktu 1–2 minggu. Aplikasi web atau MVP SaaS lengkap dengan autentikasi, database, dan dashboard analitik berkisar antara 3–8 minggu.'
  },
  {
    question: 'Bagaimana metode komunikasi dan pelaporan progress proyek?',
    answer: 'Saya menjunjung tinggi transparansi kerja. Progress biasanya dilaporkan secara mingguan melalui demo staging URL, board kanban (Trello/Notion), dan channel komunikasi langsung seperti WhatsApp, Telegram, atau Slack.'
  },
  {
    question: 'Apakah Irfan bersedia menerima penawaran kerja full-time atau kontrak remote?',
    answer: 'Ya! Saya selalu terbuka untuk mendiskusikan peluang kerja penuh waktu (full-time remote/hybrid) maupun proyek kontrak menarik yang memiliki visi teknologi yang ambisius.'
  }
];
