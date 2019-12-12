---
menu:
  main:
    parent: "identifiers"
title: "Audio Source Metadata"
---

# Introduction

Audio source data may be used in order to provide details of the audio content source. In general, such characteristics of audio are logically independent of the compression format. In the context of DASH they are typically used in order to select a proper Adaptation Set. This section focuses on source format description.

In the context of DASH as specific source descriptor exists, namely AudioConfiguration identifies channel configuration signaling for Representations that contain an audio component.

In addition, source data properties may be expressed by one of the following two descriptor elements:

* EssentialProperty: In this case the Media Presentation author expresses that the successful processing of the descriptor is essential to properly use the information in the parent element that contains this descriptor.

* SupplementalProperty: In this case the Media Presentation author expresses that the descriptor contains supplemental information that may be used by the DASH client for optimized processing.

A multitude of source properties may be expressed using these generic descriptors, some of them using the definition in ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\]. These are listed below.


# Audio Channel Configuration

For the element AudioChannelConfiguration the @schemeIdUri attribute is used to identify the audio channel configuration scheme employed.

The following defines URIs that identify specific audio channel configuration schemes, i.e. schemes contained in the AudioChannelConfiguration element:

{{< csvTable "csv/audio-source-metadata-audio-channel-configuration.csv" >}}


# Generic Audio Source Descriptors

The following defines a set of URIs that identify audio source descriptions to be used with the Essential Property and/or the Supplemental Property descriptor:

{{< csvTable "csv/audio-source-metadata-generic-audio-source-descriptors.csv" >}}
