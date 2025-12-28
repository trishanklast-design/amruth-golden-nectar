import { motion } from 'framer-motion';

const HoneyDripAnimation = () => {
  const drips = [
    { left: '10%', delay: 0, duration: 4 },
    { left: '25%', delay: 1.5, duration: 5 },
    { left: '40%', delay: 0.8, duration: 4.5 },
    { left: '60%', delay: 2, duration: 4 },
    { left: '75%', delay: 0.5, duration: 5.5 },
    { left: '90%', delay: 1.2, duration: 4.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drips.map((drip, index) => (
        <motion.div
          key={index}
          className="absolute w-3 rounded-full opacity-40"
          style={{
            left: drip.left,
            background: 'linear-gradient(180deg, hsl(42 76% 55%), hsl(38 90% 50%))',
            height: '100px',
            filter: 'blur(1px)',
          }}
          initial={{ y: '-100%', scaleY: 0.5 }}
          animate={{
            y: ['0%', '120vh'],
            scaleY: [0.5, 1.5, 0.8, 1.2, 0.5],
          }}
          transition={{
            duration: drip.duration,
            delay: drip.delay,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
};

export default HoneyDripAnimation;
