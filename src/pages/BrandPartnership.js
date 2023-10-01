import React, { useState } from "react"
import Header from "../components/layouts/Header"
import { Modal } from "antd"
import YouTube from "react-youtube";

const opts = {
    height: '390',
    width: '640',
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
                                        <h2>Brand<br />Partnerships</h2>
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
                                        <img src="images/zuru_video.png" className="video-thumb-img" onClick={() => setSelectedVideo("https://youtu.be/zVdz_f28oLo")} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="images/zuru.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>10</strong> Sponsored Videos</span>
                                        <span><strong>36.0M</strong> Views</span>
                                        <span><strong>132.2K</strong> Watch Time</span>
                                    </div>
                                    <p>Over the past 2 years, TBNR has partnered with Zuru to produce 10 videos featuring 6 unique products. From an X-Shot blaster battle royale to filling up a Tesla with water balloons, to building a secret room in a waterpark, TBNR and Zuru worked hand in hand to deliver the most fun and exciting content to our audience!</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="FireJob_video_box">
                                        <img src="images/air_up_video.png" className="video-thumb-img" onClick={() => setSelectedVideo("https://youtu.be/PqvSJ4t_Bic")} />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <img src="images/air_up.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>4</strong> Sponsored Videos</span>
                                        <span><strong>9.3M</strong> Views</span>
                                        <span><strong>1.2M</strong> Watch Time</span>
                                    </div>
                                    <p>During the Summer of 2023, TBNR took brand integrations to the next level with Air Up. Leaving ad reads in the past, TBNR seamlessly integrated Air Up and their product into the storylines of 4 videos that exemplify effective viewer retention tactics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="FireJob_video_box">
                                        <img src="images/2k_drive_video.png" className="video-thumb-img" onClick={() => setSelectedVideo("https://youtu.be/pyigFiovec4%5C")} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="images/2k_drive.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>4</strong> Sponsored Videos</span>
                                        <span><b>Community Engagement</b></span>
                                        <span><b>Community Engagement</b></span>
                                    </div>
                                    <p>To DRIVE (pun intended) awareness for their brand new LEGO 2K Drive game, 2K Games worked through TBNR to execute a multi-faceted promotional campaign involving dedicated video content, giveaways, a meet and greet in New York City, and even a message of support for F1 driver Lando Norris.</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="FireJob_video_box">
                                        <img src="images/game_stop_video.png" className="video-thumb-img" onClick={() => setSelectedVideo("https://youtu.be/-jIl21f_IkQ")} />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <img src="images/gamestop_light.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>2</strong> Sponsored Videos</span>
                                        <span><strong>11.5M+</strong> Views</span>
                                        <span><strong>1.2M+</strong> Watch Time</span>
                                    </div>
                                    <p>Over the past 2 years, TBNR has partnered with Zuru to produce 10 videos featuring 6 unique products. From an X-Shot blaster battle royale to filling up a Tesla with water balloons, to building a secret room in a waterpark, TBNR and Zuru worked hand in hand to deliver the most fun and exciting content to our audience!</p>
                                </div>
                            </div>
                        </div>
                        <div className="business-partner-card">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="FireJob_video_box">
                                        <img src="images/google_play_video.png" className="video-thumb-img" onClick={() => setSelectedVideo("https://www.youtube.com/watch?v=FvqoE3nmQyw")} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="images/google_play_light.png" className="partner-img" />
                                    <div className="business-partner-feedback">
                                        <span><strong>5</strong> Social Media Post</span>
                                        <span><b>Paid Media Announcement</b></span>
                                        <span><b>Paid Media Announcement</b></span>
                                    </div>
                                    <p>In 2023, Brianna hosted the second annual Google Play Live, an interactive livestream featuring popular YouTube Creators, hidden gems on the Play Store, gaming with Google Play Games and much more. Along with a full social media campaign, Brianna and the rest of the Google Play Live show team drove awareness to the biggest deal week of the year on Google Play.</p>
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
                                <a href="#">Get in touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedVideo &&
                <Modal open={true} centered onCancel={() => setSelectedVideo(undefined)} footer={null} className="brand-partner-video" width={680}>
                    <YouTube videoId={selectedVideo} opts={opts} />
                </Modal>
            }
        </>
    )
}