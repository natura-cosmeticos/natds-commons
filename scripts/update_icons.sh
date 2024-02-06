#!/bin/bash

#Download files;

wget  https://github.com/natura-cosmeticos/natds-commons/blob/main/packages/natds-icons/ios/NatDSIcons/NatDSIcons/Icon.swift
wget  https://github.com/natura-cosmeticos/natds-commons/blob/main/packages/natds-icons/ios/NatDSIcons/Resources/natds-icons-ios.ttf

#Copy files;

mv Icon.swift /NatDS/Sources/Public/Components/Icon.swift
mv natds-icons-ios.ttf /NatDS/Sources/Resources/Fonts/natds-icons-ios.ttf
