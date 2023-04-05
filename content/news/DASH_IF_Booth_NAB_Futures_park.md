# DASH-IF Booth at 2023 NAB Show's Futures Park 

-- April 5, 2023 

DASH IF announced today that we will be exhibiting at the 2023 NAB Show's Futures Park pavilion.  We will have a booth, W4111, where DASH IF member companies will be showcasing their research and developement projects.  

Please come by the booth and see what everyone is working on.  The schedule and description of demos is as follows:

* **Sunday, April 16th – 10:00am – 2:00pm - Intel Corporation**
   * Intel will show how AI-based video super-resolution on the latest generation of Intel® Xeon® Scalable processors can be used for real-time super-resolution up to 4Kp60 without needing a GPU accelerator.   This technology can open up new opportunities in super-resolution in live streaming and broadcasting, or on-demand super-resolution of long-tail content, resulting in lower production and distribution costs, and new revenue streams for older content.

* **Sunday, April 16th 2:00pm – 6:00pm - Unified Streaming**
   * Unified Streaming will be presenting on the topic of live media ingest and distributed encoder and packager synchronization following DASH-IF and MPEG-DASH part 9 

* **Monday, April 17th 9:00am – 1:30pm - VisualOn**
   * Remote production is coming to the next level. With the introduction of 5G, broadcasters can realize greater bandwidth, lower latency, and a defined quality of service. Meanwhile, deploying and maintaining high-quality video services can be frustrating and cumbersome. It requires significant testing and troubleshooting to discover what is causing playback issues before you can even start to debug and qualify devices and streams. <br>
Remote Lab is a mix of software and hardware solutions designed for remote teams to easily access physical devices. It is optimized for audio, video, and multimedia applications. Within an ultra-low latency environment, Remote Lab resolves the pain points of managing disparate devices, teams, and content. Streaming service providers can ensure a consistent quality of service standard across viewing devices. 

* **Monday, April 17th 1:30pm – 6:00pm - Brightcove**
   * Content Steering is a recent addition to the MPEG DASH standard, enabling dynamic routing of streaming content between different CDNs. Already supported by DASH.js and several other players, it dramatically simplifies the design of multi-CDN delivery systems. No custom client plugins, DNS redirects, or CMS integrations are needed. <br>
However, the deployment DASH Content Steering mechanism requires additional servers. Such servers must interact directly and frequently with streaming clients - at a TTL interval of about 100 seconds or less. The faster reaction is required, the higher the intensity of client-server exchanges. It implies a high volume of additional requests and raises questions about reliability, scalability, and operating costs.  <br>
In this presentation, we show the design of a CDN switching system addressing this challenge. Our solution reduces the function of the content steering server to a stateless operation driven by parameters embedded in the client-server exchange. Such design enables deployment by edge functions offered by many CDNs or edge platforms. This design is economical to deploy, scales well, achieves very low delay TTLs, and is suitable for a full spectrum of multi-CDN delivery optimizations. <br>
We show examples of load-balancing, failover, QOE/QOS-, and COGS-driven optimizations achieved with the proposed design.

* **Tuesday, April 18th 9:00am – 1:30pm - EZDRM**
  * EZDRM will be illustrating the versatility of its cloud-based security approach demonstrations or DRM protected WebRTC streaming and applications in Content Provenance and Authenticity (C2PA). <br>
The new EZDRM WebRTC-DRM solution enables true low-latency streaming applications without compromises on the use of studio-approved DRM security. A use case will be illustrated using a local camera capture, with low-latency transmission to a standard DASH.js player extended with the EZDRM WebRTC browser component. The distribution will be protected using the EZDRM cloud service and, using standard DRM license constraints, the player screen will be blocked from unauthorized capture. <br>
Extending the security envelope beyond media transmission, C2PA certifies the source and history of distributed media content. A companion demonstration, using image editing and verification, will show how EZDRM services enable the secure management of this provenance to protect media authors and revenue streams.

* **Tuesday, April 18th 1:30pm – 6:00pm - Synamedia/Eyevinn**
  * WebRTC is today’s de facto technologies to implement ultra-low-latency (glass-to-glass latency ranging from 0.5 to 2s) point-to-multipoint video delivery. Unfortunately, WebRTC is not compatible with DASH-based delivery systems, which are widely used to implement scalable on-demand and live streaming at regular latency (from 5 to 45s). This demo fills the gap by showing how WebRTC and regular DASH delivery can smoothly coexist into one pipeline to deliver tailored latency upon viewer’s needs. <br>
Three novel technologies are introduced in this demo: 1/ The integration of WebRTC signaling into a DASH manifest (following recommendations from the DASH-IF Exploration Group 2022 report) to enable seamless client-side transition from WebRTC to DASH delivery. 2 / The implementation of the WHEP protocol, which is currently discussed at IETF, for a standardized WebRTC client-server signaling. 3/ A server-side adaptive bit-rate WebRTC system that lets the WebRTC gateway switch from one profile to another for clients experiencing variable network performance. <br>
This demo is a joint work between dash.js for the client implementation, Eyevinn for the integration of WebRTC signaling in DASH manifest and the client-side WHEP endpoint, and Synamedia for the WebRTC adaptive gateway and the server-side WHEP endpoint.

* **Wednesday April 19th 9:00am – 2:00pm - castLabs**
  * Thanks to fast channel zapping, you can enjoy OTT content switching as fast as broadcast TV. Avoid buffer delay by pre-caching neighboring content including pre-fetching DRM licenses for a quick low-latency user experience. Our demo implements fast track and rendition switching. Every switch will empty the buffer and freshly reload content. All segment requests will be cache-busted so nothing should be loaded from cache. This allows for sub-second zapping, which can even achieve under 250 milliseconds (based on a viewer’s internet bandwidth).

We look forward to seeing everyone at NAB 2023. 
