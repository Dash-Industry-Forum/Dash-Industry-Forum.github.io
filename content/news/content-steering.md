### DASH-IF announces Public Community Review: Candidate Technical Specification on _Content Steering for DASH_

On July 10th, 2022, DASH-IF published the DASH-IF Candidate Technical Specification on _Content Steering for DASH_ is available [here](https://dashif.org/guidelines/others#dash-if-candidate-technical-specification-content-steering-for-dash) for community review. 

<a href="https://dash-industry-forum.github.io/docs/DASH-IF-CTS-00XX-Content-Steering-Community-Review.pdf" target="_blank" rel="noopener noreferrer"><img height="300px"  src="https://dashif.org/img/content-steering.png" alt="" /></a>

Content distributors often use multiple Content Delivery Networks (CDNs) to distribute their content to the end-users. They may upload a copy of their catalogue to each CDN, or more commonly have all CDNs pull the content from a common origin. Alternate URLs are generated, one for each CDN, that point at identical content. DASH players may access alternate URLs in the event of delivery problems. Content steering describes a deterministic capability for a content distributor to switch the content source that a player uses either at start-up or midstream, by means of a remote steering service. The DASH implementation of Content Steering also supports the notion of a proxy steering server which can switch a mobile client between broadcast and unicast sources.

This is the result of the work in the Live and Ad Insertion task force in DASH-IF. The work is led by [Will Law](https://www.linkedin.com/in/wilaw/) from Akamai and is supported by several DASH-IF members: Akamai, Disney Streaming, Comcast, AWS Elemental and Qualcomm. 

The community review is open until September 30th, 2022. Publication is expected by December 31, 2022. Comments may be submitted through the [github](https://github.com/Dash-Industry-Forum/Content-Steering/issues).

This document is a candidate Technical Specification. DASH-IF is expecting to publish this initially, but to submit the specification to a formal specification organization. The primary choice is ETSI, for which DASH-IF has a PAS agreement.
