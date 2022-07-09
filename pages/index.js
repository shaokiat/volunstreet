import Head from 'next/head'
import JobCard from '../components/JobCard'
import JobsList from '../components/JobsList'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <div>
      <div className="p-20">
        <h1 className="mb-4 text-4xl font-bold text-white">Volunstreet</h1>
        <div className="flex justify-center w-full flex-col">
          <SearchForm />
          <JobsList />
        </div>
      </div>
    </div>
  )
}
