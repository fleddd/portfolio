import { useRef, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export function AnimatedCounter({ text, durationSeconds = 4 }: { text: string, durationSeconds?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

    useEffect(() => {
        if (!isInView || !ref.current) return;

        const targetNumber = parseInt(text.replace(/\D/g, ''), 10);
        const suffix = text.replace(/\d/g, '');

        const controls = animate(0, targetNumber, {
            duration: durationSeconds,
            ease: "easeOut",
            onUpdate: (latest) => {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest) + suffix;
                }
            },
        });

        return () => controls.stop();
    }, [text, isInView]);

    return <span ref={ref}>0{text.replace(/\d/g, '')}</span>;
}