<script>
    export let label = "";
    export let value = "";
    export let type = "text";
</script>

<div class="input-wrapper">
    <input {value} class="input" {type} id="text" on:input={(e) => (value = e.target.value)} required />
    <label class="input-label" for="text">{label}</label>
</div>
