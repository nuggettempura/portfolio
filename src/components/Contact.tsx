import type { ReactElement } from "react"
import { contactData } from "../data"

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C16.5 5 17.5 5.3 17.5 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
)

const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11 22 14v7h-4v-6.2c0-1.5-.03-3.4-2.08-3.4-2.08 0-2.4 1.63-2.4 3.3V21h-4V9Z" />
    </svg>
)

const icons: Record<string, () => ReactElement> = {
    "Github Link": GithubIcon,
    "LinkedIn Link": LinkedinIcon,
}

const Contact = () => {
    return (
        <footer className="border-t border-line mt-16 py-2">
            <div className="app flex justify-between items-center py-8">
                <p className="text-sm text-soft">© 2026 Adam Halid</p>
                <div className="flex gap-5">
                    {contactData.map((c, i) => {
                        const Icon = icons[c.linkName]
                        return (
                            <a
                                href={c.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-soft hover:text-accent trans"
                                key={i}
                                aria-label={c.linkName.replace(" Link", "")}
                            >
                                {Icon && <Icon />}
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Contact
