---
layout: post
title: openBVE v1.5.3.11
description: "openBVE v1.5.3.11"
modified: 2018-11-11
tags: [welcome]
categories: [intro]
---

*Version 1.5.3.11*

### Significant Changes:

* New: The Pass Alarm sound may be set via sound.cfg
* New: Add input plugins- These are intended to allow a plugin to directly interface with the simulation controls (e.g. desktop controller / sim board)
* New: Add SanYingInput to handle the OH-PC01 cab controller for BVE5. (Ported from the MIT Licensed BVE5 version)
* Fix: Issue with BrakeControlSpeed under certain setups causing the motor sound to be played incorrectly at rest.
* Fix: Crash if the train was to stop at the next station, but no stop points were defined. (Introduced with 1.5.3.9)
* Fix: Changes to the gamewindow, so that it closes more reliably under Mono / Linux.
* Fix: Handle an ATS.cfg file which starts with an initial empty line.
* Fix: The station pass message could be triggered incorrectly by a jump under certain circumstances.
* Fix: Sort a couple of issues in the DDS texture plugin.
* Fix: If using a white background in Object Viewer, use black text so it is readable.
* Change: Update hu-HU language file. (Phonteus Nevolius)
* Change: Refactoring to various vector operations.

### Route Specific Fixes:

* Hacks: Fix tunnel exit on Cittaden V2
* Hacks: Fix incorrectly read curve on B1649ﾃｼiﾄ・ﾄｺJﾃｼﾄ佚架・ｹﾃ嘉ｼj.csv