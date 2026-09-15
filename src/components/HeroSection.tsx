import { motion } from "motion/react"
import { contactData } from "../data"

const HeroSection = () => {
    return (
        <motion.section
            id="about"
            className="hero timeline-pad flex flex-col gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <p className="text-sm text-soft">Software engineer</p>

            <h1 className="font-display font-semibold" style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
                Adam Halid
            </h1>

            <p className="text-lg" style={{ maxWidth: "38ch" }}>
                Frontend &amp; full-stack engineer. I build and maintain client and internal
                products across the stack — from Shopify storefronts to full-stack apps in
                React, Node and PostgreSQL.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
                <a href="#work-experience" className="button">View work</a>
                <div className="flex items-center gap-5">
                    {contactData.map((c, i) => (
                        <a href={c.link} target="_blank" rel="noreferrer" className="link-soft trans text-sm" key={i}>
                            {c.linkName.replace(" Link", "")}
                        </a>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default HeroSection
