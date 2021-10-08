---
menu:
  main:
    parent: "tools"
title: "Sample Software"
weight: 4
---

# Sample Software

## Sample Segmenters and Packagers

* Shaka Packager is a media packaging tool and development framework for VOD and Live adaptive streaming media, supporting Common Encryption for Widevine and other DRM Systems. More details at https://github.com/google/shaka-packager .
* MP4BOX – A sample DASH segmenter is provided in MP4Box as part of GPAC, available at https://gpac.io. The segmenter is capable of producing media files conformant to various DASH profiles, along with their corresponding MPD. The software does not encode or transcode media, and therefore requires alignment of stream access points (e.g., identical GOP structure) among the different representations.
* Rebaca  MPEG DASH Segmenter – a complete C++ server based Segmenter capable of generating mp4 file segments conformant to the DASH profiles namely ( urn:mpeg:dash:profile:isoff-on-demand:2011, urn:mpeg:dash:profile:isoff-main:2011 ) along with their corresponding MPDs. See the website for details of the features and validations offered by this segmenter. In addition to MPEG-DASH, Rebaca Technologies has deep domain expertise in Video delivery and consumption with expertise in different Adaptive bit streaming technologies including HLS, Silverlight smooth streaming, RTSP/RTP, adaptive video players for mobile/tablets. For more information on the company, please visit https://www.rebaca.com.
* castLabs Dash Encrypt Packager -a DASH encryption tool published as another open source project: https://castlabs.com/products/dash-encrypt/. The code repository is available on Github: https://github.com/castlabs/dashencrypt. It supports DASH segmenting for the on-demand profile as well as CENC encryption (but doesn’t create PSSH boxes, we have that available on request for all DRMs we support). We support signaling of all multichannel audio formats (AAC, Dolby, DTS) as added feature. The technical basis is the mp4parser project is located at: https://github.com/sannies/mp4parser
* Bento4 – an open-source, multi-platform, C++ class library and tools designed to read and write ISO-MP4 files. It includes a range of options for creating MPEG-DASH presentations, including isoff-live, isoff-ondemand and hbbtv profiles, and comes with widely tested support for encryption and DRM (Marlin, PlayReady, Widevine and others). It is compatible with many DASH-capable clients, including dash.js. More details at https://www.bento4.com.

## Sample players

* dash.js, an open source and free MSE/EME player that also functions as the reference client for DASH IF. The reference player is available at https://reference.dashif.org/dash.js/, additional samples at https://reference.dashif.org/dash.js/latest/samples/index.html and the source code and wiki from the Github repository at https://github.com/Dash-Industry-Forum/dash.js.
* Shaka player, an open source player provided by Google https://shaka-player-demo.appspot.com/
* Bitmovin player - a commercial player with a public test suite at https://bitmovin.com/demos/stream-test
* GPAC – a DASH client is provided under both an open-source LGPL license (available at https://gpac.io.) and a commercial license (available at https://www.gpac-licensing.com).
    The client is capable of loading and playing a large subset of the DASH specification, supporting both MPEG-2 TS and ISOBMFF profiles. The DASH access engine and the HTTP downloaders are implemented as part of libgpac, the core library of GPAC, and can be used without any dependency to the media player. The GPAC client, usually called Osmo4 or MP4Client, supports the following features for DASH:
    * Playback from local hard drive or HTTP servers;
    * Playback of Live, Main, and Simple profiles with bitrate adaptation;
    * Support for non bitstreamSwitching Representations using separated initialization segments;
    * Support for @group attribute, and automatic (de)selection of sets inside a group. The client supports language-based selection of adaptation sets.
    * Quality can be switched manually (using ctrl+h and ctrl+l shortcuts), can be set to switch every N segments or can be decided by the internal rate-adaptation controller.
    * Documentation for the GPAC DASH player is available on GPAC Web site at https://gpac.io/player/features/dash/
 
## Sample DASH libraries

* libdash – Please find the announcement of our new version of libdash at [Bitmovin](https://bitmovin.com) including [slides](https://de.slideshare.net/schellkenig/libdash-20). libdash implements the full MPEG-DASH standard according to ISO/IEC 23009-1:2012. It provides an object orient (OO) interface to the MPEG-DASH standard – XML-based MPD and media elements (segments) – and provides external interfaces for:
    * the DASH streaming control, i.e., the adaptation logic (download scheduler and probably other terms exist) which determines which segment to download next based on a given client context;
    * the segment parser, i.e. to handle downloaded segments (ISO base media file format, MPEG-2 transport stream) and encapsulated coding formats; and
    * the media player which is finally responsible to decode and render the media presentation.
    * libdash provides means to access the information within the MPD and to schedule the download of the media elements (segments) described by the MPD. libdash deliberately does not provide implementations for the above mentioned modules (DASH streaming control, segment parser, and media player) as these may vary across different use cases and deployment scenarios and also may go beyond what is normatively defined within ISO/IEC 23009-1:2012 (e.g., include codecs). The motivation behind this approach is to provide developers a tool which fully supports the standard and enables the integration thereof within a media ecosystem. We believe its interfaces are well designed in order to allow for a broad adoption of various use cases.
