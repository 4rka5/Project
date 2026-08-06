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

export interface ProjectGalleryItem {
  title: LocalizedText;
  description?: LocalizedText;
  images: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  status: "completed" | "in-development";
  type: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  stack: string[];
  github: string;
  coverImage: string;
  features: ProjectFeatureItem[];
  gallery?: ProjectGalleryItem[];
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
  { name: "Next.js", level: "Intermediate", icon: "/icons/nextjs.png" },
  { name: "React", level: "Intermediate", icon: "/icons/react.png" },
  { name: "TypeScript", level: "Intermediate", icon: "/icons/typescript.png" },
  { name: "JavaScript", level: "Advanced", icon: "/icons/js.png" },
  { name: "PHP", level: "Advanced", icon: "/icons/php.jpg" },
  { name: "Go", level: "Beginner", icon: "/icons/go.png" },
  { name: "MySQL", level: "Advanced", icon: "/icons/mysql.png" },
  { name: "Git", level: "Advanced", icon: "/icons/git.png" },
  { name: "Docker", level: "Beginner", icon: "/icons/docker.jpg" },
  { name: "Tailwind CSS", level: "Advanced", icon: "/icons/tailwind.jpg" },
  { name: "Linux", level: "Intermediate", icon: "/icons/linux.jpg" },
  { name: "Flutter", level: "Intermediate", icon: "/icons/flutter.jpg" },
];

const localized = (text: string): LocalizedText => ({
  en: text,
  id: text,
});

const galleryGroup = (title: string, images: string[]): ProjectGalleryItem => ({
  title: localized(title),
  images,
});

const stockifyGallery: ProjectGalleryItem[] = [
  galleryGroup("Authentication", [
    "/projects/stockify/auth/login.png",
    "/projects/stockify/auth/register.png",
    "/projects/stockify/auth/forgot.png",
    "/projects/stockify/auth/success.png",
  ]),
  galleryGroup("Admin", [
    "/projects/stockify/Admin/Dashboard_1.png",
    "/projects/stockify/Admin/Dashboard_2.png",
    "/projects/stockify/Admin/Approval_Produk.png",
    "/projects/stockify/Admin/Activity_Logs.png",
    "/projects/stockify/Admin/Edit_kategori_1.png",
    "/projects/stockify/Admin/Edit_Kategori.png",
    "/projects/stockify/Admin/Edit_Produk_1.png",
    "/projects/stockify/Admin/Edit_Produk_2.png",
    "/projects/stockify/Admin/Edit_Template_Atribut.png",
    "/projects/stockify/Admin/Edit_Transaksi_Stok.png",
    "/projects/stockify/Admin/Jendela_Notifikasi.png",
    "/projects/stockify/Admin/Laporan_1.png",
    "/projects/stockify/Admin/Laporan_2.png",
    "/projects/stockify/Admin/Laporan_3.png",
    "/projects/stockify/Admin/Laporan_4.png",
    "/projects/stockify/Admin/Laporan_Stok.png",
    "/projects/stockify/Admin/Manajemen_Kategori.png",
    "/projects/stockify/Admin/Manajemen_Produk.png",
    "/projects/stockify/Admin/Manajemen_Supplier.png",
    "/projects/stockify/Admin/Notifikasi.png",
    "/projects/stockify/Admin/Pengaturan_1.png",
    "/projects/stockify/Admin/Pengaturan_2.png",
    "/projects/stockify/Admin/Manajemen_Stok.png",
    "/projects/stockify/Admin/Manajemen_User.png",
    "/projects/stockify/Admin/Detail_Transaksi_Stok.png",
    "/projects/stockify/Admin/Detail_Pengajuan_Approval.png",
    "/projects/stockify/Admin/Detail_Notifikasi.png",
  ]),
  galleryGroup("Manajer", [
    "/projects/stockify/Manajer/Dashboard.png",
    "/projects/stockify/Manajer/Approval_Tugas_Staff.png",
    "/projects/stockify/Manajer/Ajukan_Produk_1.png",
    "/projects/stockify/Manajer/Ajukan_Produk_2.png",
    "/projects/stockify/Manajer/Buat_Tugas.png",
    "/projects/stockify/Manajer/Daftar_Produk.png",
    "/projects/stockify/Manajer/Daftar_Suplier.png",
    "/projects/stockify/Manajer/Detail_Approval_Tugas_Staff.png",
    "/projects/stockify/Manajer/Detail_Notifikasi.png",
    "/projects/stockify/Manajer/Detail_Produk_1.png",
    "/projects/stockify/Manajer/Detail_Produk_2.png",
    "/projects/stockify/Manajer/Detail_Transaksi.png",
    "/projects/stockify/Manajer/Jendela_Notifikasi.png",
    "/projects/stockify/Manajer/Laporan_Stok_1.png",
    "/projects/stockify/Manajer/Laporan_Stok_2.png",
    "/projects/stockify/Manajer/Monitor_Stok.png",
    "/projects/stockify/Manajer/Notifikasi.png",
    "/projects/stockify/Manajer/Profil.png",
    "/projects/stockify/Manajer/Riwayat_Transaksi.png",
    "/projects/stockify/Manajer/Stok_Keluar.png",
    "/projects/stockify/Manajer/Stok_Masuk.png",
    "/projects/stockify/Manajer/Stok_Opname.png",
  ]),
  galleryGroup("Staff", [
    "/projects/stockify/Staff/Dashboard_1.png",
    "/projects/stockify/Staff/Dashboard_2.png",
    "/projects/stockify/Staff/Barang_Keluar_1.png",
    "/projects/stockify/Staff/Barang_Keluar_2.png",
    "/projects/stockify/Staff/Barang_Masuk_1.png",
    "/projects/stockify/Staff/Barang_Masuk_2.png",
    "/projects/stockify/Staff/Cek_Stok_Barang_1.png",
    "/projects/stockify/Staff/Cek_Stok_Barang_2.png",
    "/projects/stockify/Staff/Daftar_Produk_1.png",
    "/projects/stockify/Staff/Daftar_Produk_2.png",
    "/projects/stockify/Staff/Detail_Notifikasi.png",
    "/projects/stockify/Staff/Detail_Produk.png",
    "/projects/stockify/Staff/Detail_Transaksi.png",
    "/projects/stockify/Staff/Jendela_Notifikasi.png",
    "/projects/stockify/Staff/Notifikasi.png",
    "/projects/stockify/Staff/Profil.png",
    "/projects/stockify/Staff/Riwayat_Transaksi.png",
    "/projects/stockify/Staff/Stock_Opname_1.png",
    "/projects/stockify/Staff/Stok_Opname_2.png",
  ]),
];

const ukkGallery: ProjectGalleryItem[] = [
  galleryGroup("Authentication", [
    "/projects/ukk/Auth/Login.png",
    "/projects/ukk/Auth/Register.png",
  ]),

  galleryGroup("Admin", [
    "/projects/ukk/Admin/Anggota_Project.png",
    "/projects/ukk/Admin/Approval_Project.png",
    "/projects/ukk/Admin/Dashboard_1.png",
    "/projects/ukk/Admin/Dashboard_2.png",
    "/projects/ukk/Admin/Edit_Project.png",
    "/projects/ukk/Admin/Edit_User_1.png",
    "/projects/ukk/Admin/Edit_User_2.png",
    "/projects/ukk/Admin/Halaman_Notifikasi.png",
    "/projects/ukk/Admin/Jendela_Notifikasi.png",
    "/projects/ukk/Admin/Laporan_1.png",
    "/projects/ukk/Admin/Laporan_2.png",
    "/projects/ukk/Admin/Manajemen_Project.png",
    "/projects/ukk/Admin/Manajemen_User.png",
    "/projects/ukk/Admin/Tambah_Project.png",
    "/projects/ukk/Admin/Tambah_User_1.png",
    "/projects/ukk/Admin/Tambah_User_2.png",
  ]),

  galleryGroup("Team Leader", [
    "/projects/ukk/Team_Leader/Dashboard_1.png",
    "/projects/ukk/Team_Leader/Dashboard_2.png",
    "/projects/ukk/Team_Leader/Detail_Project.png",
    "/projects/ukk/Team_Leader/Halaman_Notifikasi.png",
    "/projects/ukk/Team_Leader/Jendela_Notifikasi.png",
    "/projects/ukk/Team_Leader/Edit_Card_1.png",
    "/projects/ukk/Team_Leader/Edit_Card_2.png",
    "/projects/ukk/Team_Leader/Manajemen_Card.png",
    "/projects/ukk/Team_Leader/Project_Saya.png",
    "/projects/ukk/Team_Leader/Tambah_Card_1.png",
    "/projects/ukk/Team_Leader/Tambah_Card_2.png",
  ]),

  galleryGroup("Developer", [
    "/projects/ukk/Developer/Dashboard.png",
    "/projects/ukk/Developer/Halaman_Notifikasi.png",
    "/projects/ukk/Developer/Jendela_Notifikasi.png",
    "/projects/ukk/Developer/Manajemen_Subtask.png",
  ]),

  galleryGroup("Designer", [
    "/projects/ukk/Designer/Dashboard.png",
    "/projects/ukk/Designer/Halaman_Notifikasi.png",
    "/projects/ukk/Designer/Jendela_Notifikasi.png",
    "/projects/ukk/Designer/Manajemen_Subtask.png",
  ]),
];

export const projects: ProjectItem[] = [
  {
    slug: "stockify",
    title: "Stockify",
    status: "completed",
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
    coverImage: "/projects/stockify/auth/login.png",
    gallery: stockifyGallery,
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
        image: "/projects/stockify/Staff/Dashboard.png",
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
    slug: "UKK",
    title: "Project Management System",
    status: "completed",
    type: {
      en: "Project Management System",
      id: "Sistem Manajemen Proyek",
    },
    description: {
      en: "A complete project management system for planning, tracking, and collaborating on various projects.",
      id: "Sistem manajemen proyek yang lengkap untuk perencanaan, pelacakan, dan kolaborasi pada berbagai proyek.",
    },
    overview: {
      en: "UKK is a project management platform designed to streamline project planning and tracking.",
      id: "UKK adalah platform manajemen proyek yang dibuat untuk memudakan perencanaan dan pelacakan proyek.",
    },
    challenge: {
      en: "Many projects relied on scattered spreadsheets and manual notes, making attendance, record-keeping, and coordination harder to manage.",
      id: "Suatu project sering mengandalkan spreadsheet yang tersebar dan catatan manual, yang membuat absensi, catatan, dan koordinasi lebih sulit untuk dikelola.",
    },
    solution: {
      en: "This system combines project administration, attendance, and role-based workflows into a single structured interface to simplify project management.",
      id: "Sistem ini menggabungkan administrasi proyek, absensi, dan alur kerja berbasis peran dalam satu antarmuka terstruktur agar memudahkan dalam memanajemen suatu proyek.",
    },
    stack: ["Laravel", "PHP", "MySQL", "Flutter"],
    github: "https://github.com/4rka5/UKK",
    coverImage: "/projects/ukk/Auth/Login.png",
    gallery: ukkGallery,
    features: [
      {
        title: {
          en: "Project Administration",
          id: "Administrasi Proyek",
        },
        description: {
          en: "Keeps project data, schedules, and administrative records accessible in one workspace.",
          id: "Menjaga data proyek, jadwal, dan catatan administrasi tetap mudah diakses dalam satu ruang kerja.",
        },
        image: "/projects/ukk/Admin/Dashboard_1.png",
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
    status: "in-development",
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
    stack: ["Laravel", "PHP", "MySQL", "Flutter"],
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
      en: "Software Engineering — Vocational High School",
      id: "Rekayasa Perangkat Lunak (RPL) — Sekolah Menengah Kejuruan",
    },
    place: {
      en: "State Vocational School 1 Bantul",
      id: "SMKN 1 Bantul",
    },
    details: {
      en: "Pursued studies in Software Engineering, learning the fundamentals of programming, web development, databases, and the software development lifecycle as a foundation for a career in technology.",
      id: "Menempuh pendidikan di jurusan Rekayasa Perangkat Lunak, mempelajari dasar-dasar pemrograman, pengembangan web, basis data, dan siklus pengembangan perangkat lunak sebagai fondasi awal karier di bidang teknologi.",
    },
  },
  {
    year: "2025 - 2026",
    role: {
      en: "Programming Intern — Seven Inc.",
      id: "Programmer Magang — Seven Inc.",
    },
    place: {
      en: "Seven Inc",
      id: "Seven Inc",
    },
    details: {
      en: "Completed a software developer internship, contributing to application development using technologies such as Laravel, Next.js, and React, while gaining practical experience within a professional development team.",
      id: "Menjalani program magang sebagai pengembang perangkat lunak, berkontribusi dalam pengembangan aplikasi menggunakan teknologi seperti Laravel, Next.js, dan React, serta memperdalam praktik kerja dalam tim pengembangan profesional.",
    },
  },
  {
    year: "2026 - Present",
    role: {
      en: "Freelance & Personal Project Development",
      id: "Freelance & Pengembangan Proyek Pribadi",
    },
    place: {
      en: "Anywhere",
      id: "Di Mana Saja",
    },
    details: {
      en: "Actively working as a freelance developer while continuing to develop personal projects to deepen technical expertise in web and mobile development, including exploring new technologies such as Go and Next.js.",
      id: "Aktif bekerja sebagai freelance developer sambil terus mengembangkan personal project untuk memperdalam keahlian teknis di bidang web dan mobile development, termasuk eksplorasi teknologi baru seperti Go dan Next.js.",
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
