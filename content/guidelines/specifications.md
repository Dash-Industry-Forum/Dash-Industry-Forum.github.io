---
menu:
  main:
    parent: "guidelines"
title: "Specifications"
weight: 3
---


# Introduction

DASH-IF has a Publicly Available Specifications ([PAS](https://www.etsi.org/images/files/ETSI_PAS_Process_Guide.pdf)) agreement with the European Telecommunications Standards Institute ([ETSI](https://www.etsi.org/)) to publish DASH-IF documents as ETSI specifications. In the process of publishing through ETSI, DASH-IF still provides early drafts of the candidate specifications and runs community reviews and draft publications of candidate specifications. Also, DASH-IF collects errata or smaller updates to ETSI specifications that are then rolled into a new version of an ETSI specification at appropriate time.

Specific calls will be issued for Community Reviews. However, even for published specifications, DASH-IF welcomes feedback on these published documents, e.g, request for clarifications or bugs. For this purpose, please use the Github bug tracker cited along with the documents.

In the following all ETSI specifications and candidate specifications are documented.

# DASH-IF Candidate Specification: Watermarking API for Encoder Integration (Community Review)

## Scope
DASH-IF and UHD Forum have updated the “Watermarking API for encoder integration” to cope with the latest updates on watermarking.
The main updates to the document comprise:
-	the definition of interfaces to manage watermark pace information and be interoperable with DASH-IF Forensic A/B Watermarking (ETSI TS 104 002)
-	the support for multiple processing pipelines to process several ABR representations in a single WMP instance;
-	the clarification of ABR segmentation signaling to help the WMP enforcing its watermark pace making logic;
-	the explicit signaling of Variant labels to avoid ambiguity in the specification;
This updated specification is expected to fill the gap with the real needs of the market today.
The collaborative work has been done by Elemental, Irdeto, Nagravision and Synamedia and is now open for public review until January 15, 2025.
 
## Disclaimer for Community Review
This document is technically stable, but public is asked for comments in order to improve details. Community Review documents are published on the DASH-IF WG website in order to get feedback from the industry on tools and features that are documented for improved interoperability. For each of the documents, comments may be submitted on the technologies itself, on specific features, etc. These documents are only published temporarily for community review and will be replaced by a full version after the commenting period has closed and the comments have been addressed. Community Review documents may also be published as Change Requests to existing specifications.
The following document is open for community review since December 6, 2024 until January 15th, 2025 for 5 weeks. Once the comments from community review are addressed, the document will be published as a DASH-IF Candidate Technical Specification and may be submitted to ETSI for publication. Please use github Bugtracker for any feedback: https://github.com/Dash-Industry-Forum/Watermarking/issues.

## Latest Version
* [DASH-IF Candidate Specification: Watermarking API for Encoder Integration v0.9.0](https://github.com/user-attachments/files/18038517/DASH-IF-CTS-Watermarking-API-v0.9.0.-.Community.Review.pdf)

# DASH-IF Technical Specification (ETSI TS 104 002): DASH-IF Forensic A/B Watermarking 

## Scope

The scope of this work is the definition of an architecture and an Application Programming Interface (API) for supporting A/B forensic watermarking for Over-The-Top (OTT) on content that is delivered in an Adaptive Bitrate (ABR) format. To the possible extend, the proposed solutions do not make assumptions on the ABR technology that is being used, it can be for example, DASH or HLS. A/B forensic watermarking means that at least two watermarked versions of content (variant A and variant B) are delivered up to a CDN edge server from the encoder. The edge server is responsible for delivering either the A or B variant of every segment to the device.

While digital watermarking can be used for different use cases, this work will focus on forensic use cases. In this context, it is used to define the origin of content leakage. The watermarking technology modifies media content in a robust and invisible way in order to encode a unique identifier, e.g., a unique session ID. The embedded watermark provides means to identify where the media content, that has been redistributed without authorization, is coming from. In other words, the watermark is used to forensically trace the origin of content leakage.
 
## Disclaimer
ETSI published this specification under the Publicly Available Specifications (PAS) agreement. For details on the PAS process, please refer to ETSI PAS Process Guide: https://www.etsi.org/images/files/ETSI_PAS_Process_Guide.pdf.

In addition, in case of any identified issues or bugs, please file issues here: https://github.com/Dash-Industry-Forum/Watermarking/issues.

## Latest Version
* [ETSI TS 104 002: DASH-IF Forensic A/B Watermarking v1.1.1](https://www.etsi.org/deliver/etsi_ts/104000_104099/104002/01.01.01_60/ts_104002v010101p.pdf) ([IPR Declarations](https://dashif.org/ipr-declarations/))



# DASH-IF Technical Specification (ETSI TS 103 998): Content Steering for DASH

## Scope

Content distributors often use multiple Content Delivery Networks (CDNs) to distribute their content to the end-users. They may upload a copy of their catalogue to each CDN, or more commonly have all CDNs pull the content from a common origin. Alternate URLs are generated, one for each CDN, that point at identical content. DASH players may access alternate URLs in the event of delivery problems. Content steering describes a deterministic capability for a content distributor to switch the content source that a player uses either at start-up or midstream, by means of a remote steering service. 

## Disclaimer
ETSI published this specification under the Publicly Available Specifications (PAS) agreement. For details on the PAS process, please refer to ETSI PAS Process Guide: https://www.etsi.org/images/files/ETSI_PAS_Process_Guide.pdf.

In addition, in case of any identified issues or bugs, please file issues here: [https://github.com/Dash-Industry-Forum/Content-Steering/issues](https://github.com/Dash-Industry-Forum/Content-Steering/issues).

## Latest Version

* [ETSI TS 103 998: DASH-IF: Content Steering for DASH v1.1.1](https://www.etsi.org/deliver/etsi_ts/103900_103999/103998/01.01.01_60/ts_103998v010101p.pdf) ([IPR Declarations](https://dashif.org/ipr-declarations/))


# DASH-IF Technical Specification (ETSI TS 103 799): Content Protection Information Exchange Format

## Scope

The scope of this document is to define a Content Protection Information Exchange Format (CPIX). The CPIX document contains keys and DRM information used for encrypting and protecting content, and can be used for exchanging this information among entities needing it in many possibly different workflows for preparing, for example DASH content or HLS content. The CPIX document itself can be encrypted, signed and authenticated so that its receivers can be sure that its confidentiality, source and integrity are also protected.

## Latest Version for Community Review
This document is technically stable, but public is asked for comments in order to improve details. Community Review documents are published on the DASH-IF website in order to get feedback from the industry on tools and features that are documented for improved interoperability. For each of the documents, comments may be submitted on the technologies itself, on specific features, etc. These documents are only published temporarily for community review and will be replaced by a full version after the commenting period has closed and the comments have been addressed. Community Review documents may also be published as Change Requests to existing specifications.

The following document is open for community review since July 9, 2024 until September 9th, 2024 for 2 months. Once the comments from community review are addressed, the document will be published as a DASH-IF Candidate Specification and also submitted to ETSI for publication. Please use github [Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues) for any feedback: 
* DASH-IF Candidate Specification: [Content Protection Information Exchange Format (CPIX) v2.4](https://dash-industry-forum.github.io/docs/CPIX2.4/Cpix.html) | ([CPIX 2.4 XmlSchema](https://dash-industry-forum.github.io/docs/CPIX2.4/Schema/)) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.4/Cpix.pdf)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues)) | ([Test vectors](https://github.com/Dash-Industry-Forum/cpix-test-vectors)) | 

Changes in 2.4 from 2.3.1 are
* Added the option to encrypt Content Keys with different Document Keys, see clauses § 7.4.3 DeliveryDataList
Element and § 8.1.2 Encryption
* Added the option to have in one document with Content Keys for different content, allowing the bulk transfer of
content keys information in one document, hence adding a @contentIdunder the ContentKey element, see
clause § 6.4.7 Multiple Content Keys Delivery for Multiples Assets and § 7.4.7 ContentKey Element
* Added HDCP information attached to the Content Key to be inserted in both HLS playlist and DASH MPD, see
clause § 7.4.8 HDCPData Element
* Added expected DRM robustness information to be inserted in both HLS playlist and DASH MPD, see clause
§ 7.4.10 DRMSystem Element and § 7.4.11 ContentProtectionData Element
* Simplified the ContentKey element by removing all non-used element inherited from the PSCK model, see
clause § 7.4.7 ContentKey Element
* Updated the HLS terminology to multiVariant, see clause § 7.4.12 HLSSignalingData Element
* Removed the signaling for HDS and the deprecated URIExtXKey for HLS, see clause § 7.4.10 DRMSystem
Element
* Updated references

## Latest Official Version

* DASH-IF Implementation Guidelines v2.3.1: [Content Protection Information Exchange Format (CPIX)](https://dashif.org/CPIX/) | ([CPIX 2.3.1 XmlSchema.zip](https://github.com/Dash-Industry-Forum/Dash-Industry-Forum.github.io/files/13752029/CPIX.2.3.1.XmlSchema.zip)) | ([PDF](https://dashif.org/CPIX/Cpix.pdf)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues)) | ([Test vectors](https://github.com/Dash-Industry-Forum/cpix-test-vectors)) | 
* Note that the guidelines v2.3 are published as ([ETSI TS 103799v1.1.1](https://www.etsi.org/deliver/etsi_ts/103700_103799/103799/01.01.01_60/ts_103799v010101p.pdf)), version 2.3.1 will not be published by ETSI, but a version 2.4 is under preparation for ETSI publication.

Changes in 2.3.1 from 2.3 are

* Clarified that key ids shall be UUID as described in ISO/IEC 23001-7 (added a constraint)
* Corrected a bug on `@periodId` that shall be a `XS:REFID`
* Clarification on the `@explicitIV` attribute under the `ContentKey` element encoding
* Taking into account the scenario described in Clause 9 of [DASHIF-IOPv5p6](https://dashif.org/CPIX/#biblio-dashif-iopv5p6) for key rotation, clarification for the PSSH and ContentProtectionData content under DRMSystem. A clause is also added on this topic.
* Clean-up the Use Cases and Requirements clause (removed the electronic sell through use csae)
* Updated references
* Addition of the `@version` attribute under the CPIX element
* Addition of a clause on using the same content key with different encryption schemes


## Previous Versions

* DASH-IF Implementation Guidelines v2.3: [Content Protection Information Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/CPIX2.3/Cpix.html) | ([XSD](https://dash-industry-forum.github.io/docs/CPIX2.3/XmlSchema.zip)) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.3/Cpix.pdf)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues)) | ([Test vectors](https://github.com/Dash-Industry-Forum/cpix-test-vectors)) | ([ETSI](https://www.etsi.org/deliver/etsi_ts/103700_103799/103799/01.01.01_60/ts_103799v010101p.pdf))
* DASH-IF Implementation Guidelines v2.2: [Content Protection Information Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/CPIX2.2/Cpix.html) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.2/Cpix.pdf)) | ([XSD](https://dash-industry-forum.github.io/docs/CPIX2.2/XSD.zip)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues)) | ([Test vectors](https://github.com/Dash-Industry-Forum/cpix-test-vectors))
* DASH-IF Implementation Guidelines v2.1: [Content Protection Information Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/CPIX2.1/HTML/Index.html) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.1/PDF/Index.pdf)) | ([XSD](https://dash-industry-forum.github.io/docs/CPIX2.1/XSD/cpix.zip)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX))
* DASH-IF Implementation Guidelines v2.0: [Content Protection Information
  Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/DASH-IF-CPIX-v2-0.pdf)| ([XML](https://dash-industry-forum.github.io/docs/Schema-Examples-v2.01.zip))| ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX))
* DASH-IF Implementation Guidelines v1.0: [Content Protection Information
  Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/DASH-IF-CPIX-v1.0.pdf)| ([XML](https://dash-industry-forum.github.io/docs/DASH-IF-CPIX-v1.0.zip))| ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX))
