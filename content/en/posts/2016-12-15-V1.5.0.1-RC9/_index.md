---
layout: post
title: openBVE v1.5.0.1 RC9a
description: "The first stable release in the 1.5.0 series"
modified: 2016-12-20
tags: [welcome]
categories: [intro]
---


*Version 1.5.0.1*

**Version RC9a:**

* Windows installer re-uploaded due to a missing critical file. This should fix instances of 'Unhandled Windows Forms Exception' when clicking in the main menu. Sorry about that!

**Significant Changes:**

*RC9:*

* Fixes some more issues with packages and the main menu on various system combinations.
* Fixes a bug with yaw/ pitch/ roll in some animated objects.
* Animated object visibility was not correctly updated when using the free camera. (See errata note: <https://github.com/leezer3/OpenBVE/wiki/Errata#animated-objects-not-introduced-properly-when-using-the-free-camera> )
* Fix: A value of zero is not valid for a Route.RunInterval command.

New command line switches:

* **/station=** Jumps to the given station on startup.
* **/time=** Fast-forwards to the given time on startup.
* **/fullscreen=** _true_ or _1_ for fullscreen.
* **/width=** and **/height=** Sets the screen width and height.

