import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const SearchBox: React.FC = () => {
    return (

        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search Here" />
            <Button type="submit">Go</Button>

        </div>
    )
}

export default SearchBox