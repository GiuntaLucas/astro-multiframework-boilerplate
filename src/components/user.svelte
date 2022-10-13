<script>
  import { auth, currentUser$ } from "../firebase.app";
  import { tap } from "rxjs";

  const user = currentUser$.pipe(tap((x) => console.log(x)));
  
  async function logout() {
    await auth.signOut();
    location.replace("login");
  }
</script>

{#if $user}
  <div class="h-screen flex-col w-screen flex justify-center items-center">
    <div class="flex justify-center items-center">
      <img src={$user?.photoURL} alt="" />
      <div class="flex flex-col pl-2">
        <span>{$user?.uid}</span>
        <span>{$user?.displayName}</span>
        <span>{$user?.email}</span>
      </div>
    </div>
    <button on:click={logout}>Logout</button>
  </div>
{/if}
