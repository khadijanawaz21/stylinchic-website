export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Silky Smooth Transformations",
    description:
      "Experience the magic of Nanoplastia and Keratin treatments that transform frizzy, damaged hair into silky perfection. Our advanced smoothing techniques last 4-6 months.",
    tags: ["Nanoplastia", "Keratin", "Olaplex Rebonding"],
  },
  {
    title: "Color That Turns Heads",
    description:
      "From sun-kissed Balayage to bold color transformations, we create dimensional hues that complement your style.",
    tags: ["Balayage", "Ombré", "Highlights", "Lowlights", "Full Color"],
  },
  {
    title: "Repair & Restore",
    description:
      "Revive damaged hair with nourishing treatments. Protein therapy, Hair Botox, and deep conditioning restore strength, shine, and vitality.",
    tags: ["Protein Treatment", "Hair Botox", "Deep Conditioning"],
  },
  {
    title: "Beauty Beyond Hair",
    description:
      "Complete your look with our beauty services — flawless party makeup, stunning eyelash extensions, precise threading, and rejuvenating facials.",
    tags: [
      "Eyelash Extensions",
      "Threading",
      "Face Waxing",
      "Facials",
      "Party Makeup",
    ],
    note: "(Plus: Nails coming soon!)",
  },
];

export const differentiators = [
  {
    title: "Nano Plastia",
    description: "Perfect for black hair smoothing",
  },
  {
    title: "Keratin Treatments",
    description: "Ideal for blonde & color-treated hair",
  },
  {
    title: "Expert Balayage",
    description: "Natural, dimensional color",
  },
  {
    title: "Olaplex Repair",
    description: "Advanced damage restoration",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Our experts take the time to understand your hair type, concerns, and the look you want",
  },
  {
    number: "02",
    title: "Custom Treatment",
    description:
      "Whether it's a haircut, color, or deep condition, we tailor every step to enhance your hair",
  },
  {
    number: "03",
    title: "Final Touch",
    description:
      "We complete your look with expert styling, ensuring your hair feels fresh and flawless",
  },
];

export const problems = [
  {
    title: "Frizzy Hair",
    description:
      "Hair that constantly looks dry, frizzy, and difficult to style",
  },
  {
    title: "Damaged Hair",
    description: "Hair that feels weak, breaks easily, and looks lifeless",
  },
  {
    title: "Thinning Hair",
    description:
      "Lack of volume and density, making your hair look limp",
  },
];

export const solutions = [
  {
    title: "Deep Hydration",
    description:
      "Our keratin and moisture-rich treatments smooth frizz",
  },
  {
    title: "Repair Hair",
    description:
      "We use nourishing treatments and bond-repair formulas",
  },
  {
    title: "Add Fullness",
    description:
      "From precision cuts to volumizing treatments and extensions",
  },
];

export const reviews = [
  {
    name: "Ammara Jat",
    service: "Balayage & Styling",
    quote:
      "I'm a regular client of Shabana and her work has been the best every time. I got my daughter's hair done by her just recently and it was very amazing. She got compliments and a reasonable price!! I 100% recommend it.",
    rating: 5,
  },
  {
    name: "Emma Rose",
    service: "Balayage & Styling",
    quote:
      "Absolutely love my new look! Stylin'Chic completely transformed my hair with the perfect cut and color.",
    rating: 5,
  },
  {
    name: "Sophia Lane",
    service: "Keratin Treatment",
    quote:
      "Stylin'Chic transformed my hair with the perfect cut and color.",
    rating: 5,
  },
  {
    name: "Isabella Wren",
    service: "Balayage & Gloss",
    quote:
      "Perfect color every time! Their color experts know exactly what works for me. My balayage looks so natural and vibrant.",
    rating: 5,
  },
  {
    name: "Lily Quinn",
    service: "Volume Boost Treatment",
    quote:
      "Best salon experience ever! The team really listens, understands my needs, and customizes everything.",
    rating: 5,
  },
  {
    name: "Olivia Tate",
    service: "Hair Repair Treatment",
    quote:
      "Volume and shine restored! My hair used to feel flat, but after their volumizing treatment, it's full and bouncy.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How often should I get a haircut?",
    answer:
      "It depends on your hair type and style. For maintaining shape and health, we recommend trimming every 6-8 weeks.",
  },
  {
    question: "Do you offer hair treatments for damaged hair?",
    answer:
      "Yes! We offer Keratin, Nanoplastia, Protein Therapy, Hair Botox, and Olaplex bond repair treatments.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Absolutely! Use our contact form below or call us directly at +1 416-460-4592.",
  },
  {
    question: "What hair colors work best for my skin tone?",
    answer:
      "During your consultation, our color experts will recommend the perfect shades to complement your skin tone and features.",
  },
  {
    question: "Do you use professional hair products?",
    answer:
      "Yes, we exclusively use premium, salon-grade products for all our services.",
  },
  {
    question: "Is a consultation required before my appointment?",
    answer:
      "We recommend a quick consultation for first-time clients so we can understand your hair goals.",
  },
];

export const contactInfo = {
  email: "shabanasaif5@gmail.com",
  phone: "+1 416-460-4592",
  address: "1126 Baltic Ln, Pickering, ON L1X 0G9, Canada",
  instagram: "https://www.instagram.com/sty_lin_chic/",
  facebook: "https://www.facebook.com/stylnbeaty/",
};

export type ImageData = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  alt: string;
};

export type BeforeAfterPair = {
  before: ImageData;
  after: ImageData;
};

export const images = {
  hero: {
    src: "/images/hero.webp",
    width: 1080,
    height: 1313,
    blurDataURL: "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADwBACdASoUABgAPzmOv1evKaajqAqp4CcJQBe6AZMfKScFZjYUfLMjUoED+7bPcEAA+jhrVW00U8lNfmWVUHASIAnkzZOLVug065jerkhjmArKbSZ7OQSL2DYVjgHnhkfZQU8jtWG4KwUWDYBHUZmi3N7L+MOxa0zYMAAA",
    alt: "Silky smooth keratin-treated hair at Stylin'Chic salon in Pickering",
  },
  beforeAfter: [
    {
      before: { src: "/images/ba1-before.webp", width: 360, height: 1312, blurDataURL: "data:image/webp;base64,UklGRsoAAABXRUJQVlA4IL4AAAAQBwCdASoUAEkAPzmGt1QvKKUjMBZsyeAnCWdocF3PB7FFRjbyPa4xKH0rVin1AzPuwNVwmdAbUtOLTYZWK1hVEAD+56J/oZsEsJMkzWIFRMJYYbeLeiIk0fqMjFmLu9iCeKTeBoDGHLRdSKD2HWUg5/15UrmRE2wv8kEMCQE3E+tw5fflj4wMJLqOK8azug0sISslYO+wFeHaNy3EM+Tp81ovajVc3ZMW+/PixYrTvmdMBqKk2oahEIkdSgAA", alt: "Frizzy damaged hair before keratin treatment" },
      after: { src: "/images/ba1-after.webp", width: 360, height: 656, blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAACQBQCdASoUACQAPzF8s1Oup6SitVgMAdAmCWkAACgJf3Yp+ctl0pOp7PKP/A+2gTX0Wi8XwAD3HxjAfCVGl21Ocg4QYfkOqu+pyGgq7M83VY/V0+WfbR8ZdKfA90sqO9NRtBLkomah5Chzoy4cyAxB6rM1YbVYZV+gAA==", alt: "Silky straight hair after keratin treatment at Stylin'Chic" },
    },
    {
      before: { src: "/images/ba2-before.webp", width: 540, height: 1080, blurDataURL: "data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAABwBQCdASoUACgAPzmKuVkvKKUjqrgKAeAnCWcA0YAJZUjoQIDIRfJ5uHbwJZAKxg2VZ44YAP2hsBHt1/K89k+sWtkHENY+30t38gpotiKBQbc60BPWolPxMHtXkDLj5hWwFzN9nYctqS41AcoX1puTbwaj+QNB2mhIzBuzmvuXk8lwu/DRAAAA", alt: "Frizzy unmanageable hair before smoothing treatment" },
      after: { src: "/images/ba2-after.webp", width: 540, height: 1080, blurDataURL: "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACQBQCdASoUACgAPzmUvFkvKiWjpWzJ4CcJZwDO7Apliqd76skJxV0rjuz/fXEVPd0y7l+gAAD1N1GkxJhXViclpLW/03jzykPeHYyn8LwrA0KNjrCIZ3OBPFi3YwoFraFCWZggxDE0n4Lo9F8tdxNqicF9oRX7Jxl8Rj1ztelwc6AAAAA=", alt: "Smooth sleek hair after Nanoplastia treatment at Stylin'Chic" },
    },
    {
      before: { src: "/images/ba3-before.webp", width: 540, height: 1087, blurDataURL: "data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAABQBgCdASoUACgAPzmQu1avKiWjqqoB4CcJZwDI1BBrFYG6iWjI6/gpmwi0VWRNildZwWbLNekpvvv4wAD3oaNYbOoChubeIzjdt6q8asq+zOnk5uknptX1w5DveaJKa5T4FeLi7sJPrrqq0a/45vMBfZ5IhymHGgSyexQbpPJVh2NWueFDSoiGxauUeWqok8abSwP0Elb3a53+PezYvn61gYlyHIa4Z9QaJeJFrvNYQ6e4AAA=", alt: "Hair before color transformation" },
      after: { src: "/images/ba3-after.webp", width: 540, height: 1087, blurDataURL: "data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBgCdASoUACgAPzmSwFmvKaajqrgIAeAnCWUADorjMIIqh591pUKcTX3uVu+VU+EXCw40P0y7/UAAAOdLnM9M7u39ciKuoL9iDM1ghmgI5Y6TVv22RbHLxUnIwI8Rnlnf1Or0Z/d9FU+p7YuH2nVrEHFSjpdYGIgypsfwpl+Fuge9IRvZLVkcwaxclllEYgwNIbUkcV5nMaDRagTELUS6MSYBGMWSSraZKU/d7Indjyc+Lml2OjbP/EAAAA==", alt: "Stunning pink and purple balayage color transformation" },
    },
  ] as BeforeAfterPair[],
  services: [
    { src: "/images/service-smoothing.webp", width: 1080, height: 1313, blurDataURL: "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAADQBACdASoUABgAPzmUwVmvKicjqAgB4CcJQBdgAjWUXNE4fIZcZB/baR35dxg98AD4nGmFHpJOqpQ+T8dJeW66J/gO85lric/J1NgUM/PzD7QHHmqvRqLkMWGGvyAtItUczi8OaSGLYpNweQWWJT7LiOCe6IrqUFjdvEjleOKDgRAtumiST43n7vweShcI+yAAAA==", alt: "Glossy smooth hair after keratin smoothing treatment" },
    { src: "/images/service-color.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAADQBACdASoUABQAPzmUwVmvKicjqAgB4CcJQBdgAcp5Z2he4kIj+zPJM/l7/Ct0gAD67OMfO/SHZrJCPEVGPSQnjYwbcBs/1jybF8i7561C1UdPjYzPHM0ayawCaDiVh+wLIDDRsOZb+c5jPedKbGcFsRLbdXyYUznlbioAAAA=", alt: "Cherry brown hair color with keratin treatment" },
    { src: "/images/service-repair.webp", width: 1080, height: 1313, blurDataURL: "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAACwBACdASoUABgAPzmUv1mvKaajqAgB4CcJQBkagcbfpk/qMd+zHDj/Zd54LdHgAMld/qcsuiBRTFzCO4/n5U5KhdCYwQm/3THhbiTmZjL4HGdzCCyjjtDMjDspply3vLMkwqTIB8De/cW94jgIZ76rc7uuStNK5LQiCTIpcw9CQtG9pYtfIZ7Mvix0igSTdM4AAA==", alt: "Restored healthy shiny hair after repair treatment" },
    { src: "/images/service-beauty.webp", width: 814, height: 815, blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACwBACdASoUABQAPzmQu1ivKaWjqAqp4CcJZwAMLUBXyiCyqL60jL5q2WcsIQ0AAPvqaprFw4QsdSAHw9v/5Vww/Io+X1LE+Y9ooy3iQts7+m+gKZQHoZb/K1IAs1RIcURhkiUWLP4jvGRq/gwl4+CIAAA=", alt: "Beautifully styled bouncy curls at Stylin'Chic salon" },
  ] as ImageData[],
  whyChoose: {
    src: "/images/why-choose.webp",
    width: 1080,
    height: 1313,
    blurDataURL: "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAABwBACdASoUABgAPzmSwFmvKaajqAgB4CcJZwAAFSOZPgXLtWVBuuKjLaDyAAD8TumTmSYmCv263LbnCLbvUN5Tsujv6nY8MV9VMFTaPMK4exY5C+KQNrW4Enjr2RlNTagsLsErXyMJ6PQbOT9xGshzDIoR11jVzOy6TaGj8Kgq8HmtVW8RTZiOFY+ZQzJXnPOzTAQA",
    alt: "Precision highlights and straightening treatment showcasing Stylin'Chic expertise",
  },
  expert: {
    src: "/images/shabana.webp",
    width: 800,
    height: 1104,
    blurDataURL: "data:image/webp;base64,UklGRuQAAABXRUJQVlA4INgAAAAwBQCdASoUABwAPzmQv1evKaajqAqp4CcJbACdG0qAJUVL3PJAZvC3r/nu2me8r5hlgAD+QI2JwDHBc5SyX5dHRmxmBpMVt6XYkjPvdpvF7hkfoNwywfd+YsLjnRvHpZowTNGXG5NjuStTDuVMwRhrcibsxEnhP3hhKa5wLfHzXKRniqr3xKpb49MsTw1WMXGJnCafW5iQCQWqJOle7qBemOVc36NgWP+f3J4tanCrneGHH0T42YgsI6WvNzW3u+hbwBICdpEdoL4p22gNIYsGsoTlLlEgAAA=",
    alt: "Shabana, lead stylist at Stylin'Chic salon Pickering",
  },
  gallery: [
    { src: "/images/gallery-1.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAACQBACdASoUABQAPzmUwVmvKicjqAgB4CcJQBcGAaZbbFkd7unRx9osPB+zSAAA/W9p8HYiOCE7pBL2QIQROB6u+epY8lX1vlIRuN+CRQGdc3CxybqdzbTAaap92JHP6/HWOCyWddPRuEq4fWiaPL2xGKKNpGrRf3otkebOjCfuLVDPI3lYGqtAE/JIXgVNZiq++MMl0sAAAA==", alt: "Caramel balayage highlights at Stylin'Chic Pickering" },
    { src: "/images/gallery-2.webp", width: 1080, height: 1087, blurDataURL: "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABQBQCdASoUABQAPzmQulivKaUjqAqp4CcJbADCgBGvccuhaCPQfSPT9TcCmXNnLOREC6AAzZtH4w0S5TUAXJD9gSNv+Smpc8dh+X1BvnGoaoAI7dFoHCMwmUvHbxW5EiCOTUAzSj/6aGSfi6pAv9NqLQ4yUwYPdmbhNiiHOcRf8jt7XkhVIRbDok4QAA==", alt: "Honey balayage straightening treatment result" },
    { src: "/images/gallery-3.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAACQBACdASoUABQAPzmMulYvKSWjqA1R4CcJZAC7ABGLJBVgQEy90HeJGpwoiUAAyxZwhJh4//ofMHOeUHknWAS3z5E3mpDPxPVdnJoKlYT/Dl0bpvgfCKInM9LWUxwxYV3oMQetwbLlM5Ni7N1PpNd21FIkRt4YAAA=", alt: "Copper auburn hair color bob cut" },
    { src: "/images/gallery-4.webp", width: 1066, height: 1072, blurDataURL: "data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAACQBACdASoUABQAPzmUwVmvKicjqAgB4CcJYgC2yAyNdTAOhaMsTE1H1Kd3iTAA/qJZdXJjeMICqQMRBavX3jzp0G69wgqlQTlrl7OpN7mLs1BWWJ7UohDj8ik5YjTr07QJUnFe9rQNN705zB9h4/Ec6F6j4D/dz08DmOnFgCVw0suT7e89J4gKI3uZgc8G42cGA4NtZy9t/W/4AAA=", alt: "Brown balayage with bouncy curls styling" },
    { src: "/images/gallery-5.webp", width: 1080, height: 1086, blurDataURL: "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAADwBACdASoUABQAPzmSv1mvKaYjqAgB4CcJZwAALpmviQflOtr8CV8ZGNuhk4h6NKAA/p1zBxylN+6TcFqZ4yvl9ZfIPv4rFid7a3VMfK/sxIkj38Rjz8H1nha3QimC1XAT5TYDgZsz7lDWm29qzEcIDohyXsO5CbzgOfXaf/pHQAAA", alt: "Dramatic before and after keratin smoothing transformation" },
    { src: "/images/gallery-6.webp", width: 978, height: 736, blurDataURL: "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAAAQBACdASoUAA8APzmEuVOvKKWisAgB4CcJZACdMoACtSJxtSt5cxFIAAD9zf2IsZmtXuzmWn4FZ7EIbWI5tSk4TV1/OwuiVPsS1QNqyS14nfdy2Ev05/ygvpTpIl+q/azsDsGTq1n3d7Ph9/JltEVfC8vEuNQAj8ASQAAA", alt: "Rich cherry brown curls with warm highlights" },
    { src: "/images/gallery-7.webp", width: 1080, height: 1115, blurDataURL: "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACwBACdASoUABUAPzmUwVmvKicjqAgB4CcJZQAAHmnu+kFwb9+AzExBiD+mglcAAPrzCg0JXNoNlX+cw/17/hd2KoTXrhEcrppON2M2JdVBdew/XoejumG/6eeoDMAFy8kpfFve7dtpTq3gktzxEjVdfvsc2H9EzAQwqo7oVKDuqGMoAAA=", alt: "Keratin treatment transformation from frizzy to silky smooth" },
    { src: "/images/gallery-8.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAABQBACdASoUABQAPzmSvlmvKaYjqAgB4CcJZwAAFbpl7tOhHWnFogJiyYcAAP59K+/nQaWvEghiAjSW1dBKBEw7wOrT1wI4QGozPuN6cm3ArUXRo95jALXS+huC6BSt6ThGGA0/tAAAAA==", alt: "Hair smoothing treatment before and after result" },
  ] as ImageData[],
} as const;
