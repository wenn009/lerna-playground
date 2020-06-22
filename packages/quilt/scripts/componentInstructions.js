const chalk = require('chalk');

console.log(
  chalk.black.bgWhiteBright(
    `When the generator has finished, please follow the instructions at ${chalk.blue(
      'quilt/docs/DEVELOPMENT.md'
    )} to complete the process.`
  )
);
