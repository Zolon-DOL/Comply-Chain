import React from "react";
import StaticData from "../../../../../../components/StaticData";
import OwnWords from "../../../../../../components/OwnWords";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Forms of Public Reporting </h1>
                <p>
                    A company&rsquo;s public reporting on its social compliance
                    program, including the auditing and verification processes
                    and other elements of the program discussed in previous
                    sections, may be a stand-alone report or part of a broader
                    sustainability or corporate social responsibility (CSR)
                    report. It may be published in hard copy and/or on a
                    company&rsquo;s website; some companies publish both an
                    annual or other regular hard-copy report and updates online.
                </p>
                <p>
                    Reporting should also include periodic communication with
                    stakeholders about issues of importance that come up
                    unexpectedly; this type of reporting should be done as
                    needed and as appropriate to the circumstances. Whatever
                    format is chosen, reporting should be timely and regular,
                    and you should make an effort to ensure that key information
                    is accessible to a wide variety of audiences, including
                    those who may not have access to the Internet.
                </p>
                <OwnWords>
                                    <h2>
                                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words</strong>
                                        {": "}
                                    </h2>
                                    <p>
                                        The responsibility to respect human rights requires that
                                        business enterprises have in place policies and
                                        processes through which they can both know and show that
                                        they respect human rights in practice. Showing involves
                                        communication, providing a measure of transparency and
                                        accountability to individuals or groups who may be
                                        impacted and to other relevant stakeholders, including
                                        investors.
                                    </p>
                                    <p>
                                        Communication can take a variety of forms, including
                                        in-person meetings, online dialogues, consultation with
                                        affected stakeholders, and formal public reports. Formal
                                        reporting is itself evolving, from traditional annual
                                        reports and corporate responsibility/sustainability
                                        reports, to include on-line updates and integrated
                                        financial and non-financial reports.
                                    </p>
                                    <p>
                                        <em>
                                            Source:{" "}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                                                title="United Nations Guiding Principles on Business and Human Rights"
                                            >
                                                United Nations Guiding Principles on Business
                                                and Human Rights
                                            </a>
                                            , 2011.
                                        </em>
                                    </p>
                                </OwnWords>

            </div>
        </StaticData>
    );
};

export default en;
