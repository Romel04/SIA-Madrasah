import React from 'react'
import BannerSection from './sections/BannerSection'
import AboutSection from './sections/AboutSection'
import MessageSection from './sections/MessageSection'
import ClassesSection from './sections/ClassesSection'
import CounterSection from './sections/CounterSection'
import TeachersSection from './sections/TeachersSection'
import NoticeSection from './sections/NoticeSection'
import GallerySection from './sections/GallerySection'
import VideoSection from './sections/VideoSection'
import AffiliatesSection from './sections/AffiliatesSection'
import SocialFixedIcons from './layout/SocialFixedIcons'

const HomepageComponent = () => {
  return (
    <div>
    <SocialFixedIcons/>
    <BannerSection/>
    <AboutSection/>
    <MessageSection/>
    <ClassesSection/>
    <CounterSection/>
    <TeachersSection/>
    <NoticeSection/>
    <GallerySection/>
    <VideoSection/>
    <AffiliatesSection/>
    </div>
  )
}

export default HomepageComponent