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

export interface ProjectItem {
  title: string;
  type: LocalizedText;
  description: LocalizedText;
  stack: string[];
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
    title: "Stockify",
    type: {
      en: "Inventory Management System",
      id: "Sistem Manajemen Inventori",
    },
    description: {
      en: "A robust inventory platform with real-time stock tracking, role-based access, purchase flow automation, and reporting dashboards.",
      id: "Platform inventori yang andal dengan pelacakan stok real-time, akses berbasis peran, otomatisasi alur pembelian, dan dashboard laporan.",
    },
    stack: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "UKK",
    type: {
      en: "School Management System",
      id: "Sistem Manajemen Sekolah",
    },
    description: {
      en: "A complete school operations suite for academic administration, attendance, student records, and teacher workflow management.",
      id: "Sistem operasional sekolah yang lengkap untuk administrasi akademik, kehadiran, data siswa, dan manajemen alur kerja guru.",
    },
    stack: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Cars Arena",
    type: {
      en: "Car Marketplace Platform",
      id: "Platform Marketplace Mobil",
    },
    description: {
      en: "A modern marketplace experience for browsing, filtering, and listing cars with lead generation and dealer profile modules.",
      id: "Pengalaman marketplace modern untuk menelusuri, memfilter, dan memasang listing mobil dengan fitur lead generation dan profil dealer.",
    },
    stack: ["Laravel", "PHP", "MySQL"],
  },
];

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
