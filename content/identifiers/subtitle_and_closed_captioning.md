---
menu:
  main:
    parent: "identifiers"
title: "Subtitle and Closed Captioning"
---

# Introduction

Beyond regular audio and video support, TV programs typically also require support for auxiliary components such as subtitles and closed captioning, often due to regulatory requirements. DASH-IF IOP provides tools to addresses these requirements. We collect them here.

# Identifiers

Signalling for the closed caption services is provided by including **Accessibility** descriptors. The **Accessibility**  descriptor is included for the **AdaptationSet** and all included **Representations** shall provide  equivalent captions. The **@value** attribute of each descriptor can be either list of languages or a complete map of services (or CC channels, in CEA-608 terminology).

Identifier                        |Reference                           |Abstract
----------------------------------|------------------------------------|----------------
`urn:scte:dash:cc:cea-608:2015` |	DASH-IF IOP v3.3, Section 6.4.3.3 |	Used for signaling of CEA-608 caption services. The Accessibility descriptor shall be provided with @schemeIdURI set to urn:scte:dash:cc:cea-608:2015, and an optional @value attribute to describe the captions. If the @value attribute is not present, the Representation contains a CEA-608 based closed captioning service. The options for the @value attribute is further described in the reference.
