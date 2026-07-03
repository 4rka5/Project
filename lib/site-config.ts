export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const profileConfig = {
  brand: "Arka.",
  fullName: "Arka Satria",
  role: "Full-Stack Developer",
  headline: "Building Digital Experiences That Matter",
  email: "arkasatria2905@gmail.com",
  github: "https://github.com/4rka5",
  linkedIn: "https://linkedin.com/",
  whatsapp: "https://wa.me/+62",
  cvPath: "/cv-arka-satria.pdf",
} as const;
