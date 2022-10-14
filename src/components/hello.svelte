<script>
    import {helloSubject} from '../stores/hello.store';
    import {searchSubject} from '../stores/search.store';

    
    export let name;

    function yo() {
        helloSubject.next('Yo from Svelte click');
    }
</script>
<h2 class="text-orange-500">Hello {name}</h2>
<button on:click={() => yo()}>Yo</button>
<p>{$helloSubject}</p>
<p>{$searchSubject}</p>