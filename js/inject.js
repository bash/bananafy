(function () {

  'use strict'

  /**
   *
   * @param {string} string
   * @returns {string}
   */
  function bananafyString(string) {
    let words = string.split(' ')

    let newWords = words.map((word) => {
      let bananafy = Math.random() > 0.7

      if (bananafy && word.trim() !== '') {
        return word
          .replace(/[A-Z][a-z\u00E0-\u00FC]+/, 'Banana')
          .replace(/[A-Z][A-Z]+/, 'BANANA')
          .replace(/[a-z\u00E0-\u00FC]+/, (str) => {
            if (str === 'anana') {
              return str
            }

            return 'banana'
          })
      }

      return word
    })

    return newWords.join(' ')
  }


  document.addEventListener('DOMContentLoaded', () => {
    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)

    let textNodes = []
    let node

    while (node = walker.nextNode()) {
      let tagName = node.parentNode.tagName;

      if (tagName === 'STYLE' || tagName === 'SCRIPT' || tagName == 'TEMPLATE') {
        continue;
      }


      textNodes.push(node)
    }

    textNodes.forEach((node) => {
      node.textContent = bananafyString(node.textContent)
    })

    document.title = bananafyString(document.title)
  })
})()
