import React, { useEffect, useState } from "react"
import Header from "../components/layouts/Header"
import JobCard from "../components/home/JobCard"
import { callGetApi } from "../utils/api/api"
import { Teams } from "../utils/var/teams"
import { Modal } from "antd"
import OwlCarousel from 'react-owl-carousel';

const options = {
    autoplay:true,
    loop: true,
    autoplaySpeed: 1000,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        575: {
            items: 2
        },
        767:{
            items:2
        },
        1200:{
            items:3
        }
    }
};

export default function Home() {
    const [departments, setDepartments] = useState([])
    const [jobs, setJobs] = useState([])
    const [countedDepartments, setCountedDepartments] = useState([])
    const [selectedBio, setSelectedBio] = useState(undefined)
    const [formData, setFormData] = useState({
        status: {
            id: "open",
            name: "All Roles"
        },
        department: {
            id: "",
            name: ""
        },
    })

    const onGetDepartments = (res) => {
        setDepartments(res)
    }

    const onFailedGetDepartments = (res) => {
        console.log(res)
    }

    const getDepartments = () => {
        callGetApi("departments", onGetDepartments, onFailedGetDepartments)
    }

    const onGetJobs = (res) => {
        setJobs(res.filter((el) => el.name.indexOf("Template") < 0 && el.name.indexOf("TEMPLATE") < 0 && el.name.indexOf("template") < 0))
    }

    const onFailedGetJobs = (res) => {
        console.log(res)
    }

    const getJobs = (status, department_id) => {
        const query = `status=${status}&department_id=${department_id}`
        callGetApi(`jobs?${query}`, onGetJobs, onFailedGetJobs)
    }

    useEffect(() => {
        if (departments.length > 0 && jobs.length > 0) {
            const countedDepartments0 = [
                {
                    id: "",
                    name: "All",
                    job_count: jobs.length,
                    jobs: jobs
                },
                ...departments.map((el) => ({
                    ...el,
                    job_count: jobs.filter((el2) => el.id == el2.departments[0].id).length,
                    jobs: [
                        ...jobs.filter((el2) => el.id == el2.departments[0].id)
                    ]
                }))
            ];
    
            setCountedDepartments(countedDepartments0)
        } else {
            setCountedDepartments([])
        }
    }, [departments, jobs])

    useEffect(() => {
        getDepartments()
        getJobs(formData.status.id, formData.department.id)
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
                <div className="FireJob_video" id="whoare" name="whoare">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-md-6">
                                <div className="FireJob_video_box">
                                    <img src="images/who_we_are.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>Who we are</h2>
                                <p>TBNR (<b>T</b>he <b>B</b>est <b>N</b>ever <b>R</b>est) was founded by the trailblazing Content Creator, Preston Arsement (known widely as PrestonPlayz) in 2012 with his first YouTube channel and has been growing nonstop ever since. As a result, in 2023 TBNR was approved by YouTube as the first Creator-owned MCN (multi channel network). Today, this MCN - “Fire MCN” - gets an average of 40 million views per day. In the past 18 months TBNR has evolved from an explicitly YouTube content production house to a global disruptor in social content and human communication. </p>
                                <p>We at TBNR are a group of skilled <b>CREATORS</b> coming from a variety of backgrounds including content creation, music, theater, coding, architectural design, movie and television set construction, tech and VC startups, professional gaming, video game development, and beyond! </p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 order-md-2">
                                <div className="FireJob_video_box">
                                    <img src="images/2nd-img.jpg" />
                                </div>
                            </div>
                            <div className="col-md-6 order-md-1">
                                <p>We believe in <b>RADICAL CANDOR</b> which means honest and constructive feedback towards ourselves and others, even if it might be uncomfortable or critical. We foster an environment where open and honest feedback is not only accepted, but encouraged for our employees and leadership to achieve their highest potential. We believe challenging each other is the only way to be the <b>BEST</b>. </p>
                                <p>TBNR has an innate desire to spread positive messaging and cares deeply about the kind of content and products that we popularize with our videos, merchandise, and game development. We are seeking passionate <b>CREATORS</b> with a love for human collaboration through supportive competition to join us in the <b>FIRE</b> movement revolution - we will not <b>REST</b> in our efforts to push the needle of humanity forward in a meaningfully, positive direction!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Positions" id="sPositions" name="sPositions">
                    <div className="container">
                        <div className="FireJob_Open">
                            <h2>Open Positions</h2>
                            <div className="FireJob_Positions_button" id="myBtnContainer">
                                {countedDepartments && countedDepartments.length > 0 &&
                                    countedDepartments.filter((el) => el.job_count != 0).map((el) => (
                                        <button key={el.id} className="btn"
                                            onClick={() => 
                                                setFormData({
                                                    ...formData,
                                                    department: {
                                                        id: el.id,
                                                        name: el.name
                                                    }
                                                })
                                            }
                                        > {el.name} <span>{el.job_count}</span></button>
                                    ))
                                }
                            </div>
                            <div className="FireJob_Portfolio">
                                <div className="row">
                                    {countedDepartments && countedDepartments.length > 0 && countedDepartments.filter((el) => el.id == formData.department.id).length > 0 && countedDepartments.filter((el) => el.id == formData.department.id)[0].jobs.map((el) => (
                                        <div key={el.id} className="col-lg-4  col-sm-6 col-xs-6 Creative">
                                            <JobCard job={el} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Trailblazers" id="Trailblazers" name="Trailblazers">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <h2>Trailblazers</h2>
                                <p>To make trailblazing content we look to hire the brightest and most creative people in the industry who like to have fun and be weird!</p>
                            </div>
                            <div className="col-lg-9">
                                <OwlCarousel
                                    className='owl-carousel owl-theme'
                                    {...options}
                                >
                                    {Teams.map((el) => (
                                        <div className="item" key={el.id}>
                                            <div className="FireJob_item">
                                                <div className="FireJob_item_img"><img src={el.image} /></div>
                                                <div className="FireJob_item_data">
                                                    <h3>{el.name}</h3>
                                                    {/* <h5>{el.role}</h5> */}
                                                    {/* <h4>Years of Service:<span>{el.years_of_service}</span></h4> */}
                                                    <h5>What excites you?</h5>
                                                    <p>{el.a1}</p>
                                                    <button onClick={() => setSelectedBio(el)}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="FireJob_star" id="FireProjects" name="FireProjects">
                    <div className="container">
                        <div className="FireJob_brand">
                            <h2>Fire Projects</h2>
                            <div className="row ">
                                <div className="col-lg-4 mb-5">
                                    <div className="FireJob_Initiative">
                                        <div className="FireJob_Initiative_desc">
                                            <img src="images/firegame.png" />
                                            <span>fire games</span>
                                            <p>The furnace where games get made. FireGames is focused on crafting exceptional gaming experiences tailored for the creator economy niche. Including Roblox and Minecraft Marketplaces, we specialize in developing immersive RPG and adventure-style games. FireGames is where gaming seamlessly merges with content creation.</p>
                                        </div>
                                        <a href="https://firegames.gg" target="_blank">Learn More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <div className="FireJob_Initiative">
                                        <div className="FireJob_Initiative_desc">
                                            <img src="images/firedata.png" />
                                            <span>fire data</span>
                                            <p>The future of all influence. FireData is dedicated to revolutionizing the creator economy industry. Our mission is clear: to establish industry-standard practices through advanced analytics and insights, dismantling inefficiencies and gatekeepers, including agencies. We are fervently committed to promoting transparency and facilitating access to cutting-edge SaaS solutions. We are igniting a new era of empowerment and innovation within the creator economy.</p>
                                        </div>
                                        <a href="https://firedata.gg" target="_blank">Learn More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <div className="FireJob_Initiative">
                                        <div className="FireJob_Initiative_desc">
                                            <img src="images/firemerch.png" />
                                            <span>fire merch</span>
                                            <p>Where style ignites. FireMerch represents our commitment to creativity, style, and quality that has fueled our growth and transformation! With a fusion of nostalgia and innovation, our designs not only tell a story, but also ensure the comfort and satisfaction of our valued community.</p>
                                        </div>
                                        <a href="https://firemerch.com" target="_blank">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="FireJob_Perks" id="FireJob_Perks" name="FireJob_Perks">
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
                                        <h4>Company paid holidays </h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3  d-flex align-items-stretch">
                                    <div className="FireJob_col">
                                        <span><img src="images/Perks6.png" />
                                        </span>
                                        <h4>Paid Parental Leave </h4>
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

                <div className="FireJob_Pillars_section" id="Firejob_Pillars" name="Firejob_Pillars">
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
                                            <li>Quality Work &gt; Time Spent</li>
                                            <li>Seek Criticism & Radical Candor</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="FireJob_Great">
                                        <h4>Fuel Excitement</h4>
                                        <ul>
                                            <li>Charitable Initiatives</li>
                                            <li>Recognize Wins </li>
                                            <li>Have Fun, Be Weird</li>
                                            <li>Listen With Empathy</li>
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
            {selectedBio &&
                <Modal open={true} onCancel={() => setSelectedBio(undefined)} footer={null} className="bio-modal">
                    <h3>{selectedBio.name}</h3>
                    <h5>What excites you?</h5>
                    <p>{selectedBio.a1}</p>
                    <h5>What are you passionate about?</h5>
                    <p>{selectedBio.a2}</p>
                    <h5>What are you most proud of during your time at TBNR?</h5>
                    <p>{selectedBio.a3}</p>
                </Modal>
            }
        </>
    )
}