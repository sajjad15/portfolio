export type ContactIcon =
  | "whatsapp"
  | "email"
  | "github"
  | "x"
  | "instagram"
  | "linkedin";

export interface ContactLink {
  id: ContactIcon;
  /** الاسم الظاهر على الحبة (يبقى كما هو في اللغتين) */
  label: string;
  href: string;
}

/* رقم الواتساب بصيغة دولية بدون + وبدون مسافات */
export const WHATSAPP_NUMBER = "9647857408440";
export const EMAIL = "samahdi005@gmail.com";

export const contactLinks: ContactLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${EMAIL}`,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/sajjad15",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: encodeURI(
      "https://www.linkedin.com/in/سجاد-مهدي-sajjad-mahdi-1a5a62350"
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sajjad.dev1",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/samahdi005",
  },
];