---
title: "Roadmap"
linktitle: "Roadmap"
weight: 5
layout: "single"
---

## Version 1.5

Version 1.5 is currently under development.

### Implemented Features:

- Added animated bogies to train cars. (This was previously possible with various physics based hacks, but not officially supported)
- Extend a range of variables available via the plugin interface & animated files.
- Port backend libraries to openTK.
- In-game menu and information displays re-written.
- Animated objects may now follow the path of Track 0.

### Work In Progress Features:

- Package management: Allow developers to create a managed package format, providing an easy installation and metadata for routes and trains. (Largely complete!)

------

## Version 1.6

### Planned Features:

- Deprecate the train.dat and extensions.cfg files, in favour of an XML based system allowing much greater flexibility.
- Multiple views (Cab, passenger etc.) available per train.
- Backport the openBVE 2 demo object parser plugin interface. 

### Work In Progress Features:

- Improve the simulation options available to train developers.
- Re-write the main simulation renderer to move away from using openGL intermediate mode.

------

## Version 1.7

### Planned Features:

- Further extend the XML configuration of trains, to allow the creation of custom 'consists'