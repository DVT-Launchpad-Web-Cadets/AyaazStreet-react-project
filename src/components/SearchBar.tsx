import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSearchStore } from '../store/searchStore'

function SearchBar() {
    const searchQuery = useSearchStore((state) => state.searchQuery)
    const setSearchQuery = useSearchStore((state) => state.setSearchQuery)

    const SearchSchema = Yup.object().shape({
        search: Yup.string()
            .min(1, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    })
    return (
        <>
            <Formik
                initialValues={{
                    search: searchQuery,
                }}
                onSubmit={async (values) => {
                    setSearchQuery(values.search)
                }}
                validationSchema={SearchSchema}
            >
                <Form>
                    <label className="input input-bordered flex items-center gap-2">
                        <Field
                            id="search"
                            name="search"
                            type="text"
                            className="grow"
                            placeholder="Search..."
                            autoFocus
                        />
                        <button id="buttonSearch" title="Search" type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </label>
                </Form>
            </Formik>
        </>
    )
}
export default SearchBar
