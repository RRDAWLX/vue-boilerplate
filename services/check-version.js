const execSync = require('child_process').execSync,
  semver = require('semver'),
  chalk = require('chalk')

let newVersion = JSON.parse(execSync('git cat-file -p :package.json', {encoding: 'utf8'})).version,
  oldVersion = JSON.parse(execSync('git cat-file -p HEAD^{tree}:package.json', {encoding: 'utf8'})).version

if (semver.gt(newVersion, oldVersion)) {
  process.exit(0)
} else {
  console.log(chalk.red('package.json 中的 version 未升级！'))
  process.exit(1)
}