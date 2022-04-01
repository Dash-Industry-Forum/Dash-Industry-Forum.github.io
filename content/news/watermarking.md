### DASH-IF announces Public Community Review and Public Special Session on Watermarking support

On March 23rd, 2022, DASH-IF published the DASH-IF IOP Watermarking specification is available [here (pdf)](https://dash-industry-forum.github.io/docs/DASH-IF-IOP_OTT-Watermarking.pdf) for community review. 

![Watermarking Architecture](img/Watermarking.png "image_tooltip")

This document is about so-called A/B watermarking techniques for ABR content where a series of A and B variants of segments are consumed by devices. It introduces an end-to-end architecture supporting service-side forensic watermarking when delivered on an OTT system. It defines:
  * a format for a token carrying a series of A/B decision unique for every device. This token is used at the edge for delivering the right variant.
  * Metadata and mechanisms for carrying this metadata from a transcoder to the edge. This is used for synchronizing the series on the same timeline for all devices
  * It supports any forensic watermarking technique, any encoder and any CDN. 

This is the result of the work in the Content Protection and Security task force in DASH-IF lead by [Laurent Piron](https://www.linkedin.com/in/laurentpiron/) from NAGRA and has been done in collaboration between watermarking technology providers (NAGRA, Synamedia, Irdeto, Verimatrix), CDN providers (Akamai, AWS) and other DASH-IF members. 

The community review is open until May 31st, 2022. Publication is expected by August 31, 2022. Comments may be submitted through the [github](https://github.com/Dash-Industry-Forum/Watermarking/issues).

In order to support the Community Review, DASH-IF will host a public special session that introduces the technology on April 13, 2022 at 6pm cest/9am pdt. If you are interested, please find the logistical details [here](https://github.com/Dash-Industry-Forum/Watermarking/wiki/Special-Session-Announcement).
