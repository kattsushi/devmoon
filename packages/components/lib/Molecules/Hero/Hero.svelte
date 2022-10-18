<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
		<div class="mr-auto place-self-center lg:col-span-7">
			<slot name="left" />
		</div>
		<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
			<slot name="right" />
		</div>
	</div>
</section>
