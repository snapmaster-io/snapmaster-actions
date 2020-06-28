#!/bin/bash

npm update express-snapmaster-middleware
git commit -am 'updated middleware'
git push
npm version patch
npm publish
