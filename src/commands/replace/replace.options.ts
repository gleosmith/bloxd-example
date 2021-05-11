import { CliOptions, CliOption} from 'bloxd';


@CliOptions()
export class ReplaceOptions {

    @CliOption({
        alias: 'f',
        description: 'File path to write replaced file to else overwrites existing'
    })
    file: string;

    constructor(
    ) {}

}