### 2nd Community Review and public Special Session for Candidate Technical Specification: DASH-IF Forensic A/B Watermarking

On February 2nd, 2023, DASH-IF published the 2nd Community Review for the new Candidate Technical Specification: DASH-IF Forensic A/B Watermarking. The details of the community review are available [here](https://dashif.org/guidelines/others/#dash-if-candidate-technical-specification-dash-if-forensic-ab-watermarking) and the published document is available [here (pdf)](https://dash-industry-forum.github.io/docs/IOP-Guidelines/DASH-IF-CTS-00XX-AB-Watermarking-0.9.pdf) . 

<a href="" target="_blank" rel="noopener noreferrer"><img height="300px"  src="https://dashif.org/img/Watermarking-Concept.png" alt="https://dashif.org/guidelines/others/#dash-if-candidate-technical-specification-dash-if-forensic-ab-watermarking" /></a>

This second version is a significant update addressing all comments received during the initial community review.

Scope and Abstract:

* The scope of this work is the definition of an architecture and an Application Programming Interface (API) for supporting A/B forensic watermarking for Over-The-Top (OTT) on content that is delivered in an Adaptive Bitrate (ABR) format. To the possible extend, the proposed solutions do not make assumptions on the ABR technology that is being used, it can be for example, DASH or HLS. A/B forensic watermarking means that at least two watermarked versions of content (variant A and variant B) are delivered up to a CDN edge server from the encoder. The edge server is responsible for delivering either the A or B variant of every segment to the device.
* While digital watermarking can be used for different use cases, this work will focus on forensic use cases. In this context, it is used to define the origin of content leakage. The watermarking technology modifies media content in a robust and invisible way in order to encode a unique identifier, e.g., a unique session ID. The embedded watermark provides means to identify where the media content, that has been redistributed without authorization, is coming from. In other words, the watermark is used to forensically trace the origin of content leakage.

This document is a candidate Technical Specification. DASH-IF is expecting to publish this initially, but to submit the specification ETSI, for which DASH-IF has a PAS agreement. It is expected that the final document will be published as an ETSI technical specification.

Community review is open until February 28, 2023. Publication is expected by March 31, 2023 as DASH-IF version and by June 30, 2023 as ETSI TS. The community review is open until February 28, 2023. Publication is expected by March 31, 2023 in DASH-IF and by June 30, 2023 as ETSI Technical Specification. Comments may be submitted through the [github](https://github.com/Dash-Industry-Forum/Watermarking/issues).

In order to support the public community, the specification will be introduced in a [public special session](https://dashif.org/events/special-sessions/#february-10-2023-dash-if-ab-watermarking) on February 10, 2023 at 9am pacific, calendar details are [here (Causeway)](https://members.dashif.org/wg/DASH/calendar/event/103/2023-02-10) and [here (github)](https://github.com/Dash-Industry-Forum/Watermarking/wiki/Special-Session-Announcement).

This is the result of the work in the Content Protection and Security task force in DASH-IF lead by [Laurent Piron](https://www.linkedin.com/in/laurentpiron/) from NAGRA and has been done in collaboration between watermarking technology providers (NAGRA, Synamedia, Irdeto, Verimatrix), CDN providers (Akamai, AWS) and other DASH-IF members. 
