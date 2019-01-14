---
layout: post
title: openBVE v1.5.1.2
description: "openBVE v1.5.1.2"
modified: 2017-05-12
tags: [welcome]
categories: [intro]
---

*Version 1.5.1.2*

**Significant Changes:**

* New: BIG5 and Windows-1252 charsets added to those auto-detected.
* New: Updated ja-JA language file- Thanks __midnightexpress1981__
* Change: Improved charset detection process & fallback charset handling.
* Change: Fog placed at absolute zero is assumed to apply from before the start of the route, rather than interpolating in over the course of the first block.
* Fix: Trains missing a point sound in the Sound.cfg file broken.
* Fix: Bug in package creation under Mono only.
* Fix: Potential crash if holding down an arrow key to scroll the route list.
