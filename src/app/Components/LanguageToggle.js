"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'sk' ? 'en' : 'sk';
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={toggleLanguage}>
            {i18n.language === 'sk' ? 'Switch to English' : 'Prepnúť na slovenčinu'}
        </button>
    );
};

export default LanguageToggle;
