import Navbar from '@/app/ui/landing/Navbar'
import { Button } from 'antd'

export default function Home() {
	return (
		<main className="">
			<Navbar />
			<div className="flex flex-col gap-4 items-center justify-center">
				<p className="w-2/3 text-7xl font-medium text-center mt-24">{`Improve your team's communication with Teapp`}</p>
				<p className="text-xl text-slate-600">
					Unlocking Success: The Vital Role of Seamless Team Communication in
					Achieving Collective Excellence.
				</p>
			</div>
		</main>
	)
}
