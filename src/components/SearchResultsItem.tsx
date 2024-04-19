import { Comic } from "../models/Manga"
import { Link } from '@tanstack/react-router'

function SearchResultsItem({manga}: {manga: Comic}) {
    return (
        <div className="w-44">
            <Link
                to="/title/$manga"
                params={{
                    manga: manga?.slug ?? '',
                }}
                aria-label={`${manga?.title}`}
            >
                <img
                    className="object-cover object-top w-full h-full"
                    src={
                        manga?.md_covers?.[0]?.b2key
                            ? `https://meo3.comick.pictures/${manga.md_covers?.[0].b2key}`
                            : '/not-found-image.png'
                    }
                    alt={manga?.title}
                />
            </Link>
        </div>
    )
}
export default SearchResultsItem
