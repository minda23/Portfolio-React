"use client"
import React from 'react';
import "./Education.css";
import EducationCard from "./EducationCard";
import { useTranslation } from 'react-i18next';

const Education = (props) => {
    const { scrollRef } = props;
    const { t } = useTranslation();

    return (
        <div ref={scrollRef} id="education_description" style={{ marginLeft: "-3.5rem" }}>
            <div className="headings_education">
                <div>
                    <h5 style={{ marginBottom: "7rem" }}>{t('education.header')}</h5>
                </div>
            </div>
            <div className="two_sections">
                <div className="course_education" id="course">
                    <EducationCard course={t('education.course.academy')} />
                    <div className='academy'>
                        <EducationCard text={t('education.course.timeline')} />
                    </div>
                    <EducationCard text={t('education.course.description1')} />
                    <EducationCard text={t('education.course.description2')} />
                </div>
                <div className="school_education" id="course1">
                    <div>
                        <h5 style={{ fontSize: "1.8rem" }}>{t('education.school.header')}</h5>
                    </div>
                    <div className="school">
                        <EducationCard text={t('education.school.timeline')} />
                    </div>
                    <EducationCard text={t('education.school.description1')} />
                    <EducationCard text={t('education.school.description2')} />
                    <EducationCard text={t('education.school.description3')} />
                    <EducationCard text={t('education.school.description4')} />
                </div>
            </div>
        </div>
    );
};

export default Education;
