document.addEventListener("DOMContentLoaded", function () {

    const perfil = document.querySelector('#clonagem-perfil');
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

    const nome = document.querySelector('#nome-nav');
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

    //------------------------------------------------------
    //---------------------Repositórios---------------------
    //------------------------------------------------------
    const repos = document.querySelector('.card-body1');
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
                    <h5 class="card-title">${data[0].name}</h5>`;

                repos.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    } // fim da passagem de informações dos repositórios

    const repos2 = document.querySelector('.card-body2');
    if (!repos2) {
        console.error('Elemento #repositorios não encontrado no DOM.');
    } else {
        getApiGitHubrepos2();
    }
    function getApiGitHubrepos2() {
        fetch('https://api.github.com/users/Silas-Hoffmann/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                    <h5 class="card-title">${data[1].name}</h5>`;

                repos2.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    } // fim da passagem de informações dos repositórios

    const repos3 = document.querySelector('.card-body3');
    if (!repos3) {
        console.error('Elemento #repositorios não encontrado no DOM.');
    } else {
        getApiGitHubrepos3();
    }
    function getApiGitHubrepos3() {
        fetch('https://api.github.com/users/Silas-Hoffmann/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                    <h5 class="card-title">${data[2].name}</h5>`;

                repos3.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    } // fim da passagem de informações dos repositórios


    //------------------------------------------------------
    //------------------------Colegas-----------------------
    //------------------------------------------------------
    const amig1 = document.querySelector('#amigos');
    if (!amig1) {
        console.error('Elemento #amigos não encontrado no DOM.');
    } else {
        getJsonInfoFriends1();
    }
    function getJsonInfoFriends1() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                <p><a href="${data.friends[0].URLGitHub}"><img src="${data.friends[0].imageURL}" alt="Arthur Carvalho" class="carv"></p>
      `;
                amig1.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }

    const amig2 = document.querySelector('#amigos');
    if (!amig2) {
        console.error('Elemento #amigos não encontrado no DOM.');
    } else {
        getJsonInfoFriends2();
    }
    function getJsonInfoFriends2() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                <p><a href="${data.friends[1].URLGitHub}"><img src="${data.friends[1].imageURL}" alt="Arthur Soares" class="rolla"></p>
      `;
                amig2.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }

    const amig3 = document.querySelector('#amigos');
    if (!amig3) {
        console.error('Elemento #amigos não encontrado no DOM.');
    } else {
        getJsonInfoFriends3();
    }
    function getJsonInfoFriends3() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                <p><a href="${data.friends[2].URLGitHub}"><img src="${data.friends[2].imageURL}" alt="Miguel" class="miguel"></p>
      `;
                amig3.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }

    const amig4 = document.querySelector('#amigos');
    if (!amig4) {
        console.error('Elemento #amigos não encontrado no DOM.');
    } else {
        getJsonInfoFriends4();
    }
    function getJsonInfoFriends4() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                <p><a href="${data.friends[3].URLGitHub}"><img src="${data.friends[3].imageURL}" alt="Vitor" class="vitor"></a></p>
      `;
                amig4.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }

    //------------------------------------------------------
    //------------Conteúdos Sugeridos(Carrossel)------------
    //------------------------------------------------------
    //${data.sugeridos[0].imageURL}


    const contentsuger1 = document.querySelector('.img-sugeridos-1');
        if (!contentsuger1) {
            console.error('Elemento .img-sugeridos-1 não encontrado no DOM.');
        } else {
            getJsonInfoSuger1();
        }
    function getJsonInfoSuger1() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
    
                let data = await res.json();
                let project = document.createElement('div');
    
                project.innerHTML = `
                    <img src="${data.sugeridos[0].imageURL}" alt="Descrição da imagem">
          `;
          contentsuger1.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }
    
    const contentsuger2 = document.querySelector('.img-sugeridos-2');
        if (!contentsuger2) {
            console.error('Elemento .img-sugeridos-2 não encontrado no DOM.');
        } else {
            getJsonInfoSuger2();
        }
    function getJsonInfoSuger2() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
    
                let data = await res.json();
                let project = document.createElement('div');
    
                project.innerHTML = `
                    <img src="${data.sugeridos[1].imageURL}" alt="Descrição da imagem">
          `;
          contentsuger2.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }
    
    const contentsuger3 = document.querySelector('.img-sugeridos-3');
        if (!contentsuger3) {
            console.error('Elemento .img-sugeridos-3 não encontrado no DOM.');
        } else {
            getJsonInfoSuger3();
        }
    function getJsonInfoSuger3() {
        fetch('assets/js/db/db.json')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
    
                let data = await res.json();
                let project = document.createElement('div');
    
                project.innerHTML = `
                    <img src="${data.sugeridos[2].imageURL}" alt="Descrição da imagem">
          `;
          contentsuger3.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Json:', error);
            });
    }

});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializar o carrossel
showSlide(currentSlide);