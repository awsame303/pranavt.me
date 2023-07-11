import Layout from '../../components/Layout'
import TypingAnimation from '../../components/TypingAnimation'
export default function Home() {
    return (
        <>
            <Layout>
                <link rel="stylesheet" href="../styles/globals.css" />
                <p className={"text-2xl pl-3 leading-4 animate-fade-in"}>Hey there, I&#39;m a</p>
                {/*<div id="name" className="font-extrabold animate-fade-in-2">Pranav <br /> Thota </div>*/}
                <TypingAnimation />
                <br />
            </Layout>
        </>
    )
}
