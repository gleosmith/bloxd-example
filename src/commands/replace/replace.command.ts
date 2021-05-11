import { ReplaceOptions } from './replace.options';
import { AppContext, CliCommand, CliParameter, Command, FilePath } from 'bloxd';
import { SearchOptions } from '../../options/search.options';
import { Printer } from './../../models/printer';
import { FsService } from './../../services/fs.service';
import { SearchService } from './../../services/text-utils.service';

@CliCommand('replace', {
  alias: 'r',
  description: 'Replaces text in a file',
  options: [SearchOptions, ReplaceOptions]
})
export class ReplaceCommand implements Command {

  @CliParameter(1, {
    description: 'Path to source file'
  })
  file: FilePath

  @CliParameter(2, {
    description: 'Text to find'
  })
  searchText: string

  @CliParameter(3, {
    description: 'Replacement text'
  })
  replaceText: string

  constructor(
    private replaceOpts: ReplaceOptions,
    private fs: FsService,
    private searchOpts: SearchOptions,
    private searchService: SearchService,
    private app: AppContext
  ) {
  }

  async execute() {
    let txt = await this.fs.readFile(this.file)
    const results = await this.searchService.find(txt, this.searchText, this.searchOpts);

    results.forEach((r) => txt = txt.substr(0, r.index) + this.replaceText + txt.substr(r.index + r.length, txt.length))
    await this.fs.writeFile(this.replaceOpts.file ? new FilePath(this.replaceOpts.file, process.cwd()): this.file, txt);

    new Printer('Replaced ')
      .bold(results.length)
      .append(' occurances in file')
      .if(!!this.replaceOpts.file, printer => printer.newLine('Wrote new file ' + this.replaceOpts.file))
      .log()
  }
}