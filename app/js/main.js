
const myName_Element = document.getElementById('my-name');
const projects_content_Element = document.getElementById("projects-content");
const languages_Element = document.getElementById("languages");
const frameworks_Element = document.getElementById("frameworks");
const editors_Element = document.getElementById("editors");
const databases_Element = document.getElementById("databases");
const os_element = document.getElementById("os");
const others_Element = document.getElementById("others");

const names = ['Yanni Ajil', 'Stupefix'];

const projects = [
    {
        'name': "Mario Wonderland",
        'screenshot': 'Mario_Wonderland',
        'id':'mario-wonderland',
        'badges': ['C', 'GBDK'],
        'github':'Mario-Wonderland',
        'demo':'',
        'description': 'idk what to say ._.'
    },
    {
        'name': "Openrefuge",
        'screenshot': 'Openrefuge',
        'id':'openrefuge',
        'badges': ['PHP','CSS','JavaScript','Openmairie'],
        'github':'Openrefuge',
        'demo':'https://whadafoxdoin.fr/Openrefuge/',
        'description': 'idk what to say ._.'
    },
    {
        'name': "SP-Vendeurs",
        'screenshot': 'spvendeurs',
        'id':'sp-vendeurs',
        'badges': ['PHP','SQL'],
        'github':'SP-vendeur',
        'demo':'https://whadafoxdoin.fr/SP-vendeur/mvc-sp',
        'description': 'idk what to say ._.'
    },
    {
        'name': "Pokedexweb",
        'screenshot': 'PokedexWeb',
        'id':'pokedexweb',
        'badges': ['JavaScript','Node.JS','Nodemon'],
        'github':'pokedexweb',
        'demo':'https://whadafoxdoin.fr/pokedexwebFront/',
        'description': 'idk what to say ._.'
    },
];

const languages = [
    {'name':'HTML','logo': 'HTML','link':'https://developer.mozilla.org/fr/docs/Web/HTML'},
    {'name':'CSS','logo': 'CSS','link':'https://developer.mozilla.org/fr/docs/Web/CSS'},
    {'name':'JavaScript','logo': 'JavaScript','link':'https://developer.mozilla.org/fr/docs/Web/JavaScript'},
    {'name':'PHP','logo': 'PHP','link':'https://www.php.net/'},
    {'name':'C', 'logo': 'C','link':'https://devdocs.io/c/'},
    {'name':'C#', 'logo': 'C_sharp','link':'https://dotnet.microsoft.com/fr-fr/languages/csharp'},
    {'name':'Markdown','logo': 'Markdown','link':'https://www.markdownguide.org/basic-syntax/'},
];
const frameworks = [
    {'name':'Node.js','logo':'Node_js','link':'https://nodejs.org/en'},
    {'name':'Nodemon','logo':'Nodemon','link':'https://nodemon.io/'},
    {'name':'Express.js','logo':'Express_js','link':'https://expressjs.com/fr/'},
    {'name':'Openmairie','logo':'Openmairie','link':'http://www.openmairie.org/'},
    {'name':'GBDK','logo':'GBDK','link':'https://github.com/gbdk-2020/gbdk-2020'}
];
const editors = [
    {'name':'Visual studio code', 'logo':'VScode','link':'https://code.visualstudio.com/'},
    {'name':'PHPStorm', 'logo':'PHPStorm','link':'https://www.jetbrains.com/fr-fr/phpstorm/'},
    {'name':'WebStorm', 'logo':'WebStorm','link':'https://www.jetbrains.com/fr-fr/webstorm/'},
    {'name':'Unity', 'logo':'Unity','link':'https://unity.com/fr'}
];
const databases = [
    {'name':'Mysql','logo':'Mysql','link':'https://www.mysql.com/fr/'},
    {'name':'Postgresql','logo':'Postgresql','link':'https://www.postgresql.org/'}
];

const os = [
    {'name':'Windows','logo':'Windows','link':'https://www.microsoft.com/fr-fr/windows'},
    {'name':'Debian','logo':'Debian','link':'https://www.debian.org/index.fr.html'},
    {'name':'Proxmox','logo':'Proxmox','link':'https://www.proxmox.com/en/'},
    {'name':'Arch Linux','logo':'Arch_Linux','link':'https://archlinux.org/'},
];

const others = [
    {'name':'Postman','logo':'Postman','link':'https://www.postman.com/'},
    {'name':'Looping','logo':'Looping','link':'https://www.looping-mcd.fr/'},
    {'name':'Figma','logo':'Figma','link':'https://www.figma.com/fr-fr/'},
    {'name':'Git','logo':'Git','link':'https://git-scm.com/'},
    {'name':'Github','logo':'Github','link':'https://github.com/?locale=fr-fr'},
    {'name':'BGB','logo':'BGB','link':'https://bgb.bircd.org/'},
]

function loadProjects(){

    projects.map((project) => {
        let content = `<div class="card project ">
                                <div class="screenshot">
                                    <img id="${project.id}" src="app/img/screenshots/${project.screenshot}.png" class="" alt="...">
                                </div>            
                                <div class="project-links">
                                    <h3>${project.name}</h3>
                                        <div>
                                            <a href="https://github.com/pingasinator/${project.github}" target="_blank" class="project-link">
                                                <img src="app/img/logos/Github.png" alt="github">
                                            </a>
                                            <a href="${project.demo}" target="_blank" class="project-link">
                                                <img src="app/img/logos/redirect.png">
                                            </a>
                                        </div>
                                    </div>
                                    <p>${project.description}</p>
                                    <div class="badges">`;

        project.badges.map((badge) => {
            content += `<div class="badge">${badge}</div>`;
        });

        content +=`</div>
                        
                   </div>`;

        projects_content_Element.innerHTML += content;
    })
}

function loadTools(){

    languages.map((language) => {
        languages_Element.innerHTML += `<a href="${language.link}" target="_blank" class="tool">
                                            <div class="tool-logo">
                                                <img src="app/img/logos/${language.logo}.png" alt="${language.name}">
                                            </div>
                                            <span>${language.name}</span>
                                        </a>`;
    });

    frameworks.map((framework) => {
        frameworks_Element.innerHTML += `<a href="${framework.link}" target="_blank" class="tool">
                                            <div class="tool-logo">
                                                <img src="app/img/logos/${framework.logo}.png" alt="${framework.name}">
                                            </div>
                                            <span>${framework.name}</span>
                                        </a>`;
        console.log(framework.logo + ".png");
    });

    editors.map((editor) => {
        editors_Element.innerHTML += `<a href="${editor.link}" target="_blank" class="tool">
                                            <div class="tool-logo">
                                                <img src="app/img/logos/${editor.logo}.png" alt="${editor.name}">
                                            </div>
                                            <span>${editor.name}</span>
                                        </a>`;
    });

    databases.map((database) => {
        databases_Element.innerHTML += `<a href="${database.link}" target="_blank" class="tool">
                                            <div class="tool-logo">
                                                <img src="app/img/logos/${database.logo}.png" alt="${database.name}">
                                            </div>
                                            <span>${database.name}</span>
                                        </a>`;
    });

    os.map((value) => {
        os_element.innerHTML += `<a href="${value.link}" target="_blank" class="tool">
                                            <div class="tool-logo">
                                                <img src="app/img/logos/${value.logo}.png" alt="${value.name}">
                                            </div>
                                            <span>${value.name}</span>
                                        </a>`;
    })

    others.map((other) => {
        others_Element.innerHTML += `<a href="${other.link}" target="_blank" class="tool" >
                                            <div class="tool-logo">
                                                <img src="app/img/logos/${other.logo}.png" alt="${other.name}">
                                            </div>
                                            <span>${other.name}</span>
                                        </a>`;
    });

}

 async function loadMyName(){
    for(let i = 0; i<names[0].length; i++){
        myName_Element.innerText += names[0][i];
        await timer(75);
    }
}

const timer = (ms) => new Promise(res => setTimeout(res, ms))

function goToRubrik(rubrikName){
    rubrikTarget = document.getElementById(rubrikName);
    rubrikTarget.scrollIntoView({behavior: 'smooth'});
}

function Hayaaa(){
    const hayaaa = new Audio('app/sounds/hayaaa.mp3');
    hayaaa.play();
}

loadMyName();
loadProjects();
loadTools();