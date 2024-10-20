"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Transition({
    children
}: {
    children: React.ReactNode
}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
    }, []);

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isMounted ? { y: 0, opacity: 1 } : {}}
            transition={{ ease: 'easeInOut', duration: 0.35 }}
        >
            {children}
        </motion.div>
    );
}