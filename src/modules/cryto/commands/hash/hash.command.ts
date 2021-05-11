import { HashOptions } from './hash.options';
import { CliCommand, CliParameter, Command } from 'bloxd';
import * as crypto from 'crypto';

@CliCommand('hash', {
    alias: 'h',
    description: 'Creates a hash',
    options: [HashOptions]
})
export class HashCommand implements Command {


    @CliParameter(1, {
        description: 'Text to hash'
    })
    text: string;


    constructor(
        private hashOpts: HashOptions
    ) {
    }

    async execute() {
        console.log(crypto.createHash(this.hashOpts.alg).update(this.text).digest('hex'))
    }


}