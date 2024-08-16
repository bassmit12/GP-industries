import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants/index";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../css/styles";
import { Link } from "@inertiajs/react";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="pb-10">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>

                <motion.p
                    variants={fadeIn("", "", 0.1, 1.5)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    I'm a passionate metalworking hobbyist who built my own
                    laser cutting machine from the ground up. Now, I freelance
                    on custom metalworking projects, bringing precision and
                    creativity to every piece I craft. I take pride in working
                    closely with clients to turn their ideas into reality,
                    whether it’s creating intricate designs or tackling
                    challenging fabrication tasks. Let's collaborate to make
                    your vision come to life with craftsmanship and attention to
                    detail!
                </motion.p>
            </motion.div>

            <motion.div variants={textVariant()} className="">
                <h2 className={styles.sectionHeadText}>How it works.</h2>

                <motion.p
                    variants={fadeIn("", "", 0.1, 1.5)}
                    className="mt-4 text-secondary text-[17px] pb-10 max-w-3xl leading-[30px]"
                >
                    Once you have an idea for a project, the process is
                    straightforward and user-friendly. Simply create a project
                    by providing a detailed description of what you
                    envision—whether it’s a custom design, a specific
                    metalworking task, or something entirely unique. To help me
                    better understand your needs, you can also upload a 3D model
                    or image along with your description. Once I receive your
                    project submission, I’ll review the details, and if
                    everything aligns, I’ll accept the project and start working
                    on it. Throughout the process, I’ll keep you informed and
                    may collaborate with you to ensure the final product meets
                    your expectations. Together, we’ll bring your ideas to life
                    with precision and creativity!
                </motion.p>
            </motion.div>
            <Link
                href={route("dashboard")}
                className="bg-[#905efe] py-2 px-4 text-white rounded shadow transition-all hover:bg-[#141031]"
            >
                Create a project!
            </Link>
        </>
    );
};

export default SectionWrapper(About, "about");
