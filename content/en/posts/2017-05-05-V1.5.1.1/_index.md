---
layout: post
title: openBVE v1.5.1.1
description: "openBVE v1.5.1.1"
modified: 2017-05-05
tags: [welcome]
categories: [intro]
---

*Version 1.5.1.1*

**Significant Changes:**

* Fix: Trains missing the Sound.cfg file (A minority of trains from the BVE1 / BVE2 era) were broken.
* Fix: Several issues with the TrackFollowerFunction, relating to station jumps.
* Fix: A time-based animation updated incorrectly when returning from the menu.
* Fix: A route encoded in UTF-8, with a $Include file encoded in SHIFT_JIS had incorrect character mapping in station names.
* Change: Improved handling of broken/ non-standard folder structures. 
* New: Added an in-game gradient display option. (Must be added under Controls for existing users. New installs are set to CTRL + N by default)