import React from "react"

export default function JobCard({ job }) {
    return (
        <div className="FireJob_glightbox">
            <div className="FireJob_glightbox_upere">
                <div className="FireJob_glightbox_img">
                    <img src="images/Group.png" />
                </div>
                <div className="FireJob_glightbox_dta">
                    <h3>{job.name}</h3>
                    <ul>
                        <li><img src="images/Ellips.png" />{job.custom_fields.employment_type}</li>
                        <li><img src="images/Frame.png" /> {job.offices.map((el, index) => (index == (job.offices.length - 1) ? el.name : `${el.name}, `))}</li>
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