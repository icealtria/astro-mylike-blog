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
            password = window.atob(password);
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
            localStorage.setItem(slug, window.btoa(password));
        } catch (error) {
            alert(error);
        }
    };
</script>

{#if isDecrypted}
    {@html decrypted}
{:else}
    <form on:submit|preventDefault={decrypt} class="input radius-40" style="text-align: center;">
        <input
            bind:value={password}
            class="pl-3 rounded-3xl outline outline-1"
            type="password"
            placeholder="Password"
            style="background-color: var(--color-secondary-container);"
        />
        <button class="bg-primary px-4 hover:bg-primary-hover py-1 rounded-full" type="submit">解密</button>
        <noscript>Javascript is required</noscript>
    </form>
    <pre style="text-align: center">{content}</pre>
{/if}