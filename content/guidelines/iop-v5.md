---
menu:
  main:
    parent: "guidelines"
title: "IOP version 5"
weight: 2
---

# Introduction

DASH-IF publishes primarily two different types of documents:
* Published Specifications and Guidelines: The documents are stable and have undergone a community and IPR review.
* Community Review Documents: These documents are technically stable, but public is asked for comments in order to improve details. Community Review documents are published on the DASH-IF website in order to get feedback from the industry on tools and features that are documented for improved interoperability. For each of the documents, comments may be submitted on the technologies itself, on specific features, etc. These documents are only published temporarily for community review and will be replaced by a full version after the commenting period has closed and the comments have been addressed.

With version 5 of DASH-IF Interoperability Guidelines, DASH-IF decided to introduce different parts that each address specific aspects of DASH-based service delivery. Each part is developed and updated within its own timescale. The multipart set of documents is collectively called “DASH-IF Interoperability Points, V5.0” (IOP V5). Version 5 of the DASH-IF IOP is defined for usage with the MPEG DASH specification (ISO/IEC 23009-1) and further constrained to deliver media formatted according to the MPEG CMAF Specification (ISO/IEC 23000-19).  The goal of the DASH-IF IOP specifications is facilitating a common interoperability of media and media services at key points of the delivery chain from the server to the client. The following is a list of the parts of IOP V5 at the time of publication of the present document:
1.	[Overview, architecture and interfaces](https://dashif.org/guidelines/iop-v5#part-1-overview-architecture-and-interfaces)
2.	[Core principles and CMAF mapping](https://dashif.org/guidelines/iop-v5#part-2-core-principles-and-cmaf-mapping)
3.	[On-demand services](https://dashif.org/guidelines/iop-v5#part-3-on-demand-services)
4.	[Live and low-latency live services](https://dashif.org/guidelines/iop-v5#part-4-live-and-low-latency-services)
5.	[Ad insertion](https://dashif.org/guidelines/iop-v5#part-5-ad-insertion)
6.	[Content protection](https://dashif.org/guidelines/iop-v5#part-6-content-protection-and-security)
7.	[Video](https://dashif.org/guidelines/iop-v5#part-7-video)
8.	[Audio](https://dashif.org/guidelines/iop-v5#part-8-audio) 
9.	[Text](https://dashif.org/guidelines/iop-v5#part-9-text)
10.	[Events](https://dashif.org/guidelines/iop-v5#part-10-events)
11.	[Additional functionalities](https://dashif.org/guidelines/iop-v5#part-11-additional-technologies)
12.	[Conformance and reference tools](https://dashif.org/guidelines/iop-v5#part-12-conformance-and-reference-tools)

DASH-IF publishes different types of documents:
* Published Specifications and Guidelines: The documents are stable and have undergone a community and IPR review.
* Community Review Documents: These documents are technically stable, but public is asked for comments in order to improve details. Community Review documents are published on the DASH-IF website in order to get feedback from the industry on tools and features that are documented for improved interoperability. For each of the documents, comments may be submitted on the technologies itself, on specific features, etc. These documents are only published temporarily for community review and will be replaced by a full version after the commenting period has closed and the comments have been addressed. Community Review documents may also be published as Change Requests to existing specifications.

# Part 1: Overview, architecture and interfaces

## Summary
Part 1 provides an overview of the different features in DASH-IF Interoperability Guidelines. In particular, it provides a reference architecture together with relevant interfaces and functional blocks.

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Thomas Stockhammer (Qualcomm)](https://www.linkedin.com/in/stockhammer/)
* [Mike Dolan (Pearl TV)](https://www.linkedin.com/in/michael-dolan-50872355/)

## History
* none

# Part 2: Core principles and CMAF mapping

## Summary
Part 2 provides the core principles of DASH including the data and timing model, as well as the mapping of CMAF data structures to DASH Media Presentations. 

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Thomas Stockhammer (Qualcomm)](https://www.linkedin.com/in/stockhammer/)

## History
_under development_

# Part 3: On-demand services

## Summary
Part 3 provides relevant requirements and recommendations when using DASH for On-Demand services. 

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Thomas Stockhammer (Qualcomm)](https://www.linkedin.com/in/stockhammer/)

## History
_under development_

# Part 4: Live and low-latency services

## Summary
Part 4 provides details on live service offerings, including low-latency services. 

## Latest Published Specification
* [Prepublished v5 on Low-Latency Modes for DASH](https://dash-industry-forum.github.io/docs/CR-Low-Latency-Live-r8.pdf) | ([Bugtracker](https://github.com/Dash-Industry-Forum/Live/issues))

## Documents under Community review
_under development_

## Editors
* [Thomas Stockhammer (Qualcomm)](https://www.linkedin.com/in/stockhammer/)

## History
_under development_

# Part 5: Ad Insertion

## Summary
Part 5 of DASH-IF IOP v5 provides guidelines for advertisement insertion in a MPEG CMAF based content serving workflow utilizing MPEG DASH as the delivery protocol. This part details the general architecture of an ad enabled content serving workflow along with the conditioning, packaging, and signalling requirements to enable both SSAI and SGAI insertion forms. This part defines guidelines for the creation, storage, and serving of ad content. In addition, this part provides informative references and recommendations for auxiliary content and ad systems involved in the ad insertion architecture.

## Latest Published Specification
* [DASH-IF-IOP-Part5-v5.0.0: Ad Insertion](https://dash-industry-forum.github.io/docs/IOP-Guidelines/DASH-IF-IOP-Part5-v5.0.0.pdf) (published Nov 29,2021) | ([Bugtracker](https://github.com/Dash-Industry-Forum/AdInsertion/issues))

## Documents under Community review
_none_

## Editors
* [Zachary Cava (Disney Streaming)](https://www.linkedin.com/in/zachary-cava/)

## History
Up to v4.3 any topics now covered in part 5 were included in the main IOP Guidelines under clause 5. Part 5 supersedes this information.

# Part 6: Content protection and security

## Summary
Part 6 of DASH-IF IOP v5 provides guidelines for encrypted content delivered in MPEG CMAF format protected by MPEG CENC. As MPEG DASH is used as the delivery protocol, this part makes the links between signaling that is within content and within the MPD. In addition, to this, this part describes mechanisms for supporting key rotation. It defines the Enhanced Clear Key Content Protection (ECCP), a content protection mechanism for DASH content which provides greater protection than TLS delivery, token authentication or Clear Key used individually. It also defines the DASH-IF XML schema with elements related to content protection.

## Latest Published Specification
* [Prepublished v5 DASH-IF implementation guidelines: content protection and security](https://dashif-documents.azurewebsites.net/Guidelines-Security/master/Guidelines-Security.html) | ([Bugtracker](https://github.com/Dash-Industry-Forum/Guidelines-Security/issues))

## Documents under Community review
* none

## Editors
* [Laurent Piron (Nagra)](https://www.linkedin.com/in/laurentpiron/)

## History
Up to v4.3 any topics now covered in part 6 were included in the main IOP Guidelines under clause 11. Part 6 deprecates this information. 

# Part 7: Video

## Summary
Part 7 defines the CMAF Media Profiles and the DASH signalling for video tracks.

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Ye-Kui Wang (Bytedance)](https://www.linkedin.com/in/yekui/)

## History
_under development_

# Part 8: Audio

## Summary
Part 8 of DASH-IOP v5 describes the audio interoperability points for the DASH-IF ecosystem. Audio coding profiles, ISOBMFF packaging and MPD parameters are defined for these points of interoperability. Also defined is the application of audio Preselections as applied to object-based audio. Preselections may include audio components from one or more streams.

## Latest Published Specification
* [DASH-IF-IOP-Part8-v5.0.0: Audio](https://dash-industry-forum.github.io/docs/IOP-Guidelines/DASH-IF-IOP-Part8-v5.0.0.pdf) (published Jan 03, 2022) | ([Bugtracker](https://github.com/Dash-Industry-Forum/Audio/issues))

## Documents under Community review
* None

## Editors
* [Phil Maness (Xperi)](https://www.linkedin.com/in/phillip-maness-16a130/)
* [Richard Doherty (Dolby)](https://www.linkedin.com/in/dohertyrichard/)

## History
DASH-IF IOP V4.3 is still available for DASH delivery of media tracks that are not constrained to CMAF.

# Part 9: Text

## Summary
The present document defines the CMAF Media Profiles and the DASH signalling for text tracks, including subtitles and captions as well as open captions and subtitles in video tracks. This work was derived from IOP v4.3 but does not contain non-CMAF profiles. The use of “sidecar” files is not covered in the present document.

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Mike Dolan (Pearl TV)](https://www.linkedin.com/in/michael-dolan-50872355/)

## History
DASH-IF IOP V4.3 is still available for DASH delivery of media tracks that are not constrained to CMAF.

# Part 10: Events

## Summary
Part 10 includes requirements and guidelines for Event stream offerings and processing.

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Iraj Sodagar (Tencent)](https://www.linkedin.com/in/iraj-sodagar/)

## History
_under development_

# Part 11: Additional Technologies

## Summary
Part 11 includes additional functionalities relevant for interoperability, among others:
* Thumbnail tracks
* Query and Token Mechanisms
* Metadata Tracks

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Thomas Stockhammer (Qualcomm)](https://www.linkedin.com/in/stockhammer/)
* [Nicolas Weil (AWS Elemental)](https://www.linkedin.com/in/nicolasweil/)

## History
_under development_

# Part 12: Conformance and Reference Tools

## Summary
Part 12 provides an overview of DASH-IF Reference and Conformance Tools. In particular the conformance software to verify service offerings, the dash.js reference client and the DASH-IF test assets are introduced.

## Latest Published Specification
_under development_

## Documents under Community review
_under development_

## Editors
* [Daniel Silhavy (Fraunhofer Fokus)](https://www.linkedin.com/in/daniel-silhavy-21650a129/)
* [Thomas Stockhammer (Qualcomm)](https://www.linkedin.com/in/stockhammer/)

## History
_under development_
