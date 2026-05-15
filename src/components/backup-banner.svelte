<script lang="ts">
  const currentHost = window.location.hostname;
  const isBackupDomain = currentHost !== "n3bula.lol";
</script>

{#if isBackupDomain}
  <div class="backup-banner">
    <p>
      You are currently visiting a backup version of my site, so some things may
      not work. The main is hosted at <a href="https://n3bula.lol">n3bula.lol</a
      > :3
    </p>
  </div>
{/if}

<style>
  .backup-banner {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #d46408;
    text-align: center;
    padding: 5px 0;
  }
</style>
