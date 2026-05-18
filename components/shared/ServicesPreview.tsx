'use client';

import { motion } from 'framer-motion';
import { DURATION, EASE_OUT, fadeUp, stagger } from '@/lib/motion';
import ServiceCard from './ServiceCard';

type Service = {
  slug: string;
  name: string;
  href: string;
  shortDescription: string;
  image?: { src: string; alt: string };
};

type Props = {
  services: ReadonlyArray<Service>;
};

// Homepage services preview grid. Thin orchestration wrapper around
// ServiceCard — handles only the responsive grid layout + Framer Motion
// stagger entrance. Card visual (image placeholder + body + CTA) lives in
// ServiceCard so it can be reused across future pages (services hub,
// location pages, service + city matrix).
export default function ServicesPreview({ services }: Props) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={stagger(0.06, 0.05)}
      className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
    >
      {services.map((s) => (
        <motion.li
          key={s.slug}
          variants={fadeUp}
          transition={{ duration: DURATION.short, ease: EASE_OUT }}
          className="h-full"
        >
          <ServiceCard
            href={s.href}
            name={s.name}
            description={s.shortDescription}
            image={s.image}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
