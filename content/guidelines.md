---
menu: "main"
title: "Guidelines"
---

# Completed DASH-IF Interoperability Documents

## Disclaimer

The documents below are stable and have undergone a community review. However,
the DASH-IF welcomes feedback on these published documents, e.g, request for
clarifications or bugs. For this purpose, please use the Github bug tracker
cited along with the documents.

## DASH-IF Interoperability Points and Extensions

**Latest Version:**

* [Guidelines for Implementation: DASH-IF Interoperability Points V4.2: Multiple Clarifications and Bug fixes](https://dashif.org/wp-content/uploads/2018/04/DASH-IF-IOP-v4.2-clean.pdf) | ([Bugtracker](https://gitreports.com/issue/Dash-Industry-Forum/DASH-IF-IOP)) | ([diff to v4.1](https://dashif.org/wp-content/uploads/2018/04/DASH-IF-IOP-v4.2-diff-4.1.pdf)) | ([Online version](https://dashif.org/wp-content/uploads/2018/04/DASH-IF-IOP-v4.2-clean.htm))

**Previous Versions:**

* [Guidelines for Implementation: DASH-IF Interoperability Points V4.1: Robust Live, Seek Preview, Content Annotation, New Media Codecs and other extensions]()
* [Guidelines for Implementation: DASH-IF Interoperability Points V4.0: UHD Video and other extensions]() | ([Bugtracker]()) | ([diff to v3.3]())
* [Guidelines for Implementation: DASH-IF Interoperability Points V3.3: Alignment with MPEG-DASH, Guidelines on keys and other corrections]()| ([Bugtracker]()) | ([diff to v3.2]())
* [Guidelines for Implementation: DASH-IF Interoperability Points V3.2: Addition of Adaptation Set Switching, HTTPS Guidelines, Key Rotation and MPEG-H Audio]()| ([Bugtracker]()) | ([diff to v3.1]())
* [Guidelines for Implementation: DASH-IF Interoperability Points V3.1: Addition of CEA608/708, IMSC1, AC-4]() | ([Bugtracker]())
* [Guidelines for Implementation: DASH-AVC/264 Interoperability Points V3.0: DRM updates, Improved Live, Ad Insertion, Events, HEVC support, Trick Modes, CEA608/708]() | ([Bugtracker]())
* [Guidelines for Implementation: DASH-AVC/264 Interoperability Points V2.0: HD and Multi-Channel Audio Extensions]() | ([Bugtracker]())
* [Guidelines for Implementation: DASH-AVC/264 Interoperability Points V1.0]() | ([Bugtracker]())

## DASH-IF Content Protection Information Exchange Format

**Latest Version:**

* DASH-IF Implementation Guidelines v2.0: [Content Protection Information Exchange Format (CPIX)]()| ([XML]())| ([Bugtracker]())

The scope of this document is to define a Content Protection Information
Exchange Format (CPIX). The CPIX document contains keys and DRM information
used for encrypting and protecting content, and can be used for exchanging
this information among entities needing it in many possibly different workflows
for preparing, for example DASH content or HLS content. The CPIX document
itself can be encrypted, signed and authenticated so that its receivers can
be sure that its confidentiality, source and integrity are also protected.

The document provides the following extensions to v1.0:

* The CPIX document structure has been extensively revised in order to make
  it more generic so that media formats other than those described in DASH-IF
  IOPs can be accommodated.
* It no longer mirrors the structure of an MPD file, but rather contains rules
  to describe the mapping of streams to content keys.
* It allows for supporting additional DRM signaling schemes by allowing
  alternative types of DRM signaling elements.
* Sets of elements can be authenticated by means of XML element signing.

**Previous Versions:**

* DASH-IF Implementation Guidelines v1.0: [Content Protection Information
  Exchange Format (CPIX)]()| ([XML]())| ([Bugtracker]())

## Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0

* [Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0]()
* Comments and bugs may be submitted through the [public github repository]().
* The scope of this document is to provide a DASH interoperability point that
  is based on DASH-IF-IOPs and provides extensions to address use cases and
  requirements of ATSC 3.0

## DASH-IF Test cases and Vectors

* Guidelines for Implementation: [Test cases and Vectors V1.0]() | ([Bugtracker]())

# DASH-IF Interoperability Documents for Community Review

## General

Community Review documents are published on the DASH-IF website in order to
get feedback from the industry on tools and features that are documented for
improved interoperability. For each of the documents, comments may be
submitted on the technologies itself, on specific features, etc. These
documents are only published temporarily for community review and will be
replaced by a full version after the commenting period has closed and the
comments have been addressed.

## Addition of MPEG-D USAC (Unified Speech and Audio Coding) to DASH-IF IOP

* The change request against IOP v4.2 for Community Review is
  [accessible here]()
* Community review is open until June 30th, 2018. Addition to IOP is expected
  by 08/2018.
* Comments may be submitted through the [public bugtracker](). Please use
  prefix [USAC],
* This addition adds the following main features: Addition for signaling of
  audio encoded with MPEG-D USAC.

## Addition of UHD Dynamic Metadata

* The change request against IOP v4.2 for [Community Review is accessible
  here]()
* Community review is open until June 30th, 2018. Addition to IOP is
  expected by 08/2018.
* Comments may be submitted through the [public bugtracker]().
* This addition adds the following main features: Add signalling for
  dynamic metadata related to UHD/HDR.

## Guidelines for Implementation: DASH-IF Interoperability Point for ATSC 3.0 v1.1

* The update to DASH-IF ATSC profile v1.1 for community review is available
  here ([clean version]()) and here ([markup against v1.0]()).
* Community review is open until May 16th, 2018. Publication is expected
  by Q2/2018.
* Comments may be submitted through the public github repository.
* This version adds the following aspects:
  * Update of references to refer to the latest correct versions
  * Clarification on track selection in clause 3.3 and addition of a new
    clause 2.7.5
  * Addition of a placeholder for a non-real time profile in clause 1.3
  * Updates to the ROUTE protocol constraints when used with $TIME$ in
    clause 2.2
  * Clarification on the usage of @r=-1 with the Segment timeline in clause 3.1.
  * Reference to DASH-IF IOP for joining, initial buffering and playout in
    clause 4.
  * Addition on a note on the deployment for High Frame Rate in clause 3.2.8
    and 5.3.2.9.
  * Addition of High Dynamic Range (HDR) video in clause 3.3.
  * Clarification on ATSC events and DASH events in clause 6.3
  * Update to xlink behavior in clause 5.1
  * Miscellaneous editorial updates

## Content Protection Information Exchange Format v2.1

* The update to CPIX specification v2.1 for community review is available
  here ([pdf]()) and [html]().
* Community review is open until May 5th, 2018. Publication is expected
  by Q2/2018.
* Comments may be submitted through the public bugtracker.

## Leap second handling clarifications

* The change request against IOP v4.1 for Community Review is accessible
  [here]()
* Community review is open until April 15th, 2018. Addition to IOP is
  expected by Q2/2018.
* Comments may be submitted through the [public bugtracker]().
* This addition adds the following main features: Clarifies how to handle
  leap seconds and how to avoid common pitfalls

## Support for SAND Interoperability

* The change request against IOP v4.1 for Community Review is accessible
  [here]()
* Community review is open until April 15th, 2018. Addition to IOP is
  expected by Q2/2018.
* Comments may be submitted through the [public bugtracker]().
* This addition adds the following main features:
  * Modes defining subsets of SAND messages and mandatory SAND protocols to
  use for specific deployment environments
  * Normative behaviors on SAND message handling for DANE and DASH client
  * Security guidelines for SAND messages delivery
  * Procedures on DANE discovery for SAND

## DASH-IF Implementation Guidelines: Token-based Access Control for DASH (TAC) v1.0

* The document for 2nd Community Review is accessible [here]()
* Community review is open until March 31st, 2018. Publication is
  expected by Q2/2018.
* Comments may be submitted through the [public github repository]()
* The scope of this document is to define a token-based access control
  mechanism and enabling the signaling of authentication and authorization (AA)
  protocols for DASH-based video streaming. An access token is a proof that a
  DASH client or user of the clients have been successfully authenticated and
  authorized, respectively, in some pre-determined AA Systems to access a
  particular DASH resource, e.g. DASH segments or MPDs. This document remains
  agnostic on what AA Systems and protocols are actually used for DASH clients
  to obtain AA Tokens but it does define the access token format for accessing
  DASH resources, hence ensuring interoperability between content providers
  and content delivery networks.

## DASH-IF Conformance Software

* [DASH-AVC/264 Online Conformance Tool]()
* Please use the following bugtracker to submit issues with the conformance
  software: [https://gitreports.com/issue/Dash-Industry-Forum/Conformance-Software]()
* For detailed description see here: [DASH-IF-Conformance-Software-v1.0.pdf]()

## ISO Publicly Available Specification

* [MPEG-DASH 2nd Edition Specification (ISO/IEC 23009-1:2014)]()
* [Summary of new features]()

## White Papers and Background

* [DASH-IF position Paper: DASH-IF Position Paper: Server and Network
  Assisted DASH (SAND)]() (500k PDF)
* [DASH-IF position Paper: Proposed QoE Media Metrics standardization for
  segmented media playback]() (1M PDF)
* [DASH-AVC/264: A Baseline Implementation for MPEG-DASH Press Conference
  Material]() (2M PDF)
* [DASH-AVC/264: A Baseline Implementation for MPEG-DASH Press Conference
  (Streaming recording)]()
* [Survey of European Broadcasters on MPEG-DASH]()
* [Reinventing multimedia delivery with MPEG-DASH](), SPIE Applications of
  Digital Image Processing XXXIV, Sept 2011.
* T. Stockhammer: “[Dynamic Adaptive Streaming over HTTP-Design Priciples
  and Standards]()” In: MMSys ’11: Proceedings of the second annual ACM
  conference on Multimedia systems New York, NY, USA: ACM Press , Feb 2011,
  S. 133-144.

