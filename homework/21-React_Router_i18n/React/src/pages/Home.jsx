import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher'

const Home = () => {
    const {t}=useTranslation()
  return (
    <div>
    <LanguageSwitcher/> 
    <h1>{t("home")}</h1>
    <Link to="/courses">{t("courses")}</Link>
    </div>
  )
}

export default Home