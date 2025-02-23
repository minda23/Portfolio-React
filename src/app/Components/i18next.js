// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    sk: {
        nav: {
            aboutMe: "O mne",
            skills: "Schopnosti",
            projects: "Projekty",
            education: "Vzdelanie",
            contact: "Kontakt"
        },
        aboutMe: {
            header: "Kto som?",
            card1: "Som technicky zameraný samouk s medzinárodnými skúsenosťami.",
            card2: "Hľadám príležitosť profesionálne rásť ako Front-end developer po rokoch individuálneho štúdia.",
            card3: "Som veľmi proaktívny a rád sa učím nové veci.",
            card4: "Vo voľnom čase rád cvičím kalisteniku a programujem weby."
        },
        skills: {
            header: "schopnosti a nástroje",
            subheader: "Tieto technológie ovládam:",
        },
        education: {
            header: "Vzdelanie",
            course: {
                academy: "WEB DEVELOPER ACADEMY",
                timeline: "SmartyAcademy | Mar 2024 - Máj 2024",
                description1: "Vytvoril som responzívnu webovú stránku v HTML a následne som do nej integroval JavaScript a jQuery",
                description2: "Úspešne som zvládol 64 testov a dosiahol certifikát"
            },
            school: {
                header: "Technické lyceum",
                timeline: "Stredná odborná škola technická v Humennom | Sep 2013 – Jún 2017",
                description1: "Ukončil som štúdium maturitnou skúškou",
                description2: "Programoval som v HTML, CSS, PHP a Joomla",
                description3: "Pracoval som s grafickými programami Blender, Gimp, Inscape a",
                description4: "strojárskym programom Solid Edge (3D CAD software)"
            },
            contact: {
                heading: "Kontaktujte ma",
                subheading: "Ozvite sa",
                callMe: "Ozvite sa",
                infoName: "Meno: Lukáš Minda",
                infoLocation: "Humenné, Slovensko",
                infoEmail: "Email: luki.minda@gmail.com",
                writeMe: "Napíšte mi",
                submit: "Odeslat"
            }
        }
    },
    en: {
        nav: {
            aboutMe: "About Me",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact"
        },
        aboutMe: {
            header: "Who am I?",
            card1: "I am a technically oriented self-taught developer with international experience.",
            card2: "I am looking for an opportunity to professionally grow as a Front-end developer after years of self-study.",
            card3: "I am very proactive and love to learn new things.",
            card4: "In my free time, I enjoy calisthenics and building websites."
        },
        skills: {
            header: "Skills and Tools",
            subheader: "I have experience with these technologies:",
        },
        education: {
            header: "Education",
            course: {
                academy: "WEB DEVELOPER ACADEMY",
                timeline: "SmartyAcademy | Mar 2024 - May 2024",
                description1: "I created a responsive website using HTML and then integrated JavaScript and jQuery into it.",
                description2: "I successfully completed 64 tests and received a certificate."
            },
            school: {
                header: "Technical High School",
                timeline: "Technical Secondary School in Humenné | Sep 2013 – Jun 2017",
                description1: "I completed my studies with a final exam.",
                description2: "I programmed in HTML, CSS, PHP, and Joomla.",
                description3: "I worked with graphic programs like Blender, Gimp, Inkscape, and",
                description4: "the engineering software Solid Edge (3D CAD software)."
            },
            contact: {
                heading: "Contact Me",
                subheading: "Get in touch",
                callMe: "Call me",
                infoName: "Name: Lukáš Minda",
                infoLocation: "Humenné, Slovakia",
                infoEmail: "Email: luki.minda@gmail.com",
                writeMe: "Write to me",
                submit: "Submit"
            }




        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'sk',         // Default language is Slovak
    fallbackLng: 'sk',
    interpolation: {
        escapeValue: false, // React handles escaping by default
    },
});

export default i18n;
