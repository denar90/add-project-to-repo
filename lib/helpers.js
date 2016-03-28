'use strict';
const exec = require('child_process').exec;

/**
 * Builds command
 * @return {string}
 */
exports.buildCommand = () => {
    const args = process.argv.slice();
    //get repository name
    const repoName = args[2];
    if (!repoName) {
        console.log('Repository wasn\'t specified \n');
        console.log('Please run "atr link_to_your_repo"');
        process.exit(0);
    }
    return [
        'git init',
        'git add .',
        'git commit -m "init"',
        `git remote add origin ${repoName}`,
        'git remote -v',
        'git push origin master'
    ].join('&&');
};

/**
 * Runs command
 * @param {string} command
 * @return {Object}
 */
exports.runCommand = (command) => {
    return exec(command,
        (error, stdout, stderr) => {
            console.log(stdout);
            if (error !== null) {
                console.log(`exec error: ${error}`);
                //remove git from current folder
                this.runCommand('rm -rf .git');
            }
        });
};