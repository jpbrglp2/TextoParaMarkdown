let container = document.getElementsByClassName('container');
let select = document.getElementById('select');
let space = document.getElementById('ok');
let preview = document.getElementById('preview');
let contador = 0;

function mudarTema() {
    const tema = document.getElementById('toggleTheme');
    document.body.classList.toggle('dark-mode');
}

function Submeter() {
    let input = document.getElementById('input').value;
    let form = document.getElementById('form');
    if (input.trim() === "") {
        alert("Digite algo!")
        return;
    } else {
        switch (select.value) {
            case "titulo":
                let titulo = document.createElement('p');
                titulo.innerHTML = "#" + input;
                space.appendChild(titulo);
                let h1 = document.createElement('h1');
                h1.innerHTML = input;
                preview.appendChild(h1);
                break;
            case "subtitulo":
                let subtitulo = document.createElement('p');
                subtitulo.innerHTML = "##" + input;
                space.appendChild(subtitulo);
                let h2 = document.createElement('h2');
                h2.innerHTML = input;
                preview.appendChild(h2);
                break;
            case "paragrafo":
                let paragrafo1 = document.createElement('p');
                paragrafo1.innerHTML = input;
                space.appendChild(paragrafo1);
                paragrafo1 = document.createElement("p");
                paragrafo1.innerHTML = input;
                preview.appendChild(paragrafo1);
                break;
            case "link":
                let link = document.createElement('p');
                link.innerHTML = "[Visite o site]" + "(" + input + ")";
                space.appendChild(link);
                let a = document.createElement('a');
                a.href = input;
                a.textContent = input;
                a.target = "_blank";
                preview.appendChild(a);
                break;
            case "ul":
                let ul = document.createElement('p');
                ul.innerHTML = "-" + input;
                space.appendChild(ul);
                let ulPreview = document.createElement('ul');
                ulPreview.innerHTML = "." + input;
                preview.appendChild(ulPreview);
                break;
            case "ol":
                contador++;
                let ol = document.createElement('p');
                ol.innerHTML = contador + "." + input;
                space.appendChild(ol);
                let olPreview = document.createElement('ol');
                olPreview.innerHTML = contador + "." + input;
                preview.appendChild(olPreview)
                break;
        }
        form.reset();
    }

}

function Copiar() {
    const text = space.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Conteúdo copiado com sucesso!")
    })
}
