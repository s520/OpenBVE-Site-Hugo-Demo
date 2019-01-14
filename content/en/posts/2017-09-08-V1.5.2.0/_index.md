---
layout: post
title: openBVE v1.5.2.0
description: "openBVE v1.5.2.0"
modified: 2017-09-08
tags: [welcome]
categories: [intro]
---

*Version 1.5.2.0*

### Significant Changes:

* Change: openTK version bumped. (Solves issues on OS-X Sierra)
* Change: OS-X app tweaked to handle Mono 5.2
* New: Improved the parsing of Loksim3D objects containing nested group files
* New: Add __signal3.csv__ & __crossing.wav__ to the Uchibo compatibility list
* New: Add XML format stations
* Fix: A signal declared with 0 aspects in a RW format route behaved incorrectly
* Change: Add __-3__ as a supported signal aspects value
* Fix: Excessively large StructureIdx values could cause various issues
* Fix: Cloning an object with nighttime textures could crash under certain circumstances


### Compatibility Changes:

This version of openBVE introduces a number of new 'hacks' to fix previously broken BVE2 / BVE4 content, as follows:

* Richmond- Kurrajong & Campbelltown- Campden object rotation broken
* The original RW format Heavy Coal route stations broken
* Improved the handling of various situations containing incorrect bracket configurations
* The __SetDecalTransparentColor__ for textures using 256-colors is now matched to the nearest color in the palette, fixing large numbers of older routes with transparency issues.

Whilst these should have no effect on any other items, they may be disabled in the following ways:

_**Routefile Fixes**_

1. For all routes, by unchecking the __Enable hacks for buggy older content__ checkbox.
2. For a specific routefile, by setting __Options.EnableBveTsHacks(0)__

_**256-Color Transparency Fix**_

1. For all routes, by unchecking the __Attempt to fix transparency issues in older content__ checkbox
2. For a specific routefile, by setting __Options.CompatibleTransparencyMode(0)__

Developers of new content are encouraged to disable both of these options specifically.