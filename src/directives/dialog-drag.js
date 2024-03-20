export default {
  bind(el, binding) {
    let isDragging = false
    let startMouseX, startMouseY, startLeft, startTop

    const handleMouseDown = (e) => {
      isDragging = true
      startMouseX = e.clientX
      startMouseY = e.clientY
      startLeft = el.offsetLeft
      startTop = el.offsetTop
    }

    const handleMouseMove = (e) => {
      if (!isDragging) return
      const dx = e.clientX - startMouseX
      const dy = e.clientY - startMouseY
      el.style.left = `${startLeft + dx}px`
      el.style.top = `${startTop + dy}px`
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    el.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    // 清理函数，在组件销毁时移除事件监听器
    el._dragCleanup = () => {
      el.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  },
  unbind(el) {
    if (typeof el._dragCleanup === 'function') {
      el._dragCleanup()
    }
  }
}
