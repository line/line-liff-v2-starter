#!/usr/bin/env bash

export NODE_OPTIONS=--openssl-legacy-provider
yarn install
yarn run build
yarn run start
