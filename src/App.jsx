import { useState } from 'react';
import Quote from './components/Quote';

export default function App() {
	const [noCount, setNoCount] = useState(0);
	const [yesPressed, setYesPressed] = useState(false);
	const yesButtonSize = noCount * 20 + 16;

	const handleNoClick = () => {
		setNoCount(noCount + 1);
	};

	const getNoButtonText = () => {
		const phrases = [
			'No',
			'Really? Give it another thought...',
			'Are you sure you want to miss out on all the fun?',
			'Maybe reconsider? There might be a surprise waiting!',
			'One more chance! Think carefully!',
			"Is 'No' your final answer, or can we try again?",
			"Not feeling it yet? Let's try to change your mind!",
			'Are you absolutely, positively sure? No room for doubt?',
			'Last chance to change your mind!',
			"No? Are you sure you don't want a lifetime supply of hugs and kisses?",
			"Oh no! The love bugs are sad. Click 'Yes' to make them happy!",
			'No, seriously? Do I need to bring in the love reinforcements?',
			"Is this a prank? Because you're breaking my heart button!",
			'Are you absolutely certain?',
			'Are you allergic to love or just playing hard to get?',
			'Is that your final answer?',
		];

		return phrases[noCount % phrases.length];
	};

	if (yesPressed) {
		return (
			<div className='flex flex-col items-center justify-center h-screen -mt-16'>
				<img
					src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
					alt='Bear Kiss'
				/>
				<Quote />
				<a
					href='https://wa.me/+919469143516?text=Yes,%20I%20will%20be%20your%20valentine%20❤️'
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 mt-10'
				>
					Now, come over here
				</a>
			</div>
		);
	} else {
		return (
			<div className='flex flex-col items-center justify-center h-screen -mt-16'>
				<img
					className='h-[200px]'
					src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
					alt='Love Bear'
				/>
				<h1 className='text-4xl my-4'>Will you be my Valentine?</h1>
				<div>
					<button
						className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
						style={{ fontSize: yesButtonSize }}
						onClick={() => setYesPressed(true)}
					>
						Yes
					</button>
					<button
						onClick={handleNoClick}
						className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					>
						{noCount === 0 ? 'No' : getNoButtonText()}
					</button>
				</div>
			</div>
		);
	}
}
