import React, {useEffect} from 'react'
import css from './Quote.module.css'
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import example from "../../Assets/Example.png";



const boxVariant = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
    hidden: {opacity: 0, scale: 0}
};



function Quote() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


    return (
        <motion.div
            className={css.div}
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}>
            <div>
                <div className={css.box}>
                    <p className={css.Quote}>Where the ink meets<br/>the soul, art is born.</p>
                </div>
            </div>
        </motion.div>

    )
}

export default Quote;