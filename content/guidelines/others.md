---
menu:
  main:
    parent: "guidelines"
title: "Other Documents"
weight: 3
---


# Introduction

Beyond the DASH-IF Interoperability Guidelines, DASH-IF also publishes specifications and reports. Those are collected in this clause.

* [Completed Specifications and Guidelines](#completed-DASH-IF-Interoperability-Documents): The documents below are stable and have undergone a community review.
* [Documents for community review](#DASH-IF-Interoperability-Documents-for-Community-Review): These documents are technically solid, but public is asked for comments in order to improve details.
* [Position and White Papers](#DASH-IF-Position-and-White-Papers): These documents provide background and initial studies

# Completed DASH-IF Interoperability Documents

## Disclaimer

The documents below are stable and have undergone a community review. However, the DASH-IF welcomes feedback on these published documents, e.g, request for clarifications or bugs. For this purpose, please use the Github bug tracker cited along with the documents.

## DASH-IF Interoperability Guidelines

For DASH-IF Interoperability Guidelines, refer to

* [earlier versions](https://dashif.org/guidelines/earlier-versions/)
* [DASH-IF IOP v5](https://dashif.org/guidelines/iop-v5/)

## DASH-IF Content Protection Information Exchange Format

### Scope

The scope of this document is to define a Content Protection Information Exchange Format (CPIX). The CPIX document contains keys and DRM information used for encrypting and protecting content, and can be used for exchanging this information among entities needing it in many possibly different workflows for preparing, for example DASH content or HLS content. The CPIX document itself can be encrypted, signed and authenticated so that its receivers can be sure that its confidentiality, source and integrity are also protected.

### Latest Version

DASH-IF Implementation Guidelines v2.3: [Content Protection Information Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/CPIX2.3/Cpix.html) | ([XSD](https://dash-industry-forum.github.io/docs/CPIX2.3/XmlSchema.zip)) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.3/Cpix.pdf)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues)) | ([Test vectors](https://github.com/Dash-Industry-Forum/cpix-test-vectors)) | ([ETSI](https://www.etsi.org/deliver/etsi_ts/103700_103799/103799/01.01.01_60/ts_103799v010101p.pdf))

Changes from 2.2 are

* Addition of the `commonEncryptionScheme` element with the CENC protection scheme value
* Addition of the `version` element
* Addition of a section on using the same content key with different encryption schemes
* Clarification on the `explicitIV` element encoding
* Typos corrections


### Previous Versions

* DASH-IF Implementation Guidelines v2.2: [Content Protection Information Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/CPIX2.2/Cpix.html) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.2/Cpix.pdf)) | ([XSD](https://dash-industry-forum.github.io/docs/CPIX2.2/XSD.zip)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX/issues)) | ([Test vectors](https://github.com/Dash-Industry-Forum/cpix-test-vectors))
* DASH-IF Implementation Guidelines v2.1: [Content Protection Information Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/CPIX2.1/HTML/Index.html) | ([PDF](https://dash-industry-forum.github.io/docs/CPIX2.1/PDF/Index.pdf)) | ([XSD](https://dash-industry-forum.github.io/docs/CPIX2.1/XSD/cpix.zip)) | ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX))
* DASH-IF Implementation Guidelines v2.0: [Content Protection Information
  Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/DASH-IF-CPIX-v2-0.pdf)| ([XML](https://dash-industry-forum.github.io/docs/Schema-Examples-v2.01.zip))| ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX))
* DASH-IF Implementation Guidelines v1.0: [Content Protection Information
  Exchange Format (CPIX)](https://dash-industry-forum.github.io/docs/DASH-IF-CPIX-v1.0.pdf)| ([XML](https://dash-industry-forum.github.io/docs/DASH-IF-CPIX-v1.0.zip))| ([Bugtracker](https://github.com/Dash-Industry-Forum/CPIX))

## Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0

### Scope

The scope of this document is to provide a DASH interoperability point that is based on DASH-IF-IOPs and provides extensions to address use cases and requirements of ATSC 3.0.

Comments and bugs may be submitted through the [public github repository](https://github.com/Dash-Industry-Forum/ATSC).

### Latest Version

Version 1.1: Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0 ([pdf](https://dash-industry-forum.github.io/docs/DASH-IF-IOP-for-ATSC3-0-v1.1.pdf) | [diff to v1.0](https://dash-industry-forum.github.io/docs/DASH-IF-IOP-for-ATSC3-0-v1.1-diff-v1.0.pdf))

This updated version adds the following aspects:

* Update of references to refer to the latest correct versions
* Clarification on track selection in clause 3.3 and addition of a new clause 2.7.5
* Addition of a placeholder for a non-real time profile in clause 1.3
* Updates to the ROUTE protocol constraints when used with $TIME$ in clause 2.2
* Clarification on the usage of @r=-1 with the Segment timeline in clause 3.1.
* Reference to DASH-IF IOP for joining, initial buffering and playout in clause 4.
* Addition of High Dynamic Range (HDR) video in clause 3.3.
* Clarification on ATSC events and DASH events in clause 6.3
* Update to xlink behavior in clause 5.1
* Miscellaneous editorial updates

### Previous Versions

* [Version 1.0: Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0](https://dash-industry-forum.github.io/docs/DASH-IF-IOP-for-ATSC3-0-v1.0.pdf) | [License declarations](https://dashif.org/ipr-declarations/)

## Guidelines for Implementation: DASH-IF SAND Interoperability

### Scope

The scope of this document is to address interoperability aspects and deployment guidelines for Server and Network Assisted DASH (SAND). More specifically, the following aspects of SAND are covered:
•	Modes defining subsets of SAND messages and mandatory SAND protocols to use for specific deployment environments
•	Capability exchange procedures for DASH clients and DANEs
•	Security guidelines for SAND messages delivery
•	Procedures on DANE discovery for SAND

Comments and bugs may be submitted through the [public github repository](https://gitreports.com/issue/Dash-Industry-Forum/SAND)

### Latest Version

Guidelines for Implementation: DASH-IF SAND Interoperability Version 1.0 ([pdf](https://dash-industry-forum.github.io/docs/DASH-IF-SAND-IOP-v1.0.pdf)) | [License declarations](https://dashif.org/ipr-declarations/)

## DASH-IF Implementation Guidelines: Token-based Access Control for DASH (TAC)

### Scope

The scope of this document is to define a token-based access control mechanism and to enable the signaling of Authentication and Authorization (AA) protocols for DASH-based streaming. An Access Token is a proof that a DASH client or user of the client have been successfully authenticated and authorized in some pre-determined AA Systems to access a particular DASH resource, e.g. DASH segments or MPDs.
This document defines an Access Token format for accessing DASH resources and its transport between a DASH client and a server, hence ensuring interoperability between content providers and content delivery networks. The document focuses on the signaling and exchange mechanisms to facilitate Access Token-protected requests for the delivery of MPDs, licenses, keys and segments. This document can be used in addition to the general DASH-IF Interoperability Points.

Comments and bugs may be submitted through the [public github repository](https://gitreports.com/issue/Dash-Industry-Forum/TAC)

### Latest Version

[DASH-IF Implementation Guidelines: Token-based Access Control for DASH (TAC)] (https://dash-industry-forum.github.io/docs/DASH-TAC-v1.0.htm) ([pdf](https://dash-industry-forum.github.io/docs/DASH-TAC-v1.0.pdf)) | [License declarations](https://dashif.org/ipr-declarations/)

## DASH-IF Technical Specification: Live Media Ingest

### Scope

This document presents the DASH-IF Live Media Ingest Protocol Specification. Two protocol interfaces are defined. The first, interface 1, CMAF ingest, is based on fragmented MPEG-4 as defined in the common media application track format (CMAF). The second interface is based on MPEG DASH and HLS as defined by ISO SC29 WG 11 and IETF. Both Interfaces use the HTTP POST Method to transmit media objects from the ingest source to the receiving entity. Examples of live streaming workflows using these protocol interfaces are also presented. The protocol interfaces also support carriage of timed metadata and timed text. Guidelines for redundancy and failover are also included.

### Latest Version

[DASH-IF Live Media Ingest Protocol v1.0] (https://dashif-documents.azurewebsites.net/Ingest/master/DASH-IF-Ingest.html) ([pdf](https://dashif-documents.azurewebsites.net/Ingest/master/DASH-IF-Ingest.pdf)) | [License declarations](https://dashif.org/ipr-declarations/)

### Comments and Bugs

Comments may be submitted through the [github](https://github.com/Dash-Industry-Forum/Ingest/issues) or [public bugtracker](https://gitreports.com/issue/Dash-Industry-Forum/Ingest)

## DASH-IF Test cases and Vectors

* Guidelines for Implementation: [Test cases and Vectors V1.0](https://testassets.dashif.org) | ([Bugtracker](https://github.com/Dash-Industry-Forum/Test-Cases/issues))

# DASH-IF Interoperability Documents for Community Review

## General

Community Review documents are published on the DASH-IF website in order to
get feedback from the industry on tools and features that are documented for
improved interoperability. For each of the documents, comments may be
submitted on the technologies itself, on specific features, etc. These
documents are only published temporarily for community review and will be
replaced by a full version after the commenting period has closed and the
comments have been addressed.
## DASH-IF Candidate Technical Specification: Content Steering for DASH

* A second version for community review for the DASH-IF Candidate Technical Specification on _Content Steering for DASH_ is available [here (pdf)](https://dash-industry-forum.github.io/docs/IOP-Guidelines/DASH-IF-CTS-00XX-Content-Steering-2nd-Community-Review-0.9.6.pdf)
* Content distributors often use multiple Content Delivery Networks (CDNs) to distribute their content to the end-users. They may upload a copy of their catalogue to each CDN, or more commonly have all CDNs pull the content from a common origin. Alternate URLs are generated, one for each CDN, that point at identical content. DASH players may access alternate URLs in the event of delivery problems. Content steering describes a deterministic capability for a content distributor to switch the content source that a player uses either at start-up or midstream, by means of a remote steering service. 
* Community review is open until Feb 15th, 2023. Publication is expected by March 31, 2023.
* Comments may be submitted through [github](https://github.com/Dash-Industry-Forum/Content-Steering/issues).

## DASH-IF Interoperability Specification: Watermarking

* A initial version for community review for the DASH-IF IOP Watermarking specification is available [here (pdf)](https://dash-industry-forum.github.io/docs/DASH-IF-IOP_OTT-Watermarking.pdf)
* This document is about so-called A/B watermarking techniques for ABR content where a series of A and B variants of segments are consumed by devices. It introduces an end-to-end architecture supporting service-side forensic watermarking when delivered on an OTT system. It defines:
  * a format for a token carrying a series of A/B decision unique for every device. This token is used at the edge for delivering the right variant.
  * Metadata and mechanisms for carrying this metadata from a transcoder to the edge. This is used for synchronizing the series on the same timeline for all devices.
* It supports any forensic watermarking technique, any encoder and any CDN. This is the result of the work in the Content Protection and Security task force in DASH-IF and has been done in collaboration between watermarking technology providers (NAGRA, Synamedia, Irdeto, Verimatrix), CDN providers (Akamai, AWS) and others. 
* Community review is open until May 31st, 2022. Publication is expected by August 31, 2022.
* Comments may be submitted through the [github](https://github.com/Dash-Industry-Forum/Watermarking/issues).

# DASH-IF Position and White Papers

* [DASH-IF position Paper: DASH-IF Position Paper: Server and Network
  Assisted DASH (SAND)](https://dash-industry-forum.github.io/docs/SAND-Whitepaper-Dec13-final.pdf) (500k PDF)
* [DASH-IF position Paper: Proposed QoE Media Metrics standardization for
  segmented media playback](https://dash-industry-forum.github.io/docs/ProposedMediaMetricsforSegmentedMediaDelivery-r12.pdf) (1M PDF)
* [DASH-IF/DVB Report on Low-Latency Live Service with DASH](https://dash-industry-forum.github.io/docs/Report%20on%20Low%20Latency%20DASH.pdf) (2M PDF)
* [DASH-AVC/264: A Baseline Implementation for MPEG-DASH Press Conference
  Material](https://dash-industry-forum.github.io/docs/DASH264-v1.5.pdf) (600k PDF)
* [DASH-AVC/264: A Baseline Implementation for MPEG-DASH Press Conference
  (Streaming recording)](https://meetings.webex.com/collabs/files/playRecording?encryptedDocID=0_29A910EB09C0BAEABD833A0CEE1CE0290D4477CBA394F385C9F76F5039B186DFC9A6CA6A732232122D7A07D19C5C921D_06C635CE7312194B5999E0695FBFC56E12BE2991)
* [Survey of European Broadcasters on MPEG-DASH](https://dash-industry-forum.github.io/docs/Survey-of-the-European-Broadcasters-on-MPEG-DASH-Whitepaper-V2.1.pdf)
* [Reinventing multimedia delivery with MPEG-DASH](http://spie.org/x648.html?product_id=897211), SPIE Applications of Digital Image Processing XXXIV, Sept 2011.
  
# ISO Publicly Available Specifications

* [MPEG-DASH 2nd Edition Specification (ISO/IEC 23009-1:2014)](http://standards.iso.org/ittf/PubliclyAvailableStandards/c065274_ISO_IEC_23009-1_2014.zip)
  * [Summary of new features](https://dash-industry-forum.github.io/docs/WhatsnewInMPEG-DASH2ndEdition.pdf)
* [MPEG-DASH 4th Edition Specification (ISO/IEC 23009-1:2020)](http://standards.iso.org/ittf/PubliclyAvailableStandards)
* T. Stockhammer: “[Dynamic Adaptive Streaming over HTTP-Design Principles and Standards](http://www.w3.org/2010/11/web-and-tv/papers/webtv2_submission_64.pdf)” In: MMSys ’11: Proceedings of the second annual ACM conference on Multimedia systems New York, NY, USA: ACM Press , Feb 2011,S. 133-144.
* MPEG-DASH Tutorial at Mile High Video

