const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))
    // the $ 0 will auto match the file name
    // the <> will match up to the .command
    // the [] will match to .options
    .usage('$0: Usage <cmd> [options]')
    .command(
        // command
        'play <game>',
        // description
        'play a simple card game',
        // builder
        (yargs) => {
            return yargs
                .positional('game', {
                    describe: 'name of the card games',
                    choices: ['21', 'spades'],
                    type: 'string'
                })
                .option('c', {
                    alias: 'count',
                    describe: 'the number of decks to use',
                    default: 1,
                    type: 'number'
                });
        },
        // handler
        (args) => {
            if (args.game === '21') {
                app.playGame(args);
            } else {
                console.log(`${args.game} is not ready`);
            }
        }
    )
    .help().argv;
