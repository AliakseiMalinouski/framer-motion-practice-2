import React from "react";
import {motion, AnimatePresence} from 'framer-motion';
import { useState } from "react";

export const Collapsible = (props) => {
    const {
        title = "click me",
        children,
    } = props;


    const [isVisible, setVisible] = useState(true);

    const handleVisibility = () => {
        setVisible(prev => !prev);
    }

    return (
        <>
            <div
            onClick={handleVisibility}
            style={{
                background: '#ddd',
                width: 300,
                padding: '0.8rem 1.2rem'
            }}
            >
                {title}
            </div>
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0}}
                    style={{overflow: 'hidden'}}
                    transition={{
                        duration: 0.5
                    }}
                    >
                        <div style={{padding: '0.8rem 1.2rem', width: 300, border: '1px solid'}}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )

}