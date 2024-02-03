import React from 'react';

const Quote = () => (
	<blockquote className='relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote'>
		<div
			className='stylistic-quote-mark'
			aria-hidden='true'
		>
			&ldquo;
		</div>
		<p className='mb-4'>
			You must allow me to tell you how ardently I admire and love you."{' '}
		</p>
		<cite className='flex items-center'>
			<div className='flex flex-col items-start'>
				<span className='mb-1 text-sm italic font-bold'>Mr. Darcy</span>
				<a
					href='...'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sm'
				>
					Pride and Prejudice
				</a>
			</div>
		</cite>
	</blockquote>
);

export default Quote;
