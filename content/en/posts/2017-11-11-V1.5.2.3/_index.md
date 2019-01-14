---
layout: post
title: openBVE v1.5.2.3
description: "openBVE v1.5.2.3"
modified: 2017-11-11
tags: [welcome]
categories: [intro]
---

*Version 1.5.2.3*

### Significant Changes:

* New: Handle _BVE1200000_ and _BVE1210000_ format train.dat files.
* New: Add Uchibo V8 objects to the compatibility lists.
* Fix: Handle a case of a malformed MeshMaterialList in the X parser.
* Fix: Issue with RailCycles under certain circumstances.
* Hacks: Handle malformed ATS/ ATC declarations better.
* Hacks: Remove obviously wrong additional closing brackets in the RW parser (Fixes various stuff)
* Hacks: Fix an issue where Background #0 is not used, and the route does not start at position zero.
* Hacks: Route specific fix for Jundiai-Francisco Morato
* Hacks: Route specific fix for Linie S3 (FVE)

### Fixed Errata:

* When using a double-sided wall / dyke, this would be omitted if either the left or the right object was not loaded.  
https://github.com/leezer3/OpenBVE/wiki/Errata#behavior-of-wall--dike-when-set-to-both-sides-with-a-missing-object-present
* It was possible to use the __.Rail__ and __.RailEnd__ commands with a RailIndex of zero. 
https://github.com/leezer3/OpenBVE/wiki/Errata#rail-and-railend-commands-with-an-index-of-zero

