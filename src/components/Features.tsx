import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Academic Excellence',
    description: 'Comprehensive curriculum focused on developing critical thinking and creativity',
    icon: '🎓',
  },
  {
    title: 'Sports & Activities',
    description: 'Wide range of extracurricular activities for holistic development',
    icon: '⚽',
  },
  {
    title: 'Expert Faculty',
    description: 'Experienced teachers dedicated to student success',
    icon: '👩‍🏫',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-accent-papaya" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-accent-raspberry/30"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-primary/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}