const execSync = require('child_process').execSync,
  semver = require('semver'),
  chalk = require('chalk'),
  Opts = {encoding: 'utf8'}

  let currentVersion = require('../package.json').version,
    publishTags = execSync("git tag -l 'v*' --sort=-refname", Opts).split('\n').filter(tag => {
      return tag && execSync(`git cat-file -t ${tag}`, Opts).trim() === 'tag'
    })

  if (publishTags.length) {   // 如果存在发布版本号
    let lastPublishTag = execSync('git describe', Opts).trim()

    if (lastPublishTag !== publishTags[0]) {   // 且上一个版本号对应的 commit 不是当前的 commit
      let lastPublishCommit = execSync(`git cat-file -p ${publishTags[0]}`, Opts).substr(7, 7)
      let lastPublishVersion = JSON.parse(execSync(`git cat-file -p ${lastPublishCommit}^{tree}:package.json`, Opts)).version

      if (semver.lte(currentVersion, lastPublishVersion)) {   // 则需校验当前的版本号是否大于上一个发布版本号
        console.log(chalk.red(`当前版本号 ${currentVersion} 未大于上一个发布版本号 ${lastPublishVersion}，请升级版本号！`))
        process.exit(1)
      }
    }
  }

  execSync(`git tag -a v1.1.0 -m "${new Date().toLocaleString()}" -f && git push --tags -f`)
  process.exit(0)