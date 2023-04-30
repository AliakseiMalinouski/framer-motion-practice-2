import React from "react";
import {motion} from 'framer-motion';

export const Button = (props) => {
    const {
        text, handleFilter = Function.prototype,
    } = props;
    return (
        <motion.button
        style={{border: 'none', outline: 'none', padding: '12px 16px', backgroundColor: '#f1f1f1'}}
        whileHover={{backgroundColor: '#ddd'}}
        whileTap={{backgroundColor: '#ccc'}}
        onClick={handleFilter}
        >
            {
                text
            }
        </motion.button>
    )
}