import "./SectionBody.scss"
import React, {useEffect, useState} from 'react'
import {useParser} from "/src/hooks/parser"
import ArticleCards from "/src/components/articles/ArticleCards"
import ArticleContactForm from "/src/components/articles/ArticleContactForm"
import ArticleFacts from "/src/components/articles/ArticleFacts"
import ArticleInfoList from "/src/components/articles/ArticleInfoList"
import ArticleInlineList from "/src/components/articles/ArticleInlineList"
import ArticleNotFound from "/src/components/articles/ArticleNotFound"
import ArticlePortfolio from "/src/components/articles/ArticlePortfolio"
import ArticleStack from "/src/components/articles/ArticleStack"
import ArticleSkills from "/src/components/articles/ArticleSkills"
import ArticleTestimonials from "/src/components/articles/ArticleTestimonials"
import ArticleText from "/src/components/articles/ArticleText"
import ArticleThread from "/src/components/articles/ArticleThread"
import ArticleTimeline from "/src/components/articles/ArticleTimeline"

function SectionBody({ section }) {
    const parser = useParser()
    const articleDataWrappers = parser.parseSectionArticles(section)

    return (
        <div className={`section-body`}>
            {articleDataWrappers && articleDataWrappers.map((dataWrapper, key) => {
                const Component = SectionBody.ARTICLES[dataWrapper.component] || ArticleNotFound
                return <Component dataWrapper={dataWrapper}
                                  id={key}
                                  key={key}/>
            })}
        </div>
    )
}

SectionBody.ARTICLES = {
    ArticleCards,
    ArticleContactForm,
    ArticleFacts,
    ArticleInfoList,
    ArticleInlineList,
    ArticleNotFound,
    ArticlePortfolio,
    ArticleSkills,
    ArticleStack,
    ArticleTestimonials,
    ArticleText,
    ArticleThread,
    ArticleTimeline
}

export default SectionBody