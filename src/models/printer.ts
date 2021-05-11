import * as chalk from 'chalk';

export class Printer {

    static replaceAll(withinText: string, findText: string | RegExp, withText: string) {
        const rgx = new RegExp(findText, 'g');
        let result = rgx.exec(withinText);
        while(result) {
            withinText = withinText.replace(rgx,withText);
            result = rgx.exec(withText);
        }
        return withinText;
    }

    private textValue: string;

    constructor(txt: string) {
        this.textValue = txt;
    }

    append(txt: any) {
        this.textValue += txt;
        return this;
    }

    forEach<T>(list: T[], fn: (val: T, printer: Printer) => any) {
        list.forEach(val => fn(val, this));
        return this;
    }

    newLine(txt?: string) {
        this.textValue += `\n${txt || ''}`;
        return this;
    }

    newLines(text: any[]) {
        this.textValue += text.map(txt => `\n${text}`);
        return this;
    }

    bold(txt: any) {
        this.textValue += chalk.whiteBright(txt);
        return this;
    }

    yellowBright(txt: any) {
        this.textValue += chalk.yellowBright(txt);
        return this;
    }

    if(cond: boolean, whenTrue: (printer: Printer) => any) {
        if(cond) {
            whenTrue(this)
        }
        return this;
    }

    text() {
        return this.textValue;
    }

    log() {
        console.log(this.textValue);
        return this;
    }

    stdout(): Promise<Printer> {
        return new Promise((resolve, reject) => {
            process.stdout.write(this.textValue, (err) => {
                if(err) {
                    reject(err)
                    return;
                }
                resolve(this);
            })
        })
    }

    async stderr(): Promise<Printer> {
        return new Promise((resolve, reject) => {
            process.stderr.write(this.textValue, (err) => {
                if(err) {
                    reject(err)
                    return;
                }
                resolve(this);
            })
        })
    }
    
}