import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Join",
            path: "/join",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Workshop",
            path: "/workshop",
        },
        {
            title: "About",
            path: "/about",
        },
    ];

    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links