import { 
    CliOptions, CliOption, AfterOptionsInit, 
    AppContext, HelpContext, Inject, COMMAND_HELP, CommandHelp 
} from 'bloxd';

@CliOptions()
export class HelpOptions implements AfterOptionsInit {

    @CliOption({
        alias: 'h',
        description: 'Shows usage of the cli command'
    })
    help: boolean

    constructor(
        private app: AppContext,
        private helpContext: HelpContext,
        @Inject(COMMAND_HELP) private commandHelp: CommandHelp
    ) { 
    }

    afterOptionsInit() {
        if(this.help) {
            this.commandHelp.showHelp(this.helpContext.getDescription())
            process.exit();
        }
    }

}