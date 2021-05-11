import { FsService } from './services/fs.service';
import { SearchService } from './services/text-utils.service';
import { CryptoModule } from './modules/cryto/crypto.module';
import { FindCommand } from './commands/find/find.command';
import { AppHelpModule } from './shared/help/app-help.module';
import { CliModule, ParserModule } from 'bloxd';
import { ReplaceCommand } from './commands/replace/replace.command';
import { RootCommand } from './commands/root/root.command';


@CliModule({
    commands: [
        RootCommand,
        ReplaceCommand,
        FindCommand,
        { 
            path: 'crypto', 
            alias: 'c', 
            description: 'Cryptographic utilities', 
            module: CryptoModule
        }
    ],
    providers: [
        SearchService,
        FsService
    ],
    imports: [
        ParserModule,
        AppHelpModule
    ]
})
export class AppModule {

    constructor() { }

}
