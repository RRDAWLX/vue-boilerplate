const execSync = require('child_process').execSync,
  semver = require('semver'),
  chalk = require('chalk'),
  Opts = {encoding: 'utf8'}

let currentVersion = require('../package.json').version,
  recentVersionTag = execSync('git tag -l "v*" --sort=-refname', Opts).trim().split(/\r?\n/)[0]

// 当前的版本号要大于最近一个版本号标签中的版本号
if (recentVersionTag) {   // 如果存在版本号标签
  let tagType = execSync(`git cat-file -t ${recentVersionTag}`, Opts).trim(),
    recentVersionCommit

  if (tagType === 'tag') {
    recentVersionCommit = execSync(`git cat-file -p ${recentVersionTag}`, Opts).slice(7, 14)
  } else {
    recentVersionCommit = execSync(`cat .git/refs/tags/${recentVersionTag}`, Opts).slice(0, 7)
  }

  let currentCommit = execSync('git log --pretty=oneline', Opts).slice(0, 7)

  if (recentVersionCommit !== currentCommit) {   // 且最近一个版本号标签对应的 commit 不是当前的 commit
    let recentVersion = recentVersionTag.slice(1)

    if (semver.lte(currentVersion, recentVersion)) {   // 则需校验当前 package.json 中的版本号是否大于上一个版本号
      console.log(chalk.red(`当前版本号 ${currentVersion} 未大于上一个发布版本号 ${recentVersion}，请升级版本号！`))
      process.exit(1)
    }
  }
}

execSync(`git tag -a v${currentVersion} -m "${new Date().toLocaleString()}" -f && git push --tags -f`)
process.exit(0)
