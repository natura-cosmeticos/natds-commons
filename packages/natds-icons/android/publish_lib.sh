#!/bin/sh
gradle icon:assemble
cd icons
gradle publish --stacktrace
