import { FormControl, FormHelperText, FormLabel, Input } from '@vechaiui/react'
import React from 'react'

export const SearchForm = () => {
  return (
    <div className="flex w-full p-8 space-x-4 flex-row bg-slate-400">
      <FormControl id="description">
        <FormLabel>Description</FormLabel>
        <Input className="p-1" placeholder="What are you looking for?" />
      </FormControl>
      <FormControl id="location">
        <FormLabel>Location</FormLabel>
        <Input className="p-1" placeholder="Yishun" />
      </FormControl>
    </div>
  )
}

export default SearchForm
