
import { CliOptions, CliOption, AppContext, AfterOptionsInit } from 'bloxd';
@CliOptions()
export class RootOptions implements AfterOptionsInit {

    @CliOption({
        alias: 'v',
        description: 'Shows the cli version'
    })
    version: boolean;


    constructor(
        private app: AppContext
    ) {}

    afterOptionsInit() {
        if(this.version) {
            console.log(`v${process.version}`)
            process.exit();
        }
    }


}