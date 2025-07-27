'use client'
import CountUp from 'react-countup'

export default function CounterUp({ count }) {
	return (
		<>
			<CountUp enableScrollSpy={true} end={count} className='odometer' />
		</>
	)
}
