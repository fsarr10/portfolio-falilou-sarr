# Portfolio Mouhamadou Falilou Sarr

Portfolio professionnel Next.js pour présenter le profil Full Stack, DevOps et cybersécurité de Mouhamadou Falilou Sarr.

## Installation

```bash
npm install
npm run dev
```

Le site tourne ensuite sur `http://localhost:3000`.

## Commandes

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
npm run capture:projects
```

## Contenu à modifier

Toutes les informations principales sont centralisées dans `src/data/portfolio.ts` :

- identité ;
- biographie ;
- coordonnées ;
- réseaux sociaux ;
- compétences ;
- formations ;
- expériences ;
- services ;
- réalisations ;
- chemin du CV.

Les valeurs comme `[AJOUTER LES LIENS DES DÉPÔTS GITHUB]` doivent être remplacées dans ce fichier.

## Ajouter ou remplacer un projet

Modifiez le tableau `projects` dans `src/data/portfolio.ts` en gardant la structure :

```ts
type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  category: string;
  technologies: string[];
  featured: boolean;
};
```

Ajoutez ensuite la capture dans `public/projects` et utilisez son chemin dans `image`.

## Ajouter un rapport PDF ou un dossier externe

Déposez vos rapports dans :

```text
public/reports
```

Puis modifiez le tableau `reports` dans `src/data/portfolio.ts` :

```ts
{
  title: "Titre du rapport",
  slug: "titre-du-rapport",
  description: "Courte description du document.",
  file: "/reports/mon-rapport.pdf",
  category: "Rapport PDF"
}
```

Chaque rapport affiché dans la section `Rapports` peut être consulté dans un nouvel onglet ou téléchargé.

Vous pouvez aussi utiliser un dossier externe :

```ts
{
  title: "Mes rapports",
  slug: "mes-rapports",
  description: "Dossier contenant mes rapports.",
  externalUrl: "https://drive.google.com/drive/folders/...",
  category: "Dossier Google Drive"
}
```

## Captures d'écran

Le script suivant ouvre les trois sites, prend des captures desktop 1440 x 900 et les enregistre en WebP :

```bash
npm run capture:projects
```

Si un site bloque la capture automatique, le script génère un placeholder WebP. Remplacez alors manuellement le fichier concerné dans `public/projects`.

## CV

Déposez le fichier PDF ici :

```text
public/documents/CV-Falilou-Sarr.pdf
```

Les boutons du site pointent déjà vers ce chemin.

## Formulaire de contact

Copiez `.env.example` vers `.env.local`, puis configurez au choix :

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

La route `/api/contact` valide les champs côté serveur avec Zod et garde les secrets hors du navigateur.

## Déploiement Vercel

1. Poussez le projet sur GitHub.
2. Importez le dépôt dans Vercel.
3. Ajoutez les variables d'environnement depuis `.env.example`.
4. Lancez un déploiement.

Build command : `npm run build`

Output : Next.js par défaut.
