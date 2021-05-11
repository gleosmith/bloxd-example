import { HashCommand } from './commands/hash/hash.command';
import { UuidCommand } from './commands/uuid/uuid.command';
import { CliModule } from 'bloxd';

@CliModule({
    commands: [
        UuidCommand,
        HashCommand
    ]
})
export class CryptoModule {

    constructor() {}

}
