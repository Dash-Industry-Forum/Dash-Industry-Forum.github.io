---
menu:
  main:
    parent: "identifiers"
title: "Content Protection"
---

# Introduction

For the element ContentProtection the @schemeIdUri attribute is used to
identify a content protection scheme (for details see ISO/IEC 23009-1
\[[1](/identifiers/references#23009-1)\], section 5.8.4.1). This attribute provide
sufficient information, possibly in conjunction with the @value and/or extension
attributes and elements, such as the DRM system(s), encryption algorithm(s),
and key distribution scheme(s) employed, to enable a client to determine whether
it can possibly play the protected content.

For Representations based on ISO/IEC 14496-12 \[[6](/identifiers/references#14496-12)\]
a content protection scheme using the Protection System Specific Header Box
defined in ISO/IEC 23001-7 may be identified in the ContentProtection element.
In this case a self-assigned UUID URN as defined in RFC 4122
\[[8](/identifiers/references#rfc4122)\] indicating the UUID specified in the
SystemId field of the Protection System Specific Header Box is used. The usage
of the `@value` field is defined by the protection system. However, according to
DASH-AVC/264 \[[3](/identifiers/references#dash264)\], it is recommended that the `@value`
field is the name of the company system and client version. If used, this can help
the client to determine if the current DRM client can play the content. If used
differently, the providers of the DRM system are encouraged to document the
alternative usage of the `@value` field.

The following sections collect the Generic Identifiers as well as Protection
System Specific ones.

# Generic Identifiers

Identifier |Reference |Abstract
-----------|----------|---------
`urn:mpeg:dash:mp4protection:2011` | ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.2 | protection schemes identified by a the Scheme Type within the Scheme Type Box of the Protection Scheme Information Box of ISO/IEC14496-12 \[[6](/identifiers/references#14496-12)\]. In this scheme, the value of the @value attribute is the 4CC contained in the Scheme Type Box, suitably escaped according to RFC 2141 and may include the version number. The 4CC and the version number, if present, is separated by a “:”. The version number is encoded as up to 8 hexadecimal digits, where the leading ‘0’s may be omitted.
`urn:mpeg:dash:13818:1:CA_descriptor:2011` | ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.5.2 | Conditional Access System used for ISO/IEC 13818-1 \[[7](/identifiers/references#mpeg2-ts)\] (MPEG-2 Transport Stream). In this scheme, the value of the @value attribute is the 4-digit lower-case hexadecimal Representation of the 16-bit CA_system_ID from the CA_descriptor as defined in ISO/IEC 13818-1.

# Protection System-Specific Identifiers

The Identifier in the below table only provides the selected UUID code.
For referencing the DRM system in the **ContentProtection** descriptor, the
URI `urn:uuid:<uuid>` may be used where `<uuid>` is to be replaced with the
UUID in the first column below.

*Note: DASH-IF does not define any “approved” content protection schemes.
The table below only represents the submitted schemes by 3rd parties to DASH-IF.
None are required or recommended by DASH-AVC/264 Implementation Guidelines.*

UUID |Reference |Abstract
-----|----------|---------
`5E629AF5-38DA-4063-8977-97FFBD9902D4` | Marlin Adaptive Streaming Specification – Simple Profile, V1.0 \[[9](/identifiers/references#marlin)\] | Marlin, see the spec for the details of what can be further specified within the **ContentProtection** element.
`adb41c24-2dbf-4a6d-958b-4457c0d27b95` | Nagra MediaAccess PRM 3.0 , documentation available under NDA \[[12](/identifiers/references#nagra)\] | Identifies Nagra MediaAccess PRM 3.0 and above
`A68129D3-575B-4F1A-9CBA-3223846CF7C3` | Cisco/NDS VideoGuard Everywhere DRM ™. Documentation is available under NDA \[[13](/identifiers/references#videoguard)\] | Cisco/NDS VideoGuard Everywhere DRM identification. For more information on VideoGuard Everywhere DRM go here
`9a04f079-9840-4286-ab92-e65be0885f95` | MPEG DASH Content Protection using Microsoft PlayReady \[[10](/identifiers/references#playready)\], section 2.2.1 | Microsoft PlayReady
`9a27dd82-fde2-4725-8cbc-4234aa06ec09` | Verimatrix VCAS™ for DASH \[[11](/identifiers/references#verimatrix)\] | Verimatrix ViewRight Web / DASH @value= “Verimatrix VCAS for DASH, ViewRightWeb VV.vv” (VV.vv will be the version number)This is the name of the company system and client version as recommended in DASH-AVC/264. If used, this can help the client to determine if the current DRM client can play the content.
`F239E769-EFA3-4850-9C16-A903C6932EFB` | Please contact Adobe for more information | Adobe Primetime DRM, version 4
`1f83e1e8-6ee9-4f0d-ba2f-5ec4e3ed1a66` | No separate and public specification is available. The UUID is a version 4 UUID as per RFC 4122 \[[8](/identifiers/references#rfc4122)\]. The UUID will be made available in SecureMedia documentation shared with a partner or customer of SecureMedia. Please refer to http://www.securemedia.com/. | SecureMedia, ArrisThe UUID of @schemeIdURIis a version 4 UUID as per RFC 4122.@valueshall be as follows: “Arris SecureMedia version XXXXXXX”XXXXXX will be specified in documentation associated with a particular version of the product. The documentation will be shared with a partner or customer of SecureMedia. Please refer to http://www.securemedia.com/.
`644FE7B5-260F-4FAD-949A-0762FFB054B4` | A draft version of the CMLA Technical Specification which is in process with involved adopters is not published. It’s planned to be chapter 18 of our CMLA Technical Specification upon completion and approval.Revisions of the CMLA Technical Specification become public upon CMLA approval.UUID will correlate to various related XML schema and PSSH components as well as elements of the content protection element relating to CMLA DASH mapping. | CMLA (OMA DRM), for details see here http://www.cm-la.com.
`6a99532d-869f-5922-9a91-113ab7b1e2f3` | More information is available at http://www.mobitv.com/core-technologies/digital-rights-management/. | MobiTV DRM: A generic identifier for any version of MobiDRM (MobiTV DRM). The version is signaled in the pssh box.
`35BF197B-530E-42D7-8B65-1B4BF415070F` | Please contact DivX for specifications. | DivX DRM Series 5
`B4413586-C58C-FFB0-94A5-D4896C1AF6C3` | VODRM documentation is available under NDA. Please contact Viaccess-Orca for more information. | This UUID identifies the Viaccess-Orca DRM (VODRM).
`edef8ba9-79d6-4ace-a3c8-27dcd51d21ed` | For more info: http://www.widevine.com | Widevine Content Protection for MPEG DASH.
`80a6be7e-1448-4c37-9e70-d5aebe04c8d2` | Irdeto Protection documentation available under NDA. For more info: http://www.irdeto.com | Irdeto Content Protection for DASH
`dcf4e3e3-62f1-5818-7ba6-0a6fe33ff3dd` | Documentation is available under NDA. For more info: http://www.digicaps.com/en/ | DigiCAP SmartXess for DASH @value “CA/DRM_NAME VERSION” (CA 1.0, DRM+ 2.0)
`45d481cb-8fe0-49c0-ada9-ab2d2455b2f2` | For more information and specification, please contact CoreTurst. The contact detail is mktall@coretrust.com | CoreCrypt : CoreTrust Content Protection for MPEG-DASH
`616C7469-6361-7374-2D50-726F74656374` | Please contact Alticast for more information, galtiprotect_drm@alticast.com. | Alticast altiProtect, more information available at http://www.alticast.com/
`45d481cb-8fe0-49c0-ada9-ab2d2455b2f2` | For more information and specification, please contact CoreTurst. The contact detail is mktall@coretrust.com | CoreCrypt : CoreTrust Content Protection for MPEG-DASH
`992c46e6-c437-4899-b6a0-50fa91ad0e39` | This UUID is a protection system specific identifier for SecureMedia SteelKnot. No separate and public specification is available. The UUID is as per RFC 4122 available at http://www.ietf.org/rfc/rfc4122.txt . The UUID will be made available in SecureMedia SteelKnot documentation shared with a partner or customer of SecureMedia SteelKnot. Please refer to http://www.securemedia.com/ | The UUID of the attribute, @schemeIDURI is as per RFC 4122. The attribute, @value shall be as follows: “Arris SecureMedia SteelKnot version XXXXXXX”. The exact length and syntax of the placeholder denoted by XXXXXXX will be specified in documentation associated with a particular version of the product. The documentation will be shared with a partner or customer of SecureMedia SteelKnot. Please refer to http://www.securemedia.com/ .
`1077efec-c0b2-4d02-ace3-3c1e52e2fb4b` | https://w3c.github.io/encrypted-media/format-registry/initdata/cenc.html | This identifier is to be used as the SystemID for the Common PSSH box format defined by the W3C (https://w3c.github.io/encrypted-media/format-registry/initdata/cenc.html), as a preferred alternative to DRM system specific PSSH box formats. This identifier may be used in PSSH boxes and MPEG-DASH ContentProtection elements.
`e2719d58-a985-b3c9-781a-b030af78d30e` | DASH-IF Interoperability Points v3.4: https://dashif.org/guidelines/ | This identifier is meant to be used to signal availability of Clear Key content key delivery. Its use is mutually exclusive with the use of any other DRM System SystemIDs, including the Common PSSH Box Format System ID. This GUID may only be present in an MPEG-DASH ContentProtection element, and never in the media content PSSH Box.
`94CE86FB-07FF-4F43-ADB8-93D2FA968CA2` | Content Protection System Identifier for Apple FairPlay Streaming | System ID to identify FairPlay Streaming
`279fe473-512c-48fe-ade8-d176fee6b40f` | Arris Titanium content protection. Documentation available under NDA. Contact multitrust.info@arris.com for further information. | Arris Titanium. The UUID of @schemeiduri is a version 4 UUID as per RFC 4122. @value will be specified in documentation related to a specific version of the product. Contact multitrust.info@arris.com for further information.
`aa11967f-cc01-4a4a-8e99-c5d3dddfea2d` | Unitend Technologies Inc. applies this UUID to identify the Unitend DRM (UDRM). For further information, contact y.ren@unitend.com 	This UUID identifies the Unitend-DRM (UDRM). More information available at http://www.unitend.com/
