#!/usr/bin/env bash
# PCBuilder Build Wrapper Script
# Bypasses MSBuild path-wildcard bugs on Linux when folder path has special characters.

export PATH=$PATH:$HOME/.dotnet
export DOTNET_ROOT=$HOME/.dotnet

# Run dotnet with MSBuild path overrides
exec dotnet "$@" -p:BaseIntermediateOutputPath=obj/ -p:MSBuildProjectExtensionsPath=obj/
