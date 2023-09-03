<script lang="ts">
    import { onMount } from "svelte";
    import * as openpgp from "openpgp";
    import { marked } from "marked";
    export let content: string;
    export let slug: string;
    let isDecrypted = false;
    let decrypted: string;
    let password = "";

    onMount(() => {
        if (localStorage.getItem(slug)) {
            password = localStorage.getItem(slug) as string;
            decrypt();
        }
    })

    const decrypt = async () => {
        const message = await openpgp.readMessage({
            armoredMessage: content,
        });

        try {
            const dec_message = await openpgp.decrypt({
                message,
                passwords: [password],
            });
            decrypted = marked.parse(dec_message.data as string);
            isDecrypted = true;
            localStorage.setItem(slug, password);
        } catch (error) {
            alert(error);
        }
    };
</script>

{#if isDecrypted}
    {@html decrypted}
{:else}
    <div class="input radius-40" style="text-align: center;">
        <input
            bind:value={password}
            class="radius-40"
            type="password"
            placeholder="Password"
            style="background-color: var(--color-secondary-container);"
        />
        <button class="radius-40" on:click={decrypt}>解密</button>
        <noscript>Javascript is required</noscript>
    </div>
    <pre style="text-align: center">{content}</pre>
{/if}

<style>
    button {
        cursor: pointer;
        background-color: var(--color-secondary-container);
        border: none;
        height: 36px;
        width: 4rem;
        font-size: 1rem;
    }
</style>
