<script>
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { auth } from "../firebase.app";

  async function login() {
    await signInWithPopup(auth, new GoogleAuthProvider());
    location.replace("dashboard");
  }
</script>

<div class="flex justify-center items-center">
  <button type="button" on:click={login}>Signin with Google</button>
</div>
