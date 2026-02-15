import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } : {}}
            className={cn(
                'bg-brand-secondary rounded-2xl border border-brand-primary/5 overflow-hidden',
                hover && 'transition-shadow duration-300 shadow-sm hover:shadow-xl',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
