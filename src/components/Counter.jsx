import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, suffix = "", duration = 2000 }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100, duration: duration });
    const isInView = useInView(ref, { once: true, margin: "-10px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Handle floating point if value is small, otherwise floor it
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
        return unsubscribe;
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}
