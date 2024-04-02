import { Comic } from "../models/Manga"

function NewManga({updates}: {updates: Comic[]}) {
    return (
        <div id="new-manga">
            <h2 className="py-4 text-xl px-8">New Manga Chapters</h2>
            <div className="carousel h-fit w-full px-8 space-x-2 mb-4">
                {updates.map((manga) => (
                    <a key={manga?.slug
                    }>
                        <img
                            src={`https://meo3.comick.pictures/${manga?.md_comics?.md_covers?.[0].b2key}`}
                            alt={manga?.md_comics?.title}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
export default NewManga