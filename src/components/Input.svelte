<script>
    export let label = "";
    export let value = "";
    export let type = "text";
</script>

<div class="input-wrapper">
    <input
        {value}
        class="input"
        {type}
        id="text"
        on:input={(e) => (value = e.target.value)}
        required
    />
    <label class="input-label" for="text">{label}</label>
</div>

<style lang="tailwindIntegration">
    .input {
        @apply p-2 outline outline-1 focus:outline-2 rounded-sm text-lg bg-transparent;
    }

    .input-label {
        @apply mb-2 text-lg absolute top-2 left-2 transition-all pointer-events-none;
    }

    .input-wrapper {
        @apply relative;
    }

    .input:focus ~ .input-label,
    .input:valid ~ .input-label {
        @apply -top-3 px-1 text-sm bg-white;
    }
</style>
