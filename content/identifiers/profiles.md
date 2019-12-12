---
menu:
  main:
    parent: "identifiers"
title: "Profiles"
---

# General

MPEG DASH defines formats for MPDs and segments. In addition MPEG provides the
ability to further restrict the applied formats by the definition of Profiles
as defined on section 8 of ISO/IEC 23009-1 [1]. Profiles of DASH are defined
to enable interoperability and the signaling of the use of features. Profiles
are signaled in the @profiles parameter which may be present on different
levels of the MPD.

Such a profile can also be understood as permission for DASH clients that
implement the features required by the profile to process the Media
Presentation (MPD document and Segments).

Furthermore, ISO/IEC 23009-1 permits external organizations or individuals to
define restrictions, permissions and extensions by using this mechanism. Such
external definitions are called Interoperability Points. An interoperability
point may be signalled in the @profiles parameter once a URI is defined. The
owner of the URI is responsible to provide sufficient semantics on the
restrictions and permission of this interoperability point.

DASH-IF further differentiates Interoperability Points and Extensions:

  * Interoperability Points provide a basic collection of tools and features
    to ensure that content/service providers and client vendors can rely to
    support a sufficiently good audio-visual experience.
  * Extensions enable content/service providers and client vendors to enhance
    the audio-visual experience provided by an Interoperability Point in a
    conforming manner.

The only difference between Interoperability Points and Extensions is that
Interoperability Points define a full audio-visual experience and Extensions
enhance the audio-visual experience in typically only one dimension.

The following sections collect the known Profiles, Interoperability Points
and Extensions.

# Profiles
{{< csvTable "csv/profiles-profiles.csv" >}}

# Interoperability points
{{< csvTable "csv/profiles-interoperability-points.csv" >}}

# Extensions
{{< csvTable "csv/profiles-extensions.csv" >}}

