## Para rodar esse projeto na sua maquina
Para conseguir baixar e executar esse projeto angular e outros, quando da um git pull ou git clone

Ele nao vira por padrao com as ferramentas necessarias, pois isso esta definido para nao vir, pelo NG (Angular) .gitIgnore

Necessario rodar o comando (dentro do projeto) com Node e Angular instalados e configurados 
    npm install


## Dependencias e por que
"rxjs": "~7.8.0",
    Para utilizar em OBSERVABLE
    e Requisições HTTP
    
"tslib": "^2.3.0",
    Biblioteca do Typescript

"zone.js": "~0.14.10"
    Propria do Angular

## Instalando Angular Material para conseguir utilizar a maioria dos recursos que ja nao vem como Default
    ng add @angular/material 

        ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
        ? Set up global Angular Material typography styles? yes
        ? Include the Angular animations module? Include and enable animations

## Roteamento automatico
Em vez de fazer o roteamento na mao
    Tem um comando que junto com a criação de um modulo, ele ja traça o roteamento

        ng generate module courses --routing

Junto a isso, vamos ter um Lazing Loading, vendo direto na documentação do Angular (Angular.IO)

## Importando APIs de Componentização externas
Quando mexendo com mais components e paginas é importante ressaltar que podemos criar um modulo pra cada um deles 
    Quando feito isso e queremos importar algum elemento/component de alguem que ja o criou

Podemos incluir o link de import daquele eleemento, dentro do modulo raiz daquele component 

No caso, quero criar um component tabela de Angular material,   
    Vou na Aba de API da pagina deles, pego o link
        API reference for Angular Material table
        > import {MatTableModule} from '@angular/material/table';
        
Em vez de App.module, colo dentro de Courses.module

Dessa forma, ja consigo utilizar a Tag Criada com essa biblioteca

## Criando parte para os imports do Angular Material
Quando utilizamos muitos imports de terceiros como Angular Material
    Acaba extendendo muito os imports, nao é tao simples como em java "java.util.*"

    Entao para isso, podemos criar um MODULO somente para esses imports e de la fazer a abstração
    
    Alem disso, eles serao chamados em mais de um se quiser

Vamos criar um Modulo e deletar os imports desnecessarios
    Para entender o que é ou nao necessario,
        Vamos entender que Imports  COMMUN é para organizar a aplicação 
        Entender que Declarations de Imports do NG MODULE é para criar components 

    Eo inves disso, vamos utilizar o EXPORTS pois vamos exportar e facilitar o uso das bibliotecas de Material.Angular.IO

>>> ! Veja em Shared/App.Material
    @NgModule({
        exports:[
            MatTableModule,
            MatCardModule,
            MatToolbarModule
        ]
    })

Em seguida quando em Courses module, nao precisamos mais declarar os imports e somente o de Material, veja
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialModule
    ]

## Iniciando manipulação com HTTP (COMMON HTTP)
Como vamos mexer com APi do Spring nao criada ainda, pois vamos primeiro "organizar o front"
Em seguida receber o back

NO COURSES SERVICE 
    import { HttpClient } from '@angular/common/http'
    constructor(private httpClient:HttpClient) { }

Basicamente, quando manipulação com API ou recursos HTTP, uma melhor maneira é por uma classe de Serviços, 

Junto a isso, como ja inserido isso em Services, ainda necessario inserí-lo dentro de APP MODULE
	HttpClientModule, feito isso ele importa automagicamente Rsrs

## Note O Observable em Courses e em HTML que ele nao esta fazendo um *ngFor
Essa tabela do Angular Material, ela trata os dados, ja tendo em mente que vira 
    ou de Array, 
    ou de Observable

Sendo assim, ele automaticamente ja esta tratando e nos so precisamos devolver com um OBSERVABLE  Diamond ou Generics(em java)  <> De Courses 
