"use client";

import { useState } from "react";

export default function Home() {
	const [toggle, setToggle] = useState(true);

	return (
		<>
			<div className="h-screen w-screen text-3xl justify-center place-items-center flex flex-col bg-green-300 text-green-800">
				{toggle && (
					<p>
						hi jess you are a very special person to me and i hope you are doing
						well {":]"}
					</p>
				)}
				{!toggle && (
					<p className="font-bold">SIKE U SUCK AT BOWLING GET GOOOOOOOOD</p>
				)}
				<button
					className="rounded-lg bg-gray-700 hover:bg-gray-800 text-gray-200 px-3 py-2 mt-8 text-lg"
					onClick={() => setToggle(!toggle)}
				>
					press this button!!
				</button>
			</div>
		</>
	);
}
