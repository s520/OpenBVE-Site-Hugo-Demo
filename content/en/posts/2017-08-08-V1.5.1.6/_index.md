---
layout: post
title: openBVE v1.5.1.6
description: "openBVE v1.5.1.6"
modified: 2017-08-08
tags: [welcome]
categories: [intro]
---

*Version 1.5.1.6*

__Significant Changes:__

* New: Basic support for the RailDriver controller from PI Engineering. (Requires calibration, see P2 of 'Options')
* New: openBVE will load many Loksim3D objects.
* Fix: ACE textures using 1-bit alpha were broken.
* Fix: Potential infinite recursion bug in path resolution API.
* Fix: Several components of Japanese BVE1 panels were not working correctly.
* Fix: BVE4 trams from Martin Finken (GT6, TW6000 original version etc.) had a broken initial panel zoom.
* Fix: Backgrounds textures not correctly loaded in the Minobu route for BVE2.
* Fix: Inconsistent error messages under some package management situations.
* Change: The sounds for the default (no) ATS plugin may be overwritten via sound.cfg. Please see the following errata note for further details: https://github.com/leezer3/OpenBVE/wiki/Errata#default-plugin-ats-sounds
* Change: Route / train specific hacks may be turned off via setting *enablebvetshacks* to __false__ in the options file. These should generally be left enabled.

