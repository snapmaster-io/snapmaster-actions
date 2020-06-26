![SnapMaster](https://github.com/snapmaster-io/snapmaster/raw/master/public/SnapMaster-logo-220.png)
# SnapMaster 
## Master your DevOps toolchain

SnapMaster is the definitive DevOps integration platform.  

## Purpose

This repository contains a well-configured Express-based server for 
implementing SnapMaster Actions. 

This takes almost all of the boilerplate code for implementing a 
SnapMaster Action as a node server or a Cloud Function.

A SnapMaster Action implements the Action Contract.  This includes 
having an `actions.yml` file in the root directory which defines the action(s) 
to export.  

`snapmaster-actions` will take care of exposing the Action Metadata via 
the `/__metadata` endpoint, as a JSON representation of the `actions.yml` file.

This package will also expose all of the actions as HTTP routes.  See examples below.

## Usage

To install the package: 

`npm install --save snapmaster-actions`

To implement an action as a Cloud Function:

```
// import the snapmaster-actions package
const snapmaster = require('snapmaster-actions');

// implement an action called "hello"
function helloHandler(req, res) {
  res.status(200).send("hello, world!");
}

// bind the "hello" action to the "/hello" route, and the "helloHandler" function
exports.snapmaster = snapmaster({
  hello: helloHandler
});
```

## actions.yml

The `actions.yml` file must be present in the root directory.  Here is a sample:

```
---
version: actions-v1alpha1 
name: slack
description: Slack Actions
actions:
  - name: send
    description: send a message to a channel 
    parameters:
    - name: workspace
      description: workspace name
      required: true 
    - name: channel
      description: channel to send to
      required: true
    - name: message
      description: message to send
      required: true
```

