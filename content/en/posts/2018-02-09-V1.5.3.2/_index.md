---
layout: post
title: openBVE v1.5.3.2
description: "openBVE v1.5.3.2"
modified: 2018-03-15
tags: [welcome]
categories: [intro]
---

*Version 1.5.3.2*

### Significant Changes:

* Update de-DE translation (Thanks Quork)
* Update ca-ES translation (Thanks MarkRiera)
* Improved the DirectX object parser.
* New: Added the command **Route.InitialViewpoint** to control the camera view at the start of the sim.
* New: **Destination** variable for train animations & associated routefile command.
* Change: Made joystick input more robust under certain circumstances.
* Fix: Exterior objects were visible from the cab if the driver car was not set to 0.
* Fix: Issue with animated objects using multiple sounds.

### Content Specific Fixes:

* Hacks: Routefile specific fixes for the Sanbie routes.
* Hacks: Handle CSV objects using multiple columns.
* Hacks: Handle times declared in the _HH.MM.SS_ format.