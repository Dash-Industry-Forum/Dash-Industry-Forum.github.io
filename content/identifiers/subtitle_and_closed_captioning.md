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

{{< csvTable "csv/subtitle-and-closed-captioning-identifiers.csv" >}}
