---
layout: post
title: openBVE v1.5.3.4
description: "openBVE v1.5.3.4"
modified: 2018-06-10
tags: [welcome]
categories: [intro]
---

*Version 1.5.3.4*

### Significant Changes:

* New: Allow a delay value to be set for each power / brake notch in Train.dat
* New: Parser for the MSTS Shape (.s) format
* New: Support the MeshVertexColors template in .x files
* New: Basic Kiosk mode
* Change: Bump SharpCompress version
* Change: Use the RailDriver control names when configuring controls
* Change: The messages presented when passing a red signal whilst overspeed are now more consistant
* Change: Better error validation for the BrakeControl parameters in Train.dat
* Fix: Issue with BVE4 signals with no glow textures declared
* Fix: A disposed train could re-appear in the final block if the curve radius was < 300m
* Fix: Objects for disposed AI trains not hidden properly in some cases

### Content Specific Fixes:

* Hacks: The Midland Suburban line extracts it's objects into an incorrect place
* Hacks: Treat __(C)__ in a route comment as the copyright symbol
* Hacks: Attempt to detect usages of the BVE2 signal textures & provide an alternative