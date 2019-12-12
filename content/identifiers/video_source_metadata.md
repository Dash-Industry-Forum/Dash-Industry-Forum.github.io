---
menu:
  main:
    parent: "identifiers"
title: "Video Source Metadata"
---

# Introduction

Video source data may be used in order to provide details of the video content source. In general, such characteristics of video are logically independent of the compression format. In the context of DASH they are typically used in order to select a proper Adaptation Set. This section focuses on source format description.

In the context of DASH as specific source descriptor exists, namely FramePacking used to identify the frame-packing configuration scheme employed. The details are provided below.

In addition, source data properties may be expressed by one of the following two descriptor elements:

* EssentialProperty: In this case the Media Presentation author expresses that the successful processing of the descriptor is essential to properly use the information in the parent element that contains this descriptor.

* SupplementalProperty: In this case the Media Presentation author expresses that the descriptor contains supplemental information that may be used by the DASH client for optimized processing.

A multitude of source properties may be expressed using these generic descriptors, some of them using the definition in ISO/IEC 23001-8 [4]. These are listed below.

Finally, MPEG-DASH also allows to add source content descriptors to the Role descriptor. For details see below.

# Frame Packing

For the element FramePacking the @schemeIdUri attribute is used to identify the frame-packing configuration scheme employed.

The following defines a set of URIs that identify specific frame-packing arrangements, i.e. schemes contained in the FramePacking element:

{{< csvTable "csv/video-source-metadata-frame-packing.csv" >}}

# Generic Video Source Descriptors

The following defines a set of URIs that identify video source descriptions to be used with the Essential Property and/or the Supplemental Property descriptor:

{{< csvTable "csv/video-source-metadata-generic-video-source-descriptors.csv" >}}

# Video Source Description in Role Element

Scheme may also be used with the Role descriptor. The following defines a set of URIs that may be used with the Role element:

{{< csvTable "csv/video-source-metadata-video-source-description-in-role-element.csv" >}}
