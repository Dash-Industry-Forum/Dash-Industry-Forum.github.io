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

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:dash:14496:10:frame_packing_arrangement_type:2011`	| ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.3 |	For Adaptation Sets or Representations that contain a video component that conforms to ISO/IEC 14496-10, this URI is defined. The @value is the value as defined for VideoFramePackingType in ISO/IEC 23001-8 [4].
`urn:mpeg:dash:13818:1:stereo_video_format_type:2011`	| ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.3 |		For Adaptation Sets or Representations that contain a video component that conforms to ISO/IEC 13818-1, this URI is defined. The @value is the value as defined for VideoFramePackingType in ISO/IEC 23001-8 [4].

# Generic Video Source Descriptors

The following defines a set of URIs that identify video source descriptions to be used with the Essential Property and/or the Supplemental Property descriptor:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:mpegB:cicp:ColourPrimaries`	| ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.1 |	Video colour primaries indicating the chromaticity coordinates of the source colour primaries.
`urn:mpeg:mpegB:cicp:TransferCharacteristics`	| ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.2	| Video colour transfer characteristics indicating the opto-electronic transfer characteristic of the source picture.
`urn:mpeg:mpegB:cicp:MatrixCoefficients` |	ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.3 |	Video matrix colour coefficients describing the matrix coefficients used in deriving luma and chroma signals from the green, blue, and red primaries.
`urn:mpeg:mpegB:cicp:VideoFullRangeFlag` |	ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.3 |	Video Full Range specifying the scaling and offset values applied in association with the Video matrix colour coefficients.
`urn:mpeg:mpegB:cicp:VideoFramePackingType` |	ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.4 |	Video frame packing indicating the type of packing arrangement used in video frames
`urn:mpeg:mpegB:cicp:QuincunxSamplingFlag` |	ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.4 |	Quincunx Sampling Flag indicatomh whether a quincunx sampling structure is used in the frame packed video representation.
`urn:mpeg:mpegB:cicp:PackedContentInterpretationType` |	ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], section 7.5	| Interpretation of packed video frames indicating the intended interpretation of the constituent frames.
`urn:mpeg:dash:14496:10:frame_packing_arrangement_type:2011` |	ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.3	| For Adaptation Sets or Representations that contain a video component that conforms to ISO/IEC 14496-10, this URI is defined. The @value is the value as defined for VideoFramePackingType in ISO/IEC 23001-8 [4].
`urn:mpeg:dash:13818:1:stereo_video_format_type:2011` |	ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.3	| For Adaptation Sets or Representations that contain a video component that conforms to ISO/IEC 13818-1, this URI is defined. The @value is the value as defined for VideoFramePackingType in ISO/IEC 23001-8 [4].

# Video Source Description in Role Element

Scheme may also be used with the Role descriptor. The following defines a set of URIs that may be used with the Role element:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:dash:stereoid:2011`	|	ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.6 |	If N views are available that can be combined into M valid stereo pairs, the Role@schemeIdURI equal to this identifier signals which views form a stereo pair and which one is the left view and which one is the right view of each stereo pair. The @value of the Role element contains a space-delimited list of view indicators ‘li‘ or ‘rj’ where i, j are non-negative decimal integers.
