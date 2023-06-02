import React from "react"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="FireJob-Footer">
                            <div className="FireJob_footer-logo"><img src="images/logo.png" /></div>
                            <div className="FireJob_footer-text">
                                <p>TBNR LLC is proud to be an Equal Opportunity Employer. We celebrate diversity and are committed to an inclusive environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="FireJob_footer-nav">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li><a href="#whoare">Who We Are</a></li>
                                <li><a href="#Numbers">By The Numbers</a></li>
                                <li><a href="#sPositions">Open Positions</a></li>
                                <li><a href="#Trailblazers">Trailblazers</a></li>
                                <li><a href="#Firejob_Perks">Perks</a></li>
                                <li><a href="#Firejob_Pillars">Pillars</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="FireJob_footer-nav">
                            <h3>LEGAL</h3>
                            <ul>
                                <li><a href="">TAB</a></li>
                                <li><a href="">TAB</a></li>
                                <li><a href="">TAB</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="FireJob_footer-social">
                            <h3>CONNECT</h3>
                            <ul>
                                <li><a href=""><img src="images/twt.png" /></a></li>
                                <li><a href=""><img src="images/in.png" /></a></li>
                                <li><a href=""><img src="images/yt.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}