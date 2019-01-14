---
layout: post
title: openBVE v1.5.0.10
description: "The first release for 2017"
modified: 2017-03-01
tags: [welcome]
categories: [intro]
---


*Version 1.5.0.10*

With it having been nearly three months since the last release, I thought it time to upload another.
The 'RC' tag has also been removed from this release, as I believe that it's now in a state which can truly be called stable. (Famous last words.....)

**Significant Changes:**

* New: The 'compatibility' objects have been expanded to include open-source copies of all of the original Uchibo objects, as these are used by many older routes.
* New: Animated files now allow times written in the __HH:MMss__ format to be used in expressions.
* New: The parameter __WrapMode__ (b3d) / __SetWrapMode__  (csv) has been added to allow object authors to control the texture wrapping mode used by the game engine.
* New: The command __Route.StartTime__ has been added. This allows route authors to set the starting time independently of the arrival time at the first station.
* New: Plugins may now interlock the state of the train doors.
* New: Plugins may now add or subtract a score value.
* Change: Damping is no longer applied to rotations when switching between camera views.
* Change: The colon is now allowed for use as a time separator.
* Fix: If a route used compatibility objects, but was written with an UTF incompatible text encoding, these objects would not load.
* Fix: Some characters were not correctly serialized into package descriptions when using the Mono runtime.
* Fix: It was sometimes possible to arrive late at the first station upon loading the game.
* Fix: Several issues with the TrackFollowerFunction.
* Fix: A potential crash when drawing route maps.
* Fix: Normals were not updated correctly in certain instances.
* Fix: It was possible for the ansiotropic filtering level to get stuck at zero.