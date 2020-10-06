## DASH-IF publishes a series of updates for next version of IOP Guidelines and for CPIX  

### Background

DASH-IF recently published the following new documents:

* Advanced Ad Insertion in DASH
* DASH events and timed metadata tracks timing and processing model and client reference model
* Audio Amendment to Guidelines for Implementation: DASH-IF Interoperability Points, Version 4.3
* DASH-IF implementation guidelines: content protection and security
* DASH-IF Implementation Guidelines v2.3: Content Protection Information Exchange Format (CPIX)

The former four documents will be rolled into a new version of the DASH-IF IOP guidelines version 5. This work is still in progress and aligned with the MPEG work on the DASH Profile for CMAF content. MPEG is expected to complete the work in November 2020 with issuing the FDIS and DASH-IF v5 is hence expected shortly after.

All documents can be accessed through our <a href="https://dashif.org/guidelines"> public website under the guidelines section</a>. For all documents, feedback can be provided through the respective github trackers.

### Advanced Ad Insertion in DASH

DASH-IF issued a Change request on advanced ad insertion in DASH. Ad Insertion is considered as one of the most important aspects in online video distribution. Also with the development of CMAF, some additional aspects are relevant, such as consistent development of Ad content, content insertion into CMAF live content, etc. This document addresses latest development in the context of Ad Insertion and maps this to DASH, among others:

* Description of most relevant use cases
* Ad Insertion architecture
* Definition of main content requirements and recommendations
* Definition of ad and slate content requirements and recommendations
* Definition of combined main and ad content
* Ad specific metadata
* Ad tracking

This document is technically frozen. However, certain circumstances still may lead to updates of the document. Three main aspects are identified:

The Change Request was developed by the DASH IF Interoperability WG in the Ad Insertion TF led by <a href="https://www.linkedin.com/in/zachary-cava-73a99b45/">Zachary Cava</a> (Hulu) and <a href="https://www.linkedin.com/in/stockhammer/">Thomas Stockhammer</a> (Qualcomm).

The specification was made possible by the generous contributions and support of member companies: Hulu, Qualcomm, Tencent, Unified Streaming, Akamai, AWS Elemental, Comcast, Lufthansa Systems, Turner, Arris (CommScope), Pearl, Xperi and others.

### DASH events and timed metadata tracks timing and processing model and client reference model

### Audio Amendment to Guidelines for Implementation: DASH-IF Interoperability Points, Version 4.3

### DASH-IF implementation guidelines: content protection and security
This document is an update to the "Content Protection and Security" section of the DASH-IF IOP Guidelines version 4.3. The scope remains the same, giving guidelines for interoperable behaviors of clients in front of well-formed encrypted content. Compared to IOP 4.3:

* Updated encrypted content constraints for supporting CMAF. This includes the addition of the cbcs scheme support and recommendation for encrypting content when available using both cbcs and cenc protection schemes. 
* Clarified periodic reauthorization mechanisms and separating the topic of key hierarchy from periodic reauthentication. The two are now separate chapters.

In addition, this document:
* Introduces an optional license request model that describes how an application can retrieve, using some simple HTTP requests, a license. It is flexible enough so that the requests can embed or not authorization tokens allowing license servers to generate the rights. Two elements are defined for supporting the license request model. These elements are namely the laurl (license acquisition server URL) and authzurl (Authorization server URL).
* Explains how a platform that supports EME can, from the platform capabilities discovery, DRM selection to authorization tokens acquisition, generate a license request.


### DASH-IF Implementation Guidelines v2.3: Content Protection Information Exchange Format (CPIX)
CPIX continues supporting the interoperability between packager and DRM servers when it comes to the exchange of content protection information. Building on the feedback received from the Industry, CPIX has been updated for integrating required enhancements and bug corrections.

* Because of CMAF support for both the CENC cenc and cbcs encryption schemes, CPIX has been updated for carrying this information attached to a Content Key. In addition guidelines have been given when using the same Content Key with different encryption schemes.
* Some extensions defined outside of DASH-IF have been integrated in the CPIX namespace, allowing a better alignment in the Industry. A version number has, as a consequence, been added. This allows external entities to enforce using the latest version of CPIX hence deprecating their proprietary extensions.
