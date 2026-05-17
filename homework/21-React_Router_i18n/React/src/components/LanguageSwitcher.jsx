import React from 'react'
import i18n from 'i18next'

const LanguageSwitcher = () => {
  return (
    <div>
        <button  onClick={()=>i18n.changeLanguage("en")}>EN</button>
        <button onClick={()=>i18n.changeLanguage("hy")}>Հայ</button>
    </div>
  )
}

export default LanguageSwitcher