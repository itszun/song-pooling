<script lang="ts">
	import { enhance } from "$app/forms";
  import type { PageData, ActionData, SubmitFunction } from './$types';

  type Song = {
    entry: string,
    pool: number
  }

  type PoolData = {
    songs: Array<Song>
  }

  export let data: PageData;  
  export let form: ActionData;  


  const submitEntry: SubmitFunction = ({formElement, formData, action, cancel}) => {
    const {entry} = Object.fromEntries(formData)
    console.log('form', formElement);
    console.log('data', formData);
    console.log('action', action);
    console.log(entry);
    
    cancel();
  }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="hero min-h-content">
		<div class="hero-overlay bg-blue-600" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w py-6">
				<h1 class="mb-5 text-3xl font-bold">Zun Fuyuzora Cover Submission</h1>
				<p class="mb-5 text-xl">Tell us your favorite song to get covered by Zun and/or Ukyo!</p>
			</div>
		</div>
	</div>
	<div class="divider" />

	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Pooling</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				{#if data.songs.length > 0}
					{#each data.songs as song, i}
						<tr>
							<th>{i + 1}</th>
							<td>{song.entry}</td>
							<td>
								<div class="btn-group btn-group-horizontal lg:btn-group-horizontal">
									<button class="btn btn-sm">Up</button>
									<button class="btn btn-sm btn-active no-animation">
										{song.pool}
									</button>
									<button class="btn btn-sm">Down</button>
								</div>
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</section>

<div class="divider" />

<section>
	<form method="POST" use:enhance={submitEntry}>
		<div class="form-control w-full max-w-xs mb-5">
			<label class="label font-bold" for="#entry">
				<span class="label-text">SUBMIT YOUR FAVORITE SONG</span>
			</label>
			<input
				id="entry"
				name="entry"
				type="text"
				placeholder="ex: Selamatkan Tanah - Zun Fuyuzora"
				class="input input-bordered w-full max-w-xs"
				value="as"
			/>
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>
	</form>
</section>
