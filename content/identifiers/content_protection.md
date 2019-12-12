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

{{< csvTable "csv/content-protection-generic.csv" >}}


# Protection System-Specific Identifiers

The Identifier in the below table only provides the selected UUID code.
For referencing the DRM system in the **ContentProtection** descriptor, the
URI `urn:uuid:<uuid>` may be used where `<uuid>` is to be replaced with the
UUID in the first column below.

*Note: DASH-IF does not define any “approved” content protection schemes.
The table below only represents the submitted schemes by 3rd parties to DASH-IF.
None are required or recommended by DASH-AVC/264 Implementation Guidelines.*

{{< csvTable "csv/content-protection-system-specific.csv" >}}
