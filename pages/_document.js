import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <head>
                    <link rel="icon" href="/img/favicon.ico" />
                    <link rel="stylesheet" href="/vendor/css/bundle.min.css" />
                    <link
                        rel="stylesheet"
                        href="/vendor/css/jquery.fancybox.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/vendor/css/owl.carousel.min.css"
                    />
                    <link rel="stylesheet" href="/vendor/css/swiper.min.css" />
                    <link
                        rel="stylesheet"
                        href="/vendor/css/cubeportfolio.min.css"
                    />
                    <link rel="stylesheet" href="/vendor/css/wow.css" />
                    <link
                        rel="stylesheet"
                        href="/vendor/css/LineIcons.min.css"
                    />
                    <link rel="stylesheet" href="/css/nouislider.min.css" />
                    <link rel="stylesheet" href="/css/range-slider.css" />
                    <link rel="stylesheet" href="/css/settings.css" />
                    <link rel="stylesheet" href="/css/megamenu.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                    <link rel="stylesheet" href="/css/custom.css" />
                </head>
                <Head />
                <body>
                    <Main />
                    <script src="/vendor/js/bundle.min.js"></script>
                    <script src="/vendor/js/jquery.fancybox.min.js"></script>
                    <script src="/vendor/js/owl.carousel.min.js"></script>
                    <script src="/vendor/js/swiper.min.js"></script>
                    <script src="/vendor/js/jquery.cubeportfolio.min.js"></script>
                    <script src="/vendor/js/wow.min.js"></script>
                    <script src="/vendor/js/bootstrap-input-spinner.js"></script>
                    <script src="/vendor/js/parallaxie.min.js"></script>
                    <script src="/vendor/js/stickyfill.min.js"></script>
                    <script src="/js/nouislider.min.js"></script>

                    <script src="/vendor/js/jquery.themepunch.tools.min.js"></script>
                    <script src="/vendor/js/jquery.themepunch.revolution.min.js"></script>

                    <script src="/vendor/js/extensions/revolution.extension.actions.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.carousel.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.kenburn.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.layeranimation.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.migration.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.navigation.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.parallax.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.slideanims.min.js"></script>
                    <script src="/vendor/js/extensions/revolution.extension.video.min.js"></script>
                    <script src="/js/script.js"></script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
