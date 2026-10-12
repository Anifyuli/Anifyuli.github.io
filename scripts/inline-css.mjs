import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs'

const htmlPath = 'dist/index.html'
const cssFile = readdirSync('dist/assets').find((f) => f.endsWith('.css'))

if (cssFile) {
    const style = readFileSync(`dist/assets/${cssFile}`, 'utf8')
    let html = readFileSync(htmlPath, 'utf8')
    html = html.replace(
        /<link[^>]+rel="stylesheet"[^>]*>/,
        `<style>${style}</style>`
    )
    writeFileSync(htmlPath, html)
    rmSync(`dist/assets/${cssFile}`)
    console.log(`inlined ${cssFile} into index.html`)
}