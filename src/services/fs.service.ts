import { FilePath, Injectable } from 'bloxd';
import * as fs from 'fs';

@Injectable()
export class FsService {

    constructor() { }

    async readFile(path: FilePath): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(path.absolute, (err, file) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(file.toString());
            });
        })
    }

    async writeFile(path: FilePath, content: string): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.writeFile(path.absolute, content, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve()
            });
        });
    }

}
