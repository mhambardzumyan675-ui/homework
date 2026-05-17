import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const CourseCard = ({id,title,teacher}) => {
const {t}=useTranslation()
  return (
    <Link to={`/courses/${id}`}>
    <div>
        <h2>{t("title")}:{title}</h2>
        <h3>{t("teacher")}:{teacher}</h3>
    </div>
    </Link>
  )
}

export default CourseCard