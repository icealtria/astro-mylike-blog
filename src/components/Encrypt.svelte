<script lang="ts">
    import { onMount } from "svelte";
    import * as openpgp from "openpgp";
    import { marked } from "marked";
    import Input from "./Input.svelte";
    import "@/styles/encrypt.css";
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
    });

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
    <form
        on:submit|preventDefault={decrypt}
        class="flex justify-center gap-4"
        style="text-align: center;"
    >
        <Input bind:value={password} type="password" label="Password" />
        <button class="button-primary" type="submit">解密</button>
        <noscript>Javascript is required</noscript>
    </form>
    <pre style="text-align: center">{content}</pre>
{/if}
