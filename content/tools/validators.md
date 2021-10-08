# Validators

## DASH-IF Validator

Available at https://conformance.dashif.org/, the validator/conformance software validates DASH content (MPD and segments based on ISO-BMFF):

* The timing embedded in each representation is correct or not (segment index ‘sidx’, ‘tfdt’, …)
* Mandatory DASH parameters are properly encoded (SAP, fragment offsets,…).
* Cross-representation checks (Segment/subsegment alignment, bitstream switching).
* Whether there are missing segments.

## MANIFEST Validators
* ITEC– available at https://www-itec.uni-klu.ac.at/dash/?page_id=605, the validator offers the possibility to validate DASH manifest files. This can either be done via file upload, URL or direct input of the description. Furthermore, the validator checks not only schema compliance but also semantic compliance of a description as specified in the corresponding parts of the standard.
* https://github.com/Eyevinn/dash-validator-js – a JavaScript-based manifest validator from the Eyevinn Technology Open Source Software Center

 

## CPIX document validator
Available at https://cpix-validator.azurewebsites.net/, this tool validates the conformance of XML documents to the Content Protection Information Exchange (CPIX) specification.
