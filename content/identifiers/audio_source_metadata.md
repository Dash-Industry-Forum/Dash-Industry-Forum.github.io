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

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:dash:23003:3:audio_channel_configuration:2011`	| ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.4	| The URI `urn:mpeg:dash:23003:3:audio_channel_configuration:2011` is defined to indicate the channel configuration as defined by Table 68 (Channel Configurations, meaning of channelConfigurationIndex, mapping of channel elements to loudspeaker positions’) of ISO/IEC 23003-3. The @value is the value as defined  by Table 68 (Channel Configurations, meaning of channelConfigurationIndex, mapping of channel elements to loudspeaker positions’) of ISO/IEC 23003-3.
`tag:dolby.com,2014:dash:audio_channel_configuration:2011` |	n/a	| Dolby audio channel configuration information. The @value attribute shall contain a four digit hexadecimal representation of the 16 bit field that describes the channel assignment as defined by table E.5 in ETSI TS 102 366 [14] where left channel is MSB.For example, for a stream with L, C, R, Ls, Rs, LFE, the value shall be “F801” (hexadecimal equivalent of the binary value 1111 1000 0000 0001).

# Generic Audio Source Descriptors

The following defines a set of URIs that identify audio source descriptions to be used with the Essential Property and/or the Supplemental Property descriptor:

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:mpeg:mpegB:cicp:OutputChannelPosition`	| ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], clause 8.1 |	OutputChannelPosition specifies the association of loudspeaker positions to a given audio channel according to Table 7. Table 7 indicates the loudspeaker position in the 3D environment of the listener. In order to ease the understanding of loudspeaker positions Table 7 also contains loudspeaker positions according to IEC 62574, which are listed here for information to the interested reader.
`urn:mpeg:mpegB:cicp:ChannelConfiguration`	| ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], clause 8.2 |	ChannelConfiguration specifies the channel configuration. This defines the number of audio channels and their associated loudspeaker positions according to Table 8. The name, abbreviation, and general position of each loudspeaker can be deduced from Table 7 and Figure 9.
`urn:mpeg:mpegB:cicp:ProgramLoudness`	| ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], clause 8.3 |	ProgramLoudness indicates the overall loudness of the corresponding audio program. It should be measured in such a way, that if two pieces of content have their loudness normalized using the value of  rogramLoudness,  the resulting audio will have consistent loudness. Decoders evaluate this value and apply an appropriate level shift to audio to maintain a consistent loudness of output audio, matched with a user-given target loudness. The ProgramLoudness should be the overall loudness measured in LKFS according to Rec. ITU-R BS.1770.
`urn:mpeg:mpegB:cicp:AnchorLoudness`	| ISO/IEC 23001-8 \[[4](/identifiers/references#23001-8)\], clause 8.4	| AnchorLoudness indicates the loudness of the anchor elements of the corresponding audio signal (usually the dialog). The method of identifying the anchor elements is chosen by the content author and is out of scope for this part of ISO/IEC 23001. It should be chosen in such a way, that if two pieces of content have their loudness normalized using the values of anchorLoudness, the anchor elements of the resulting audio will have consistent loudness. The AnchorLoudness should be the loudness of the anchor content of the program, measured in LKFS according to Rec. ITU-R BS.1770.
