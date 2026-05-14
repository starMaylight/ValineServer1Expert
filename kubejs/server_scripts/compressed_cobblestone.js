onEvent('recipes', event => {
    event.shaped('extrautilitiesrebirth:double_compressed_cobblestone', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'cyclic:compressed_cobblestone'
    })
    event.shapeless('9x cyclic:compressed_cobblestone','extrautilitiesrebirth:double_compressed_cobblestone')
})