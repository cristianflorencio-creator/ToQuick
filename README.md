# TOQUICK — Data Engineering, Data Science & Business Intelligence

Site institucional one-page, responsivo e preparado para GitHub Pages.

## Estrutura

```text
toquick-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   └── dashboard.jpg
└── README.md
```

## Personalização antes da publicação

### Logo
Substitua `images/logo.png` pelo arquivo oficial da marca. O site atual utiliza uma marca textual/HTML no header e footer, portanto funciona mesmo sem a imagem.

### Dashboard
O hero possui uma plataforma de dados construída em HTML/CSS. Se preferir utilizar uma imagem real, substitua essa área por `images/dashboard.jpg`.

### Contatos
Substitua no `index.html`:
- `seu-email@exemplo.com`
- `+55 (00) 00000-0000`
- `https://www.linkedin.com/`

Também altere `seu-email@exemplo.com` em `js/script.js`.

### GitHub Pages

1. Crie um repositório, por exemplo `toquick-site`.
2. Envie todos os arquivos para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

### Git

```bash
git init
git add .
git commit -m "Cria site institucional TOQUICK"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/toquick-site.git
git push -u origin main
```

## Formulário

O formulário não possui backend. O envio abre o aplicativo de e-mail do visitante usando `mailto:`. Para envio automático, será necessário integrar posteriormente um serviço externo ou backend.

## Identidade visual

As cores estão centralizadas nas variáveis do início de `css/style.css`, incluindo o gradiente Azul-Índigo → Roxo.

## Conteúdo

O site não inclui clientes, cases, certificações, prêmios, parceiros, depoimentos ou resultados financeiros inventados. Indicadores do painel são explicitamente ilustrativos.
