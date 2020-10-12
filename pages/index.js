import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../common/header'
import BannerSection from './landing/banner'
import TestimonialSection from './landing/testimonial'
import FooterSection from './landing/footer'

const Home = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#fb3b64')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#071828')
        document.body.style.setProperty('--dark', '#fb3b64')
    })

    return (
        <Fragment>
            <div className="saas1">
                <Head>
                    <title>erky</title>
                </Head>

                <Header className="saas1" />

                <BannerSection />

                <TestimonialSection />

                <FooterSection />
            </div>
        </Fragment>
    )
}

export default Home
