#!/bin/bash

pwd >> /tmp/fileCreatedByScript.txt
echo "First arg: $1" >> /tmp/fileCreatedByScript.txt
echo "===================================" >> /tmp/fileCreatedByScript.txt
hostname >> /tmp/fileCreatedByScript.txt
