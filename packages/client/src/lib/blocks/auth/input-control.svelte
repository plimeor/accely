<script>
  import { onMount } from 'svelte'
  import FormControl from './form-control.svelte'

  export let value: string | number | string[] | undefined = undefined
  export let error: string | undefined = undefined
  export let type: string = 'text'

  let inputElement: HTMLInputElement

  onMount(() => {
    inputElement.type = type
  })
</script>

<FormControl {error}>
  <input
    class:-error={error}
    bind:this={inputElement}
    bind:value
    {...$$restProps}
  />
</FormControl>

<style>
  input {
    @apply px-6 py-4  border-b rounded-none transition;
  }

  input.-error {
    @apply border-red-500;
  }
</style>
