export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/touridev",
    icon: "github"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/albert-jayson-arguelles-8b26ba44a",
    icon: "linkedin"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:albertjayson0421@gmail.com",
    icon: "mail"
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+639506186342",
    icon: "phone"
  }
];