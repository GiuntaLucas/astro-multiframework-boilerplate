<script lang="ts">
  import { of, Subject, takeUntil } from "rxjs";
  import { onDestroy, onMount } from "svelte";
  import { web3 } from "../stores/web3.store";

  let accounts = of([]);
  const destroy = new Subject();

  onMount(() => {
    accounts = web3.currentAccount$;
    web3.isConnected().pipe(
        takeUntil(destroy)
    ).subscribe();
  });

  onDestroy(() => {
    destroy.next(true);
    destroy.complete();
  });

  function login() {
    web3.connectWallet().pipe(
        takeUntil(destroy)
    ).subscribe();
  }
</script>

<div class="flex justify-center items-center">
  {#if $accounts && $accounts.length > 0}
    <p>{$accounts[0]}</p>
  {:else}
    <button type="button" on:click={login}>Signin Web3</button>
  {/if}
</div>
