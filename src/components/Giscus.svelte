<script>
    // import { onMount, onDestroy } from "svelte";
    import Giscus from "@giscus/svelte";
    let load = false;
    // let isDarkMode = false;

    // function updateDarkModePreference() {
    //     isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //     console.log("Is Dark Mode:", isDarkMode);
    // }

    // onMount(() => {
    //     updateDarkModePreference();

    //     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    //     mediaQuery.addEventListener("change", updateDarkModePreference);

    //     onDestroy(() => {
    //         mediaQuery.removeEventListener("change", updateDarkModePreference);
    //     });
    // });
</script>

{#if load}
    <div class="my-4">
        <Giscus
            repo="icealtria/astro-mylike-blog"
            repoId="R_kgDOKISnYg"
            category="Ideas"
            categoryId="DIC_kwDOKISnYs4CZLRJ"
            reactionsEnabled="0"
            theme="preferred_color_scheme"
            inputPosition="top"
        />
    </div>
{:else}
    <button class="button-xl my-12" on:click={() => (load = true)}
        >加载评论</button
    >
{/if}
