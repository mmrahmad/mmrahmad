import "./NavToolList.scss"
import React, {useEffect, useState} from 'react'
import {useLanguage} from "/src/providers/LanguageProvider"
import {useTheme} from "/src/providers/ThemeProvider"
import {useFeedbacks} from "/src/providers/FeedbacksProvider"
import {useData} from "/src/providers/DataProvider"
import NavToolLanguagePicker from "/src/components/nav/tools/NavToolLanguagePicker"
import NavToolThemePicker from "/src/components/nav/tools/NavToolThemePicker"
import NavToolCursorToggle from "/src/components/nav/tools/NavToolCursorToggle"
import NavToolSettings from "/src/components/nav/tools/NavToolSettings"
import NavToolResumeDownloader from "/src/components/nav/tools/NavToolResumeDownloader"

function NavToolList({ expanded }) {
    const language = useLanguage()
    const theme = useTheme()
    const feedbacks = useFeedbacks()
    const data = useData()

    const profile = data.getProfile()
    const maxWidgets = expanded ? 4 : 2

    const shrinkClass = expanded ?
        `` :
        `nav-tools-shrink`

    const widgets = [
        ...(language.supportsMultipleLanguages ? ["language"] : []),
        ...(theme.supportsMultipleThemes ? [NavToolSettings.Options.THEME] : []),
        ...(feedbacks.animatedCursorEnabled ? [NavToolSettings.Options.CURSOR] : []),
        ...(profile.resumePdfUrl ? [NavToolSettings.Options.DOWNLOAD_RESUME] : []),
    ]

    const visibleWidgets = widgets.length <= maxWidgets ?
        widgets :
        widgets.slice(0, maxWidgets - 1)

    const groupedWidgets = widgets.length <= maxWidgets ?
        [] :
        widgets.slice(maxWidgets - 1)

    return (
        <div className={`nav-tools ${shrinkClass}`}>
            {visibleWidgets.map((item, key) => (
                <div className={`nav-tools-item`}
                     key={key}>
                    {item === "language" && (<NavToolLanguagePicker/>)}
                    {item === NavToolSettings.Options.THEME && (<NavToolThemePicker/>)}
                    {item === NavToolSettings.Options.CURSOR && (<NavToolCursorToggle/>)}
                    {item === NavToolSettings.Options.DOWNLOAD_RESUME && (<NavToolResumeDownloader/>)}
                </div>
            ))}

            {groupedWidgets.length > 0 && (
                <div className={`nav-tools-item`}>
                    <NavToolSettings options={groupedWidgets}/>
                </div>
            )}
        </div>
    )
}

export default NavToolList