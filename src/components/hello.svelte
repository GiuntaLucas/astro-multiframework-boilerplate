<script>
    import {helloSubject} from '../stores/hello.store';

    const name = 'Svelte'

    function yo() {
        helloSubject.next('Yo from Svelte');
    }
</script>
<h1 >Hello {name}</h1>
<button on:click={() => yo()}>Yo</button>
<p>{$helloSubject}</p>

<style>
    h1 {
        color: orange;
    }
</style>