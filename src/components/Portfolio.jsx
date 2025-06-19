import React, {useEffect, useState} from 'react'
import Layout from "/src/components/layout/Layout"
import {useData} from "/src/providers/DataProvider"
import {useLanguage} from "/src/providers/LanguageProvider"
import {useLocation} from "/src/providers/LocationProvider"
import {useNavigation} from "/src/providers/NavigationProvider"
import LayoutNavigation from "/src/components/layout/LayoutNavigation"
import LayoutImageCache from "/src/components/layout/LayoutImageCache"
import LayoutSlideshow from "/src/components/layout/LayoutSlideshow"

function Portfolio() {
    const data = useData()
    const language = useLanguage()
    const location = useLocation()
    const navigation = useNavigation()

    if(!data || !language || !location || !navigation) {
        window.location.reload()
        return
    }

    const profile = data.getProfile()
    const settings = data.getSettings()
    const sections = data.getSections()

    const animatedBackgroundEnabled = settings.templateSettings.animatedBackground

    const currentSection = navigation.targetSection
    const previousSection = navigation.previousSection
    const sectionLinks = navigation.sectionLinks
    const categoryLinks = navigation.categoryLinks

    return (
        <Layout id={"react-portfolio"}
                animatedBackgroundEnabled={animatedBackgroundEnabled}>
            <LayoutImageCache profile={profile}
                              settings={settings}
                              sections={sections}/>

            <LayoutNavigation profile={profile}
                              sectionLinks={sectionLinks}
                              categoryLinks={categoryLinks}>
                <LayoutSlideshow sections={sections}
                                 currentSection={currentSection}
                                 previousSection={previousSection}/>
            </LayoutNavigation>
        </Layout>
    )
}

export default Portfolio