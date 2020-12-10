import Head from "next/head";
import Header from '../components/Header/index'
export default function Home() {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>Home</title>
            </Head>
            <header>
                <Header/>
            </header>
        </div>
    );
}
