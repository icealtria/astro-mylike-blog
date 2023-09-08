<script>
    let load = false;
    import Giscus from "@giscus/svelte";
</script>


{#if load}
<Giscus
repo="icealtria/astro-mylike-blog"
repoId="R_kgDOKISnYg"
category="Announcements"
categoryId="DIC_kwDOKISnYs4CZLRJ"
reactionsEnabled="0"
data-theme="noborder_light"
inputPosition="top"
/>
{:else}
<button class="radius-40" on:click={() => (load = true)}>加载评论</button>
{/if}
