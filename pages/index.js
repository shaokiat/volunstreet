import Head from 'next/head'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <div>
      <div className="p-20">
        <h1 className="mb-4 text-3xl font-bold">Volunstreet</h1>
        <div className="flex justify-center w-full">
          <SearchForm />
        </div>
      </div>
    </div>
  )
}
