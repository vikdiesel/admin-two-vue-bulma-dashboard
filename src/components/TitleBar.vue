<template>
  <div class="is-title-bar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">
            <slot />
          </h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <slot name="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'TitleBar'
})
</script>
