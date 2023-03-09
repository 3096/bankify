<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Bankify DB Load Test</h1>
<p>{JSON.stringify(data)}</p>
<!-- <p>{data.props.users[0].email}</p> -->
