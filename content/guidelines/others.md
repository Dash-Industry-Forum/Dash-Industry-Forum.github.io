---
menu:
  main:
    parent: "guidelines"
title: "Other Publications and Position Papers"
weight: 4
---


# Introduction

On top of [DASH-IF Interop Guidelines](../iop-v5) as well as [ETSI specifications](../specifications), DASH also has published a set of other publications guidelines.

# Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0

## Scope

The scope of this document is to provide a DASH interoperability point that is based on DASH-IF-IOPs and provides extensions to address use cases and requirements of ATSC 3.0.

Comments and bugs may be submitted through the [public github repository](https://github.com/Dash-Industry-Forum/ATSC).

## Latest Version

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

## Previous Versions

* [Version 1.0: Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0](https://dash-industry-forum.github.io/docs/DASH-IF-IOP-for-ATSC3-0-v1.0.pdf) | [License declarations](https://dashif.org/ipr-declarations/)

# Guidelines for Implementation: DASH-IF SAND Interoperability

## Scope

The scope of this document is to address interoperability aspects and deployment guidelines for Server and Network Assisted DASH (SAND). More specifically, the following aspects of SAND are covered:
•	Modes defining subsets of SAND messages and mandatory SAND protocols to use for specific deployment environments
•	Capability exchange procedures for DASH clients and DANEs
•	Security guidelines for SAND messages delivery
•	Procedures on DANE discovery for SAND

Comments and bugs may be submitted through the [public github repository](https://gitreports.com/issue/Dash-Industry-Forum/SAND)

## Latest Version

Guidelines for Implementation: DASH-IF SAND Interoperability Version 1.0 ([pdf](https://dash-industry-forum.github.io/docs/DASH-IF-SAND-IOP-v1.0.pdf)) | [License declarations](https://dashif.org/ipr-declarations/)

# DASH-IF Implementation Guidelines: Token-based Access Control for DASH (TAC)

## Scope

The scope of this document is to define a token-based access control mechanism and to enable the signaling of Authentication and Authorization (AA) protocols for DASH-based streaming. An Access Token is a proof that a DASH client or user of the client have been successfully authenticated and authorized in some pre-determined AA Systems to access a particular DASH resource, e.g. DASH segments or MPDs.
This document defines an Access Token format for accessing DASH resources and its transport between a DASH client and a server, hence ensuring interoperability between content providers and content delivery networks. The document focuses on the signaling and exchange mechanisms to facilitate Access Token-protected requests for the delivery of MPDs, licenses, keys and segments. This document can be used in addition to the general DASH-IF Interoperability Points.

Comments and bugs may be submitted through the [public github repository](https://gitreports.com/issue/Dash-Industry-Forum/TAC)

## Latest Version

[DASH-IF Implementation Guidelines: Token-based Access Control for DASH (TAC)] (https://dash-industry-forum.github.io/docs/DASH-TAC-v1.0.htm) ([pdf](https://dash-industry-forum.github.io/docs/DASH-TAC-v1.0.pdf)) | [License declarations](https://dashif.org/ipr-declarations/)

# DASH-IF Technical Specification: Live Media Ingest

## Scope

This document presents the DASH-IF Live Media Ingest Protocol Specification. Two protocol interfaces are defined. The first, interface 1, CMAF ingest, is based on fragmented MPEG-4 as defined in the common media application track format (CMAF). The second interface is based on MPEG DASH and HLS as defined by ISO SC29 WG 11 and IETF. Both Interfaces use the HTTP POST Method to transmit media objects from the ingest source to the receiving entity. Examples of live streaming workflows using these protocol interfaces are also presented. The protocol interfaces also support carriage of timed metadata and timed text. Guidelines for redundancy and failover are also included.

## Latest Version

[DASH-IF Live Media Ingest Protocol v1.2](https://dashif-documents.azurewebsites.net/Ingest/master/DASH-IF-Ingest.html) (Feb 24, 2024) ([pdf](https://dashif-documents.azurewebsites.net/Ingest/master/DASH-IF-Ingest.pdf)) | [License declarations](https://dashif.org/ipr-declarations/)

## Comments and Bugs

Comments may be submitted through the [github](https://github.com/Dash-Industry-Forum/Ingest/issues) or [public bugtracker](https://gitreports.com/issue/Dash-Industry-Forum/Ingest)

## Earlier Version

* DASH-IF Live Media Ingest Protocol v1.0
* DASH-IF Live Media Ingest Protocol v1.1

# DASH-IF Test cases and Vectors

* Guidelines for Implementation: [Test cases and Vectors V1.0](https://testassets.dashif.org) | ([Bugtracker](https://github.com/Dash-Industry-Forum/Test-Cases/issues))

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

* [MPEG-DASH 5th Edition Specification (ISO/IEC 23009-1:2023)](http://standards.iso.org/ittf/PubliclyAvailableStandards)
* T. Stockhammer: “[Dynamic Adaptive Streaming over HTTP-Design Principles and Standards](http://www.w3.org/2010/11/web-and-tv/papers/webtv2_submission_64.pdf)” In: MMSys ’11: Proceedings of the second annual ACM conference on Multimedia systems New York, NY, USA: ACM Press , Feb 2011,S. 133-144.
* T. Stockhammer: "[MPEG-DASH Tutorial at Mile High Video 2022](https://github.com/Dash-Industry-Forum/Dash-Industry-Forum.github.io/files/14318163/DASH-Tutorial-MHV-2022.pdf)"
