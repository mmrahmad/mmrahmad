import React, {useEffect, useState} from 'react'
import {useLanguage} from "/src/providers/LanguageProvider"
import CircularButton from "/src/components/buttons/CircularButton"

function NavToolShrinkToggle({ expanded, setExpanded }) {
    const language = useLanguage()

    const faIcon = expanded ?
        "fa-solid fa-caret-left" :
        "fa-solid fa-caret-right"

    const size = expanded ?
        CircularButton.Sizes.LARGE :
        CircularButton.Sizes.SMALL

    return (
        <CircularButton onClick={() => { setExpanded(!expanded) }}
                        faIcon={faIcon}
                        size={size}
                        variant={CircularButton.Variants.BLEND}
                        tooltip={language.getString("toggle_sidebar")}
                        className={`nav-sidebar-btn-toggle`}/>
    )
}

export default NavToolShrinkToggle