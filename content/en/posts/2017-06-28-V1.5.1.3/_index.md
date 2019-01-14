---
layout: post
title: openBVE v1.5.1.3
description: "openBVE v1.5.1.3"
modified: 2017-06-28
tags: [welcome]
categories: [intro]
---

*Version 1.5.1.3*

__Behavioural Changes:__

* New: Joystick buttons limit increased to 64, plus various other changes from openTK backend.
* Fix: Holding down a door button no-longer causes the doors to bounce between open & closed.

__Significant Changes:__

* New: XML based markers ( <http://openbve-project.net/documentation/HTML/route_marker.html> ), allowing for text messages and basic time dependent scripting.
* New: When a door button is pressed, *VirtualKeys.DoorsLeft* / *VirtualKeys.DoorsRight* is raised.
* New: Panel2.cfg supports the subjects *doorbuttonl* & *doorbuttonr*
* New: Animated objects support the subject *leftDoorsButton* & *rightDoorsButton*
* Change: LBA and large GC objects enabled. (Fixes some issues with NYCTA routes)
* Change: Workaround for some Chinese BVE2 routes not finding the default train correctly.
* Change: The non-visible 'NUL' character is ignored if encountered during routefile processing.
* Fix: Missing error message in dynamic background parser.
* Fix: Using 'SIGNAL' at the start of a comment in a routefile could be misinterpreted.
* Fix: Issue when using the 'Back' button whilst creating a package under some circumstances.
* Fix: Workaround for certain malformed paths whilst loading a .animated file.
* Fix: Car based plugin sounds not working correctly.
* Fix: VirtualKeys.GearDown not working correctly.

