document.addEventListener("DOMContentLoaded", function () {

    const perfil = document.querySelector('#clonagem-perfil'); // passagem de informações do perfil
    if (!perfil) {
        console.error('Elemento #clonagem-perfil não encontrado no DOM.');
    } else {
        getApiGitHubPerfil();
    }
    function getApiGitHubPerfil() {
        fetch('https://api.github.com/users/Silas-Hoffmann')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                    <div class="perfil">
                        <img width="200" height="200" src="${data.avatar_url}" alt="Foto de perfil" class="imagem">
                        <div class="texto">
                            <p class="nome-colorido"><b>${data.name}</b></p>
                            <p class="texto-imagem">${data.bio}</p>
                            <p><b>Localização:</b> ${data.location}<br></p>
                            <div class="redes-sociais">
                                <a href="https://www.instagram.com/sih0revi?igsh=NmR4OG1sZTQxYzMy" target="_blank">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://x.com/S1horevi?t=OhKFIMJhzszZpxHG-_d8Cg&s=09" target="_blank">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="${data.blog}" target="_blank">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Silas-Hoffmann" target="_blank">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>`;

                perfil.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    } // fim da passagem de informações do perfil

    const nome = document.querySelector('#nome-nav'); // passagem de informações do nav
    if (!nome) {
        console.error('Elemento #nome-nav não encontrado no DOM.');
    } else {
        getApiGitHubNav();
    }
    function getApiGitHubNav() {
        fetch('https://api.github.com/users/Silas-Hoffmann')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                    <p>${data.name}</p>
                `;

                nome.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    } // fim da passagem de informações do nav



    const repos = document.querySelector('#repositorios'); // passagem de informações dos repositórios
    if (!repos) {
        console.error('Elemento #repositorios não encontrado no DOM.');
    } else {
        getApiGitHubrepos();
    }
    function getApiGitHubrepos() {
        fetch('https://api.github.com/users/Silas-Hoffmann/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <a href="index2.html"><img src="#" alt="imagem" class="img-repo1"></a><!--imagem-->
                            <div class="card-body">
                                <h5 class="card-title">${data[0].name}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <a href="index2.html"><img src="#" alt="imagem" class="img-repo1"></a><!--imagem-->
                            <div class="card-body">
                                <h5 class="card-title">${data[1].name}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <a href="index2.html"><img src="#" alt="imagem" class="img-repo1"></a><!--imagem-->
                            <div class="card-body">
                                <h5 class="card-title">${data[2].name}</h5>
                            </div>
                        </div>
                    </div>
                `;

                repos.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    } // fim da passagem de informações dos repositórios



});

/*<div class="col">
<div class="card">
<a href="index2.html"><img src="#" alt="imagem" class="img-repo1"></a><!--imagem-->
<div class="card-body">
  <h5 href="${data[0].html_url}" class="card-title">${data[0].full_name}</h5>
</div>
</div>
</div>*/