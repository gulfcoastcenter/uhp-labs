var util = require('mis-util');
var config = require('./config.ignore.json');

var mis = util({
   sysname: '/c1/FRSH',
   connect: {
      host: 'gccmhc',
      user: 'tim',
      password: config.user
   },
   cron: {
      user: 'datamgr',
      pass: config.cron
   }
});

mis.deploy.usc()
.then(function(files) {
   return mis.script.compile(files);
});
