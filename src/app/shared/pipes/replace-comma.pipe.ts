import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceComma'
})
export class ReplaceComma implements PipeTransform {
    transform(value: any): string {
        /*la double exlcamation transforme un objet en boléen*/
        if (!!value) {
            return value.replace(',', '.')
        } else {
            return '';
        }
    }
}