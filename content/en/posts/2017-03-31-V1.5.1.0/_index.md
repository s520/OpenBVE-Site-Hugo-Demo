---
layout: post
title: openBVE v1.5.1.0
description: "The first stable release in the 1.5.1.0 series"
modified: 2017-03-31
tags: [welcome]
categories: [intro]
---


*Version 1.5.1.0*

This release contains several more requested features, as well as improvements to the main menu system.
There has been one behavioural change affecting all prior content.

**Behavioural Changes:**

In prior versions of openBVE, pressing and holding a horn key would cause the sound to repeatedly trigger until the key was released. 
This has been changed to the following:

* __Primary & Secondary horns:__ The sound will play once.
* __MusicHorn:__ The sound will toggle on with the first keypress, then toggle off.

Please see also the following errata note:

<a href="https://github.com/leezer3/OpenBVE/wiki/Errata#horn-behavior" class="btn btn-info">https://github.com/leezer3/OpenBVE/wiki/Errata#horn-behavior</a>

**Significant Changes:**

* New: Three-part horn sounds are now supported.
* New: A needle declared within a Panel2.cfg file, with the subject of __hour__ , __min__ or __sec__ will now accept the additional parameter __Smoothed__ , to use either smooth or stepped rotations.
* New: Switch sounds based upon the current run index are now supported.
* New: The subjects __Klaxon__ , __PrimaryKlaxon__ , __SecondaryKlaxon__ and __MusicKlaxon__ are now available for animations.
* New: In-game menus may be scrolled using the mouse.
* Fix: An optimised animated object with multiple functions could appear in the wrong position.
* Fix: Object based backgrounds broken in certain obscure cases.
* Fix: Object based backgrounds could clip incorrectly.
* Fix: Incorrect keyup events generated when leaving the in-game menu.
* Fix: The pressure for a straight air-brake did not quite go to zero, causing the run sound to continously play for some trains.
* Fix: A train with defined bogies for cars greater than than the length in train.dat crashed.
* Fix: If the restart process was invalid in filesystem.cfg , this would generate an error message & not restart.
* Fix: A control with no assigned target would crash the in-game configuration menu.
* Fix: The mouse did not work in the second or greater page of in-game menus with multiple pages.
* Change: Disable the FileSystemWatcher on OS-X, as this leaks open file handles.
* Change: Enter key not marked for translation.
* Change: Update pt-PT translation.