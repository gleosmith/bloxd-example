import { CliCommand,  Command } from 'bloxd';
import * as getRandomValues from 'get-random-values';

@CliCommand('uuid', {
    alias: 'u',
    description: 'Generates a UUID'
})
export class UuidCommand implements Command {

    constructor() {}

    async execute() {
        console.log(this.createUUID())
    }

    private createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = (getRandomValues(new Uint8Array(1))[0] % 16) | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}