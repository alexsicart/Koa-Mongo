'use strict';

const koa = require('koa');
const app = new koa();
const db = require('./db');

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
