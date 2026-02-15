import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const SectionWrapper = ({
    children,
    className,
    id,
    title,
    subtitle,
    center = true,
    ...props
}) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            id={id}
            className={cn('py-16 md:py-24 px-4 max-w-7xl mx-auto overflow-hidden', className)}
            {...props}
        >
            {(title || subtitle) && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className={cn('mb-12 md:mb-16', center && 'text-center')}
                >
                    {subtitle && (
                        <span className="text-brand-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
                            {subtitle}
                        </span>
                    )}
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            {title}
                        </h2>
                    )}
                </motion.div>
            )}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
