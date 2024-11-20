// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.information', event => {
	event.add('overdrive:fake_flower', ['語りましょう、騙りましょう','この世界の物語を','高らかに歌いましょう', '孤独な生命の歌を','始まりと終わりの歌を。','世界を壊す歌を。'])
  })
  onEvent('jei.hide.items', event => {
	event.hide('overdrive:administrator_authority')
  })