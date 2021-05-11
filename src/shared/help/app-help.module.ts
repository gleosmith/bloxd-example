import { HelpOptions } from './help.options';
import { HelpCommand } from './help.command';
import { CliModule, HelpModule } from 'bloxd';

@CliModule({
    imports: [
        HelpModule
    ],
    exports: [
        HelpModule,
        HelpCommand,
        HelpOptions
    ]
})
export class AppHelpModule {

    constructor() {}

}
