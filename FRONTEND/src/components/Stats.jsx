import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CountUp = ({ to, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const count = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const value = useTransform(count, (latest) => Math.floor(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            count.set(to);
        }
    }, [isInView, to, count]);

    return (
        <motion.span ref={ref} className="tabular-nums">
            {value}
        </motion.span>
    );
};

const stats = [
    { label: "Successful Placements", value: 5000, suffix: "+" },
    { label: "Partner Universities", value: 500, suffix: "+" },
    { label: "Visa Approval Rate", value: 98, suffix: "%" },
    { label: "Years of Experience", value: 15, suffix: "+" },
];

const Stats = () => {
    return (
        <div className="bg-brand-primary py-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="text-white">
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
                            <CountUp to={stat.value} suffix={stat.suffix} />
                        </h3>
                        <p className="text-brand-secondary/80 font-medium tracking-wide text-sm md:text-base uppercase">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
