import React, { useEffect, useState } from "react"
import Header from "../components/layouts/Header"
import JobCard from "../components/home/JobCard"
import CategoryBtn from "../components/home/CategoryBtn"
import axios from 'axios'

export default function Home() {
    const [categories, setCategories] = useState([])
    const [jobs, setJobs] = useState([])

    const getCategories = () => {
        const options = {
            headers: {
                "Authorization": `Basic ${btoa(`${process.env.REACT_APP_HARVEST_API}:`)}`,
                'Access-Control-Allow-Origin': "*"
            }
        }

        axios.get(`${process.env.REACT_APP_HARVEST_GREENHOUSE_API}/departments`, options)
         .then((res) => {
            console.log(res)
            setCategories(res)
         }, (err) => {
            console.log(err)
         })
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <div className="FireJob_Main">
                <div className="container">
                    <Header />
                    <div className="FireJob_banner">
                        <h1>Fire Jobs</h1>
                        <div className="FireJob_banner_form">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="FireJob_select">
                                        <div className="dropdown">
                                            <span className="select-label">All Roles</span>
                                            <input type="hidden" name="cd-dropdown" />
                                            <ul className="dropdown-list">
                                                <li>All Roles1</li>
                                                <li>All Roles2</li>
                                                <li>All Roles3</li>
                                                <li>All Roles4</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="FireJob_select2">
                                        <div className="dropdown2">
                                            <span className="select-label2">Type</span>
                                            <input type="hidden" name="cd-dropdown" />
                                            <ul className="dropdown-list2">
                                                <li>Type1</li>
                                                <li>Type2</li>
                                                <li>Type3</li>
                                                <li>Type4</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="FireJob_select3">
                                        <div className="dropdown3">
                                            <span className="select-label3">Location</span>
                                            <input type="hidden" name="cd-dropdown" />
                                            <ul className="dropdown-list3">
                                                <li>Location1</li>
                                                <li>Location2</li>
                                                <li>Location3</li>
                                                <li>Location4</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="FireJob_search">
                                        <button>SEARCH JOBS</button>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="FireJob_best">
                                        <h2>The Best Never Rest</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="FireJob_body">
                <div className="FireJob_video" id="whoare">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="FireJob_video_box">
                                    <video poster="images/video.png">
                                        <source src=" #" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>Who we are</h2>
                                <p>TBNR is a top YouTube Production Company that manages the massive YouTube channels and digital media
                                    brands of Preston and Brianna Arsement.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FireJob_star" id="Numbers">
                    <div className="container">
                        <div className="FireJob_brand">
                            <h2>BRAND STATS</h2>
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="FireJob_Channels">
                                        <h3>7</h3>
                                        <span>YouTube Channels</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="FireJob_Channels">
                                        <h3>70 million+</h3>
                                        <span>Subscribers</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="FireJob_Channels">
                                        <h3>18 billion+</h3>
                                        <span>Lifetime Views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FireJob_Positions" id="sPositions">
                    <div className="container">
                        <div className="FireJob_Open">
                            <h2>Open Positions</h2>
                            <div className="FireJob_Positions_button" id="myBtnContainer">
                                <CategoryBtn />
                                <button className="btn Gaming" onClick="filterSelection('Gaming')"> Gaming <span>6</span></button>
                                <button className="btn Post" onClick="filterSelection('Post')"> Post-Production <span>6</span></button>
                                <button className="btn Production" onClick="filterSelection('Production')"> Production <span>6</span></button>
                                <button className="btn Department " onClick="filterSelection('Department')"> Art Department <span>6</span></button>
                                <button className="btn Keeley" onClick="filterSelection('Keeley')"> Keeley Channel <span>6</span></button>
                                <button className="btn Properties" onClick="filterSelection('Properties')"> Properties <span>6</span></button>
                                <button className="btn Fire" onClick="filterSelection('Fire')"> Fire Games <span>6</span></button>
                                <button className="btn Resources" onClick="filterSelection('Resources')"> Human Resources
                                    <span>6</span></button>
                                <button className="btn Information" onClick="filterSelection('Information')"> Information Technology
                                    <span>6</span></button>
                                <button className="btn Operations" onClick="filterSelection('Operations')"> Operations <span>6</span></button>
                                <button className="btn Sales" onClick="filterSelection('Sales')"> Sales/Marketing <span>6</span></button>
                                <button className="btn active" onClick="filterSelection('all')"> Show all <span>6</span></button>
                            </div>
                            <div className="FireJob_Portfolio">
                                <div className="row">
                                    <div className="col-lg-4  col-sm-6 col-xs-6 column Creative">
                                        <JobCard />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-xs-6 column Gaming">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group2.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>Full Stack Software
                                                        Engineer</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-xs-6 column Post ">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group3.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>Director of Production, Gaming Content</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-xs-6 column Production">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group2.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>Game Developer (Type Script)</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-xs-6 column Department">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group4.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>Director of Social Strategy (YouTube Shorts / TikTok)</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-xs-6 column Keeley">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>Gaming Creative Strategist - Roblox</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-xs-6 column Properties">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>Gaming Creative Strategist - Minecraft</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-xs-6 column Resources">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group5.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>YouTube Thumbnail Artist</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-xs-6 column Information">
                                        <div className="FireJob_glightbox">
                                            <div className="FireJob_glightbox_upere">
                                                <div className="FireJob_glightbox_img">
                                                    <img src="images/Group.png" />
                                                </div>
                                                <div className="FireJob_glightbox_dta">
                                                    <h3>YouTube Creative Strategist/Content Writer</h3>
                                                    <ul>
                                                        <li><img src="images/Ellips.png" /> Full Time</li>
                                                        <li><img src="images/Frame.png" /> Dallas. TX</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="FireJob_glightbox_low">
                                                <span>$150K+/yr</span>
                                                <a href="">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Trailblazers" id="Trailblazers">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <h2>Trailblazers</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Nisl viverra viverra at in enim risus pharetra praesent.
                                    Scelerisque facilisis aliquam amet eu sed. Non id sit turpis massa convallis odio. </p>
                            </div>
                            <div className="col-lg-9">
                                <div className="owl-carousel">
                                    <div className="item">
                                        <div className="FireJob_item">
                                            <div className="FireJob_item_img"><img src="images/slider1.png" /></div>
                                            <div className="FireJob_item_data">
                                                <h3>JON AYSON</h3>
                                                <h4><span>3</span> Year</h4>
                                                <ul>
                                                    <li>Super power: <label>Controlling Elements</label></li>
                                                    <li>Trophy: <label>Over Achiever</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="FireJob_item">
                                            <div className="FireJob_item_img"><img src="images/slider2.png" /></div>
                                            <div className="FireJob_item_data">
                                                <h3>JON AYSON</h3>
                                                <h4><span>3</span> Year</h4>
                                                <ul>
                                                    <li>Super power: <label>Controlling Elements</label></li>
                                                    <li>Trophy: <label>Over Achiever</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="FireJob_item">
                                            <div className="FireJob_item_img"><img src="images/slider3.png" /></div>
                                            <div className="FireJob_item_data">
                                                <h3>JON AYSON</h3>
                                                <h4><span>3</span> Year</h4>
                                                <ul>
                                                    <li>Super power: <label>Controlling Elements</label></li>
                                                    <li>Trophy: <label>Over Achiever</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="FireJob_item">
                                            <div className="FireJob_item_img"><img src="images/slider4.png" /></div>
                                            <div className="FireJob_item_data">
                                                <h3>JON AYSON</h3>
                                                <h4><span>3</span> Year</h4>
                                                <ul>
                                                    <li>Super power: <label>Controlling Elements</label></li>
                                                    <li>Trophy: <label>Over Achiever</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Perks" id="FireJob_Perks">
                    <div className="container">
                        <div className="FireJob_Open">
                            <h2>Fire Perks</h2>
                            <p>We go beyond great not only professionally, but personally as well.</p>
                            <div className="row ">
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks1.png" />
                                        </span>
                                        <h4>100% Company paid Medical Insurance </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks2.png" />
                                        </span>
                                        <h4>Company sponsored Dental and Vision Insurance</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks3.png" />
                                        </span>
                                        <h4>401K with a 3% non-elective contribution</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks4.png" />
                                        </span>
                                        <h4>Flexible time off </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks5.png" />
                                        </span>
                                        <h4>Company paid
                                            holidays </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks6.png" />
                                        </span>
                                        <h4>Paid Parental
                                            Leave </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks7.png" />
                                        </span>
                                        <h4>Short and Long Term Disability Insurance </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks8.png" />
                                        </span>
                                        <h4>Quarterly Campfire Reviews </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Pillars_section" id="Firejob_Pillars">
                    <div className="container">
                        <h2>Fire Pillars are the foundation of everything created here - including careers.</h2>
                        <h3>Fire Pillars</h3>

                        <div className="FireJob_Pillars">
                            <div className="row ">
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Go Beyond Great</h4>
                                        <ul>
                                            <li>Innovate & Replicate</li>
                                            <li>Challenge Your Best</li>
                                            <li>Quality Work &gt; Time Soent</li>
                                            <li>Seek Criticism & Radical Candor</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Fuel Excitement</h4>
                                        <ul>
                                            <li>Charitable initiatives</li>
                                            <li>Recognize Wins </li>
                                            <li>Have Fun, Be Weird</li>
                                            <li>Listen with empathy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Ignite Transformation</h4>
                                        <ul>
                                            <li>Seek Discomfort</li>
                                            <li>Faith Over Fear</li>
                                            <li>Be Bold & Pursue Growth</li>
                                            <li>Spark Change Within Yourself & The Company</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}