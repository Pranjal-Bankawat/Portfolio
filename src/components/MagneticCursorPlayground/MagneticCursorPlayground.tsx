"use client";

import styles from './MagneticCursorPlayground.module.css';
import { useEffect, useRef } from "react";
import anime from "animejs"

const MagneticCursorPlayground = () => {
    const cursorRef = useRef(null);
    const targetsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Move the custom cursor
        const handleMouseMove = (e: MouseEvent) => {
            anime({
                targets: cursor,
                left: e.clientX,
                top: e.clientY,
                duration: 50,
                easing: 'linear',
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Magnetic effect
        const targets = targetsRef.current;
        targets.forEach((target) => {
            const handleMouseEnter = () => {
                anime({
                    targets: cursor,
                    scale: 1.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    duration: 300,
                    easing: 'easeOutQuad',
                });
            };

            const handleMouseMove = (e: MouseEvent) => {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = (e.clientX - centerX) * 0.4;
                const distanceY = (e.clientY - centerY) * 0.4;

                anime({
                    targets: target,
                    translateX: distanceX,
                    translateY: distanceY,
                    duration: 50,
                    easing: 'linear',
                });
            };

            const handleMouseLeave = () => {
                anime({
                    targets: target,
                    translateX: 0,
                    translateY: 0,
                    duration: 300,
                    easing: 'easeOutQuad',
                });

                anime({
                    targets: cursor,
                    scale: 1,
                    backgroundColor: '#fff',
                    duration: 300,
                    easing: 'easeOutQuad',
                });
            };

            target.addEventListener('mouseenter', handleMouseEnter);
            target.addEventListener('mousemove', handleMouseMove);
            target.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                target.removeEventListener('mouseenter', handleMouseEnter);
                target.removeEventListener('mousemove', handleMouseMove);
                target.removeEventListener('mouseleave', handleMouseLeave);
            };
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='flex items-center justify-center bg-white h-screen w-screen'>
            <div ref={cursorRef} className={styles.customCursor}></div>
            {/* Use `ref` to attach magnetic targets */}
            <div
                ref={(el) => {
                    if (el) targetsRef.current[0] = el;
                }}
                className={styles.magneticTarget}
            >
                Hover over me
            </div>
        </div>
    );
};

export default MagneticCursorPlayground;