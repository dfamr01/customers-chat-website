import { buildCommands, getCommand } from './commands-legacy';

buildCommands();

getCommand('help').init();
getCommand('sos').init();

console.log('------------------------');

getCommand('example').init();
getCommand('demo').init();
