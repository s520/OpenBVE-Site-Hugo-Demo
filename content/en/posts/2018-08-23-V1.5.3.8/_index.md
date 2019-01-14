---
layout: post
title: openBVE v1.5.3.8
description: "openBVE v1.5.3.8"
modified: 2018-08-23
tags: [welcome]
categories: [intro]
---

*Version 1.5.3.8*

### Significant Changes:

* New: Add HUD size slider, minimal and large HUD options.
* New: Add the function ***Pitch[CarIndex]*** to animated objects.
* New: Add PerMil to the gradient display options.
* Change: Add the current pitch to the F10 overlay.
* Change: Assorted improvements to the Wavefront object parser.
* Change: Better handle a specific case of Unicode misdetction when loading objects.
* Change: On a horn with multiple sounds, if the StartSound is not defined, start plaing the LoopSound immediately.
* Change: Update hu-HU translation.
* Change: Update ca-ES translation.
* Fix: A train driven by the AI could get stuck if no motor deceleration was set in the train.dat file.
* Fix: openBVE crashed if the black box was enabled, and the file existed but the program was unable to write to it.
* Fix: The track following camera could exit the world and continue indefinitely.
* Fix: ***EbHandleBehaviour*** produced an invalid entry if not set in Train Editor.
* Fix: The Constant Speed device was broken by 1.5.3.0
* Fix: Train plugins were not unloaded correctly when manually closing the game window.

### Content Specific Fixes:

* Change: Handle the case where a panel.animated file is present, but either contains no objects, or produces an empty object. (MTR SIL C-train EMU-FAO)
* Fix: Correct panel zoom on HM05

### Platform Specific Changes:

The Mac build for v1.5.3.8 requires Mono 5.14 or higher, due to a change in the Mono runtime on Mac.
The app will recognise this, and prompt you to upgrade if required.

At the present time, this appears to be a regression in Mono (We are using no new features), and a bug has been filed with them on this subject.