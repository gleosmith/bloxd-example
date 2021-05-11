import { CliOptions, CliOption } from 'bloxd';

@CliOptions()
export class SearchOptions {
    
    @CliOption({
        alias: 'a',
        description: 'Finds all references of text not just first reference'
    })
    all: boolean;

    @CliOption({
        alias: 'r',
        description: 'Search text will be evaluated as a regular expression'
    })
    regex: boolean;

    @CliOption({
        alias: 'c',
        description: 'Search will be case sensitive'
    })
    caseSensitive: boolean;

}