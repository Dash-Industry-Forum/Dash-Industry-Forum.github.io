---
menu:
  main:
    parent: "identifiers"
title: "Functionality"
---

# Functionality

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`https://dashif.org/guidelines/trickmode` |	DASH-IF IOP v3.2, clause 3.2.9	| Defines a trick mode Adaptation Set. If an Adaptation Set in annotated with the EssentialProperty descriptor with URI “https://dashif.org/guidelines/trickmode” then the DASH client shall not select any of the contained Representations for regular playout.
`https://dashif.org/guidelines/AdaptationSetSwitching` |	DASH-IF IOP v3.2, clause 3.8	| Defines signaling that switching from one Adaptation Set to another Adaptation Set may be possible in a seamless manner from a content and timeline perspective.
`urn:3GPP:dash:3dVideoDisplayInformation:2013` |	3GPP TS 26.247, clause C.5 |	The 3D Video Display Information description scheme may only be signalled in SupplementalProperty element with SupplementalProperty@schemeIdUri urn:3GPP:dash:3dVideoDisplayInformation:2013. When present the 3D Video Display Information description scheme shall be present on the Adaptation Set level.
`urn:dvb:dash:fontdownload:2014` |	ETSI TS 103 285, clause 7.2.1 |	A descriptor is signalling a downloadable font in accordance with the present document when it has the @schemeIdUri attribute set to “urn:dvb:dash:fontdownload:2014” and the @value attribute set to 1.
`urn:dvb:dash:fallback_adaptation_set:2014`	 | ETSI TS 103 285 |	If the audio codec used for main service operation does not provide sufficient capability to scale down bit rates low enough within an Adaptation Set, an additional audio Adaptation Set should be provided within the DASH presentation. Adaptation sets with the purpose of providing media streams with low bit rates for fallback operation shall be indicated with an additional Supplemental Property Descriptor.
`urn:dvb:dash:period_continuity:2014` |	ETSI TS 103 285, clause 10.5.2.3 |	Content providers may explicitly signal that Adaptation Sets across Periods are period-continuous.
`urn:3GPP:dash:3dVideoDisparityRange:2013` |	ETSI TS 26.247, Annex C.4 |	The 3D Video Disparity Range description scheme may only be signalled in SupplementalProperty element with SupplementalProperty@schemeIdUri set to urn:3GPP:dash:3dVideoDisparityRange:2013. When present the 3D Video Disparity Range description scheme shall be on the Adaptation Set level.
