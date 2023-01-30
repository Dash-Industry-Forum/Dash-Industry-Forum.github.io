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

# MPEG DASH Event Schemes

The following event schemes are defined by ISO/IEC 23009-1:

{{< csvTable "csv/event-schemes-mpeg-dash-events.csv" >}}


# Other Inband Event Schemes

The following event schemes are defined by the industry:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
