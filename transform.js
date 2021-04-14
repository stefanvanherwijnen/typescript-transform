const parse = require('@vue/compiler-sfc').parse
const fs = require('fs')
const typescript = fs.readFileSync('./index.ts').toString()
const vue = fs.readFileSync('./Index.vue').toString()
const path = require('path')
const swc = require("@swc/core");

const sfc = parse(vue).descriptor

const createSfc = (template, script, style) => {
  return `
<template>
${template || ''}
</template>

<script>
${script || ''}
</script>

<style>
${style || ''}
</style>`
}

require('esbuild').transform(sfc.script.content,
  {
    loader: 'ts'
  }).then(({warnings, code}) => {
    let template, script, style
    if (sfc.template) template = sfc.template.content
    if (sfc.script) script = code
    if (sfc.style) style = sfc.style.content

    fs.writeFileSync(path.resolve('./Index.esbuild.vue'), createSfc(template, script, style))
  })

require('esbuild').transform(typescript,
  {
    format: 'esm',
    loader: 'ts',
    target: 'esnext'
  }).then(({warnings, code}) => fs.writeFileSync(path.resolve('./index.esbuild.js'), code))


require('@swc/core').transform(sfc.script.content,
  {
    jsc: {
      parser: {
        syntax: 'typescript',
      }
    }
  }).then(({map, code}) => {
    let template, script, style
    if (sfc.template) template = sfc.template.content
    if (sfc.script) script = code
    if (sfc.style) style = sfc.style.content

    fs.writeFileSync(path.resolve('./Index.swc.vue'), createSfc(template, script, style))
  })

require('@swc/core').transform(typescript,
  {
    jsc: {
      parser: {
        syntax: 'typescript',
      }
    }
  }).then(({map, code}) => fs.writeFileSync(path.resolve('./index.swc.js'), code))