---
menu:
  main:
    parent: "identifiers"
title: "Content Rating"
---

# Introduction

Content Rating may be provided in the MPD.

# Content Rating Schemes

The following defines a set of URIs that identify MPD events, i.e., schemes contained in the EventStream element:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:dvb:iptv:guidance:2014` | [ETSI TS 103 285](http://www.etsi.org/deliver/etsi_ts/103200_103299/103285/01.01.01_60/ts_103285v010101p.pdf), clause 9.1.2.3 | “urn:dvb:iptv:guidance:2014” where the id is either:<ul><li>‘G’ indicating that guidance text relating to the content is provided in the ExplanatoryText element within the ParentalGuidance element.</li><li>‘W’ indicating watershed (safe harbour) content that is only suitable for presentation after the watershed. Guidance text may also be provided</li>
`urn:dvb:iptv:rating:2014` | [ETSI TS 103 285](http://www.etsi.org/deliver/etsi_ts/103200_103299/103285/01.01.01_60/ts_103285v010101p.pdf), clause 9.1.2.3 | scheme where the id is a decimal number representing the minimum recommended age encoded as per ETSI EN 300 468.
