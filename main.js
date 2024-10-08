    const codigos = [
        { title: 'Bateria JS', imgSrc: 'assets/image.png', altText: 'Bateria JS', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},
        { title: 'Relógio', imgSrc: 'assets/image.png', altText: 'Relógio', url: 'desafios/01-bateria/index.html'},

    ];

    const container = document.getElementById('codigos');

    codigos.forEach(codigo => {
        const codigoHTML = `
            <div class="col-6 col-md-4 col-xxl-3">
                <a href="${codigo.url}" class="text-decoration-none ">
                    <div class="card rounded-0 card-edit">
                        <img class="img-fluid" src="${codigo.imgSrc}" alt="${codigo.altText}">
                        <div class="card-header bg-black text-bg-dark">
                            <p class="text-center">${codigo.title}</p>
                        </div>
                    </div>  
                </a>
            </div>  
        `;
        container.innerHTML += codigoHTML;
    });