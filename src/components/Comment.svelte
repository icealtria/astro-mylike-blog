<script>
let load = false;
import Giscus from "@giscus/svelte";
const theme =
	document.documentElement.getAttribute("data-theme") === "dark"
		? "noborder_dark"
		: "noborder_light";
</script>


{#if load}
<div class="my-4">
    <Giscus
    repo="icealtria/astro-mylike-blog"
    repoId="R_kgDOKISnYg"
    category="Announcements"
    categoryId="DIC_kwDOKISnYs4CZLRJ"
    reactionsEnabled="0"
    theme="preferred_color_scheme"
    inputPosition="top"
    />
</div>
{:else}
<button class="button-xl my-12" on:click={() => (load = true)}>加载评论</button>
{/if}
