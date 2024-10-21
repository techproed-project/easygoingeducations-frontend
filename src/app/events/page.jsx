import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { Events } from "@/components/events/events";
import React from "react";

export const metadata = {
	title: "Events",
	description:
		"Get inspired and join us for exciting events. Discover the latest trends and share your knowledge with others. Let's celebrate the learning and growth together. Join us on our journey.",
};

const Page = () => {
	return (
		<>
			<PageHeader title="Events" />
			<Spacer />
			<Events />
			<Spacer />
		</>
	);
};

export default Page;
