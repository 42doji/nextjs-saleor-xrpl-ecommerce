"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "Log Legacy";

export const Logo = () => {
	const pathname = usePathname();
	console.log("Current Pathname:", pathname);


	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				{companyName}
			</h1>
		);
	}
	return (
		<div className="flex items-center font-bold">
			<LinkWithChannel aria-label="homepage" href="/">
				{companyName}
			</LinkWithChannel>
		</div>
	);
};
