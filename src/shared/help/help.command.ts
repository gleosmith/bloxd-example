import { CliCommand, Command, Inject, MODULE_HELP, HelpContext,  ModuleHelp } from 'bloxd';

@CliCommand('help', {
    alias: 'h',
    description: 'Shows usage of the cli command'
})
export class HelpCommand implements Command {

    constructor(
        private helpContext: HelpContext,
        @Inject(MODULE_HELP) private moduleHelp: ModuleHelp
    ) {
    }

    async execute() {
        this.moduleHelp.showHelp(this.helpContext.getDescription().parent)
    }

}