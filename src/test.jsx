< !DOCTYPE html >

    <html class="light" lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>My Certificates | DevPortfolio</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                "colors": {
                "surface-dim": "#dadada",
            "on-primary-fixed-variant": "#474746",
            "on-primary-fixed": "#1c1b1b",
            "surface-container-high": "#e8e8e8",
            "surface-tint": "#5f5e5e",
            "secondary": "#5e5e5e",
            "on-secondary": "#ffffff",
            "outline-variant": "#c4c7c7",
            "on-surface-variant": "#444748",
            "primary-fixed-dim": "#c8c6c5",
            "on-tertiary": "#ffffff",
            "on-background": "#1a1c1c",
            "secondary-fixed": "#e4e2e2",
            "on-tertiary-fixed": "#001a43",
            "error-container": "#ffdad6",
            "inverse-primary": "#c8c6c5",
            "on-primary-container": "#858383",
            "on-surface": "#1a1c1c",
            "tertiary-fixed-dim": "#aec6ff",
            "on-primary": "#ffffff",
            "on-tertiary-container": "#2e7fff",
            "surface-container-highest": "#e2e2e2",
            "tertiary": "#000000",
            "on-error": "#ffffff",
            "surface-container-low": "#f3f3f3",
            "surface-container-lowest": "#ffffff",
            "secondary-fixed-dim": "#c7c6c6",
            "on-tertiary-fixed-variant": "#004397",
            "tertiary-container": "#001a43",
            "error": "#ba1a1a",
            "surface-container": "#eeeeee",
            "background": "#f9f9f9",
            "outline": "#747878",
            "inverse-on-surface": "#f1f1f1",
            "tertiary-fixed": "#d8e2ff",
            "on-error-container": "#93000a",
            "surface-variant": "#e2e2e2",
            "primary-container": "#1c1b1b",
            "primary-fixed": "#e5e2e1",
            "inverse-surface": "#2f3131",
            "surface-bright": "#f9f9f9",
            "primary": "#000000",
            "secondary-container": "#e1dfdf",
            "surface": "#f9f9f9",
            "on-secondary-fixed": "#1b1c1c",
            "on-secondary-container": "#626262",
            "on-secondary-fixed-variant": "#464747"
                    },
            "borderRadius": {
                "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
                    },
            "spacing": {
                "gutter": "24px",
            "container-max": "1200px",
            "margin-mobile": "20px",
            "stack-md": "16px",
            "stack-lg": "32px",
            "stack-sm": "8px",
            "section-gap": "80px"
                    },
            "fontFamily": {
                "body-sm": ["Inter"],
            "label-mono": ["Geist"],
            "display-lg-mobile": ["Inter"],
            "headline-md": ["Inter"],
            "display-lg": ["Inter"],
            "body-base": ["Inter"]
                    },
            "fontSize": {
                "body-sm": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
            "label-mono": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}],
            "display-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
            "headline-md": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
            "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
            "body-base": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}]
                    }
                },
            },
        }
        </script>
        <style>
            .material-symbols-outlined {
                font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
            .card-lift-hover {
                transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.2, 1, 0.3, 1);
        }
            .card-lift-hover:hover {
                transform: translateY(-8px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.04);
        }
            .image-zoom-container img {
                transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }
            .card-lift-hover:hover .image-zoom-container img {
                transform: scale(1.05);
        }
        </style>
    </head>
        <body class="bg-surface text-on-surface font-body-base">
            <!-- TopNavBar -->
            <header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline flat no shadows">
                <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex justify-between items-center h-16">
                    <div class="text-headline-md font-headline-md text-primary dark:text-primary-fixed tracking-tighter">
                        DevPortfolio
                    </div>
                    <nav class="hidden md:flex items-center gap-stack-lg">
                        <a class="font-body-base text-body-base text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Work</a>
                        <a class="font-body-base text-body-base text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Skills</a>
                        <a class="font-body-base text-body-base text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Labs</a>
                        <a class="font-body-base text-body-base text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">About</a>
                    </nav>
                    <div class="flex items-center gap-stack-md">
                        <button class="hidden sm:flex items-center text-secondary hover:text-primary transition-colors">
                            <span class="material-symbols-outlined" data-icon="mail">mail</span>
                        </button>
                        <button class="hidden sm:flex items-center text-secondary hover:text-primary transition-colors">
                            <span class="material-symbols-outlined" data-icon="terminal">terminal</span>
                        </button>
                        <button class="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-80 active:scale-95 transition-all">
                            Resume
                        </button>
                    </div>
                </div>
            </header>
            <main class="pt-24 pb-section-gap">
                <section class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
                    <!-- Section Header -->
                    <div class="mb-stack-lg">
                        <h1 class="font-display-lg text-display-lg md:text-display-lg mb-4 text-primary tracking-tight">My Certificates</h1>
                        <p class="font-body-base text-body-base text-secondary max-w-2xl">
                            Verified achievements and certifications in data, development, and technology.
                        </p>
                    </div>
                    <!-- 2-Column Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                        <!-- Certificate Card 1 -->
                        <article class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden card-lift-hover">
                            <div class="aspect-video image-zoom-container overflow-hidden">
                                <img alt="Google Data Analytics Professional Certificate" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxuGE6_Mk6qxF8sqlutMxBptiZaRSER3HlRJp5M_g_MkJwO-_ciyKBPckzscZJwoTuP3c5Aq2h5mUd7CYEoO_js18_c3VQ0Z7I_C_VGaydWMnjept-Dq2eR592lbitvveRfMfQcbNDKUaEN0QYHxO2UeaxDUnJ8JATULute8Dg_wURDdBngOZqW4eGUwQIsqJl5EvbxrRyTT7DGxvA3e0KomVgRVbmeRCGz_03yiDmKIgXGVecIce-SPwbSvoHJ7FEIT1ezBY6O8H" />
                            </div>
                            <div class="p-6 flex flex-col gap-4">
                                <div>
                                    <h3 class="font-headline-md text-headline-md text-primary mb-1">Google Data Analytics Professional Certificate</h3>
                                    <p class="font-body-sm text-body-sm text-on-secondary-container">
                                        ID: <span class="font-label-mono">GDA-X92-2024</span> • Google
                                    </p>
                                </div>
                                <div class="flex flex-wrap items-center gap-stack-md mt-2">
                                    <button class="bg-primary text-on-primary px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-85 transition-opacity flex items-center gap-2">
                                        Verify Credential
                                        <span class="material-symbols-outlined text-[18px]" data-icon="verified">verified</span>
                                    </button>
                                    <button class="bg-transparent border border-outline-variant text-primary px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface-container-low transition-colors">
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </article>
                        <!-- Certificate Card 2 -->
                        <article class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden card-lift-hover">
                            <div class="aspect-video image-zoom-container overflow-hidden">
                                <img alt="Meta Front-End Developer Professional Certificate" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_zdhYF5Zrpdgs5YYUmh6DxgPzMdBlaCfOE7mmkRzRFwCKnHlm-yzgifLtCxnZhuQ_gvkXi1CRfhD22GtNCPxJtgO4Aa8fXK0SoSp9o1e_A0hpV9MwN9-ysYX5G_nE8XsJ7TQIuDtYs9tamr6gWH-syU4hVLc83Z6jHrbTHcCyJCEM10NKRkBwuWommaFS1twNYrwFj2zbUYbgHq7ByZ7l5onzydnM_XH_zaZluXbMtnF5q85XxlgVjeNOoO1dPFUEes2hz_jOyIT" />
                            </div>
                            <div class="p-6 flex flex-col gap-4">
                                <div>
                                    <h3 class="font-headline-md text-headline-md text-primary mb-1">Meta Front-End Developer Professional Certificate</h3>
                                    <p class="font-body-sm text-body-sm text-on-secondary-container">
                                        ID: <span class="font-label-mono">META-FE-551</span> • Meta
                                    </p>
                                </div>
                                <div class="flex flex-wrap items-center gap-stack-md mt-2">
                                    <button class="bg-primary text-on-primary px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-85 transition-opacity flex items-center gap-2">
                                        Verify Credential
                                        <span class="material-symbols-outlined text-[18px]" data-icon="verified">verified</span>
                                    </button>
                                    <button class="bg-transparent border border-outline-variant text-primary px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface-container-low transition-colors">
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <!-- Footer -->
            <footer class="bg-surface dark:bg-surface-dim border-t border-outline-variant dark:border-outline py-12 w-full flat no shadows">
                <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
                    <div class="text-body-base font-headline-md text-primary dark:text-primary-fixed">
                        DevPortfolio
                    </div>
                    <p class="font-body-sm text-body-sm text-secondary dark:text-on-secondary-container text-center md:text-left">
                        © 2024 Developer Portfolio. Built with precision.
                    </p>
                    <nav class="flex items-center gap-stack-lg">
                        <a class="font-body-sm text-body-sm text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed underline decoration-2 transition-all" href="#">Github</a>
                        <a class="font-body-sm text-body-sm text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed underline decoration-2 transition-all" href="#">LinkedIn</a>
                        <a class="font-body-sm text-body-sm text-secondary dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed underline decoration-2 transition-all" href="#">Source</a>
                    </nav>
                </div>
            </footer>
            <script>
        // Simple micro-interaction for button active states
        document.querySelectorAll('button').forEach(button => {
                    button.addEventListener('mousedown', () => {
                        button.classList.add('scale-95');
                    });
            button.addEventListener('mouseup', () => {
                    button.classList.remove('scale-95');
            });
            button.addEventListener('mouseleave', () => {
                    button.classList.remove('scale-95');
            });
        });

                // Intersection Observer for fade-in effect mentioned in JSON (simplified)
                const observerOptions = {
                    threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('opacity-100');
                            entry.target.classList.remove('opacity-0', 'translate-y-4');
                        }
                    });
        }, observerOptions);

        document.querySelectorAll('article').forEach(card => {
                    card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
                observer.observe(card);
        });
            </script>
        </body></html>