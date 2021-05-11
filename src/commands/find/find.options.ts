import { CliOptions, CliOption } from 'bloxd';

@CliOptions()
export class FindOptions {

    @CliOption({
        alias: 'p',
        description: 'Preview search results'
    })
    preview: boolean

}