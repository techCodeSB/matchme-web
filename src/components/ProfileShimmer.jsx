const ProfileShimmer = () => {
	return (
		<div className="w-full md:w-[70%] z-99999 flex gap-6 p-6">
			{/* LEFT IMAGE CARD */}
			<div className="w-75 bg-white rounded-2xl p-4 shadow">
				<div className="w-full h-50 rounded-xl shimmer" />

				{/* dots */}
				<div className="flex justify-center gap-2 mt-4">
					{[...Array(5)].map((_, i) => (
						<div
							key={i}
							className="w-2 h-2 rounded-full shimmer"
						/>
					))}
				</div>
			</div>

			{/* RIGHT FORM */}
			<div className="flex-1 space-y-4">
				{[...Array(10)].map((_, i) => (
					<div key={i}>
						<div className="w-32 h-3 mb-2 rounded shimmer" />
						<div className="w-full h-10 rounded-lg shimmer" />
					</div>
				))}
			</div>

		</div>
	);
};

export default ProfileShimmer;