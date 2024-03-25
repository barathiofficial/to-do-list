import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			Home
			<br />
			<Link to='/about'>Go to about</Link>
		</div>
	)
}
