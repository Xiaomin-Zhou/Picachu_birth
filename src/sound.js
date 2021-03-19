
const $lowerLip = $('.lowerLip');
const $sound = $('#sound').get(0);
$lowerLip.on('mouseover', () => {
  $sound.play();
})

