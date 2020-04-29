

Host organization: DASH-IF (https://dashif.org/)

Coordinator Contacts: Christian Timmerer, Chair of DASH-IF Academic Track (christian.timmerer@itec.aau.at) Ali C. Begen (ali.begen@networked.media)

# DASH-IF Grand Challenge: Dynamic Adaptive Streaming over HTTP


## Challenge Description

Real-time entertainment services such as streaming video and audio are currently accounting for more than 70% of the Internet traffic during peak hours. Interestingly, these services are all delivered over-the-top (OTT) of the existing networking infrastructure using the Hypertext Transfer Protocol (HTTP). The MPEG Dynamic Adaptive Streaming over HTTP (DASH) standard enables smooth multimedia streaming towards heterogeneous devices.

The MPEG DASH standard provides an interoperable representation format but deliberately does not define the adaptation behavior for the client implementations, which is left open for research and industry competition. In a typical deployment, the encoding itself is optimized for the respective delivery channels but – as the content is delivered over the top without any guarantees – various issues during the streaming (e.g., high startup delay, stalls/re-buffering, high switching frequency, inefficient network utilization, unfairness to competing network traffic, etc.) may limit the Quality of Experience (QoE) as perceived by the viewers.

The aim of this grand challenge is to solicit contributions addressing end-to-end delivery aspects that will help improve the QoE while optimally using the network resources at an acceptable cost. Such aspects include, but are not limited to, content preparation for adaptive streaming, delivery in the Internet and streaming client implementations.

A special focus of 2017’s grand challenge will be related to virtual reality applications and services including 360 degree videos.

 

## Dataset/APIs/Library URL

* Software: https://dashif.org/software/
* Dataset: http://testassets.dashif.org/

## Evaluation Criteria

* Evaluation of Streaming Performance

    * Each proposal shall be evaluated according to a predefined and well-established evaluation setup as documented in the current literature. This could be done using network emulation (based on synthetic or real-world network traces) or in real-world environments. The evaluation can be done within the lab and/or crowdsourcing using objective and subjective metrics.

    * The streaming performance shall be evaluated using the following metrics: initial/start-up delay, buffer underruns also known as stalls, quality switches, media throughput, network utilization, network costs, and objective (e.g., PSNR, SSIM, …) and subjective (MOS) quality scores.

* Evaluation Methodology

    * Proposals for new evaluation methodologies to evaluate the streaming performance should contain a detailed description including dataset and source code of the methodology. This could include any new objective and subjective evaluation method in the broad area of adaptive media streaming over HTTP.

* Disruptive Technology

    * Proposals for new, disruptive ways of video streaming are welcome along with proposals for content preparation, streaming, consumption, and evaluation methodologies. Such content should be made freely available for research and standardization purposes.

 

## Submission Guidelines

Submissions of DASH implementations or evaluation methodologies should provide a detailed technical description in the form of a short paper as well as material to validate the performance of the submission (e.g., dataset and binary executable to reconstruct and measure performance). Submissions for additional content should be made along with either a streaming algorithm or an evaluation methodology.

 

## Important dates
* Submission deadline: May 31, 2017 (via email to organizers christian.timmerer AT itec.aau.at and ali.begen AT networked.media)
* Notification: June 14, 2017

 

## Prize Information

A financial prize will be awarded to two winners selected by a judging committee. The winner will be awarded  €750 and the runner-up €250. If, in the opinion of the committee, the submissions entered are not of sufficient quality, then no awards will be given and no winner will be declared.

## Questions and Requests

If you have any questions or requests, or need further clarifications, please contact the organizers.
