const CommandType = {
  help: 'help',
  example: 'example',
} as const;

type CommandName = (typeof CommandType)[keyof typeof CommandType];

// Define the aliases for each command type
const CommandAliases = {
  [CommandType.help]: ['sos', 'issue'],
  [CommandType.example]: ['demo', 'test'],
} as const;

type CommandAlias<T extends CommandName> = T extends keyof typeof CommandAliases
  ? (typeof CommandAliases)[T][number]
  : never;

abstract class Command {
  public readonly name: string;
  public readonly aliases: string[];
  constructor(name: string, aliases: string[]) {
    this.name = name;
    this.aliases = aliases;
  }

  // if execute is not unique per class we can move the logic to here
  abstract execute(): void;

  protected commonOutput(): void {
    console.log('Common command is called');
  }
}

class HelpCommand extends Command {
  constructor() {
    super(CommandType.help, ['sos', 'issue']);
  }

  execute = () => {
    this.commonOutput();
    console.log(`Command ${this.name} is called`);
  };
}

class ExampleCommand extends Command {
  constructor() {
    super('example', ['demo', 'test']);
  }

  execute = () => {
    this.commonOutput();
    console.log(`Command ${this.name} is called`);
  };
}

class CommandFactory {
  private static commandMap: Map<string, Command> = new Map();

  static initialize(): void {
    // assuming  alias are unique
    const commands: Command[] = [new HelpCommand(), new ExampleCommand()];

    commands.forEach((command) => {
      this.commandMap.set(command.name.toLowerCase(), command);
      command.aliases.forEach((alias) => {
        this.commandMap.set(alias.toLowerCase(), command);
      });
    });
  }

  static getCommand(name: string): Command | undefined {
    return this.commandMap.get(name.toLowerCase().trim());
  }
}

class CommandManager {
  private factory: typeof CommandFactory;
  constructor(factory: typeof CommandFactory) {
    this.factory = factory;
    this.factory.initialize();
  }

  executeCommand(name: CommandName | CommandAlias<CommandName>): void {
    const command = this.factory.getCommand(name);
    if (command) {
      command.execute();
    } else {
      console.error(`Command "${name}" not found.`);
    }
  }
}

export function mainClass() {
  const commandManager = new CommandManager(CommandFactory);
  commandManager.executeCommand('help');
  commandManager.executeCommand('sos');
  commandManager.executeCommand('example');
  commandManager.executeCommand('demo');
  commandManager.executeCommand('noneExist');
}
