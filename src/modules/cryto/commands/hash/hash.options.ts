import { AfterOptionsInit, CliOption, CliOptions, OptionParsingError } from 'bloxd';


@CliOptions()
export class HashOptions implements AfterOptionsInit {

    @CliOption({
        alias: 'g',
        description: 'The algorithm used to create the hash',
        required: true
    })
    alg: string;

    private readonly algorithms = ['sha256', 'md5']

    afterOptionsInit() {
        if(this.algorithms.indexOf(this.alg) === -1) {
            throw new OptionParsingError(`The algorithm ${this.alg} is not valid. Only accepts ${this.algorithms.join(', ')}`)
        }
    }


}