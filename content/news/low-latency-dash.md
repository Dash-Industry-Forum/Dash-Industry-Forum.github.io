## DASH-IF publishes Low-Latency DASH extensions and 2nd Community Review for DASH-IF Ad Insertion 

### Low-Latency DASH Modes

<a href="https://dashif.org/guidelines/#agreed-crs-for-next-version" target="_blank" rel="noopener noreferrer"><img height="240px"  src="https://dashif.org/img/ll-dash.png" alt="" /></a>

Based on a report developed jointly between <a href="https://dash-industry-forum.github.io/docs/Report%20on%20Low%20Latency%20DASH.pdf">DVB and DASH-IF in 2017 on Low-Latency DASH</a>, DASH-IF developed over the last 2 years detailed requirements and recommendations for service offerings and client implementation to support consistent latency in DASH for linear TV services. The change request builds on joint work in MPEG, DASH-IF and DVB. In particular, the use of CMAF chunks, HTTP chunked transfer,  consistent MPD signaling as well as requirements and implementation guidelines for DASH clients enables low-latency services. 

The agreed Change Request can be accessed through our <a href="https://dashif.org/guidelines/#agreed-crs-for-next-version"> public website under the guidelines section</a>.

This document is technically frozen. However, certain circumstances still may lead to updates of the document. Three main aspects are identified:

* Some references, in particular the MPEG-DASH Amd.1 of the 4th edition is not yet approved and may still be subject to change. Alignment with MPEG-DASH may still be necessary.
* Conformance and Reference tools are currently under development and may identify bugs or other deficiencies
* Initial deployments are starting but may reveal inconsistencies or will require updates.

DASH-IF has also coordinated and commissioned the development of conformance and reference tools for low-latency DASH, most notably:

* <a href="https://ffmpeg.org/ffmpeg-formats.html#dash-2">Extensions for FFMPEG to support DASH-IF Low-Latency Modes</a> allow setup of low-latency DASH presentations.
* <a href="https://conformance.dashif.org">The DASH-IF conformance validator</a> checks DASH Media Presentations for Low-Latency conformance.
* <a href="http://reference.dashif.org/dash.js/">The DASH-IF reference client dash.js</a> enables playback of Low-Latency DASH-IF Media Presentations and measure the observed latency.

The specification was developed by the DASH IF Interoperability WG in the Live TF lead by <a href="https://www.linkedin.com/in/stockhammer/">Thomas Stockhammer</a> (Qualcomm), <a href="https://www.linkedin.com/in/nicolasweil/">Nicolas Weil</a> (AWS Elemental) and <a href="https://www.linkedin.com/in/wilaw/">Will Law</a> (Akamai).

The specification was made possible by the generous contributions and support of member companies: Akamai, AWS Elemental, castLabs, Comcast, Elemental Technologies, Ericsson, Frontier Communications Harmonic, Hulu, Qualcomm Incorporated, Sony, TNO, Unified Streaming, Arris (CommScope).

### 2nd Community Review for DASH-IF Ad Insertion

<a href="https://dashif.org/guidelines#ad-insertion-in-dash" target="_blank" rel="noopener noreferrer"><img height="240px"  src="https://dashif.org/img/ad-insertion.png" alt="" /></a>

DASH-IF issued a second community review for the DASH-IF Ad Insertion in order to collect public feedback until May 15, 2020. Ad Insertion is considered as one of the most important aspects in online video distribution. Also with the development of CMAF, some additional aspects are relevant, such as consistent development of Ad content, content insertion into CMAF live content, etc. This document addresses latest development in the context of Ad Insertion and maps this to DASH, among others:

* Description of most relevant use cases
* Ad Insertion architecture
* Definition of main content requirements and recommendations
* Definition of ad content requirements and recommendations
* Definition of combined main and ad content
* Ad specific metadata
* Ad tracking

The draft Change Request can be accessed through our <a href="https://dashif.org/guidelines#ad-insertion-in-dash"> public website under the guidelines section</a>. The site also includes instructions on how to provide feedback.

The draft Change Request was developed by the DASH IF Interoperability WG in the Ad Insertion TF lead by <a href="https://www.linkedin.com/in/zachary-cava-73a99b45/">Zachary Cava</a> (Hulu) and <a href="https://www.linkedin.com/in/stockhammer/">Thomas Stockhammer</a> (Qualcomm).

The specification was made possible by the generous contributions and support of member companies: Hulu, Qualcomm, Tencent, Unified Streaming, Akamai, AWS Elemental, Comcast, Lufthansa Systems, Turner, Arris (CommScope).
