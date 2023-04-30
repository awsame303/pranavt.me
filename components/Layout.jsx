import Head from "next/head";

export default function Layout({children, home}) {
    return (
        <div>

            <Head>
                <meta name={"og:title"} content={"Pranav T"}></meta>
                <title>Pranav T ∙ Full Stack Dev</title>
            </Head>
            <div className={`w-full min-h-screen`}>
                {/* Start of Navbar */}
                <div className="z-[1000] bg-white sticky top-0 flex items-center hover:cursor-default w-full py-3 lg:px-16 md:px-8 px-4 border-b border-slate-300 shadow-lg shadow-slate-500/10">
                        eeee
                </div>
                {/* End of Navbar */}

                {children}

                {/* Start of Footer */}
                <div>

                </div>
                {/* End of Footer */}
            </div>
        </div>
    )
}