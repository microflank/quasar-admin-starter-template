<template>
<div>
  <EssentialLink v-for="link in links" :title="link.title" :caption="link.caption" :icon="link.icon" :link="link.link" :key="link.text" />
</div>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
export default {
  name: 'QuickLinks',
  components: {
    EssentialLink
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
