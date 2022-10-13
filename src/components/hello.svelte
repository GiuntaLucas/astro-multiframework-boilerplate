<script>
    import {helloSubject} from '../stores/hello.store';

    
    export let name;

    function yo() {
        helloSubject.next('Yo from Svelte');
    }
</script>
<h2 class="text-orange-500">Hello {name}</h2>
<button on:click={() => yo()}>Yo</button>
<p>{$helloSubject}</p>