import { Component, Input} from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "Bt",
    templateUrl: "./Bt.html",
    styleUrl: './Bt.css',
    imports: [RouterLink]
}) export class Bt {
    @Input() rota: string = "rota";
    @Input() rota2: string = "rota2";
    
}