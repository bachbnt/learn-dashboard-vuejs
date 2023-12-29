<template>
  <div id="dnse-market-index" class="dnse-market-index"></div>
</template>
<script lang="ts">
const scriptSrc = 'https://cdn.dnse.com.vn/dnse-price/_embed/embed-widget-1.0.7.js'
export default {
  mounted() {
    const script = document.createElement('script')
    script.src = scriptSrc
    // script.setAttribute(
    //   'data-config',
    //   '{"width":500,"height":800,"indexes":["VNINDEX","VN30","HNX"],"theme":"dark"}'
    // )
    script.async = true
    document.getElementById('dnse-market-index')!.appendChild(script)
  }
}
</script>
<style>
#dnse-market-index {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>
