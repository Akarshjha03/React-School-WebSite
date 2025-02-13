import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-accent-raspberry">
            School Name
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#key-info">Programs</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white px-6 py-2 rounded-full hover:from-accent-vermilion hover:to-accent-raspberry transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-accent-raspberry mb-1.5"></div>
            <div className="w-6 h-0.5 bg-accent-raspberry mb-1.5"></div>
            <div className="w-6 h-0.5 bg-accent-raspberry"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
                  Features
                </MobileNavLink>
                <MobileNavLink href="#key-info" onClick={() => setIsOpen(false)}>
                  Programs
                </MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>
                  Gallery
                </MobileNavLink>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white px-6 py-2 rounded-full hover:from-accent-vermilion hover:to-accent-raspberry transition-all duration-300 shadow-md"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-primary hover:text-accent-raspberry transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-primary hover:text-accent-raspberry transition-colors font-medium"
    >
      {children}
    </a>
  );
}