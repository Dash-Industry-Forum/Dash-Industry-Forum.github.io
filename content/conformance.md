Available at https://conformance.dashif.org, the validator/conformance software validates DASH content (MPD and segments based on ISO-BMFF):

* The timing embedded in each representation is correct or not (segment index ‘sidx’, ‘tfdt’, …)
* Mandatory DASH parameters are properly encoded (SAP, fragment offsets,…).
* Cross-representation checks (Segment/subsegment alignment, bitstream switching).
* Whether there are missing segments.

The validation software was recently updated to allow validation against DASH IF, DVB, HbbTV and CMAF profiles. 
