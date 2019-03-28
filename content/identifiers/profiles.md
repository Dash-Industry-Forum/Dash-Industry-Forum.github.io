---
menu:
  main:
    parent: "identifiers"
title: "Profiles"
---

# General

MPEG DASH defines formats for MPDs and segments. In addition MPEG provides the
ability to further restrict the applied formats by the definition of Profiles
as defined on section 8 of ISO/IEC 23009-1 [1]. Profiles of DASH are defined
to enable interoperability and the signaling of the use of features. Profiles
are signaled in the @profiles parameter which may be present on different
levels of the MPD.

Such a profile can also be understood as permission for DASH clients that
implement the features required by the profile to process the Media
Presentation (MPD document and Segments).

Furthermore, ISO/IEC 23009-1 permits external organizations or individuals to
define restrictions, permissions and extensions by using this mechanism. Such
external definitions are called Interoperability Points. An interoperability
point may be signalled in the @profiles parameter once a URI is defined. The
owner of the URI is responsible to provide sufficient semantics on the
restrictions and permission of this interoperability point.

DASH-IF further differentiates Interoperability Points and Extensions:

  * Interoperability Points provide a basic collection of tools and features
    to ensure that content/service providers and client vendors can rely to
    support a sufficiently good audio-visual experience.
  * Extensions enable content/service providers and client vendors to enhance
    the audio-visual experience provided by an Interoperability Point in a
    conforming manner.

The only difference between Interoperability Points and Extensions is that
Interoperability Points define a full audio-visual experience and Extensions
enhance the audio-visual experience in typically only one dimension.

The following sections collect the known Profiles, Interoperability Points
and Extensions.

# Profiles

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:dash:profile:full:2011` | ISO/IEC 23009-1 [1](/identifiers/references#23009-1), section 8.2 | identifier for MPEG-DASH Full profile.
`urn:mpeg:dash:profile:isoff-on-demand:2011` | ISO/IEC 23009-1 [1](/identifiers/references#23009-1), section 8.3 | identifier for MPEG-DASH ISO Base media file format On Demand profile.
`urn:mpeg:dash:profile:isoff-live:2011` | ISO/IEC 23009-1 [1](/identifiers/references#23009-1), section 8.4 | identifier for MPEG-DASH ISO Base media file format live profile.
`urn:mpeg:dash:profile:isoff-main:2011` | ISO/IEC 23009-1 [1](/identifiers/references#23009-1), section 8.5 | identifier for MPEG-DASH ISO Base media file format main profile.
`urn:mpeg:dash:profile:mp2t-main:2011` | ISO/IEC 23009-1 [1](/identifiers/references#23009-1), section 8.6 | identifier for MPEG-DASH MPEG-2 TS main profile.
`urn:mpeg:dash:profile:mp2t-simple:2011` | ISO/IEC 23009-1 [1](/identifiers/references#23009-1), section 8.7 | identifier for MPEG-DASH MPEG-2 TS simple profile.
`urn:3GPP:PSS:profile:DASH10` | 3GPP TS26.247 [2](/identifiers/references#ts26247), section 7.3.3 | identifier for 3GP-DASH Release-10 profile.
`urn:dvb:dash:profile:dvb-dash:2014` | [HbbTV 2.0.1](http://www.hbbtv.org/wp-content/uploads/2015/07/HbbTV-SPEC20-00023-001-HbbTV_2.0.1_specification_for_publication_clean.pdf)	 | HbbTV 2.0 DASH profiles.
`urn:hbbtv:dash:profile:isoff-live:2012` | [HbbTV 1.5](http://www.etsi.org/deliver/etsi_ts%5C102700_102799%5C102796%5C01.02.01_60%5Cts_102796v010201p.pdf) | HbbTV 1.5 DASH profiles.

# Interoperability points

Identifier                              |Reference                              |Abstract
----------------------------------------|---------------------------------------|-------
`https://dashif.org/guidelines/dash264` | DASH-IF DASH-AVC/264 [3](/identifiers/references#dash264), section 6.3 | identifier for DASH-AVC/264 content
`https://dashif.org/guidelines/dash264#sd` | DASH-IF DASH-AVC/264 [3](/identifiers/references#dash264), section 7.3 | identifier for DASH-AVC/264 SD content
`https://dashif.org/guidelines/dash264#hd` | DASH-IF DASH-AVC/264 [3](/identifiers/references#dash264), section 8.3 | identifier for DASH-AVC/264 HD content
`https://dashif.org/guidelines/dash264main` | DASH-IF IOP [15](/identifiers/references#dash264), section 8.2 | DASH-based High Definition IOP for OTT video services based on H.264/AVC including consistent live and ad insertion features
`https://dashif.org/guidelines/dash264high` | DASH-IF IOP [15](/identifiers/references#dash264), section 8.3 | DASH-based High Definition IOP for OTT video services based on H.264/AVC including consistent live and ad insertion features
`https://dashif.org/guidelines/dash-if-simple` | DASH-IF IOP [15](/identifiers/references#dash264), section 8.4 | DASH-based High Definition IOP for OTT video services based on H.264/AVC and HEVC/AVC including consistent live and ad insertion features
`https://dashif.org/guidelines/dash-if-main` | DASH-IF IOP [15](/identifiers/references#dash264), section 8.5 | DASH-based High Definition IOP for OTT video services based on H.264/AVC and HEVC/AVC including advanced live and ad insertion features
`urn:scte:dash:2015#isobmff` | SCTE 214-1 [X](/identifiers/references#scte-214-1) and SCTE 214-3 [Y](/identifiers/references#scte-214-3) | identifier for SCTE DASH/FF profile
`urn:scte:dash:2015#ts` | SCTE 214-1 [X](/identifiers/references#scte-214-1) and SCTE 214-2 [Z](/identifiers/references#scte-214-2) | identifier for SCTE DASH/TS profile
`urn:dvb:dash:profile:dvb-dash:2014` | [ETSI TS 103 285](http://www.etsi.org/deliver/etsi_ts/103200_103299/103285/01.01.01_60/ts_103285v010101p.pdf) | The DVB Profile of MPEG-DASH, known as an “interoperability point” by MPEG, is based on the merging of the ISO/IEC 23009-1, ISO Base media file format live profile and ISO Base media file format On Demand profile. In addition it includes “xlink” but only in combination with the actuate property set to “onLoad”. The DVB profile excludes multiplexed representations, segment list addressing and “xlink” with the actuate property set to “onRequest”. The URN for the profile (MPEG Interoperability Point) shall be `urn:dvb:dash:profile:dvb-dash:2014`.
`urn:3GPP:PSS:iop:DASH-enhanced` | ETSI TS 26.247, clause 7.3.9 | The 3GP-DASH Enhanced interoperability point (IOP) is identified by the URN `urn:3GPP:PSS:iop:DASH-enhanced`. This interoperability point includes all features defined in the Release-13 version of this specification in clauses 7.3.6 (media codecs), 7.3.7 (content protection), 8 (Media Presentation Description), 9 (File Format), 10 (QoE), 11 (simple live) and 12 (ad-insertion)
`urn:3GPP:PSS:profile:DASH11:FPS3D` | 3GPP TS 26.247, clause 7.3.5 | TThe 3GP-DASH Release 11 frame-packed stereoscopic 3D video profile.
`urn:3GPP:PSS:profile:DASH11:MS3D` | 3GPP TS 26.247, clause 7.3.4 | The 3GP-DASH Release 11 multiview stereoscopic 3D video profile.

# Extensions

Identifier                                  |Reference                         |Abstract
--------------------------------------------|-----------------------------------|------
`https://dashif.org/guidelines/dashif#ec-3` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.2.3 | Identifier for DASH-IF multichannel audio extension with Enhanced AC-3
`https://dashif.org/guidelines/dashif#mlpa` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.2.3 | Identifier for DASH-IF multichannel audio extension with Dolby True HD
`https://dashif.org/guidelines/dashif#dtsc` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.3.3 | DASH-IF multichannel audio extension with DTS Digital Surround
`https://dashif.org/guidelines/dashif#dtsh` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.3.3 | DASH-IF multichannel audio extension with DTS-HD High Resolution and DTS-HD Master Audio
`https://dashif.org/guidelines/dashif#dtse` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.3.3 | DASH-IF multichannel audio extension with with DTS Express
`https://dashif.org/guidelines/dashif#dtsl` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.3.3 | DASH-IF multichannel audio extension with DTS-HD Lossless (no core)
`https://dashif.org/guidelines/dashif#mps` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.3.3 | DASH-IF multichannel audio extension with MPEG Surround
`https://dashif.org/guidelines/dashif#heaac-mc51` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.5.3 | DASH-IF multichannel audio extension with HE-AACv2 level 4
`https://dashif.org/guidelines/dashif#heaac-mc71` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.5.3 | DASH-IF multichannel audio extension with HE-AACv2 level 6
`https://dashif.org/guidelines/dashif#ac-4` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.2.3 | Extension to support multichannel extension with AC-4
`https://dashif.org/guidelines/dashif#mha1` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.6.3 | Extension to support multichannel audio with MPEG-H 3D Audio 1
`https://dashif.org/guidelines/dashif#mha2` | DASH-IF IOP [15](/identifiers/references#dash264), section 9.4.6.3 | Extension to support multichannel audio with MPEG-H 3D Audio 2
`urn:dvb:dash:dash-extensions:2014-1`| [ETSI TS 103 285](http://www.etsi.org/deliver/etsi_ts/103200_103299/103285/01.01.01_60/ts_103285v010101p.pdf), clause 10.8.2.1 | A new attributeGroup, containing two attributes, is defined by the present document. It is part of the schema with the namespace `urn:dvb:dash:dash-extensions:2014-1` which is included in the ZIP file attached to the present document. This attributeGroup, called baseUrlAttributes, shall only be used to extend the BaseURL element as indicated in clause 10.8.2.1.


