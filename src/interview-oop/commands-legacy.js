const util = require('util');

let commandsHashMap = null;

const commonCommandOutput = function () {
  console.log('Common command is called');
};

const commands = {
  help: {
    name: 'help',
    aliases: ['sos', 'issue'],
    init: function () {
      commonCommandOutput();
      console.log('Command "help" is called');
    },
  },
  example: {
    name: 'example',
    aliases: ['demo', 'test'],
    init: function () {
      commonCommandOutput();
      console.log('Command "example" is called');
    },
  },

  getCommand: function (name) {
    var com =
      commandsHashMap[util.isString(name) ? name.toLowerCase().trim() : name];
    if (com) {
      return com;
    }
    return false;
  },

  buildCommands: function () {
    commandsHashMap = {};
    var keys = Object.keys(this);
    var len = keys.length;
    for (var i = 0; i < len; i++) {
      if (this[keys[i]].aliases) {
        commandsHashMap[this[keys[i]].name] = this[keys[i]];
        for (var j = 0; j < this[keys[i]].aliases.length; j++) {
          var newKey = this[keys[i]].aliases[j].toLowerCase();
          commandsHashMap[newKey] = this[keys[i]];
        }
      }
    }
  },
};

module.exports = commands;
