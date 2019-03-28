---
menu:
  main:
    parent: "identifiers"
title: "Event Schemes"
---

# Introduction

Events may be provided in the MPD or within a Representation in order to signal aperiodic information to the DASH client or to an application. Events are timed, i.e. each event starts at a specific media presentation time and typically has a duration. To classify events a proper scheme identifier identifies the application such that the DASH client can forward the event to the proper application.

Two ways of signalling events are provided, namely

* MPD events: Events may be signaled in the MPD. A sequence of events assigned to the media presentation time may be provided in the MPD on Period level. Events of the same type are summarized in an Event Stream that is specified by an **EventStream** element in a Period element.

* Inband events: Event Streams may be multiplexed in Representations. The event streams may be present in selected Representations, in one or several selected Adaptation Set only or in all Representations. An inband event stream that is present in a Representation is indicated by an **InbandEventStream** element.

Appropriate schemes and identifiers are defined below.

# MPD Events

The following defines a set of URIs that identify MPD events, i.e., schemes contained in the **EventStream** element:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:scte:scte35:2013:xml`	|see SCTE 35 2013a [5], 5.10.4 and later and SCTE 214-1 [X], section 6.7.4	| XML representation of SCTE 35 message
`https://dashif.org/identifiers/vast30` |	DASH-IF IOP [15], clause 5.6	| Defines signaling for MPD events containing VAST3.0
`urn:dvb:iptv:cpm:2014`	| ETSI TS 103 285, 9.1.2.1 |	Content programme metadata may be delivered in the MPD by using an EventStream or in Media Segments using an InbandEventStream. It provides content identifiers and basic metadata relating to the current programme.

# DASH Inband Events

The following defines a set of URIs that identify specific DASH inband event schemes, i.e., schemes contained in the **InbandEventStream** element:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:dash:event:2012`|	ISO/IEC 23009-1 [5], 5.10.4 |	This URI is defined to identify DASH specific events that are of relevance for the DASH client.
`urn:dvb:iptv:cpm:2014` |	ETSI TS 103 285, 9.1.2.1 |	Content programme metadata may be delivered in the MPD by using an EventStream or in Media Segments using an InbandEventStream. It provides content identifiers and basic metadata relating to the current programme.

# Other Inband Events

The following defines a set of URIs that identify specific inband event schemes, i.e., schemes contained in the **InbandEventStream** element:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
