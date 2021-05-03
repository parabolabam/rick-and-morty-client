<style>
.block {
  display: block;
}

.hidden {
  display: none;
}
</style>

<script>
import { createPopper } from '@popperjs/core';

let popoverShow = false;

let btnRef;

let popoverRef;

function togglePopover() {
  if (popoverShow) {
    popoverShow = false;
  } else {
    popoverShow = true;
    createPopper(btnRef, popoverRef, {
      placement: 'bottom',
    });
  }
}
</script>

<div bind:this="{btnRef}" on:click="{togglePopover}" type="button">
  <slot isOpen="{popoverShow}" name="anchor" />
</div>
<div bind:this="{popoverRef}" class="{popoverShow ? 'block' : 'hidden'}">
  <slot isOpen="{popoverShow}" name="content" />
</div>
