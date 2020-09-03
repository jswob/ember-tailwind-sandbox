import Application from 'ember-tailwind-sandbox/app';
import config from 'ember-tailwind-sandbox/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
