import React, {useEffect, useState} from 'react'
import CircularButton from "/src/components/buttons/CircularButton"
import {useUtils} from "/src/hooks/utils"
import {useLanguage} from "/src/providers/LanguageProvider"

function NavToolFullscreenToggle({ className = "" }) {
    const utils = useUtils()
    const language = useLanguage()

    const isFullscreen = utils.capabilities.isFullscreen()

    const tooltip = isFullscreen ?
        language.getString("full_screen_exit") :
        language.getString("full_screen_enter")

    const faIcon = isFullscreen ?
        "fa-solid fa-minimize" :
        "fa-solid fa-maximize"

    return (
        <CircularButton onClick={utils.capabilities.toggleFullscreen}
                        faIcon={faIcon}
                        size={CircularButton.Sizes.EXTRA_LARGE}
                        variant={CircularButton.Variants.BLEND}
                        className={className}
                        tooltip={tooltip}/>
    )
}

export default NavToolFullscreenToggle