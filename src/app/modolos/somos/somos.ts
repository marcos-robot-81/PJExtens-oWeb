import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: "Somos",
    templateUrl: "./somos.html",
    styleUrls: ['./../../../assets/css/global.css','./somos.css'],
    imports: [NgOptimizedImage]
}) export class Somos {
IM = 'assets/images/servido1.jpg';
at = "Imagem representando o projeto Segurança na Web";
}