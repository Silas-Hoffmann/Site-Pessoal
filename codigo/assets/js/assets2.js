document.addEventListener("DOMContentLoaded", function () {

    const nomerep = document.querySelector('#menu');
    if (!nomerep) {
        console.error('Elemento #menu não encontrado no DOM.');
    } else {
        getApiGitHubRep1();
    }
    function getApiGitHubRep1() {
        fetch('https://api.github.com/users/Silas-Hoffmann')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                let project = document.createElement('div');

                project.innerHTML = `
                    <h1 class="nome-principal"><a href="index.html">${data.name}</a></h1>
                `;

                nomerep.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    }

    const inforepo = document.querySelector('#informacoes');
    if (!inforepo) {
        console.error('Elemento #informacoes não encontrado no DOM.');
    } else {
        getApiGitHubRep1info();
    }

    function getApiGitHubRep1info() {
        fetch('https://api.github.com/users/Silas-Hoffmann/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();

                // Extrair e formatar a data de criação
                const createdAt = new Date(data[0].created_at);
                const day = String(createdAt.getDate()).padStart(2, '0');
                const month = String(createdAt.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
                const year = createdAt.getFullYear();
                const date = `${day}/${month}/${year}`;

                let project = document.createElement('div');

                project.innerHTML = `
                <section id="repositorio-canvas">
                    <h2 class="titulos">${data[0].name}</h2><!--título-->
                    <hr>
                    <div class="texto">
                        <p><h4>Descrição</h4><br>${data[0].description}</p>
                        <p><h4>Data de Criação</h4><br>${date}</p>
                        <p><h4>Linguagem principal</h4><br>${data[0].language}</p>
                        <p><h4>Link para o repositório</h4><br>${data[0].html_url}</p>
                    </div>
                </section>
            `;

                inforepo.appendChild(project);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    }

});