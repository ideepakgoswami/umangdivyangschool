"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // If already loaded
    if (document.readyState === "complete") {
      // Small timeout to allow everything to settle
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }

    window.addEventListener("load", handleLoad);
    
    // Safety fallback: ensure preloader is removed even if "load" event is missed
    const safetyTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Main Logo Container */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
            >
              <Image
                src="/logo.png"
                alt="Umang Logo"
                width={150}
                height={150}
                priority
                className="h-auto w-32 md:w-40"
              />
            </motion.div>
            
            {/* Pulsing ring around logo */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-brand-blue/20 blur-2xl"
            />
          </div>

          {/* Rainbow Loading Dots */}
          <div className="flex space-x-2">
            {[
              "bg-brand-red",
              "bg-brand-orange",
              "bg-brand-yellow",
              "bg-brand-green",
              "bg-brand-blue",
              "bg-brand-purple"
            ].map((color, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ 
                  y: [-8, 0, -8],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className={`h-3 w-3 rounded-full ${color} shadow-sm`}
              />
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm font-medium tracking-widest text-muted-foreground uppercase"
          >
            Spreading Joy
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
