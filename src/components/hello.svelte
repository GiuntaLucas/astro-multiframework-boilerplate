<script>
    import {helloSubject} from '../stores/hello.store';

    
    let title = 'Svelte';

    function yo() {
        helloSubject.next('Yo from Svelte');
    }
</script>
<h1 class="text-orange-500">Hello {title}</h1>
<button on:click={() => yo()}>Yo</button>
<p>{$helloSubject}</p>