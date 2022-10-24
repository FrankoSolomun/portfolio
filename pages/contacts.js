import Head from "next/head"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <Head>
                <title>Contact</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
            </Head>
            <h1 className="xl:text-xl p-5 xl:p-50 text-gray-900 text-center">Hey! I{`'`}m only on <a className="text-green-500" href="https://www.upwork.com/freelancers/~01d673aff1549f3713">UpWork</a> right now. Please contact me there or on <a className="text-green-500" href="https://www.instagram.com/frankosolomun/">Instagram</a> if you are interested in working with me.</h1>
            <Link href='/'>
                <a className="xl:text-xl text-green-500">Go back</a>
            </Link>
        </div>
    )
}

export default Contact