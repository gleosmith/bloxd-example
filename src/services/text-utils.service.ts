import { FsService } from './fs.service';
import { SearchOptions } from './../options/search.options';
import { FilePath, Injectable } from 'bloxd';
import { SearchResult } from 'src/models/search-result';

@Injectable()
export class SearchService {

    constructor(
        private fs: FsService
    ) {}

    private createRegex(txt: string, opts: SearchOptions): RegExp {
        const flags = `${opts.all ? 'g' : ''}${!opts.caseSensitive ? 'i' : ''}`
        if(opts.regex) {
            return new RegExp(txt, flags)
        } else {
            return new RegExp(txt, flags)
        }
    }


    async find(text: string, findText: string, opts: SearchOptions):  Promise<SearchResult[]>
    async find(file: FilePath, findText: string, opts: SearchOptions):  Promise<SearchResult[]>
    async find(fileOrTxt: FilePath | string, findText: string, opts: SearchOptions): Promise<SearchResult[]> {
        
        const withinText = fileOrTxt instanceof FilePath ? await this.fs.readFile(fileOrTxt) : fileOrTxt;
        const regex = this.createRegex(findText, opts);

        const results: SearchResult[] = [];
        let result = regex.exec(withinText);
       
        while(!!result) {
            results.push(this.createSearchResult(result))
            result = regex.exec(withinText);
            if(!opts.all) {
                break;
            }
        }

        return results;
    }

    private createSearchResult(result: RegExpExecArray): SearchResult {
        return {
            index: result.index,
            length: result[0].length,
            text: result[0]
        }
    }

}
