# Project Overview:

This is a static website. It uses HTML, CSS, and a tiny bit of JS.
The HTML files (the pages) are in the project's root folder.

Most of the resources, such as pictures, documents, scripts, and CSS files, are in the `/src` folder.

## Directory Structure

```text
SeraTest/
├── HTML Pages (Root Directory)
│   ├── index.html              # The main homepage.
│   ├── Rolunk.html             # An "About Us" page.
│   ├── tevekenyseg.html        # A "Programs" page.
│   ├── Tamogatok.html          # A "Supporters" page.
│   ├── FerencEST.html          # A page dedicated to "FerencEST" events.
│   ├── Galeria.html            # The gallery page.
│   ├── Felveteli.html          # The admissions page.
│   ├── Dokumentumok.html       # Official documents and policies.
│   ├── diakbizotsag.html       # Student committee (DB) page.
│   ├── Felujitasok.html        # Information about renovations.
│   ├── szakmainap.html         # Professional Day events page.
│   ├── media.html              # Media and press coverage.
│   ├── EasterEGG.html          # Hidden easter egg page.
│   ├── boilerplate.html        # A template/starting point for new pages.
│   └── mobile_version.html     # A simplified version for mobile devices.
│
├── Arculati_Elemek/           # Contains branding and design assets.
│   ├── Logo/                   # Official logos in various formats.
│   ├── KIM_Logok/              # Sponsor logos.
│   └── NTP_Csomag-Logok/       # Sponsor logos.
│
├── src/                        # The main source directory for website assets.
│   ├── style/                  # Contains all CSS stylesheets.
│   │   ├── Core & Global Styles:
│   │   │   ├── layout-main.css     # Core layout styles used across multiple pages (navbar, footer, grids).
│   │   │   ├── style.css           # General reset rules and base typography.
│   │   │   ├── design.css          # Design-specific variables and overarching styles.
│   │   │   └── color_swatch.css    # Palette definition file.
│   │   ├── Third-Party:
│   │   │   └── font-awesome.min.css# Minified FontAwesome library for vector icons.
│   │   └── Page-Specific Layouts:
│   │       ├── layout-diakbizotsag.css  # Styles for the Student Committee page.
│   │       ├── layout-Dokumentumok.css  # Grid layout for official documents.
│   │       ├── layout-EasterEGG.css     # Specialized styles for the hidden easter egg page.
│   │       ├── layout-felveteli.css     # Layout for application forms and requirements.
│   │       ├── layout-Felujitasok.css   # Image-heavy layouts for renovations.
│   │       ├── layout-FerencEST.css     # Card-based layout with gradients and animations.
│   │       ├── layout-Galeria.css       # Photo viewer grid and thumbnail layouts.
│   │       ├── layout-kapcsolat.css     # Contact page styles.
│   │       ├── layout-media.css         # Styles for media coverage.
│   │       ├── layout-Rolunk.css        # Styles for the "About Us" page.
│   │       ├── layout-RolunkTest.css    # Likely a draft layout for the "About Us" page.
│   │       ├── layout-szakkoli.css      # Styles for szakkollégium pages.
│   │       ├── layout-szakmainap.css    # 3-column card-based grid for Professional Day.
│   │       └── layout-tevekenyseg.css   # Layout for Facebook embeds and program lists.
│   │
│   ├── scripts/                # Holds JavaScript files.
│   │   ├── SANYI.js            # General utilities or Easter egg logic.
│   │   ├── slideshow.js        # Logic for image carousels.
│   │   ├── gallery.js          # Logic for the photo gallery.
│   │   ├── NewGallery.js       # Enhanced logic for the photo gallery with keyboard navigation.
│   │   └── db-nav.js           # Navigation logic for the student committee page.
│   │
│   ├── pictures/               # Stores all image assets.
│   │   ├── honlap_kepek/       # General website images (headers, icons).
│   │   │   ├── DB/                     # Images related to the Student Committee.
│   │   │   ├── hova-tova/              # Images related to the "Hovatovább" event.
│   │   │   ├── slidesPics/             # Images specifically used for slideshows.
│   │   │   ├── MUEA_logo_hu/           # Different versions of the MOL Új Európa Alapítvány logo.
│   │   │   └── mobil_version/          # Images optimized or used for the mobile version of the website.
│   │   ├── gallery/            # Photos for the gallery page. Organized into subfolders by year or event type:
│   │   │   ├── Years: 2014, 2015, 2016, 2017, 2018, 2021, 2023, 2024, 2024.09
│   │   │   ├── 2024 Events: 24_ropi, 24_csocso, 24_ismest, 24_koszoru, 24_beerpong, 24_pingpong, 24_ferencest, 24_mentorest, 24_venisancte
│   │   │   ├── 2025 Events: 25_darc, 25_bojte, 25_assisi, 25_csocso, 25_farsang, 25_szaknap, 25_lelkigyak, 25_mentorest, 25_padlaspince
│   │   │   ├── Other Categories: sport2, Archivum
│   │   │   └── Utility Scripts: resizeAll.sh (Likely used to batch resize gallery images).
│   │   ├── feluj/              # Photos of renovations.
│   │   ├── FerencEST/          # Photos from FerencEST events.
│   │   ├── szaknap/            # Photos from Professional Days.
│   │   └── SlideShow/          # Images used in carousels.
│   │
│   ├── documents/              # Publicly available files (PDFs, DOCX).
│   │   ├── SzMSz.pdf           # Organizational rules.
│   │   ├── hazirend.pdf        # House rules.
│   │   ├── Jelentkezesi lap*   # Application forms.
│   │   └── Adatkezelesi*       # Privacy policies.
│   │
│   └── svg/                    # Scalable Vector Graphics.
│       └── kotta.svg           # Musical notes graphic.
│
├── Configuration & Build Files
│   ├── package.json            # Node.js dependencies (if any build tools are used).
│   ├── .gitignore              # Git ignore rules.
│   └── performance/            # Likely contains performance testing results or scripts.
│
└── Markdown Documents (Planning & Drafts)
    ├── README.md               # General project information.
    ├── tasks.md                # To-do lists and project tasks.
    └── *.md                    # Drafts or content outlines for various pages (e.g., rolunk.md, galeria.md).
```

## Key Architectural Notes

1. **CSS Architecture:** The project uses a modular CSS approach. `layout-main.css` holds common structural styles (like
   the grid layout, navbar, and footer), while page-specific styles are separated into files like `layout-szakkoli.css`,
   `layout-felveteli.css`, etc.
2. **Asset Management:** Images, scripts, and stylesheets are strictly organized within the `/src` folder, while the
   HTML entry points remain at the root level.
3. **Responsive Design:** The CSS relies heavily on CSS Grid (`display: grid`) and media queries (
   `@media only screen and (max-width: 800px)`) to adapt layouts for mobile devices.
4. **Static Nature:** The site is purely static (HTML/CSS/JS). There is no backend server or database; all content is
   hardcoded into the HTML files or loaded via JavaScript arrays.