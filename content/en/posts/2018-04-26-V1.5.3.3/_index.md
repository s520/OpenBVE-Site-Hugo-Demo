---
layout: post
title: openBVE v1.5.3.3
description: "openBVE v1.5.3.3"
modified: 2018-04-26
tags: [welcome]
categories: [intro]
---

*Version 1.5.3.3*

### Significant Changes:

* Update pl-PL translation. (Thanks piotrulos)
* New: DDS texture loader plugin.
* New: Object Viewer now uses the texture loader plugins.
* New: Added the EbHandleBehaviour parameter to Train.dat & Train Editor.
* Change: Train.dat now contains the openBVE version in it's header.
* Change: Tightened up the number parsing in certain cases. 
* Change: Improvements to RailDriver handling.
* Change: Handle two more variants of X formatted objects.
* Fix: Glitches with AI train exteriors.
* Fix: Erroneous error message in RW route parser.
* Fix: The brake delay value was incorrectly using that for power when an ATS plugin applied the brakes.