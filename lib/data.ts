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
    blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAQBQCdASoUABgAPzmQvlgvKaYjqAqp4CcJQBllge0zx6mTeuk1Y1nMm0+nPT2wBKXwANyroCYAODlGbXsqLnGulcDcxFLqcoynRgXdDGOhkQzWlks0U96mS7lWUuHSff0Qa8zx2r7i7j8hrS6KZnbgSoSJyXi5cBiAAA==",
    alt: "Silky smooth keratin-treated hair at Stylin'Chic salon in Pickering",
  },
  beforeAfter: [
    {
      before: { src: "/images/ba1-before.webp", width: 360, height: 1312, blurDataURL: "data:image/webp;base64,UklGRt4AAABXRUJQVlA4INIAAACwBwCdASoUAEkAPzmKuVYvKSWjrNgMAeAnCWdh4F1/h45JnCxGZ/ZNcKcCXpMDmbh79x10oIcnRxP2r3pGFr+wB71+XyAAAP7h/aYEkcKFKxSBv66BFTyZ7QChL8rOWP8HAYbu01JkqPBdeqEr+Xmth/vXHZbZdGyTU9akL+IiuTWlWThiYA3I6QQVVJl1B0KWdN3n/a+h+xWg9bjwC7VCzq02Yk2Jrv2Jgh6vVQH626LArBnhQ/C9jQR/4Dhy83aaF9ogxaNiGWfwzWNkd48AAAA=", alt: "Frizzy damaged hair before keratin treatment" },
      after: { src: "/images/ba1-after.webp", width: 360, height: 656, blurDataURL: "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAACwBQCdASoUACQAPzGEt1OuqSWitVgIAdAmCWkAAD533o8crH9+wm8vdKWQBFlDB212Ogn40AAA/owtF/8NmsdViwrhVLogd25PDGyDLZgyNpRVrvMkYWs3ElXQGZ2xU7Jf8GlklK5xFxdEhj4ZCTDS39jfiIiAIAA=", alt: "Silky straight hair after keratin treatment at Stylin'Chic" },
    },
    {
      before: { src: "/images/ba2-before.webp", width: 540, height: 1080, blurDataURL: "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAAAQBgCdASoUACgAPzmUwlovKackJWmZ4CcJZwDMlAZyN6RhyEuf6sGLg1tDLT53651NphH5ToonsEAAzf1AWB5efZRCEzWK2pwH7fkYioDB4A6PoDAeehbMIZj8/7tmBgvk7tGPemjZvG4j645ZlDHkiPsWmXEER3sZUiCUHSHr7+yqgZZMdRTTLRIVhfTS7hALWzgAAAA=", alt: "Frizzy unmanageable hair before smoothing treatment" },
      after: { src: "/images/ba2-after.webp", width: 540, height: 1080, blurDataURL: "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBgCdASoUACgAPzmSulgvKiUjpW5h4CcJZwDSrAnW8FtmaGHwngwhX1XlX8Uss2uLuRmN4fkdlHYcAAD4hfqtNtj9JRVqCJvq/HiN90tY0+JP23ee7p/vToBxk7nZaD5hj+tHgJeur+ogLsOciXFe9xM5PGiitDcp0rikb5fP2ByxQAAAAA==", alt: "Smooth sleek hair after Nanoplastia treatment at Stylin'Chic" },
    },
    {
      before: { src: "/images/ba3-before.webp", width: 540, height: 1087, blurDataURL: "data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAACQBQCdASoUACgAPzmMu1avKSWjqqoB4CcJZwDMHBBrBQNyePRc1cLKH+WmKGl9cvvw8QSUAAD+kFvTlOb/GUZ2FDkjmgSUrSAcxssg/SLWR3l9Vzj4fu4y+3AM46bbaBaathQlMHcYDfPfkXr/1ndTM3SJ3H0RxPGUGK+KADUHCjEDcVzNPbGnxDYtZZcLdNQOQJJyHT7Lp30ge69HQtv8+MVcHYM1Lhb5/XC+3EfVMB/DnI3apPIqSAAAAA==", alt: "Hair before color transformation" },
      after: { src: "/images/ba3-after.webp", width: 540, height: 1087, blurDataURL: "data:image/webp;base64,UklGRtAAAABXRUJQVlA4IMQAAADQBQCdASoUACgAPzmUwFkvKiajqrgIAeAnCWUAz2QiWSm7SDQzNFwqcBmkkAdTT9ZYPXnRi6QAAPdNUqsLtqcAdsyG1UVdQYNoIwCQtudb83ry+PPNqXpBefyKqUlrWDvshzSMwYnkO40PPSfDp7aA0rINlx+/n3P1cxpIUnoATEFra7HrDo18whnkpK3fsLwUE/3YLZ4EsNkVJIfxKljFyjxJPGaQnP2iD31RbC/UYlJrCo/h8tZeWK7cC162OZHzfsAA", alt: "Stunning pink and purple balayage color transformation" },
    },
  ] as BeforeAfterPair[],
  services: [
    { src: "/images/service-smoothing.webp", width: 1080, height: 1313, blurDataURL: "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAAAQBQCdASoUABgAPzmUwFmvKiajqAgB4CcJYwDA3AxxlQ29qgmX03NJUK52RWjRmrQAAP6WN9g8SLZk37cisfW7bPu/fhNarxgUNLvK4AuZdqVk52Brt3yIZCuarbAaME1UBJeA1fMy+qVKYpQqmx6nMy5J7gszFKdMuwTzoweAQ/gG89CfJB2b6rbWiUgvqmxItYyUZAA=", alt: "Glossy smooth hair after keratin smoothing treatment" },
    { src: "/images/service-color.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQBACdASoUABQAPzmUwFmvKiajqAgB4CcJYwAAJtYoQQ1ZEH0voLeqoAuC2wAA33SygznXcWqEntEkSiis0BOpmoqXyFRZMoPiM/Jjo4qqAvDFbKLEFa4VM003zzZWto5cjaRsCWToeMz3b+h0H7uqRWc0spTMPCw+5KswAAA=", alt: "Cherry brown hair color with keratin treatment" },
    { src: "/images/service-repair.webp", width: 1080, height: 1313, blurDataURL: "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAADQBACdASoUABgAPzmUv1mvKaajqAgB4CcJQBkagdcaubtlL2F5WufzFR1q8nbJoAD8dxIExZOtRJv30htP/egEsSDfWQ3ck8rfyixI7SjuUNdZBfu5a3+1UadoV/wOj7qO5mhQO+nxDjqggVj5KFfLxLRxklwEm31ZZZoQiBmvSq14UBgYdzvRENiOYfCycqzpxCsZAAA=", alt: "Restored healthy shiny hair after repair treatment" },
    { src: "/images/service-beauty.webp", width: 814, height: 815, blurDataURL: "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAADwBACdASoUABQAPzmQvFgvKaWjqAqp4CcJZwDOOA9o/Kel04fbzxlJpeLWkBzopgAA4k9fRPwydWpPtIh+xgE6h6SgzACiYdqBqkiFVWJV8VcTodZfiI0Pe4R53Rboy3MCNxzn9awBApqFYHACHC3UDQfVPWnGavoQjS9DgAA=", alt: "Beautifully styled bouncy curls at Stylin'Chic salon" },
  ] as ImageData[],
  whyChoose: {
    src: "/images/why-choose.webp",
    width: 1080,
    height: 1313,
    blurDataURL: "data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAACwBACdASoUABgAPzmUwFmvKiajqAgB4CcJZwAAFStY6AqbUtWbWZC92mN70lgAAP6uzluvyzAclZqX7BLxXlOQZd5/GzElCsAgt/7B8Npv65yYXrLJIecT3Q1UVQ7ZWfN47x0DDTmIQHmxxENenRZUWDyYZ6whOgNEPt41QgMgQBTWNWBQzl1U9axQcEefHFyqIL7CacTV2jQQqgAAAA==",
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
    { src: "/images/gallery-1.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRq4AAABXRUJQVlA4IKIAAABwBACdASoUABQAPzmUwVmvKicjqAgB4CcJQBb3AaT1BFdHr+tOTKasufje4ADz/1ow09IIl6mhuuVrUwYaWeKwikd+6dMnTiiFv+BBijriJDP3qYICqDHQ9pDctebL+dkLSASPMeFQQsdT+Lut/vBYJIceQw7HbRIOYRxvaKjlAQeDX9bsmt/YUGeSZ58MubjQW2fiJj0YLMWi0L4rJs3IAAA=", alt: "Caramel balayage highlights at Stylin'Chic Pickering" },
    { src: "/images/gallery-2.webp", width: 1080, height: 1087, blurDataURL: "data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAADwBACdASoUABQAPzmSulivKiUjqAqp4CcJbAAAMBdob3TrtgncA5kxwViIo49lZ3AA/M/uWkV66/QTqXUYwOaNZQr2s2clPMarefPEa9N5MCDIxYrwyfbzDAnZoyLvhaUvwecaiAWPYkj8I8j5wSq/jViGzVZ8tzd8msUQfYLdPwqr3qk+LRIOhUAAAA==", alt: "Honey balayage straightening treatment result" },
    { src: "/images/gallery-3.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAADQBACdASoUABQAPzmOuFavKaUjqA1R4CcJYizAAADHNWTHmSKeUrD8o4AMCeVjwAD8jrQFosg3SaKexKky15LC7ZI/63n9ZoH9/fzzHschZrLOhzcmvi+wzQPU3LyGY8e0jVIE5OunPM3gMw/Sh93FYxOHOO1s70k8D0YAu4yVjrf9AAA=", alt: "Copper auburn hair color bob cut" },
    { src: "/images/gallery-4.webp", width: 1066, height: 1072, blurDataURL: "data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAAAQBQCdASoUABQAPzmUwVmvKicjqAgB4CcJQBfJAjYuat3JYoHnEw/e/gx9QIEVc0QAAP4jRtb9DDrnfrR3iVR2I9Gje5E9yLv1UX+5AESebTUBA2Hpt0Eq1cV1VY0VxUGaPGZbj1zBxOmQ1h/kbgyJL9efDySnwWvvGi2u0Xe9kVHLB5M2ACRwKZiOgfyAOVRAAA==", alt: "Brown balayage with bouncy curls styling" },
    { src: "/images/gallery-5.webp", width: 1080, height: 1086, blurDataURL: "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAACwBACdASoUABQAPzmSwFmvKaajqAgB4CcJZwAAI0HBz+TkNGlWPCJlelz9pxVMAP4wrpoozMQbAz1SuZd18F5aq838pOJ35igfL8iJDkFuuVzU3F/eNBOtnKsGpevKbibtlxgGXTJy7b/9BOEeMMusHpuaXL8uvtjZ6gG84Dx1z2y+SwoAAA==", alt: "Dramatic before and after keratin smoothing transformation" },
    { src: "/images/gallery-6.webp", width: 978, height: 836, blurDataURL: "data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAACQBACdASoUABEAPzmUwVmvKicjqAgB4CcJQBb3ZYAUplZUmzdj68DonYwT6wAA/sN1vlG1IKxEpsDJd6cka5Ugmcz3eqc7RLjpheqztMCZ0rL1zbJM440aCiBEBo9sqbwmA/Hna9xxRhE+GuLEiq7FeaElNa0/OGGQuAH0AEwzS+weVY8Y0FBBjkg38j0HfDimxWGAAAA=", alt: "Rich cherry brown curls with warm highlights" },
    { src: "/images/gallery-7.webp", width: 1080, height: 1115, blurDataURL: "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAACwBACdASoUABUAPzmUwVmvKicjqAgB4CcJZQDH5BD+3/pXskfa2Tz4Cy+YrOqIAMwkkLrscT7dIFob7CUpKEXTQVQQL2HZUHGRlG7p0RvX2V5nnmnFdgJiUiB5Ynz1m+tUhpOgy9qfs/8R7LDEYfxG0j9RZAq7xa2ZCSq1PAAAAA==", alt: "Keratin treatment transformation from frizzy to silky smooth" },
    { src: "/images/gallery-8.webp", width: 1080, height: 1080, blurDataURL: "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwBACdASoUABQAPzmOuFcvKaSjqA1R4CcJZwAAFYuHu7j9UIgLSxcs/8AA/W7KvqtTUDYaJezCY5cg+HkWrPItcaONN4qHhf6Jxy+ppVgjK3w0nuJCEorBmw9DmQxSgi3wBjDt+CKDhHAA", alt: "Hair smoothing treatment before and after result" },
  ] as ImageData[],
} as const;
