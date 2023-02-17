---
menu:
  main:
    parent: "identifiers"
title: "Watermarking Vendors"
---

# Introduction

Within DASH-IF watermarking [guideline](https://dash-industry-forum.github.io/docs/IOP-Guidelines/DASH-IF-CTS-00XX-AB-Watermarking-0.9.1.pdf), a watermakring token is defined. This token contains some data that are specific to a watermarking technology vendor. it therefore carries a claim `wmvnd` that identifies this vendor as an unsigned integer with values between 0 and 255.

# Watermarking Vendors Identifiers

The following table documents registered watermarking identifiers. Values between 0 and 9 are reserved for standard use. Values between 245 and 255 are reserved for private use.

*Disclaimer: DASH-IF does not define any “approved” watermarking technology vendor. The table below only represents the submitted identifiers by 3rd parties to DASH-IF. The provided information is deemed to be correct at the date of submission, DASH-IF takes no responsibility if this is not correct or if this becomes obsolete.*

{{< csvTable "csv/watermarking.csv" >}}
