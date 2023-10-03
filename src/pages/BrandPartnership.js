import React, { useState } from "react"
import Header from "../components/layouts/Header"
import { Modal } from "antd"
import YouTube from "react-youtube";

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
};

export default function BrandPartnership() {
    const [selectedVideo, setSelectedVideo] = useState("");

    return (
        <>
            <div className="FireJob_Main page-brandpartnerships">
                <div className="container">
                    <Header />
                    <div className="FireJob_banner">
                        <div className="FireJob_banner_form">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="FireJob_best">
                                        <h2>Brand<br />Integrations</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="FireJob_body page-brandpartnerships-body">
                <div className="FireJob_video" id="whoare">
                    <div className="container">
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="FireJob_video_box">
                                        <img src="images/zuru_bg.png" className="video-thumb-img" onClick={() => setSelectedVideo("zVdz_f28oLo?si=gj4bWZgjH5oC6JHU")} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="images/zuru.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>10</strong> Sponsored Videos</span>
                                        <span><strong>36.0M+</strong> Views</span>
                                        <span><strong>1.6M+</strong> Watch Time Hours</span>
                                    </div>
                                    <p>Over the past 2 years, TBNR has partnered with Zuru to produce 10 videos featuring 6 unique products. From an X-Shot blaster battle royale to filling up a Tesla with water balloons, to building a secret room in a waterpark, TBNR and Zuru worked hand in hand to deliver the most fun and exciting content to our audience!</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="FireJob_video_box">
                                        <img src="images/airup_bg.png" className="video-thumb-img" onClick={() => setSelectedVideo("PqvSJ4t_Bic?si=Igfyj-XY9Qxtbw6L")} />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <img src="images/air_up.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>4</strong> Sponsored Videos</span>
                                        <span><strong>9.3M+</strong> Views</span>
                                        <span><strong>1.2M+</strong> Watch Time Hours</span>
                                    </div>
                                    <p>During the Summer of 2023, TBNR took brand integrations to the next level with Air Up. Leaving ad reads in the past, TBNR seamlessly integrated Air Up and their product into the storylines of 4 videos that exemplify effective viewer retention tactics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="FireJob_video_box">
                                        <img src="images/lego2k_bg.png" className="video-thumb-img" onClick={() => setSelectedVideo("pyigFiovec4?si=5vjHskNV2ui_eqQJ")} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="images/2k_drive.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>7</strong> Sponsored Videos</span>
                                        <span><b>Community Engagement</b></span>
                                        <span><b>NYC Meet and Greet</b></span>
                                    </div>
                                    <p>To DRIVE (pun intended) awareness for their brand new LEGO 2K Drive game, 2K Games worked through TBNR to execute a multi-faceted promotional campaign involving dedicated video content, giveaways, a meet and greet in New York City, and even a message of support for F1 driver Lando Norris.</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="FireJob_video_box">
                                        <img src="images/gamestop_bg.png" className="video-thumb-img" onClick={() => setSelectedVideo("-jIl21f_IkQ?si=C2JKvvZMVnd3ivwq")} />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <img src="images/gamestop_light.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>2</strong> Sponsored Videos</span>
                                        <span><strong>11.5M+</strong> Views</span>
                                        <span><strong>1.2M+</strong> Watch Time Hours</span>
                                    </div>
                                    <p>GameStop collaborated with Preston on a comprehensive two-video awareness campaign aimed at generating excitement for the relaunch of their rewards program, transitioning from "Power-Up Rewards" to "GameStop Pro," with the primary objective of driving sign-up engagement. Our partnership successfully facilitated the conception and execution of a strategic influencer go-to-market approach for the GameStop Pro initiative.</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="FireJob_video_box">
                                        <img src="images/googleplay_bg.png" className="video-thumb-img" onClick={() => setSelectedVideo("FvqoE3nmQyw?si=8bBO7Yur3gKO8YKl")} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="images/google_play_light.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>5</strong> Social Media Posts</span>
                                        <span><b>Paid Media Announcement</b></span>
                                        <span><b>Google Play Live Host</b></span>
                                    </div>
                                    <p>In 2023, Brianna hosted the second annual Google Play Live, an interactive livestream featuring *popular YouTube Creators, hidden gems on the Play Store, gaming with Google Play Games and much more. Along with a full social media campaign, Brianna and the rest of the Google Play Live show team drove awareness to the biggest deal week of the year on Google Play.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="FireJobs_our_partners">
                        <div className="row">
                            <h1>OUR PARTNERS</h1>
                            <div className="our-partners-icons">
                                <img src="images/zuru.png" />
                                <img src="images/gamestop.png" />
                                <img src="images/2k_drive.png" />
                                <img src="images/google_play.png" />
                                <img src="images/p1.png" />
                                <img src="images/p2.png" />
                                <img src="images/p3.png" />
                                <img src="images/p4.png" />
                                <img src="images/p5.png" />
                                <img src="images/p6.png" />
                                <img src="images/p7.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="FireJobs_get_in_touch">
                        <div className="row">
                            <h1>Work with us</h1>
                            <div className="get_in_touch_content">
                                <p>In the heart of the creator economy, TBNR specializes in taking the entire creative process, from conception and production to meticulous editing, campaign execution, and comprehensive reporting, thus relieving our brand partners of the heavy lift. We thrive on nurturing connections within our Fire Nation community and fostering genuine partnerships with the brands we collaborate with. Our ultimate goal is to not only achieve but surpass the goals set by our brand partners, all while fostering meaningful and enduring relationships with them.</p>
                                <a href="mailto:Partnerships@tbnr.work">Get in touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedVideo &&
                <Modal open={true} centered onCancel={() => setSelectedVideo(undefined)} footer={null} className="brand-partner-video" width={680}>
                    <YouTube videoId={selectedVideo} opts={opts} className="yt-video" />
                </Modal>
            }
        </>
    )
}