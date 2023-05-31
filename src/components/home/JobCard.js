import React from "react"

export default function JobCard() {
    return (
        <div className="FireJob_glightbox">
            <div className="FireJob_glightbox_upere">
                <div className="FireJob_glightbox_img">
                    <img src="images/Group.png" />
                </div>
                <div className="FireJob_glightbox_dta">
                    <h3>Director of Creative,
                        IRL Content</h3>
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
    )
}