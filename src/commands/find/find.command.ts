import { FsService } from './../../services/fs.service';
import { SearchOptions } from '../../options/search.options';
import { CliCommand, CliParameter, Command, FilePath } from 'bloxd';
import { FindOptions } from './find.options';
import { SearchService } from '../../services/text-utils.service';
import { Printer } from '../../models/printer';

@CliCommand('find', {
  alias: 'f',
  description: 'Checks if a file contains text',
  options: [SearchOptions, FindOptions]
})
export class FindCommand implements Command {

  @CliParameter(1, {
    description: 'Path to source file'
  })
  file: FilePath

  @CliParameter(2, {
    description: 'Text to find'
  })
  searchText: string

  constructor(
    private findOpts: FindOptions,
    private fs: FsService,
    private searchOpts: SearchOptions,
    private searchService: SearchService,
  ) {
  }

  async execute() {
    const txt = await this.fs.readFile(this.file)
    const results = await this.searchService.find(txt, this.searchText, this.searchOpts);
    
    new Printer('Found ')
      .bold(results.length)
      .append(' occurances in file')
      .if(this.findOpts.preview && !!results.length, printer => printer
        .newLine()
        .newLine()
        .bold('Preview:')
        .forEach(results.slice(0, 10), (r, line) =>
          line
            .newLine()
            .append(r.index - 15 > 0 ? '...' : '')
            .append(Printer.replaceAll(txt.substr(Math.max(0, r.index - 15), 15), /\n|\r/, '').trimLeft())
            .yellowBright(Printer.replaceAll(r.text, /\n|\r/, ''))
            .append(Printer.replaceAll(txt.substr(r.index + r.length, 15), /\n|\r/, '').trimRight())
        ))
      .if(this.findOpts.preview && results.length > 10, printer => printer.newLine(`(${(results.length - 10)} more results)...`))
      .log()


  }

}