import Link from "next/link"

export default function index() {
    return (
        <div>
            <div className="header-area">
                <div className="container">
                    <div className="row upper-nav">
                        <div className=" text-left nav-logo">
                            <Link href="/">
                                <a
                                    className="navbar-brand">
                                    <img
                                        src="/img/logo.png"
                                        alt="img"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
