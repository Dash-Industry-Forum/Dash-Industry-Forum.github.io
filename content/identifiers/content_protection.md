---
menu:
  main:
    parent: "identifiers"
title: "Content Protection"
---

# Introduction

For the element **`ContentProtection`**, the `@schemeIdUri` attribute is used to identify a content protection scheme (for details see ISO/IEC 23009-1 \[[1](/identifiers/references#23009-1)\], section 5.8.4.1). This attribute can provide sufficient information, possibly in conjunction with the `@value` and/or extension attributes and elements (such as the DRM system(s), encryption algorithm(s), and key distribution scheme(s) employed) for enabling a client to determine whether or not it can possibly play the protected content.

For Representations based on ISO/IEC 14496-12 \[[6](/identifiers/references#14496-12)\], content protection schemes (or DRM systems) may be identified with **`ContentProtection`** elements. In this case, a self-assigned UUID URN, as defined in RFC 4122 [8], indicating the UUID specified in the SystemId field of the PSSH box is used. The usage of the `@value` attribute is defined by the protection scheme, however, according to DASH-IF IOP \[[3](/identifiers/references#dash264)\], it is recommended that the `@value` attribute is the name of the company system and client version. If used, this can help determine if the current DRM client can play the content. If used differently, the provider of the protection scheme is encouraged to document the alternative usage of the `@value` attribute.

The following sections collect the Generic Identifiers as well as Protection System Specific ones.

# Generic Identifiers

{{< csvTable "csv/content-protection-generic.csv" >}}


# Protection System Specific Identifiers

The identifiers in this table only provides the selected UUID code. For referencing the protection scheme in the **`ContentProtection`** descriptor, the URI `urn:uuid:<uuid>` may be used where `<uuid>` is to be replaced with the UUID in the first column of the table.

*Disclaimer: DASH-IF does not define any “approved” content protection schemes. The table below only represents the submitted schemes by 3rd parties to DASH-IF. None are required or recommended by IOP Implementation Guidelines. The provided information is deemed to be correct at the date of submission, DASH-IF takes no responsibility if this is not correct or if this becomes obsolete.*

{{< csvTable "csv/content-protection-system-specific.csv" >}}
