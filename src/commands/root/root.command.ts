import { CliCommand, OptionsOnlyCommand } from 'bloxd';
import { RootOptions } from './root.options';

@CliCommand('*', {
    options: [RootOptions]
})
export class RootCommand extends OptionsOnlyCommand {}