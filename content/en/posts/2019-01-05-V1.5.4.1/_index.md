---
layout: post
title: openBVE v1.5.4.1
description: "openBVE v1.5.4.1"
modified: 2019-01-05
tags: [welcome]
categories: [intro]
---

*Version 1.5.4.1-1*

### Hotfix Release 2

* Mac: Fix a broken link in the Mono download prompt.

*Version 1.5.4.1*

### Hotfix Release

* Fix: Crash on systems with no microphone / audio in inputs.

*Version 1.5.4.0*

### Significant Changes:

* New: Add TGA image loader plugin.
* New: Add two alternative X object parsers.
* New: Add alternative OBJ parser.
* New: Add alternate sounds for when a power / brake handle is moved continously.
* New: Add microphone sound input & associated routefile sound-source.
* Fix: Correctly handle all MS-ZIP compressed X objects (Applies to all parsers)
* Fix: The speed limit could unexpectedly revert to unlimited in certain circumstances.
* Fix: CarUnexposedFrontalArea was not read correctly from the train.dat file. **NOTE:** This was being applied incorrectly to CarExposedFrontalArea. This may have a (normally) small affect on train performance.

### Notes:

This build introduces alternate parser options for X and OBJ files.
These are as follows:

**X:**

- Original - Michelle's original parser.
- NewXParser - New scratch-written code.
- Assimp - A C# port of the Assimp library ( https://github.com/assimp/assimp , a modified version of BSD-3 applies to this)

The default X parser will now be set to the NewXParser.

**OBJ:**

- Original
- Assimp - Assimp - A C# port of the Assimp library ( https://github.com/assimp/assimp , a modified version of BSD-3 applies to this)

The default Obj parser will now be set to the original OBJ parser.

If loading using any of the new parsers fails, the original parsers will be automatically tried as fallback options.
A routefile command to control the X parser used is also available:

**Options.XParser**

This may be set to the following: **0** : Original **1** : NewXParser **2** : Assimp