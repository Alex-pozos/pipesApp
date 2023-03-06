import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayuscula'
})

export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayusculas: boolean = true): string {
        return (enMayusculas) ?
            value.toUpperCase() :
            value.toLocaleLowerCase();
    }

}