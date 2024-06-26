document.addEventListener("DOMContentLoaded", function () {
    const perfil = document.querySelector('#clonagem-perfil');

    if (!perfil) {
        console.error('Elemento #clonagem-perfil não encontrado no DOM.');
        return;
    }

    function getApiGitHub() {
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
    }

    getApiGitHub();
});
