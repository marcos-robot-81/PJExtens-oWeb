import { Routes } from '@angular/router';
import { Cenario } from './modolos/Asuntos/Cenario/Cenario';
import { Social } from './modolos/Asuntos/Social/Social';
import { Phishing } from './modolos/Asuntos/Phishing/Phishing';
import { Fraudes } from './modolos/Asuntos/Fraudes/Fraudes';
import { Clonado } from './modolos/Asuntos/Clonado/Clonado';
import { Ransomware } from './modolos/Asuntos/Ransomware/Ransomware';
import { Analise } from './modolos/Asuntos/Analise/Analise';
import { Defender } from './modolos/Asuntos/Defender/Defender';
import { Somos } from './modolos/somos/somos';

export const routes: Routes = [
    {
        path: '',
        title: 'Cenário Atual',
        component: Cenario
    },
    {
        path: 'social',
        title: 'Engenharia Social',
        component: Social
    },
    {
        path: 'phishing',
        title: 'Phishing',
        component: Phishing
    },
    {
        path: 'fraudes',
        title: 'Fraudes Online',
        component: Fraudes
    },
    {
        path: 'clonado',
        title: 'Sites Clonados',
        component: Clonado
    },
    {
        path: 'ransomware',
        title: 'Ransomware',
        component: Ransomware
    },
    {
        path: 'analise',
        title: 'Análise de Riscos',
        component: Analise
    },
    {
        path: 'defender',
        title: 'Como se Defender',
        component: Defender
    },
    {
        path: 'somos',
        title: 'Sobre Nós',
        component: Somos
    }
];


//<Bt rota="social"/>
//<footer>

//</footer>