### DASH-IF Publishes Forensic A/B Watermarking Specification and Submits it for ETSI Publication

#### Introduction.
In June 2023, DASH-IF published The DASH-IF A/B watermarking specification that is now available [here](https://dashif.org/guidelines/others/#dash-if-candidate-technical-specification-dash-if-forensic-a-b-watermarking).

#### Motivation
Over-The-Top (OTT) distribution has fundamentally offset the trust model by popularizing open devices. This evolution has motivated an appetite for watermarking solutions operating on the server side to avoid embarking security-sensitive logics in the consumers’ devices. Server-side A/B forensic watermarking has been around for several years but requires the collaboration of several stakeholders. Encoder, packager, CDN, watermarking vendors have to work hand in hand to successfully deploy such a solution. Providing a common architecture, ensuring that integration is done once and then deployment gets simplified, is therefore key to nurture widespread adoption of such security solutions.

#### Summary
Forensic watermarking is a security technology that modifies media content in a robust and imperceptible way to encode a unique identifier, such as a session ID. The embedded watermark is designed to survive subsequent processing of the media content and provides means to trace where a piece of media content, that has been redistributed without authorization, is coming from. In other words, watermarking is used to forensically track the origin of content leakage. Such security technologies have been historically used in post-production environments but are now increasingly used in D2C markets, e.g., Premium VOD and Live sports, to deter piracy.

Server-side A/B watermarking for OTT is an end-to-end delivery architecture that is characterized by the fact that all security-sensitive watermarking operations are performed in the network, out of the vulnerable realm of open devices. This solution requires the collaboration of several stakeholders in the delivery chain as depicted in the figure below.

<a href="" target="_blank" rel="noopener noreferrer"><img height="300px" src="https://github.com/Dash-Industry-Forum/Dash-Industry-Forum.github.io/assets/2828689/5fad09f1-3a43-4991-bbc6-5bea4b10c5ff" alt="https://dashif.org/guidelines/others/#dash-if-candidate-technical-specification-dash-if-forensic-ab-watermarking" /></a>

On the one hand, the transcoder embarks a watermarking component, such as the Watermark Pre Processor (WMP) defined in the [UHD Forum specification](https://ultrahdforum.org/wp-content/uploads/watermarking-API-for-encoder-integration.1.0.1.pdf), to generate the A and B Variants for each representation of the transcoded ABR video streams fed to the Packager. As a result, the packager/origin server can deliver either the A Variant or the B Variant of any segment requested by the CDN. On the other hand, the client is making requests for ABR segments together with a watermark token that contains a unique identifier.The CDN edge, when receiving the request, will:

1. derives a watermark bit position to look for in the unique identifier, typically based on the filename of the ABR segment;
2. lookup the value of the bit in the identifier present in the token at the watermark bit position;
3. delivers either the A or the B Variant of the requested segment, possibly with an upstream request to the origin, based on the binary value obtained in the previous step.

Such a mechanism preserves the caching capabilities of the CDN even if those are hampered due to the need to deliver both A and B Variants.This generic blueprint does not make any assumption on the ABR technology being used and can be applied for both HLS and DASH distribution.

In practice, the deployment of A/B watermarking requires several integration points, either explicit or implicit. For instance, the edge logic that derives a watermark bit position routinely involves parsing the segment filename to extract a numeral element (time, counter, etc) and quantizing it. This requires specific adaptations to cope with ad-hoc naming conventions of different packager vendors. 

#### Work in DASH-IF
The Content Protection and Security Task Force of DASH-IF has been working for the last 4 years on standardizing several interfaces of the video delivery pipeline to facilitate the deployment of A/B watermarking systems. This working group gathers world-renowned experts from watermarking technology vendors, CDN providers, and packager suppliers.

A salient aspect of DASH-IF A/B watermarking Specification is to delegate the watermark bit position assignment logic to the WMP and to cascade this information throughout the delivery architecture down to the edge of the CDN thanks to a dedicated auxiliary metadata channel (refered as `WMPaceInfo`). As a result, the system no longer has any dependency on any file naming conventions. The packager is however required to respect some rules for its packetization process to propagate consistent metadata.

Besides this fundamental principle, DASH-IF specification also defines:

- several transport mechanisms to convey the auxiliary metadata `WMPaceInfo` at different steps of the content delivery pipeline;
- a CBOR encoding of the auxiliary metadata, including as a monolithic sidecar file for VOD content;
- a standardized way of signaling incoming Variants to the Packager, including one compliant with the DASH-IF [Ingest Protocol]( https://dashif.org/guidelines/others/#dash-if-technical-specification-live-media-ingest);
- the format of a standardized CBOR-encoded watermark token, that either comprises a unique watermark identifier (so called direct mode) or parameters to derive it (so called indirect mode);
- a standardized sequencing logic to be enforced at the edge of the CDN.

On top of standardizing all these interfaces, DASH-IF specification also enables additional application use cases that were not readily achievable before. For instance, it grants A/B watermarking support for byte-range ABR content. It also natively supports synchronized A/B sequencing for joint HLS and DASH delivery with different segment durations.

#### Implementations
[DASH.js](https://dashif.org/tools/dashjs/) has to retrieve a watermarking token and then provide it with every request to the CDN. If watermarking is enabled for the content that is being consumed, then the absence of the token in the request is an error case.

#### ETSI publication
Under the PAS (Publicly Available Specification) agreement with ETSI, this specification has been submitted and has been assigned the number TS 104 002. It is expected that the specification is available [here](https://www.etsi.org/deliver/etsi_ts/104000_104099/104002/01.01.01_60/) by the end of August 2023.

#### Impacts for the industry
For NAGRA
>Pirates will seek out vulnerable content irrespective of its type or source. NexGuard Streaming widely deployed for many years for VoD and live use cases, is happy to provide a DASH-IF compliant version, for either video watermark and/or audio watermark. It has already been tested with several global CDN services.

For Synamedia
>Synamedia is thrilled that active collaboration between industry peers has eventually led to the emergence of a common A/B watermarking blueprint. This specification removes several friction points and can only help accelerate the adoption of watermarking across Live and VOD OTT services. We look forward to deploying our unique ContentArmor solution in our customers’ video services at a faster pace.

For Irdeto
>At Irdeto, we are committed to supporting standards that foster an open, thriving, and secure streaming ecosystem. By establishing a common framework and unlocking the proprietary solutions in today’s marketplace, the DASH-IF A/B watermarking wpecification empowers video streaming players with a wider choice in their watermarking solutions while at the same time streamlining the implementation process. The collaborative effort of our partners and competitors in publishing the specification is a significant step forward and highlights the industry's commitment to tackling piracy collectively. We keenly look forward to deploying Irdeto TraceMark forensic watermarking in our customers' workflows and leveraging this specification to its full potential.

#### References
The DASH-IF A/B watermarking specification is published [here](https://dashif.org/guidelines/others/#dash-if-candidate-technical-specification-dash-if-forensic-a-b-watermarking).
