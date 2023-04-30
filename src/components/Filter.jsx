import React from "react";
import {motion, AnimatePresence} from 'framer-motion';
import { useState } from "react";
import { Button } from "./Button";

export const Filter = ({data}) => {

    const [cards, setCards] = useState(data.filter(el => el.category === 'cars'));

    const buttons = data.reduce((acc, el) => {
        if(acc.includes(el.category)) return acc;
        return [
            ...acc, el.category
        ]
    }, []);

    const handleFilter = (selector) => {
        setCards(data.filter(el => el.category === selector));
    }


    
    return (
        <>
            <div>
                {
                    buttons.map(elem => <Button
                        key={elem}
                        text={elem}
                        handleFilter={() => {
                            handleFilter(elem)
                            console.log(elem)
                        }}
                    />)
                }
            </div>
            <div style={{overflow: 'hidden', maxWidth: 400}}>
                <AnimatePresence  mode="wait">
                    {
                        cards.map(el => (
                            <motion.div
                            key={el.title}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            transition={{
                                duration: 1
                            }}
                            style={{
                                float: 'left',
                                backgroundColor: '#2196F3',
                                color: '#ffffff',
                                width: '100px',
                                lineHeight: '100px',
                                textAlign: 'center',
                                margin: '2px',
                                cursor: 'pointer'
                            }}
                            >
                            {el.title}
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </>
    )
}