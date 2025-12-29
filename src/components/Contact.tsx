import { ContactItem } from '@/components/ui/ContactItem'
import { siFacebook, siThreads, siInstagram } from 'simple-icons'

export function Contact() {
    const contactInfo = [
        {
            Icon: siFacebook,
            username: 'Anif Yuliansyah',
            tooltip: 'Facebook',
            link: 'https://www.facebook.com/anif.yuliansyah.007/',
        },
        {
            Icon: siInstagram,
            username: 'anifyuliansyah',
            tooltip: 'Instagram',
            link: 'https://www.instagram.com/anifyuliansyah/',
        },
        {
            Icon: siThreads,
            username: 'Anifyuliansyah',
            tooltip: 'Threads',
            link: 'https://www.threads.net/@anifyuliansyah',
        },
    ]

    return (
        <>
            <div id="contact" className="mx-8 my-3 scroll-mt-20 py-8 md:mx-24">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Contact Me
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {contactInfo.map((contact, index) => (
                        <ContactItem
                            key={index}
                            icon={contact.Icon}
                            username={contact.username}
                            tooltip={contact.tooltip}
                            link={contact.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
