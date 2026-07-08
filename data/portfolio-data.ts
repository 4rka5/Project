export type SkillLevel = "Advanced" | "Intermediate" | "Beginner";
export type LocalizedText = {
  en: string;
  id: string;
};

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon: string;
}

export interface ProjectFeatureItem {
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  type: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  stack: string[];
  github: string;
  coverImage: string;
  features: ProjectFeatureItem[];
}

export interface ExperienceItem {
  year: string;
  role: LocalizedText;
  place: LocalizedText;
  details: LocalizedText;
}

export interface CertificateItem {
  title: LocalizedText;
  issuer: LocalizedText;
  year: string;
}

export const techStack: SkillItem[] = [
  { name: "Laravel", level: "Advanced", icon: "/icons/laravel.jpg" },
  { name: "Next.js", level: "Beginner", icon: "/icons/nextjs.png" },
  { name: "React", level: "Beginner", icon: "/icons/react.png" },
  { name: "TypeScript", level: "Beginner", icon: "/icons/typescript.png" },
  { name: "JavaScript", level: "Advanced", icon: "/icons/js.png" },
  { name: "PHP", level: "Advanced", icon: "/icons/php.jpg" },
  { name: "Go", level: "Beginner", icon: "/icons/go.png" },
  { name: "MySQL", level: "Advanced", icon: "/icons/mysql.png" },
  { name: "Git", level: "Advanced", icon: "/icons/git.png" },
  { name: "Docker", level: "Beginner", icon: "/icons/docker.jpg" },
  { name: "Tailwind CSS", level: "Advanced", icon: "/icons/tailwind.jpg" },
  { name: "Linux", level: "Intermediate", icon: "/icons/linux.jpg" },
];

export const projects: ProjectItem[] = [
  {
    slug: "stockify",
    title: "Stockify",
    type: {
      en: "Inventory Management System",
      id: "Sistem Manajemen Inventori",
    },
    description: {
      en: "A robust inventory platform with real-time stock tracking, role-based access, purchase flow automation, and reporting dashboards.",
      id: "Platform inventori yang andal dengan pelacakan stok real-time, akses berbasis peran, otomatisasi alur pembelian, dan dashboard laporan.",
    },
    overview: {
      en: "Stockify helps teams control inventory in one place with a clearer workflow for stock monitoring, purchasing, and reporting.",
      id: "Stockify membantu tim mengelola inventori di satu tempat dengan alur yang lebih jelas untuk pemantauan stok, pembelian, dan laporan.",
    },
    challenge: {
      en: "The client needed a system that could reduce manual stock checks and make permissions easier to manage across different staff roles.",
      id: "Klien membutuhkan sistem yang dapat mengurangi pengecekan stok manual dan memudahkan pengaturan izin di berbagai peran staf.",
    },
    solution: {
      en: "I designed a dashboard-driven application with structured inventory views, access rules, and reporting panels that summarize the latest stock status.",
      id: "Saya merancang aplikasi berbasis dashboard dengan tampilan inventori terstruktur, aturan akses, dan panel laporan yang merangkum status stok terbaru.",
    },
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/4rka5/Stockify",
    coverImage: "/projects/stockify/cover.svg",
    features: [
      {
        title: {
          en: "Realtime Inventory Dashboard",
          id: "Dashboard Inventori Real-time",
        },
        description: {
          en: "Shows live stock positions, important alerts, and quick actions for warehouse users.",
          id: "Menampilkan posisi stok langsung, peringatan penting, dan aksi cepat untuk pengguna gudang.",
        },
        image: "/projects/stockify/dashboard.svg",
      },
      {
        title: {
          en: "Role Based Access",
          id: "Akses Berbasis Peran",
        },
        description: {
          en: "Separates admin, finance, and operational permissions so every team member sees the right tools.",
          id: "Memisahkan izin admin, finance, dan operasional agar setiap anggota tim hanya melihat alat yang tepat.",
        },
        image: "/projects/stockify/access.svg",
      },
      {
        title: {
          en: "Purchase Flow & Reporting",
          id: "Alur Pembelian & Pelaporan",
        },
        description: {
          en: "Keeps purchase requests and reporting organized through a clean workflow and clear summaries.",
          id: "Menjaga permintaan pembelian dan pelaporan tetap rapi melalui alur kerja yang bersih dan ringkasan yang jelas.",
        },
        image: "/projects/stockify/reports.svg",
      },
    ],
  },
  {
    slug: "ukk",
    title: "UKK",
    type: {
      en: "School Management System",
      id: "Sistem Manajemen Sekolah",
    },
    description: {
      en: "A complete school operations suite for academic administration, attendance, student records, and teacher workflow management.",
      id: "Sistem operasional sekolah yang lengkap untuk administrasi akademik, kehadiran, data siswa, dan manajemen alur kerja guru.",
    },
    overview: {
      en: "UKK is a school operations platform built to simplify academic tasks and centralize student and teacher information.",
      id: "UKK adalah platform operasional sekolah yang dibuat untuk menyederhanakan tugas akademik dan memusatkan informasi siswa serta guru.",
    },
    challenge: {
      en: "Schools often rely on scattered spreadsheets and manual notes, which make attendance, records, and coordination harder to maintain.",
      id: "Sekolah sering bergantung pada spreadsheet terpisah dan catatan manual, sehingga absensi, data, dan koordinasi menjadi lebih sulit dijaga.",
    },
    solution: {
      en: "The system combines academic administration, attendance, and role-specific workflows in one structured interface for daily use.",
      id: "Sistem ini menggabungkan administrasi akademik, absensi, dan alur kerja spesifik per peran dalam satu antarmuka terstruktur untuk penggunaan harian.",
    },
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/4rka5/UKK",
    coverImage: "/projects/ukk/cover.svg",
    features: [
      {
        title: {
          en: "Academic Administration",
          id: "Administrasi Akademik",
        },
        description: {
          en: "Keeps academic data, schedules, and administrative records accessible in one workspace.",
          id: "Menjaga data akademik, jadwal, dan catatan administrasi tetap mudah diakses dalam satu ruang kerja.",
        },
        image: "/projects/ukk/administration.svg",
      },
      {
        title: {
          en: "Attendance Tracking",
          id: "Pelacakan Kehadiran",
        },
        description: {
          en: "Makes class attendance easier to mark, review, and summarize for teachers and admins.",
          id: "Membuat absensi kelas lebih mudah dicatat, ditinjau, dan diringkas untuk guru maupun admin.",
        },
        image: "/projects/ukk/attendance.svg",
      },
      {
        title: {
          en: "Teacher Workflow",
          id: "Alur Kerja Guru",
        },
        description: {
          en: "Supports teachers with organized task views, student records, and quick access to their daily actions.",
          id: "Mendukung guru dengan tampilan tugas yang rapi, data siswa, dan akses cepat ke aktivitas harian mereka.",
        },
        image: "/projects/ukk/teacher-workflow.svg",
      },
    ],
  },
  {
    slug: "cars-arena",
    title: "Cars Arena",
    type: {
      en: "Car Marketplace Platform",
      id: "Platform Marketplace Mobil",
    },
    description: {
      en: "A modern marketplace experience for browsing, filtering, and listing cars with lead generation and dealer profile modules.",
      id: "Pengalaman marketplace modern untuk menelusuri, memfilter, dan memasang listing mobil dengan fitur lead generation dan profil dealer.",
    },
    overview: {
      en: "Cars Arena is a car marketplace concept focused on clean browsing, sharper filters, and better listing visibility.",
      id: "Cars Arena adalah konsep marketplace mobil yang berfokus pada penelusuran yang bersih, filter yang tajam, dan visibilitas listing yang lebih baik.",
    },
    challenge: {
      en: "Marketplace users needed a faster way to compare vehicles, while sellers needed a clearer path to showcase listings and capture leads.",
      id: "Pengguna marketplace membutuhkan cara yang lebih cepat untuk membandingkan kendaraan, sedangkan penjual membutuhkan jalur yang lebih jelas untuk menampilkan listing dan menangkap lead.",
    },
    solution: {
      en: "I built a marketplace layout with search, dealer profiles, and listing modules that keep discovery and sales intent connected.",
      id: "Saya membangun tata letak marketplace dengan pencarian, profil dealer, dan modul listing yang menjaga penemuan produk dan niat penjualan tetap terhubung.",
    },
    stack: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/4rka5/Cars-Arena",
    coverImage: "/projects/cars-arena/cover.svg",
    features: [
      {
        title: {
          en: "Smart Search & Filters",
          id: "Pencarian & Filter Cerdas",
        },
        description: {
          en: "Helps buyers narrow down car options quickly based on key marketplace criteria.",
          id: "Membantu pembeli menyaring pilihan mobil dengan cepat berdasarkan kriteria utama marketplace.",
        },
        image: "/projects/cars-arena/search.svg",
      },
      {
        title: {
          en: "Dealer Profiles",
          id: "Profil Dealer",
        },
        description: {
          en: "Gives sellers a stronger identity with structured profile pages and trust-building information.",
          id: "Memberi penjual identitas yang lebih kuat dengan halaman profil terstruktur dan informasi yang membangun kepercayaan.",
        },
        image: "/projects/cars-arena/dealer.svg",
      },
      {
        title: {
          en: "Lead Generation",
          id: "Lead Generation",
        },
        description: {
          en: "Creates a cleaner flow for users who want to contact sellers or request more information.",
          id: "Menciptakan alur yang lebih rapi untuk pengguna yang ingin menghubungi penjual atau meminta informasi lebih lanjut.",
        },
        image: "/projects/cars-arena/leads.svg",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export const experiences: ExperienceItem[] = [
  {
    year: "2023 - 2025",
    role: {
      en: "School-Based Web Development Learning",
      id: "Pembelajaran Web Development di Sekolah",
    },
    place: {
      en: "School",
      id: "Sekolah",
    },
    details: {
      en: "Studied web development at school, including programming fundamentals, database concepts, and project-based practice.",
      id: "Mempelajari web development di sekolah, mencakup dasar pemrograman, konsep database, dan praktik berbasis proyek.",
    },
  },
  {
    year: "2025 - 2026",
    role: {
      en: "Intern at Seven Inc",
      id: "Magang di Seven Inc",
    },
    place: {
      en: "Seven Inc",
      id: "Seven Inc",
    },
    details: {
      en: "Completed internship by contributing to company projects, supporting web feature development, and collaborating with the engineering team.",
      id: "Menjalani program magang dengan berkontribusi pada proyek perusahaan, membantu pengembangan fitur web, dan berkolaborasi dengan tim engineering.",
    },
  },
  {
    year: "2026 - Present",
    role: {
      en: "Full Stack Developer",
      id: "Full Stack Developer",
    },
    place: {
      en: "Freelance & Independent Projects",
      id: "Freelance & Proyek Mandiri",
    },
    details: {
      en: "Developing scalable web apps with modern backend architecture and highly interactive frontend experiences.",
      id: "Mengembangkan aplikasi web yang skalabel dengan arsitektur backend modern dan pengalaman frontend yang interaktif.",
    },
  },
];

export const certificates: CertificateItem[] = [
  {
    title: {
      en: "Full Stack Web Development",
      id: "Full Stack Web Development",
    },
    issuer: {
      en: "Professional Learning Platform",
      id: "Platform Pembelajaran Profesional",
    },
    year: "2025",
  },
  {
    title: {
      en: "Advanced Laravel Architecture",
      id: "Arsitektur Laravel Lanjutan",
    },
    issuer: {
      en: "Backend Engineering Academy",
      id: "Akademi Rekayasa Backend",
    },
    year: "2025",
  },
  {
    title: {
      en: "TypeScript & Modern Frontend",
      id: "TypeScript & Frontend Modern",
    },
    issuer: {
      en: "Frontend Specialist Program",
      id: "Program Spesialis Frontend",
    },
    year: "2024",
  },
];
