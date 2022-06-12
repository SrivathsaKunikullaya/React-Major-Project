import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "./Footer"
const Admission = () => {
    return (
        <div>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Admissions</h3>
                            <div className="underline mx-auto"></div>
                            <br />
                            <p className="home-p">
                                With around 23,500 people graduating till date,
                                MVJ has become a preferred college for students
                                aspiring to pursue their Engineering and Management degrees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3><FontAwesomeIcon icon="arrow-right" className="arrowR" />&nbsp;&nbsp;Admission at Mvjce</h3>
                            <br />
                            <p className="home-p">
                                Over its 4 decade journey, MVJ College of
                                Engineering has transformed itself from a
                                conventional academic institution into a vibrant
                                and proactive centre of learning where students
                                develop both their technical skills and behavioral character.
                                MVJCE is committed to continuous self-improvement and constantly
                                assesses industrial needs and social systems of the present and
                                of the years to come.
                                With about 23,500 students graduating to date, MVJCE has become
                                the college of choice for students who aspire to pursue outstanding
                                Engineering and Management degrees. The college, in turn, thanks to
                                its legacy, commitment and location in the heart of India’s technology
                                landscape, is a preferred institute for companies looking to partner with
                                the college and recruit graduates and postgraduates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3><FontAwesomeIcon icon="arrow-right" className="arrowR" />&nbsp;&nbsp;Eligibility criteria</h3>
                            <br />
                            <p className="home-p">
                                Admission to Undergraduate Engineering programmes may be obtained through the Karnataka Common Entrance Test (KCET) examination and selection process, or through the Management Admission process.
                            </p>
                            <br />
                            <h4>Eligibility Criteria: CET Admission Process</h4>
                            <p className="home-p">
                                <ul className="list-not">
                                    <li><FontAwesomeIcon icon="angle-right" className="arrowR" />&nbsp;&nbsp;&nbsp;Student should have passed II PUC / 12th Standard or equivalent examination, with English as one of the languages, and obtained a minimum of 45% of marks aggregate in Physics and Mathematics, along with Chemistry / Bio-Technology / Biology / Electronics / Computer Science. In case of SC/ST and OBC (Cat-1,2A, 2B, 3A, and 3B category) students from Karnataka, the minimum marks for eligibility shall be 40%.</li>
                                    <li><FontAwesomeIcon icon="angle-right" className="arrowR" />&nbsp;&nbsp;&nbsp;Student should have cleared the entrance test conducted by the Govt. of Karnataka – KCET (Karnataka Common Entrance Test)</li>
                                </ul>
                            </p>
                            <br />
                            <h4>Eligibility Criteria: Management Admission Process</h4>
                            <p className="home-p">
                                <ul className="list-not">
                                    <li><FontAwesomeIcon icon="angle-right" className="arrowR" />&nbsp;&nbsp;&nbsp;Student should have passed II PUC / 12th Standard or equivalent examination, with English as one of the Languages, and obtained a minimum of 60% of marks in aggregate in Physics and Mathematics, along with Chemistry / Bio- Technology / Biology / Electronics / Computer Science.</li>
                                    <li><FontAwesomeIcon icon="angle-right" className="arrowR" />&nbsp;&nbsp;&nbsp;Student should have cleared any one of the Entrance Tests conducted by the Govt. of Karnataka or Govt. of India (KCET, COMEDK, AMPCK, AIEEE)
                                        <br />
                                        <ul>
                                            <li>Karnataka Common Entrance Test</li>
                                            <li>Karnataka Religious and Linguistic Minority Examination</li>
                                            <li>All India Engineering Entrance Examination (AIEEE)</li>
                                            <li>Consortium of Medical, Engineering and DentalColleges of Karnataka (COMEDK)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Admission