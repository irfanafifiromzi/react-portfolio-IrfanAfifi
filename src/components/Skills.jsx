import { RiReactjsLine } from "react-icons/ri";
import { LiaLaravel } from "react-icons/lia";
import { RiFlutterLine } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { RiFirebaseLine } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
},
});

const Skills = () => {
  return (
    <div className="border-b border-transparent pb-24">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl font-light">Skills</motion.h1>
      <motion.div 
        whileInView={{ opacity:1, x: 0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="bg-black rounded-2xl p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="bg-black rounded-2xl p-4">
            <LiaLaravel className="text-7xl text-red-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="bg-black rounded-2xl p-4">
            <RiFlutterLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="bg-black rounded-2xl p-4">
            <RiFirebaseLine className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="bg-black rounded-2xl p-4">
            <DiMysql className="text-7xl text-blue-500"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills
