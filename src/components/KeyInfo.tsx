import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const academicPrograms = [
  { name: 'STEM Excellence', description: 'Advanced programs in Science, Technology, Engineering, and Mathematics' },
  { name: 'Liberal Arts', description: 'Comprehensive courses in Literature, History, and Arts' },
  { name: 'Language Studies', description: 'Multiple foreign language options with native speakers' },
];

const extracurriculars = [
  { name: 'Sports Teams', description: 'Basketball, Soccer, Swimming, Track & Field' },
  { name: 'Arts & Culture', description: 'Theater, Music Band, Visual Arts, Dance' },
  { name: 'Academic Clubs', description: 'Debate, Robotics, Science Olympiad' },
];

const applicationSteps = [
  { step: '1', title: 'Submit Application', description: 'Complete the online application form with student information' },
  { step: '2', title: 'Documentation', description: 'Provide academic records and recommendations' },
  { step: '3', title: 'Assessment', description: 'Schedule entrance exam and interview' },
];

export default function KeyInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-primary-light" id="key-info">
      <div className="container mx-auto px-4">
        {/* Academics Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-accent-raspberry">{program.name}</h3>
                <p className="text-primary/80">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extracurriculars Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-accent-vermilion">{activity.name}</h3>
                <p className="text-primary/80">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Apply Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-accent-raspberry/10"
              >
                <div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-accent-raspberry mt-2">{step.title}</h3>
                <p className="text-primary/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white px-8 py-3 rounded-full text-lg font-bold hover:from-accent-vermilion hover:to-accent-raspberry transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Application
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}