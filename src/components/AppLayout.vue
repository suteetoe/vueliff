<script>
export default {};
</script>

<template>
  <div class="main">
    <header class="layout-topbar surface-900 p-2 container">
      <div class="text-center">
        <img alt="Vue logo" class="logo" src="@/assets/logo.png" />
      </div>
    </header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>