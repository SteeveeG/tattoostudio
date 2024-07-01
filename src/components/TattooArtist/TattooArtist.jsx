import React, {useEffect} from 'react'
import css from './TattooArtist.module.css'
import example from '../../Assets/Example.png'
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";


const boxVariant = {
     visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
     hidden: {opacity: 0, scale: 0}
};

function TattooArtist() {
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
             className={css.box}
             ref={ref}
             variants={boxVariant}
             initial="hidden"
             animate={control}>
              <p className={css.header}>tattoo artist</p>
              <div className={css.artists}>
                   <img src={example} className={css.TattooArtist1} alt="example pic"/>
                   <img src={example} className={css.TA1ReferencePic1} alt="example pic"/>
                   <img src={example} className={css.TA1ReferencePic2} alt="example pic"/>
                   <div className={css.RowPics}>
                        <img src={example} className={css.TA1ReferencePic3} alt="example pic"/>
                        <img src={example} className={css.TA1ReferencePic4} alt="example pic"/>
                   </div>
              </div>
         </motion.div>


     )
}

export default TattooArtist;


//
//
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
//
// const boxVariant = {
//      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//      hidden: { opacity: 0, scale: 0 }
// };
//
// const Box = ({ num }) => {
//
//      const control = useAnimation();
//      const [ref, inView] = useInView();
//
//      useEffect(() => {
//           if (inView) {
//                control.start("visible");
//           } else {
//                control.start("hidden");
//           }
//      }, [control, inView]);
//
//      return (
//          <motion.div
//              className="box"
//              ref={ref}
//              variants={boxVariant}
//              initial="hidden"
//              animate={control}
//          >
//               <h1>Box {num} </h1>
//          </motion.div>
//      );
// };
//
// export default function App() {
//      return (
//          <div className="App">
//               <Box num={1} />
//               <Box num={2} />
//               <Box num={3} />
//          </div>
//      );
// }
// <div className={css.div}>
//      <div className={css.box}>
//           <p className={css.header}>tattoo artist</p>
//           <div className={css.artists}>
//                <img src={example} className={css.TattooArtist1} alt="example pic"/>
//                <img src={example} className={css.TA1ReferencePic1} alt="example pic"/>
//                <img src={example} className={css.TA1ReferencePic2} alt="example pic"/>
//                <img src={example} className={css.TA1ReferencePic3} alt="example pic"/>
//                <img src={example} className={css.TA1ReferencePic4} alt="example pic"/>
//           </div>
//      </div>
// </div>