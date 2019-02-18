//====================================================|
// CV


//--------------------------| Import

// Libraries
import React from 'react';

// Config
import { contentfulAccessToken, contentfulSpace } from './configs/account.json';

// App
import init from './client';


//--------------------------| Initialize

init({
  contentfulAccessToken,
  contentfulSpace
});
