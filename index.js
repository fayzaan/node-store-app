#!/usr/bin/env node

'use strict';

const router = require( './controllers/router.js' );

router.route( process.argv );